import styles from '../styles/FeaturedProduct.module.scss'
import {
  useState,
  useEffect
} from 'react'
import axios from 'axios'
import {
  FaHeart,
  FaShoppingCart
} from 'react-icons/fa'
import Heading from './Heading'

const FeaturedProduct = () => {
  const [products,
    setProducts] = useState([])
  const [filters,
    setFilters] = useState({})
  const [sort,
    setSort] = useState("newest")



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchProducts = await axios.get('http://localhost:5000/api/products')
        console.log(fetchProducts)
        setProducts(fetchProducts.data)
      } catch (e) {
        console.log(e)
      }
    }

    fetchProducts()
  }, [])

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value
    })
    console.log(filters)
  }


  return (
    <section className={styles.featured_products}>
      <div class={styles.container}>
        <div className={styles.filters}>
          <select name="color" className={styles.filter} onChange={handleFilters}>
            <option disabled selected>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Yellow</option>
          </select>
          <select name="size" className={styles.filter} onChange={handleFilters}>
            <option disabled selected>Size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <select className={styles.filter} onChange={(e) => { setSort(e.target.value); console.log(sort)}}>
            <option disabled selected>Sort</option>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="dsc">Price (dsc)</option>
          </select>
    </div>
        <div class={styles.products_container}>
          {products.map((product) => (
        <div className={styles.product} key={product.id}>
              <div className={styles.img_container}>
                <img src={product.img} alt={product.name} className={styles.product_img} />
        </div>
              <div className={styles.product_details}>
                <div className={styles.cart}>
                  <FaShoppingCart className={styles.icon} />
                  <p>
Add to Cart
          </p>
          </div>
                <div className={styles.product_detail}>
                  <p className={styles.name}>
                {product.product_title}
            </p>
          </div>
                <div className={styles.price_container}>
                  <p className={styles.price}>
                {product.app_sale_price_currency}{product.app_sale_price}
            </p>
                  <div className={styles.fav}>
                    <FaHeart className={styles.icon} />
                    <p>
Save
              </p>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
    </div>
    </section>
  )
}

export default FeaturedProduct