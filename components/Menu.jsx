import Link from "next/link";
import styles from "../styles/Menu.module.scss";
//import Logo from '../public/logocrpto.png'
import {FaShoppingCart} from 'react-icons/fa'
const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <nav className={showMenu ? styles.show_menu : styles.nav}>
      <div className={styles.logo}>
          <Link href="/">
            <a onClick={() => setShowMenu(false)} >
             {// <img src={Logo.src} height="80px" alt="crypto Wallstreet logo" />
             } 
             shop24seven
            </a>
          </Link>
      </div>
      <div className={styles.menu}>
        <Link href="/">
          <a className={styles.menu_item} onClick={() => setShowMenu(false)}>Home</a>
        </Link>
        <Link href="/cryptocurrencies">
          <a className={styles.menu_item} onClick={() => setShowMenu(false)}>Shop</a>
        </Link>
        <Link href="/exchanges">
          <a className={styles.menu_item} onClick={() => setShowMenu(false)}><FaShoppingCart class={styles.icon} /></a>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
