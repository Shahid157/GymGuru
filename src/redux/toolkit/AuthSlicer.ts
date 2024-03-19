import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  userInfo: any; // Keeping userInfo as any for dynamic structure
  userActive: boolean;
  firebaseToken: any;
}

const initialState: AuthState = {
  userInfo: null,
  userActive: false,
  firebaseToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state: AuthState, action: PayloadAction<any>) {
      return {...action.payload};
    },
    logoutUser(state: AuthState) {
      return {...state, userInfo: null, userActive: false, firebaseToken: null};
    },
  },
});

export const {loginUser, logoutUser} = authSlice.actions;
export default authSlice.reducer;
