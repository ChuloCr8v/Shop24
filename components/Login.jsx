import styles from '../styles/Login.module.scss' 
import Subscribe from './Subscribe'
import Link from 'next/link'

const Login = () => {
  
  return(
    <div className={styles.login}>
        <div className={styles.wrapper}>
          <div className={styles.form_container}>
            <h1 className={styles.title}> Login </h1>
            <form className={styles.login_form}>
              <div className={styles.form_control}>
                  <label htmlFor="username">Username</label>
                  <input type="text" placeholder="username" required />
              </div>
              <div className={styles.form_control}>
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="password" required />
              </div>
              <a href='#' className={styles.forgot_password}>Forgot Password? </a>
              <button className={styles.btn}> LOGIN </button>
              <p> Not a member yet? </p>
              <Link href="/register">
                <a className={styles.register}> Create Account
                </a>
              </Link>
            </form>
          </div>
        </div>
      <Subscribe />
      </div>
    )
}

export default Login 