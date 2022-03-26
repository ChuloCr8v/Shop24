import style from '../styles/Cart.module.scss' 
import Link from 'next/link'
import Sneakers from '../public/images/sneakers2.jpg'
import Watch from '../public/images/watch2.jpg'
import Image from 'next/image'
import {FaPlus, FaMinus} from 'react-icons/fa'

const Cart = () => {
  return(
    <div className={style.cart}>
      <h1 className={style.cart_title}>Your Cart</h1>
      <div className={style.wrapper}>
        <ul className={style.cart_menu}>
          <li className={style.continue_shopping_button}>
          <Link href="/">CONTINUE SHOPPING </Link>
          </li>
          <li>
            <Link href="/cart">Shopping Cart(2)</Link>
          </li>
          <li>
            <Link href="/">Your Wish List(0)</Link>
          </li>
          <li className={style.checkout_button}>
            <Link href="/">CHECKOUT NOW</Link>
          </li>
        </ul>
        <div className={style.cart_items}>
          <div className={style.item}>
            <div className={style.item_image}>
              <Image src={Sneakers} height="400" width="400" alt="product" />
            </div>
            <div className={style.product_description} >
              <div className={style.row} >
                <p><span>Product:</span> Yeezy Sneakers </p>
                <p><span>ID:</span> 1234567890 </p>
                <div className={style.color}></div>
                <p><span>Size:</span> 42 </p>
              </div>
              <div className={style.row} >
                <p className={style.price}> $180 </p>
                <div className={style.amount_container}>
                  <FaPlus className={style.icon} />
                    <p className={style.amount}>1</p>
                  <FaMinus className={style.icon} />
                </div>
              </div>
            </div>
          </div>
          
          <div className={style.item}>
            <div className={style.item_image}>
              <Image src={Watch} height="400" width="400" alt="product" />
            </div>
            <div className={style.product_description} >
              <div className={style.row} >
                <p><span>Product:</span> Richard Mille Wristwatch </p>
                <p><span>ID:</span> 0987654321</p>
                <div className={style.color}></div>
              </div>
              <div className={style.row} >
                <p className={style.price}> $3600 </p>
                <div className={style.amount_container}>
                  <FaPlus className={style.icon} />
                    <p className={style.amount}>3</p>
                  <FaMinus className={style.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.cart_summary}>
          <h3 className={style.summary_title}>Order Summary </h3>
          <p className={style.summary_detail}><span>Subtotal</span>$780</p>
          <p className={style.summary_detail}><span>Estimated Shipping</span>$50</p>
          <p className={style.summary_detail}><span>Shipping Discount</span>-$50</p>
          <p className={style.summary_total}><span>Total</span>$3780</p>
        </div>
      </div>
    </div>
    )
}

export default Cart 