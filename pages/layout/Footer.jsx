import styles from "../../styles/Footer.module.scss";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { FaTwitter, FaFacebook } from "react-icons";
//import Logo from "../../public/logocrpto.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_content}>
          <div className={styles.logo_container}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  {/* <img
                    src={Logo.src}
                    height="50px"
                    alt="crypto Wallstreet logo"
                  /> */}
                </a>
              </Link>
            </div>
            <p data-aos="fade-up" className={styles.description}>
              We are your best retail store for everything fashion. We have an amazing collection of the best and choicest designer wears and accessories. 
            </p>
          </div>
          <div className={styles.footer_section} id={styles.col_2}>
            <h3 data-aos="fade-up" className={styles.section_title}>
              Menu{" "}
            </h3>
            <Link href="/">
              <a className={styles.footer_menu_item}>Home</a>
            </Link>
            <Link href="/shop">
              <a className={styles.footer_menu_item}>Shop</a>
            </Link>
            <Link href="/mycart">
              <a className={styles.footer_menu_item}>Cart</a>
            </Link>
          </div>

          <div className={styles.footer_section} id={styles.newsletter}>
            <h3 data-aos="fade-up" className={styles.section_title}>
              Newsletter{" "}
            </h3>
            <form
              data-aos="fade-left"
              action="/"
              method="POST"
              className={styles.form}
            >
              <input type="email" required placeholder="Your Email Address" />
              <input type="submit" value="Subscribe" />
            </form>
            {/*   <div className={styles.socials}>
              <FaTwitter className={styles.icon} />
              <FaFacebook className={styles.icon} />
            </div> */}
          </div>
        </div>
        <div className={styles.footer_credits}>
          <p className={styles.credits}>
            {" "}
            Designed and built by
            <span>
              <a href="https://devc.tech"> Devc.tech</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
