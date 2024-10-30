import React from 'react'
import styles from './Seller.module.scss'
import { SellerData } from '@/app/services/searchService'
import Image from 'next/image'

interface SellerProps {
  seller: SellerData
}

const Seller: React.FC<SellerProps> = ({ seller }) => {
  return (
    <div className={styles.seller}>
      <Image
        src={seller.imageUrl}
        alt={`${seller.name} seller`}
        className={styles.image}
      />
      <div className={styles.mask}></div>
      <span className={styles.title}>{seller.name}</span>
    </div>
  )
}

export default Seller
