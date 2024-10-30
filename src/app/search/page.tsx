'use client'

import { useSearchParams } from 'next/navigation'
import styles from '../../styles/SearchPage.module.scss'
import Header from '../components/Header/Header'
import BreadcrumbMenu from '../components/BreadcrumbMenu/BreadcrumbMenu'
import Footer from '../components/Footer/Footer'
import TreeMenu from '../components/TreeMenu/TreeMenu'
import { useEffect, useState } from 'react'
import {
  BrandData,
  fetchSearchResults,
  ProductData,
  SellerData,
} from '../services/searchService'
import Product from '../components/Product/Product'
import Seller from '../components/Seller/Seller'
import Brand from '../components/Brand/Brand'
import Loading from '../components/Loading/Loading'
import Image from 'next/image'

export default function SearchResultPage() {
  const searchParams = useSearchParams()
  const keywords = searchParams.get('query') || ''
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<ProductData[]>([])
  const [brands, setBrands] = useState<BrandData[]>([])
  const [sellers, setSellers] = useState<SellerData[]>([])
  const [displayCounts, setDisplayCounts] = useState(6)

  const categories = [
    {
      id: '1',
      name: 'Category 1',
      selected: false,
      items: [
        { id: '1-1', name: 'Sub-category 1', selected: false },
        { id: '1-2', name: 'Sub-category 2', selected: true },
        { id: '1-3', name: 'Sub-category 3', selected: true },
        { id: '1-4', name: 'Sub-category 4', selected: true },
        { id: '1-5', name: 'Sub-category 5', selected: true },
        { id: '1-6', name: 'Sub-category 6', selected: true },
        { id: '1-7', name: 'Sub-category 7', selected: true },
        // more sub-categories
      ],
    },
    {
      id: '2',
      name: 'Category 2',
      selected: true,
      items: [
        { id: '2-1', name: 'Sub-category A', selected: false },
        { id: '2-2', name: 'Sub-category B', selected: false },
        // more sub-categories
      ],
    },
    // more categories
  ]

  useEffect(() => {
    const loadSearchResults = async () => {
      try {
        const data = await fetchSearchResults()
        setProducts(data.products)
        setBrands(data.brands)
        setSellers(data.sellers)
      } catch (error: any) {
        console.error('Error loading search results:', error)
      } finally {
        setLoading(false)
      }
    }

    loadSearchResults()
  }, [])

  const handleLoadMoreClick = () => {
    setDisplayCounts(displayCounts + 6)
  }

  return (
    <>
      <Header />
      <BreadcrumbMenu
        items={[{ label: 'Home', link: '/' }, { label: 'Skin Care' }]}
      />
      <div className={styles.content}>
        {/* Start Search Summary */}
        <div className={styles.summary}>
          <div className={styles.top}>
            <span className={styles.keywords}>“{keywords}”</span>
            <button className={styles.button}>
              <Image
                src="/icons/switch-icon.svg"
                alt="Sort By"
                width={24}
                height={24}
              />
              <span>Sort By</span>
            </button>
          </div>
          <div className={styles.bottom}>
            <span>436 Results</span>
          </div>
        </div>
        {/* End Search Summary */}

        {/* Start Search Result */}
        <div className={styles.result}>
          <TreeMenu categories={categories} maxVisibleItems={5} />
          {loading ? (
            <Loading />
          ) : (
            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.top}>
                  <span className={styles.title}>Sellers</span>
                  <span className={styles.counts}>
                    {sellers.length} Results
                  </span>
                </div>
                <div className={styles.sellerList}>
                  <div className={styles.left}>
                    <button className={styles.controlButton}>
                      <Image
                        src="/icons/left-arrow.svg"
                        alt="Previous"
                        width={6}
                        height={12}
                      />
                    </button>
                  </div>
                  <div className={styles.center}>
                    {sellers.slice(0, 3).map((seller) => (
                      <Seller key={seller.id} seller={seller} />
                    ))}
                  </div>
                  <div className={styles.right}>
                    <button className={styles.controlButton}>
                      <Image
                        src="/icons/right-arrow.svg"
                        alt="Previous"
                        width={6}
                        height={12}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.top}>
                  <span className={styles.title}>Brands</span>
                  <span className={styles.counts}>{brands.length} Results</span>
                </div>
                <div className={styles.brandList}>
                  <div className={styles.left}>
                    <button className={styles.controlButton}>
                      <Image
                        src="/icons/left-arrow.svg"
                        alt="Previous"
                        width={6}
                        height={12}
                      />
                    </button>
                  </div>
                  <div className={styles.center}>
                    {brands.slice(0, 3).map((brand) => (
                      <Brand key={brand.id} brand={brand} />
                    ))}
                  </div>
                  <div className={styles.right}>
                    <button className={styles.controlButton}>
                      <Image
                        src="/icons/right-arrow.svg"
                        alt="Previous"
                        width={6}
                        height={12}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.top}>
                  <span className={styles.title}>Products</span>
                  <span className={styles.counts}>
                    {products.length} Results
                  </span>
                </div>
                <div className={styles.productList}>
                  {products.slice(0, displayCounts).map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      onShelfClick={() => alert('Added to Shelf')}
                      onBagClick={() => alert('Added to Bag')}
                    />
                  ))}
                </div>
                {displayCounts < products.length && (
                  <div className={styles.loadMore}>
                    <button
                      className={styles.button}
                      onClick={handleLoadMoreClick}
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {/* End Search Result */}
      </div>
      <Footer />
    </>
  )
}
