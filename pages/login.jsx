//import style from '../styles/.module.scss' 
import Login from '../components/Login'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'

const login = () => {
 
  const router = useRouter()
    const user = useSelector(state => state.user.currentUser)
    
    useEffect(() => {
      if(user) {
        router.push('/')
      console.log(user)
      }
    },[user])
    
  return(
    <div>
      <Login />
    </div>
    )
}

export default login