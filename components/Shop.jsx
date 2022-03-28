
import styles from '../styles/Shop.module.scss'
import FeaturedProducts from './FeaturedProducts'
import ShoeCat from './ShoeCat'
import ShadeCat from './ShadeCat'
import BagCat from './BagCat'

const Shop = () => { 
  return ( 
      <section className={styles.shop}>
        <FeaturedProducts />
        <ShoeCat />
        <BagCat />
        <ShadeCat />
      </section>
    ); 
  }; 
  
export default Shop