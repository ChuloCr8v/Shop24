import styles from '../styles/Cta.module.scss'
import Link from 'next/link'
import {FaShoppingCart} from 'react-icons/fa'
//import cta from '../public/images/cta.jpg'
const Cta = () => { 
  return ( 
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.content_container}>
            <h2 className={styles.cta_title}>25% Off Your First Order!</h2>
            <p className={styles.cta_subtitle}>Don't wait, Start Shopping Now!</p>
            <Link href="/shop">
              <a className={styles.btn}>
                <FaShoppingCart className={styles.icon} />
                Shop
              </a>
            </Link>
          </div>
          <div className={styles.img_container}>
            <img src="/images/cta.jpg" alt="shop 50% off" />
          </div>
        </div>
      </section>
    ); 
  }; 
  
export default Cta