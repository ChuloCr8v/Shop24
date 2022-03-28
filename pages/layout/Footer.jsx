import styles from '../../styles/Footer.module.scss' 
import {FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarker, FaEnvelope} from 'react-icons/fa'
import Image from 'next/image'
import Visa from '../../public/images/visa.png'
import Link from 'next/link'
const Footer = () => {
  return(
    <div className={styles.footer}>
      <div className={styles.footer_section}>
        <div className={styles.logo_container}>
          <h1 className={styles.footer_logo}>Shop<span> 24Seven</span></h1>
          <p className={styles.footer_description}> 
            We are your No.1 retailer for all fashion products and accessories. We offer different luxury items including wristwatches, shoes, sunglasses etc, at some of the best prices. 
    </p>
        </div>
        <div className={styles.footer_social_icons}>
          <FaFacebook className={styles.footer_social_icon} />
          <FaTwitter className={styles.footer_social_icon} />
          <FaInstagram className={styles.footer_social_icon} />
        </div>
      </div>
      
      <div className={styles.footer_section}>
        <div className={styles.links_container}>
          <h3 className={styles.menu_title}>Useful Links</h3>
          <div className={styles.links}> 
            <Link href="/">
              <a className={styles.footer_menu_item}>
                Home
              </a>
            </Link>
            <Link href="/">
              <a className={styles.footer_menu_item}>
                New Arrivals
              </a></Link>
            <Link href="/">
              <a className={styles.footer_menu_item}>
                Accessories
              </a>
            </Link>
            <Link href="/"> 
              <a className={styles.footer_menu_item}>
                Order Tracking
              </a>
            </Link>
            <Link href="/"> 
              <a className={styles.footer_menu_item}>
                Wishlist
              </a>
            </Link>
            <Link href="/">
              <a className={styles.footer_menu_item}>
                Cart
              </a>
            </Link>
            <Link href="/"> 
              <a className={styles.footer_menu_item}>
                My Account
              </a>
            </Link>
            <Link href="/"> 
              <a className={styles.footer_menu_item}>
                Terms
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      <div className={styles.footer_section}>
        <div className={styles.contact_container}>
          <h3 className={styles.menu_title}>Contact</h3>
          <div className={styles.contact} > 
            <Link href="/"> 
              <a className={styles.footer_menu_item}>
                <FaMapMarker className={styles.contact_icon} />
                Lagos State, Nigeria 
              </a>
            </Link>
            <Link href="/"> 
              <a className={styles.footer_menu_item}>
                <FaPhone className={styles.contact_icon} />
                +2345678901
              </a>
            </Link>
            <Link href="/"> 
              <a className={styles.footer_menu_item}>
                <FaEnvelope className={styles.contact_icon} />
                Shop24seven1@gmail.com
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.atm_cards}>
          <Image src={Visa} alt="Visa" height="50" width="120" />
        </div>
      </div>
    </div>
    )
}

export default Footer