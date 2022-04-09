import styles from "../styles/FeaturedProduct.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Heading from "./Heading";
import { useRouter } from "next/router";
import Product from './Product'

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
     if(sort == "newest"){
        setSort("")
     } else if(sort === "asc"){
       setFilteredProducts((prev) => [...prev].sort((a,b) => a.price - b.price
       ))
     } else {
       setFilteredProducts((prev) => [...prev].sort((a,b) => b.price - a.price))
       console.log(sort)
     }
  }, [sort]);

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
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Yellow</option>
          </select>
          <select
            name="size"
            className={styles.filter}
            onChange={handleFilters}
          >
            <option defaultValue>Size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
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
                <Product product={product} key={product._id}/>
              ))
            : products.map((product) => (
                 <Product product={product} key={product._id} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
