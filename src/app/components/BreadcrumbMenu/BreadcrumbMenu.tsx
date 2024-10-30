import React from 'react'
import styles from './BreadcrumbMenu.module.scss'

interface BreadcrumbItem {
  label: string
  link?: string
}

interface BreadcrumbMenuProps {
  items: BreadcrumbItem[]
}

const BreadcrumbMenu: React.FC<BreadcrumbMenuProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <span key={index} className={styles.breadcrumbItem}>
          {item.link ? (
            <a href={item.link} className={styles.link}>
              {item.label}
            </a>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className={styles.separator}> / </span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default BreadcrumbMenu
