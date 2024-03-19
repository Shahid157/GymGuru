import {createSlice} from '@reduxjs/toolkit';

const addPhotosSlicer = createSlice({
  name: 'addPhoto',
  initialState: [],
  reducers: {
    addPhoto(state: any, action: any) {
      state?.push(action.payload);
    },
  },
});
export const {addPhoto} = addPhotosSlicer.actions;
export default addPhotosSlicer.reducer;
