import style from '../styles/Login.module.scss' 
import Subscribe from './Subscribe'
import Link from 'next/link'
import Footer from './Footer'

const Login = () => {
  
  return(
    <div className={style.login}>
        <div className={style.wrapper}>
          <div className={style.form_container}>
            <h1 className={style.title}> Login </h1>
            <form className={style.login_form}>
              <div className={style.form_control}>
                  <label htmlFor="username">Username</label>
                  <input type="text" placeholder="username" required />
              </div>
              <div className={style.form_control}>
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="password" required />
              </div>
              <a href='#' className={style.forgot_password}>Forgot Password? </a>
              <button> LOGIN </button>
              <p> Not a member yet? </p>
              <Link href="/register"> CREATE ACCOUNT</Link>
            </form>
          </div>
        </div>
      <Subscribe />
      </div>
    )
}

export default Login 