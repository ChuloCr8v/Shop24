import styles from '../styles/Loading.module.scss'
import {FaShoppingCart} from 'react-icons/fa'

const Loading = () => {
  
  return (
    <section className={styles.loading}>
      <div className={styles.container}>
        <FaShoppingCart className={styles.icon} />
        <p className={styles.loading_msg} > Please Wait </p>
      </div>
    </section>
   );
 };

export default Loading