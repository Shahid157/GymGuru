import {createSlice} from '@reduxjs/toolkit';
const initialExercises = [
  {set: '1', reps: '12', weightlb: '100', active: true},
  {set: '2', reps: '12', weightlb: '100', active: true},
  {set: '3', reps: '12', weightlb: '100', active: true},
];
const addExerciseSlicer = createSlice({
  name: 'addExercise',
  initialState: {exercises: initialExercises},
  reducers: {
    addExercise(state: any, action: any) {
      state.exercises.push({...action.payload, active: true});
    },
    checkExercise(state: any, action) {
      state.exercises[action.payload].active = true;
    },
    uncheckExercise(state: any, action) {
      state.exercises[action.payload].active = false;
    },
    removeLastExercise(state) {
      state.exercises.pop();
    },
  },
});
export const {addExercise, checkExercise, uncheckExercise, removeLastExercise} =
  addExerciseSlicer.actions;
export default addExerciseSlicer.reducer;
