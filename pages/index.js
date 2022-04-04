import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import ShoeCat from "../components/ShoeCat";
import BagCat from "../components/BagCat";
import WatchCat from "../components/WatchCat";
import ShadeCat from "../components/ShadeCat";
import Cta from "../components/Cta";
import Subscribe from "../components/Subscribe";
import Pay from "../components/Pay";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shop 24Seven</title>
        <meta
          name="description"
          content="Your N0.1 online store for all fashion accessories. Shoes | Winter Jackets | Bags | Thermal Wears"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/*<Hero />
        <FeaturedProducts />
        <ShoeCat />
        <BagCat />
        <WatchCat />
        <Cta />
        <ShadeCat />
        <Subscribe />*/}
        <Pay />
      </main>
    </div>
  );
}
