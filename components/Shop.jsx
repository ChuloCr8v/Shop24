import styles from "../styles/FeaturedProduct.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Heading from "./Heading";
import { useRouter } from "next/router";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const router = useRouter();
  const cat = router.query.category;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchProducts = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        );

        setProducts(fetchProducts.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, [cat]);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    console.log(filters);
  };

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    console.log(products);
    console.log(filteredProducts);
  }, [products, filteredProducts, filters]);

  return (
    <section className={styles.featured_products}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <select
            name="color"
            className={styles.filter}
            onChange={handleFilters}
          >
            <option defaultValue>Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>yellow</option>
          </select>
          <select
            name="size"
            className={styles.filter}
            onChange={handleFilters}
          >
            <option defaultValue>Size</option>
            <option>s</option>
            <option>m</option>
            <option>L</option>
            <option>xl</option>
          </select>
          <select
            className={styles.filter}
            onChange={(e) => {
              setSort(e.target.value);
              console.log(sort);
            }}
          >
            <option defaultValue>Sort</option>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="dsc">Price (dsc)</option>
          </select>
        </div>
        <div className={styles.products_container}>
          {cat
            ? filteredProducts.map((product) => (
                <div className={styles.product} key={product._id}>
                  <div className={styles.img_container}>
                    <img
                      src={product.img}
                      alt={product.name}
                      className={styles.product_img}
                    />
                  </div>
                  <div className={styles.product_details}>
                    <div className={styles.cart}>
                      <FaShoppingCart className={styles.icon} />
                      <p>Add to Cart</p>
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
              ))
            : products.map((product) => (
                <div className={styles.product} key={product._id}>
                  <div className={styles.img_container}>
                    <img
                      src={product.img}
                      alt={product.name}
                      className={styles.product_img}
                    />
                  </div>
                  <div className={styles.product_details}>
                    <div className={styles.cart}>
                      <FaShoppingCart className={styles.icon} />
                      <p>Add to Cart</p>
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
              ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
