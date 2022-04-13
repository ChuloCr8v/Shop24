import styles from "../styles/SingleProduct.module.scss";
import Image from "next/image";
import ProductImg from "../public/images/sneakers2.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const SingleProduct = (props) => {
  const [orderQty, setOrderQty] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleQty = (type) => {
    if (type === "increase") {
      setOrderQty(orderQty + 1);
    } else if (type === "decrease") {
      orderQty > 1 && setOrderQty(orderQty - 1);
    }
  };

  return (
    <div className={styles.single_product}>
      <div className={styles.product_image_container}>
        <Image src={ProductImg} height="400px" width="450px" alt="product" />
      </div>
      <div className={styles.product_details_container}>
        <div className={styles.product_description_container}>
          <h1 className={styles.product_title}>{props.title}</h1>
          <p>{props.desc} </p>
        </div>
        <p className={styles.product_price}>{props.price}</p>
        <div className={styles.filter_container}>
          <div className={styles.color_filter}>
            <div className={styles.filters}>
              <h3>Color</h3>
              <div className={styles.color}>
                <select
                  className={styles.filter}
                  onClick={(e) => setColor(e.target.value)}
                >
                  {props.color.map((c, index) => (
                    <option key={index}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.size_filter}>
              <h3>Size</h3>
              <select
                className={styles.filter}
                onClick={(e) => setSize(e.target.value)}
              >
                {props.size.map((s, index) => (
                  <option key={index}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.quantity_cart_container}>
            <div className={styles.product_quantity}>
              <FaChevronLeft
                className={styles.arrow}
                onClick={() => handleQty("decrease")}
              />
              <div className={styles.quantity}>
                <p>{orderQty}</p>
              </div>
              <FaChevronRight
                className={styles.arrow}
                onClick={() => handleQty("increase")}
              />
            </div>
            <button className={styles.add_to_cart_button}> ADD TO CART </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

export async function getServerSideProps(context) {
  //  console.log(context.query.id)
  return {
    props: {
      // id: context.query.id,
      price: context.query.price,
      title: context.query.title,
      desc: context.query.desc,
      color: context.query.color,
      size: context.query.size,
    },
  };
}
