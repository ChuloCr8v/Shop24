import styles from "../styles/FeaturedProduct.module.scss";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { addProduct } from "./redux/CartRedux";
import { useDispatch } from "react-redux";
import {useState} from 'react'
const Product = ({ product }) => {
  
  const [quantity, setQuantity] = useState(1);

  const handleQty = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addProduct({ product, quantity }));
  };

  return (
    <div className={styles.product}>
      <div className={styles.img_container}>
        <img
          src={product.product_main_image_url}
          alt={product.name}
          className={styles.product_img}
        />
      </div>
      <div className={styles.product_details}>
        <div className={styles.cart_container}>
          <button className={styles.cart} onClick={handleClick}>
            <FaShoppingCart className={styles.icon} />
            <p>Add to Cart</p>
          </button>
          <Link
            href={{
              pathname: "/[id]",
              query: {
                title: product.title,
                id: "product",
                price: product.price,
                desc: product.desc,
                color: product.color,
                size: product.size,
                product: product,
              },
            }}
          >
            <a className={styles.visit}>
              <FaSearch class={styles.icon} />
            </a>
          </Link>
        </div>
        <div className={styles.product_detail}>
          <p className={styles.name}>{product.title}</p>
        </div>
        <div className={styles.price_container}>
          <p className={styles.price}>{product.price}</p>
          <div className={styles.fav}>
            <FaHeart className={styles.icon} />
            <p>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
