import {createSlice} from '@reduxjs/toolkit';

const userSlicer = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser(state: any, action: any) {
      return (state = action.payload);
    },
    clearUser(state: any) {
      return (state = []);
    },
  },
});
export const {addUser, clearUser} = userSlicer.actions;
export default userSlicer.reducer;
