import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <Image src="/icons/logo.svg" alt="logo" width={193} height={37} />
        <div className={styles.socials}>
          <Image
            src="/icons/linkedin-icon.svg"
            alt="linkedin"
            width={32}
            height={32}
          />
          <Image
            src="/icons/facebook-icon.svg"
            alt="facebook"
            width={32}
            height={32}
          />
          <Image
            src="/icons/twitter-icon.svg"
            alt="twitter"
            width={32}
            height={32}
          />
          <Image
            src="/icons/youtube-icon.svg"
            alt="youtube"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.section}>
          <span className={styles.title}>Company</span>
          <a href="#" className={styles.link}>
            About Us
          </a>
          <a href="#" className={styles.link}>
            Create a Shop
          </a>
          <a href="#" className={styles.link}>
            Media
          </a>
        </div>
        <div className={styles.section}>
          <span className={styles.title}>Support</span>
          <a href="#" className={styles.link}>
            Help Center
          </a>
          <a href="#" className={styles.link}>
            Contact
          </a>
          <a href="#" className={styles.link}>
            For Brands
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © 2024 NOWwith Ventures Inc. All Rights Reserved.
        </span>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Privacy Policy
          </a>
          <a href="#" className={styles.link}>
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
