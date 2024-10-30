import { useRef, useState } from 'react'
import styles from './SearchBar.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'

const suggestions = {
  products: [
    {
      name: 'Rare Beauty - Soft Pinch Liquid Blush',
      image: '/images/product1.png',
    },
    { name: 'Rare Beauty - Volumizing Mascara', image: '/images/product2.png' },
    {
      name: 'Rare Beauty - Soft Pinch Luminous Powder Blush',
      image: '/images/product3.png',
    },
  ],
  brands: [{ name: 'Rare Beauty', image: '/images/brand1.png' }],
  sellers: [
    { name: 'Alexandra Rare', image: '/images/seller1.png' },
    { name: 'Jessica Rares', image: '/images/seller2.png' },
  ],
}

const SearchBar = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('query') || ''
  const [query, setQuery] = useState(initialQuery)
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions)
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    if (value) {
      setFilteredSuggestions({
        products: suggestions.products.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        ),
        brands: suggestions.brands.filter((brand) =>
          brand.name.toLowerCase().includes(value.toLowerCase())
        ),
        sellers: suggestions.sellers.filter((seller) =>
          seller.name.toLowerCase().includes(value.toLowerCase())
        ),
      })
      setOpenSearchBar(true)
    } else {
      setFilteredSuggestions(suggestions)
      setOpenSearchBar(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/search?query=${encodeURIComponent(query)}`)
    }
  }

  const handleBlur = () => {
    setTimeout(() => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(document.activeElement)
      ) {
        setOpenSearchBar(false)
      }
    }, 100)
  }

  const handleFocus = () => {
    setOpenSearchBar(true)
  }

  return (
    <div className={styles.searchContainer} onBlur={handleBlur}>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          placeholder="Search by Brand, Product, or Category"
        />
        <Image
          src="/icons/search-icon.svg"
          alt="Search"
          width={24}
          height={24}
        />
      </div>
      {openSearchBar && (
        <div ref={dropdownRef} className={styles.dropdown}>
          {filteredSuggestions.products.length > 0 && (
            <div className={styles.section}>
              <h4>Product Suggestions</h4>
              {filteredSuggestions.products.map((product, index) => (
                <div key={index} className={styles.suggestion}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={24}
                    height={24}
                  />
                  <span>{product.name}</span>
                </div>
              ))}
            </div>
          )}
          {filteredSuggestions.brands.length > 0 && (
            <div className={styles.section}>
              <h4>Brand Suggestions</h4>
              {filteredSuggestions.brands.map((brand, index) => (
                <div key={index} className={styles.suggestion}>
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={24}
                    height={24}
                  />
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          )}
          {filteredSuggestions.sellers.length > 0 && (
            <div className={styles.section}>
              <h4>Seller Suggestions</h4>
              {filteredSuggestions.sellers.map((seller, index) => (
                <div key={index} className={styles.suggestion}>
                  <Image
                    src={seller.image}
                    alt={seller.name}
                    width={24}
                    height={24}
                  />
                  <span>{seller.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar
