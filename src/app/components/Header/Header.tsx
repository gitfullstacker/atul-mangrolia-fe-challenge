import TopBar from '../TopBar/TopBar'
import Navigation from '../Navigation/Navigation'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <TopBar />
      <SearchBar />
      <Navigation />
    </div>
  )
}

export default Header
