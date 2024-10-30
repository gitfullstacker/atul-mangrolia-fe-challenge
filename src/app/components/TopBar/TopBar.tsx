import Image from 'next/image'
import IconButton from '../IconButton/IconButton'
import styles from './TopBar.module.scss'

const TopBar = () => (
  <div className={styles.container}>
    <div className={styles.left}>
      <IconButton icon="menu-icon" altText="Menu" />
    </div>
    <div className={styles.center}>
      <Image src="/icons/logo.svg" alt="logo" width={185} height={35} />
    </div>
    <div className={styles.right}>
      <IconButton icon="favorite-icon" altText="Favorite" />
      <IconButton icon="shopping-cart-icon" altText="Shopping Cart" />
    </div>
  </div>
)

export default TopBar
