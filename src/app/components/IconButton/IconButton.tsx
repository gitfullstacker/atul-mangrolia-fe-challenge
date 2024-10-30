import React from 'react'
import styles from './IconButton.module.scss'
import Image from 'next/image'

interface IconButtonProps {
  icon: string
  altText: string
  width?: number
  height?: number
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  altText,
  width = 20,
  height = 20,
}) => {
  return (
    <button className={styles.button}>
      <Image
        src={`/icons/${icon}.svg`}
        alt={altText}
        width={width}
        height={height}
      />
    </button>
  )
}

export default IconButton
