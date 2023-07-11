import React from 'react'
import styles from '../../style'
import {
  NavBar,
  Billing,
  CTA,
  Footer,
  Testimonials,
  Hero,} from '../../components'

const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden' >
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar/>
        </div>
      </div>
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} mb-40`}>
          <Hero/>
        </div>
      </div>
      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} mt-20`}>
          <Billing />
          <Testimonials />
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home
