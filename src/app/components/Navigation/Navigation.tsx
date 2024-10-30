import DropdownMenu from '../DropdownMenu/DropdownMenu'
import styles from './Navigation.module.scss'

const Navigation = () => (
  <nav className={styles.nav}>
    <DropdownMenu
      label="Marketplace"
      items={['Option 1', 'Option 2', 'Option 3']}
    />
    <a href="#">Brands A-Z</a>
    <a href="#">Makeup</a>
    <a href="#">Hair</a>
    <a href="#">Skincare</a>
    <a href="#">Nails</a>
    <a href="#">Tools & Brushes</a>
    <a href="#">Fragrance</a>
    <a href="#">Body</a>
  </nav>
)

export default Navigation
