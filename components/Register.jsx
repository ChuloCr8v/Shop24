import style from '../styles/Register.module.scss' 
import Newsletter from './Newsletter'
import Footer from './Footer'
import Link from 'next/link'


const Register = () => {
  return(
    <div className={style.register}>
        <div className={style.wrapper}>
          <div className={style.form_container}>
            <h1 className={style.title}> Create Account </h1>
            <form className={style.register_form}>
              <div className={style.form_control}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" placeholder="first name" required />
              </div>
              <div className={style.form_control}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" placeholder="last name" required />
              </div>
              <div className={style.form_control}>
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="email" required />
              </div>
              <div className={style.form_control}>
                  <label htmlFor="username">Username</label>
                  <input type="text" placeholder="username" required />
              </div>
              <div className={style.form_control}>
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="password" required />
              </div>
              <div className={style.form_control}>
                  <label htmlFor="password">Confirm Password</label>
                  <input type="password" placeholder="confirm password" required />
              </div>
              <button> CREATE </button>
              <p> Already have an account with us?</p>
              <Link href="/login"> LOGIN </Link>
            </form>
          </div>
        </div>
      <Newsletter />
      <Footer />
      </div>
    )
}

export default Register 