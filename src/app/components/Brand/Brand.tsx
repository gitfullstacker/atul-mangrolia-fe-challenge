import React from 'react'
import styles from './Brand.module.scss'
import { BrandData } from '@/app/services/searchService'
import Image from 'next/image'

interface BrandProps {
  brand: BrandData
}

const Brand: React.FC<BrandProps> = ({ brand }) => {
  return (
    <div className={styles.brand}>
      <Image
        src={brand.imageUrl}
        alt={`${brand.name} brand`}
        className={styles.image}
      />
      <div className={styles.mask}></div>
      <span className={styles.title}>{brand.name}</span>
    </div>
  )
}

export default Brand
