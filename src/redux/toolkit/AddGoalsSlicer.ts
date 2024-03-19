import {createSlice} from '@reduxjs/toolkit';
export const initialgoals = [
  {
    day: '27',
    goaltitle: 'Improve Biceps',
    progress: 0.7,
  },
  {
    day: '12',
    goaltitle: 'Improve Chest',
    progress: 0.4,
  },
  {
    day: '15',
    goaltitle: 'Train For 14 Weeks',
    progress: 0.2,
  },
  {
    day: '67',
    goaltitle: 'Weight Lose',
    progress: 0.8,
  },
];
const addGoalsSlicer = createSlice({
  name: 'addGoals',
  initialState: {goals: initialgoals},
  reducers: {
    addGoalsData(state: any, action) {
      state.goals.push({...action.payload});
    },
  },
});
export const {addGoalsData} = addGoalsSlicer.actions;
export default addGoalsSlicer.reducer;
