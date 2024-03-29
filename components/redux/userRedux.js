import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user', 
  initialState: {
    currentUser: null,
    isFetching: false, 
    error: false, 
  }, 
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    }, 
    loginSuccessful: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
    loginError: (state, action) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const {loginStart, loginSuccessful, loginError} = userSlice.actions
export default userSlice.reducer