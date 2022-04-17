import styles from "../styles/FeaturedProduct.module.scss";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { addProduct } from "./redux/CartRedux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Product = ({ product }) => {
    useEffect(() => {
    Aos.init({duration: 500});
  })
  return (
    <div className={styles.product} data-aos="fade-up" >
      <div className={styles.img_container}>
        <img
          src={product.product_main_image_url}
          alt={product.name}
          className={styles.product_img}
        />
      </div>
      <div className={styles.product_details}>
        <div className={styles.cart_container}>
          <button className={styles.fav}>
            <FaHeart className={styles.icon} />
            <p>Add To Wishlist</p>
          </button>
          <Link
            href={{
              pathname: "/[id]",
              query: {
                title: product.title,
                id: "product",
                _id: product._id, 
                price: product.price,
                desc: product.desc,
                product: product,
                color: product.color,
                size: product.size,
              },
            }}
          >
            <a className={styles.visit}>
              <FaSearch className={styles.icon} />
            </a>
          </Link>
        </div>
        <div className={styles.product_detail}>
          <p className={styles.name}>{product.title}</p>
        </div>
        <div className={styles.price_container}>
          <p className={styles.price}>{product.price}</p>
        </div>
      </div>
    </div>
  );
};
export default Product;
