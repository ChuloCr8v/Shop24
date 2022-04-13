import style from "../styles/NavBar.module.scss";
import Link from "next/link";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [showUserLogin, setShowUserLogin] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart);
  console.log(quantity);
  console.log(cart);
  return (
    <nav className={style.navbar}>
      <ul className={style.menu}>
        <li className={style.menu_item}>
          <Link href="/">
            <h1 className={style.menu_item_logo}>
              Shop<span>24Seven</span>
            </h1>
          </Link>
        </li>
        <li className={style.user}>
          <FaUser
            className={style.user_icon}
            onClick={() => setShowUserLogin(!showUserLogin)}
          />
          {showUserLogin && (
            <ol className={style.user_login_signup_link_mobile}>
              <li className={style.login_link}>
                <Link href="/login">LOGIN</Link>
              </li>
              <li className={style.signup_link}>
                <Link href="/register">SIGNUP</Link>
              </li>
            </ol>
          )}
          <ol className={style.user_login_signup_link}>
            <li className={style.login_link}>
              <Link href="/login">LOGIN</Link>
            </li>
            <li className={style.signup_link}>
              <Link href="/register">SIGNUP</Link>
            </li>
          </ol>
          <Link href="/cart">
            <div className={style.cart_icon_container}>
              <a>
                <FaShoppingCart className={style.cart_icon} />
              </a>
              <p className={style.order_count}>{quantity}</p>
            </div>
          </Link>
        </li>
        <div className={style.search}>
          <input
            type="text"
            required
            placeholder="Search our catalogue"
            className={style.search_input}
          />
          <button className={style.search_icon_container}>
            <FaSearch className={style.search_icon} />
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
