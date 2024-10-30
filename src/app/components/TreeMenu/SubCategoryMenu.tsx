import { useState } from 'react'
import styles from './TreeMenu.module.scss'

interface CategoryItem {
  id: string
  name: string
  selected: boolean
}

interface SubCategoryMenuProps {
  items: CategoryItem[]
  maxVisibleItems: number
}

const SubCategoryMenu = ({ items, maxVisibleItems }: SubCategoryMenuProps) => {
  const [expanded, setExpanded] = useState(false)

  const visibleItems = expanded ? items : items.slice(0, maxVisibleItems)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <div className={styles.subCategoryMenu}>
      <ul className={styles.itemList}>
        {visibleItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => {}}
                className={styles.checkbox}
              />
              <span>{item.name}</span>
            </label>
          </li>
        ))}
      </ul>
      {items.length > maxVisibleItems && (
        <button onClick={toggleExpanded} className={styles.seeMoreButton}>
          {expanded ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  )
}

export default SubCategoryMenu
