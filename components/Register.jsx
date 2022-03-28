import styles from '../styles/Register.module.scss' 
import Subscribe from './Subscribe'
import Link from 'next/link'


const Register = () => {
  return(
    <div className={styles.register}>
        <div className={styles.wrapper}>
          <div className={styles.form_container}>
            <h1 className={styles.title}> Create Account </h1>
            <form className={styles.register_form}>
              <div className={styles.form_control}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" placeholder="first name" required />
              </div>
              <div className={styles.form_control}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" placeholder="last name" required />
              </div>
              <div className={styles.form_control}>
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="email" required />
              </div>
              <div className={styles.form_control}>
                  <label htmlFor="username">Username</label>
                  <input type="text" placeholder="username" required />
              </div>
              <div className={styles.form_control}>
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="password" required />
              </div>
              <div className={styles.form_control}>
                  <label htmlFor="password">Confirm Password</label>
                  <input type="password" placeholder="confirm password" required />
              </div>
              <button className={styles.btn}> Register</button>
              <p> Already have an account with us?</p>
              <Link href="/login">
                <a className={styles.login}> 
                  Login
                </a> 
              </Link>
            </form>

</div>
</div>
      <Subscribe />
      </div>
    )
}

export default Register 