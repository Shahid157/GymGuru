import {createSlice} from '@reduxjs/toolkit';

const addItemSlicer = createSlice({
  name: 'addItem',
  initialState: [],
  reducers: {
    addItem(state: any, action: any) {
      state?.push(action.payload);
    },
    removeItem(state: any, action: any) {
      return state?.filter(
        (item: any, index: number) => index !== action.payload,
      );
    },
  },
});
export const {addItem, removeItem} = addItemSlicer.actions;
export default addItemSlicer.reducer;
