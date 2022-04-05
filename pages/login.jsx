//import style from '../styles/.module.scss' 
import Login from '../components/Login'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
const login = () => {
  
  const router = useRouter()
    const user = true
    
    useEffect(() => {
      if(user) {
        router.push('/')
      }
    },[])
    
  return(
    <div>
      <Login />
    </div>
    )
}

export default login