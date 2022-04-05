//import style from '../styles/.module.scss' 
import Register from '../components/Register'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const login = () => {
  const router = useRouter()
  const user = true
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