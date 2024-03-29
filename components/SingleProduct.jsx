import styles from '../styles/SingleProduct.module.scss' 
import Image from 'next/image'
import ProductImg from '../public/images/sneakers2.jpg'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const SingleProduct = (props) => {
  return(
    <div className={styles.single_product}>
      <div className={styles.product_image_container}>
        <Image src={ProductImg} height="400px" width="450px" alt="product" />
      </div>
      <div className={styles.product_details_container}>
        <div className={styles.product_description_container} >
          <h1 className={styles.product_title}>{props.title}</h1>
          <p>{props.desc} </p>
        </div>
        <p className={styles.product_price}>{props.price}</p>
        <div className={styles.filter_container}>
          <div className={styles.color_filter}>
            <h3>Color</h3>
            <div className={styles.colors}>
              <div styles={{background: 'white'}} className={styles.color}></div>
              <div styles={{background: 'black'}} className={styles.color}></div>
              <div styles={{background: 'red'}} className={styles.color}></div>
            </div>
          </div>
          <div className={styles.size_filter}>
            <h3>Size</h3>
            <select className={styles.filter}>
               <option>XS</option>
               <option>S</option>
               <option>M</option>
               <option>L</option>
               <option>XL</option>
            </select>
          </div>
          </div>
          <div className={styles.quantity_cart_container}>
            <div className={styles.product_quantity} >
              <FaChevronLeft className={styles.arrow} />
              <div className={styles.quantity}>
                <p>1</p>
              </div>
              <FaChevronRight className={styles.arrow} />
            </div>
            <button className={styles.add_to_cart_button}> ADD TO CART </button>
         </div>
      </div>
    </div>
    )
}

export default SingleProduct

export async function getServerSideProps(context) {
  console.log(context.query.id)
  return {
    props: {
      id: context.query.id,
      price: context.query.price,
      title: context.query.title,
      desc: context.query.desc,
    },
  };
}
