//import style from '../styles/.module.scss' 
import Register from '../components/Register'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'

const login = () => {
  const router = useRouter()
  const user = useSelector(state => state.user.currentUser)
  useEffect(() => {
    if(user){
      router.push('/')
    }
  })
  
  return(
    <div>
      <Register />
    </div>
    )
}

export default login