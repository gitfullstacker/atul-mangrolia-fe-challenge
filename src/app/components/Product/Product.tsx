import React from 'react'
import styles from './Product.module.scss'
import { ProductData } from '@/app/services/searchService'
import Image from 'next/image'

interface ProductProps {
  product: ProductData
  onShelfClick: () => void
  onBagClick: () => void
}

const Product: React.FC<ProductProps> = ({
  product,
  onShelfClick,
  onBagClick,
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.top}>
        {/* Commission Tag */}
        <div className={styles.commissionTag}>
          {product.commissionRate} Commission
        </div>

        {/* Favorite Icon */}
        <button className={styles.favoriteButton} aria-label="Favorite">
          <Image
            src="/icons/favorite-unchecked.svg"
            alt="Favorite"
            width={18}
            height={16}
          />
        </button>

        {/* Product Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={product.imageUrl}
            alt={`${product.brand} product`}
            className={styles.image}
          />
        </div>

        {/* Badge (Get Paid Same Day) */}
        {product.badges.includes('same-day-pay') && (
          <div className={styles.badge}>
            <Image
              src="/icons/get-paid-mark.svg"
              alt="Get Paid"
              width={50}
              height={50}
            />
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className={styles.info}>
        <div className={styles.brand}>
          <div className={styles.image}></div>
          <span className={styles.name}>{product.brand}</span>
        </div>
        <span className={styles.title}>{product.title}</span>
        <span className={styles.options}>{product.options.length} Options</span>
        <span className={styles.price}>${product.price}</span>
      </div>

      {/* Action Buttons */}
      <div className={styles.actions}>
        <button onClick={onShelfClick} className={styles.shelfButton}>
          Add to Shelf
        </button>
        <button onClick={onBagClick} className={styles.bagButton}>
          Add to Bag
        </button>
      </div>
    </div>
  )
}

export default Product
