import {createSlice} from '@reduxjs/toolkit';

const addVideoExerciseSlicer = createSlice({
  name: 'addVideoExercise',
  initialState: [],
  reducers: {
    addVideoExercise(state: any, action) {
      state.push({...action.payload});
    },
  },
});
export const {addVideoExercise} = addVideoExerciseSlicer.actions;
export default addVideoExerciseSlicer.reducer;
