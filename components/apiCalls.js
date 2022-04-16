import {loginStart, loginSuccessful, loginError} from './redux/userRedux'
import axios from 'axios'

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:5000/auth/login', user)
    console.log(res.data)
    dispatch(loginSuccessful(res.data))
  } catch (e) {
    dispatch(loginError())
  }
}