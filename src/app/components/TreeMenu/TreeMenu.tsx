import { useState } from 'react'
import styles from './TreeMenu.module.scss'
import SubCategoryMenu from './SubCategoryMenu'
import Image from 'next/image'

interface Category {
  id: string
  name: string
  selected: boolean
  items?: Category[] // Optional nested items for each category
}

interface TreeMenuProps {
  categories: Category[]
  maxVisibleItems?: number
}

const TreeMenu = ({ categories, maxVisibleItems = 5 }: TreeMenuProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  )

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => {
      const newExpandedCategories = new Set(prev)
      if (newExpandedCategories.has(id)) {
        newExpandedCategories.delete(id)
      } else {
        newExpandedCategories.add(id)
      }
      return newExpandedCategories
    })
  }

  return (
    <div className={styles.treeMenu}>
      {categories.map((category) => (
        <div key={category.id} className={styles.category}>
          <div className={styles.categoryHeader}>
            <span className={styles.label}>{category.name}</span>
            <button
              onClick={() => toggleCategory(category.id)}
              className={styles.toggleButton}
            >
              {expandedCategories.has(category.id) ? (
                <Image
                  src="/icons/minus-icon.svg"
                  alt="Collapse"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/icons/plus-icon.svg"
                  alt="Collapse"
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>

          {expandedCategories.has(category.id) && category.items && (
            <SubCategoryMenu
              items={category.items}
              maxVisibleItems={maxVisibleItems}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default TreeMenu
