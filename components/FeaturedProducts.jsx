import styles from "../styles/FeaturedProduct.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Heading from "./Heading";
import Loading from './Loading'
import Product from './Product'

const FeaturedProduct = () => {
  const [featuredProducts, setFeautedProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:5000/api/products')
      setFeautedProducts(res.data)
      setLoading(false)
    }
    getProducts()
  }, [])

  return (
    <section className={styles.featured_products}>
      <div className={styles.container}>
        <Heading
          heading={"Featured Products"}
          subtitle={"Check out our top trending products at the moment"}
        />
        <div className={styles.products_container}>
          {loading ? <Loading /> : 
            featuredProducts.map((product, index) => (
                <Product product = {product} key={index} />
              )).slice(0, 6)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
