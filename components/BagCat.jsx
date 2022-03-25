import styles from '../styles/SingleCat.module.scss'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {FaHeart, FaShoppingCart } from 'react-icons/fa'
import Loading from './Loading'
import Heading from './Heading'

const BagCat = () => {

  const [singleCategory, setSingleCategory] = useState([])
  const [loading, setLoading] = useState(false)
  
  
  useEffect(() => {
    
    const options = {
      method: 'GET', 
      url: 'https://amazon24.p.rapidapi.com/api/product',
      params: {
        categoryID: 'fashion', 
        keyword: 'duffel bag', 
        country: 'US', page: '1'
      }, 
  
      headers: { 
        'X-RapidAPI-Host': 'amazon24.p.rapidapi.com', 
        'X-RapidAPI-Key': '36b01acaebmsh9a3c7c8b5e4a274p150b23jsn1e1340846474' 
      } 
    }; 
  
    axios.request(options).then(function (response) { console.log(response.data); 
    const data = response.data.docs
      setSingleCategory(data)
      setLoading(false)
    }).catch(function (error) { 
      console.error(error); 
    }); 
  }, []) 

  return (
    <section className={styles.single_cat}>
       {loading ? <Loading /> : <div class={styles.container}>
        <Heading heading={"Luxury Bags"} subtitle={"Check out our catalogue of luxury travel bags and designer bags from top brands"} />
        <div class={styles.products_container}>
          {singleCategory.map((product, index) => (
            <div className={styles.product} key={index}>
              <div className={styles.img_container}>
                <img src={product.product_main_image_url} alt={product.name} className={styles.product_img} />
              </div>
              <div className={styles.product_details} >
                <div className={styles.cart} >
                  <FaShoppingCart className={styles.icon} />
                  <p>Add to Cart</p>
                </div>
                <div className={styles.product_detail} >
                  <p className={styles.name}>{product.product_title}</p>
                </div>
                <div className={styles.price_container} >
                  <p className={styles.price} >{product.app_sale_price_currency}{product.app_sale_price}</p>
                  <div className={styles.fav}>
                    <FaHeart className={styles.icon} />
                    <p>Save</p>
                  </div>
                </div>
              </div>
            </div>
          )).slice(0, 10)}
        </div>
      </div>} 
    </section>
   )
}

export default BagCat