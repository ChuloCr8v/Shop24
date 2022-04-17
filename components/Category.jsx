import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Category.module.scss";
import Link from "next/link";

export default function Category () {
  
   const categories = [{
    img: "/images/shoes.png",
    name: "Luxury Shoes",
    cat: "shoes",
  },
    {
      img: "/images/accessories.png",
      name: "Accessories",
      cat: "watches",
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
  
  var settings = {
    focusOnSelect: true, 
    pauseOnFocus: true, 
    autoplay: true, 
    autoplaySpeed: 1500,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1, 
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <Slider {...settings} className={styles.hero_slider}  >
          {categories.map((category, index) => (
      <Link
        href={ {
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
                  <div className={styles.img_container}>
                  <img
                      src={category.img}
                      alt={category.name}
                      className={styles.category_img}
                  />
                  </div>
                  <p className={styles.name}>
            {category.name}
          </p>
        </div>
              </a>
            </Link>
    ))}
      
    </Slider>
  );
}