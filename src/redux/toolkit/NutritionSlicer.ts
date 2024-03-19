import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const NutritionSlicer = createSlice({
  name: 'setNutritionValue',
  initialState: '',
  reducers: {
    setNutritionValue(state: any, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});
export const {setNutritionValue} = NutritionSlicer.actions;
export default NutritionSlicer.reducer;
