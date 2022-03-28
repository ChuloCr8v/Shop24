import styles from '../styles/Hero.module.scss'

const Hero = () => {
  
  const categories = [
      {
        img: '/images/shoes.png',
        name: 'Luxury Shoes'
      }, 
      {
        img: '/images/accessories.png',
        name: 'Accessories'
      },
      {
        img: '/images/bag.png',
        name: 'Luxury Bags'
      },  
      {
        img: '/images/winter.png',
        name: 'Thermal Wears'
      }
    ]
  return (
    <section className={styles.hero}>
      <div class={styles.container}>
        <div class={styles.category_container}>
          {categories.map((category, index) => (
            <div className={styles.category} key={index}>
              <div className={styles.decor}></div>
              <img src={category.img} alt={category.name} className={styles.category_img} />
              <p className={styles.name}>{category.name}</p> 
            </div>
          ))}
        </div>
      </div>
    </section>
   )
}

export default Hero 