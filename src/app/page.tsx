'use client'

import BreadcrumbMenu from './components/BreadcrumbMenu/BreadcrumbMenu'
import Header from './components/Header/Header'
import styles from '../styles/HomePage.module.scss'
import Product from './components/Product/Product'
import { useEffect, useState } from 'react'
import { fetchSearchResults, ProductData } from './services/searchService'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import Image from 'next/image'

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<ProductData[]>([])
  const [startProductIndex, setStartProductIndex] = useState(0)
  const [endProductIndex, setEndProductIndex] = useState(4)

  useEffect(() => {
    const loadSearchResults = async () => {
      try {
        const data = await fetchSearchResults()
        setProducts(data.products)
      } catch (error: any) {
        console.error('Error loading search results:', error)
      } finally {
        setLoading(false)
      }
    }

    loadSearchResults()
  }, [])

  const handlePreviousClick = () => {
    setStartProductIndex(startProductIndex - 4)
    setEndProductIndex(endProductIndex - 4)
  }

  const handleNextClick = () => {
    setStartProductIndex(startProductIndex + 4)
    setEndProductIndex(endProductIndex + 4)
  }

  return (
    <>
      <Header />
      <BreadcrumbMenu
        items={[{ label: 'My Shop', link: '/shop' }, { label: 'Marketplace' }]}
      />
      {/* Start Banner */}
      <div className={styles.banner}>
        <div className={styles.item}>
          <Image
            className={styles.background}
            src="/videos/banner-background1.gif"
            alt="Banner Background"
          />
          <p className={styles.label}>Shop & Sell</p>
          <Image
            src="/images/banner-title1.png"
            alt="Banner"
            width={220}
            height={83}
          />
        </div>
        <div className={styles.item}>
          <Image
            className={styles.background}
            src="/videos/banner-background2.gif"
            alt="Banner Background"
          />
          <p className={styles.label}>Shop & Sell</p>
          <Image
            src="/images/banner-title2.png"
            alt="Banner"
            width={451}
            height={108}
          />
        </div>
        <div className={styles.item}>
          <video
            className={styles.background}
            src="/videos/banner-background3.mp4"
            autoPlay
            loop
            muted
          />
          <p className={styles.label}>Shop & Sell</p>
          <Image
            src="/images/banner-title3.png"
            alt="Banner"
            width={340}
            height={56}
          />
        </div>
      </div>
      {/* End Banner */}

      {/* Start Trending Products */}
      <div className={styles.trendingProducts}>
        <h3 className={styles.label}>Trending Products</h3>
        <div className={styles.productList}>
          <div className={styles.left}>
            <button
              className={styles.controlButton}
              disabled={startProductIndex == 0}
              onClick={handlePreviousClick}
            >
              <Image
                src="/icons/left-arrow.svg"
                alt="Previous"
                width={6}
                height={12}
              />
            </button>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div className={styles.center}>
              {products
                .slice(startProductIndex, endProductIndex)
                .map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    onShelfClick={() => alert('Added to Shelf')}
                    onBagClick={() => alert('Added to Bag')}
                  />
                ))}
            </div>
          )}
          <div className={styles.right}>
            <button
              className={styles.controlButton}
              disabled={endProductIndex >= products.length}
              onClick={handleNextClick}
            >
              <Image
                src="/icons/right-arrow.svg"
                alt="Previous"
                width={6}
                height={12}
              />
            </button>
          </div>
        </div>
        <div className={styles.bageBanner}>
          <Image
            src="/images/bage-banner/get-paid-mark.png"
            alt="Get Paid"
            width={262}
            height={262}
          />
          <div className={styles.description}>
            <span className={styles.title}>
              Shop & Share any product <br />
              get paid same day on sales
            </span>
            <span className={styles.desc}>-Look for the Badge-</span>
          </div>
          <Image
            className={styles.photo}
            src="/images/bage-banner/bage-banner-photo.jpeg"
            alt="Bage Photo"
            width={360}
            height={330}
          />
        </div>
      </div>
      {/* End Trending Products */}

      {/* Start What You Love */}
      <div className={styles.whatYouLove}>
        <span className={styles.tag}>Shop & Sell</span>
        <span className={styles.title}>What YOU Love</span>
        <div className={styles.gallery}>
          <div className={styles.item}>
            <span className={styles.title}>Beauty</span>
            <Image
              className={styles.photo}
              src="/images/what-you-love/1.jpeg"
              alt="Bage Photo"
              width={360}
              height={330}
            />
          </div>
          <div className={styles.item}>
            <span className={styles.title}>LIPS</span>
            <Image
              className={styles.photo}
              src="/images/what-you-love/2.png"
              alt="Bage Photo"
              width={360}
              height={330}
            />
          </div>
          <div className={styles.item}>
            <span className={styles.title}>EYES</span>
            <Image
              className={styles.photo}
              src="/images/what-you-love/3.jpeg"
              alt="Bage Photo"
              width={360}
              height={330}
            />
          </div>
          <div className={styles.item}>
            <span className={styles.title}>SKIN</span>
            <Image
              className={styles.photo}
              src="/images/what-you-love/4.jpeg"
              alt="Bage Photo"
              width={360}
              height={330}
            />
          </div>
          <div className={styles.item}>
            <span className={styles.title}>BROWS</span>
            <Image
              className={styles.photo}
              src="/images/what-you-love/5.png"
              alt="Bage Photo"
              width={360}
              height={330}
            />
          </div>
          <div className={styles.item}>
            <span className={styles.title}>MAKEUP</span>
            <Image
              className={styles.photo}
              src="/images/what-you-love/6.png"
              alt="Bage Photo"
              width={360}
              height={330}
            />
          </div>
          <div className={styles.item}>
            <span className={styles.title}>HAIR</span>
            <Image
              className={styles.photo}
              src="/images/what-you-love/7.jpeg"
              alt="Bage Photo"
              width={360}
              height={330}
            />
          </div>
          <div className={styles.item}>
            <span className={styles.title}>BEAUTY TOOLS</span>
            <Image
              className={styles.photo}
              src="/images/what-you-love/8.jpeg"
              alt="Bage Photo"
              width={360}
              height={330}
            />
          </div>
        </div>
        <div className={styles.products}>
          <div className={styles.item}>
            <div className={styles.top}>
              <Image
                className={styles.image}
                src="/images/what-you-love/product1.jpeg"
                alt="Product1"
                width={705}
                height={580}
              />
            </div>
            <span className={styles.title}>
              Lip COMBOS <br /> WE’RE LOVING RIGHT NOW
            </span>
            <button className={styles.actionButton}>View PRODUCTS</button>
          </div>
          <div className={styles.item}>
            <div className={styles.top}>
              <Image
                className={styles.image}
                src="/images/what-you-love/product2.jpeg"
                alt="Product1"
                width={705}
                height={580}
              />
            </div>
            <span className={styles.title}>
              OUR FAVORITE <br /> LIGHTWEIGHT MAKEUP ROUTINE
            </span>
            <button className={styles.actionButton}>View PRODUCTS</button>
          </div>
        </div>
      </div>
      {/* End What You Love */}
      <Footer />
    </>
  )
}
