import styles from "../styles/Hero.module.scss";
import Link from "next/link";
const Hero = () => {
  const categories = [
    {
      img: "/images/shoes.png",
      name: "Luxury Shoes",
      cat: "shoes",
    },
    {
      img: "/images/accessories.png",
      name: "Accessories",
      cat: "accessories",
    },
    {
      img: "/images/bag.png",
      name: "Luxury Bags",
      cat: "bags",
    },
    {
      img: "/images/winter.png",
      name: "Thermal Wears",
      cat: "thermal",
    },
  ];
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.category_container}>
          {categories.map((category, index) => (
            <Link
              href={{
                pathname: "/[id]",
                query: {
                  id: "shop",
                  category: category.cat,
                },
              }}
              key={index}
            >
              <a>
                <div className={styles.category}>
                  <div className={styles.decor}></div>
                  <img
                    src={category.img}
                    alt={category.name}
                    className={styles.category_img}
                  />
                  <p className={styles.name}>{category.name}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
