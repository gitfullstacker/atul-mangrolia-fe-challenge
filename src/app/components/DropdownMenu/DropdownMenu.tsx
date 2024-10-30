import React, { useState } from 'react'
import styles from './DropdownMenu.module.scss'
import Image from 'next/image'

interface DropdownMenuProps {
  label: string
  items: string[]
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleMenu} className={styles.button}>
        {label}{' '}
        <span className={styles.arrow}>
          <Image
            src="/icons/chevron-down.svg"
            alt="DropDown"
            width={16}
            height={16}
          />
        </span>
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {items.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownMenu
