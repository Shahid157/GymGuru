import {createSlice} from '@reduxjs/toolkit';

const addCommentsSlicer = createSlice({
  name: 'addComments',
  initialState: [],
  reducers: {
    addComments(state: any, action: any) {
      state?.push(action.payload);
    },
  },
});
export const {addComments} = addCommentsSlicer.actions;
export default addCommentsSlicer.reducer;
