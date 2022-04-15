import styles from "../styles/Cart.module.scss";
import Link from "next/link";
import Sneakers from "../public/images/sneakers2.jpg";
import Watch from "../public/images/watch2.jpg";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

const Cart = () => {
  
  const [orderQty, setOrderQty] = useState(1)
  
  const cart = useSelector(state => state.cart)
  const cartQty = useSelector(state => state.cart.quantity)
  const {products}  = cart 
  
  const handleClick = (type) => {
    if (type === "increase"){
      setOrderQty(orderQty + 1)
    } else if (type === "decrease") {
      orderQty > 1 && setOrderQty(orderQty - 1)
    }
  }
  
  return (
    <div className={styles.cart}>
      <h1 className={styles.cart_title}>Your Cart</h1>
      <div className={styles.wrapper}>
        <div className={styles.cart_menu}>
          <Link href="/">
            <a className={styles.menu_item}> Shop </a>
          </Link>
          <Link href="/cart">
            <a className={styles.menu_item}>My Cart({cartQty}) </a>
          </Link>
          <Link href="/">
            <a className={styles.menu_item}>My Wish List(0)</a>
          </Link>
          <Link href="/">
            <a className={styles.menu_item}>Checkout Now</a>
          </Link>
        </div>
        <div className={styles.cart_items}>
          {products.map((product) => (
            <div className={styles.item} key={product._id}>
              <div className={styles.item_image_container}>
                <div className={styles.item_image}>
                  <img src={product.image} alt={product.title} />
                  <p className={styles.price}>${product.price} </p>
                </div>
                <h2 className={styles.name}>{product.title}</h2>
              </div>
              <div className={styles.description}>
                <div className={styles.row}>
                  <div className={styles.qty_container}>
                    <button 
                      className={styles.qty_btn}
                      onClick={() => handleClick('decrease')} 
                      > 
                      - 
                    </button>
                    <p className={styles.qty}>{product.quantity}</p>
                    <button 
                      className={styles.qty_btn}
                      onClick={() => handleClick('increase')} 
                    >
                      + 
                    </button>
                  </div>
                  <div
                    className={styles.color}
                    style={{ background: `${product.color}` }}
                  ></div>
                </div>
                <div className={styles.row}>
                  <h2 className={styles.total_title}> Total </h2>
                  <h2 className={styles.total}>${product.quantity * product.price}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cart_summary}>
          <h3 className={styles.summary_title}>Order Summary </h3>
          <p className={styles.summary_detail}>
            <span>Subtotal</span>$780
          </p>
          <p className={styles.summary_detail}>
            <span>Estimated Shipping</span>$50
          </p>
          <p className={styles.summary_detail}>
            <span>Shipping Discount</span>-$50
          </p>
          <p className={styles.summary_total}>
            <span>Total</span>$3780
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
