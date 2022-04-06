import styles from "../styles/Cart.module.scss";
import Link from "next/link";
import Sneakers from "../public/images/sneakers2.jpg";
import Watch from "../public/images/watch2.jpg";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const items = [
    {
      name: "Yeezy Sneakers",
      img: "/images/sneakers2.jpg",
      size: "43",
      color: "red",
      price: 120,
      qty: 2,
    },
    {
      name: "Richard Mille Wristwatch",
      img: "/images/watch2.jpg",
      size: "L",
      color: "red",
      price: 2500,
      qty: 3,
    },
  ];
  return (
    <div className={styles.cart}>
      <h1 className={styles.cart_title}>Your Cart</h1>
      <div className={styles.wrapper}>
        <div className={styles.cart_menu}>
          <Link href="/">
            <a className={styles.menu_item}> Shop </a>
          </Link>
          <Link href="/cart">
            <a className={styles.menu_item}>My Cart(2)</a>
          </Link>
          <Link href="/">
            <a className={styles.menu_item}>My Wish List(0)</a>
          </Link>
          <Link href="/">
            <a className={styles.menu_item}>Checkout Now</a>
          </Link>
        </div>
        <div className={styles.cart_items}>
          {items.map((item) => (
            <div className={styles.item}>
              <div className={styles.item_image_container}>
                <div className={styles.item_image}>
                  <img src={item.img} alt={item.name} />
                  <p className={styles.price}>${item.price} </p>
                </div>
                <h2 className={styles.name}>{item.name}</h2>
              </div>
              <div className={styles.description}>
                <div className={styles.row}>
                  <div className={styles.qty_container}>
                    <button className={styles.qty_btn}> - </button>
                    <p className={styles.qty}>{item.qty}</p>
                    <button className={styles.qty_btn}> + </button>
                  </div>
                  <div
                    className={styles.color}
                    style={{ background: `${item.color}` }}
                  ></div>
                </div>
                <div className={styles.row}>
                  <h2 className={styles.total_title}> Total </h2>
                  <h2 className={styles.total}>${item.qty * item.price}</h2>
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
