
import styles from '../styles/Subscribe.module.scss'

const Subscribe = () => { 
  return ( 
      <section className={styles.subscribe}>
        <div className={styles.container}>
           <div className={styles.content_container}>
            <h1 className={styles.title}>Subscribe</h1>
            <p className={styles.subtitle}>Stay Up to date with the latest fashion trends and find out when we update our catalogues with new products</p>
            {/*<div className={styles.img_container}>
              <img src="/images/sub.jpg" alt="shop 50% off" />
            </div> */} 
           </div>
           <div className={styles.form_container}>
            <form className={styles.subscribe_form}>
              <div className={styles.form_group}>
                <input className={styles.email_field} type="email" name="email" required />
                <input className={styles.subscribe_btn} type="submit" placeholder="Submit" />
              </div>
            </form>
           </div>
        </div>
      </section>
    ); 
  }; 
  
export default Subscribe 