import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState: {
  barChartDuration: number;
  lineChartDuration: number;
  stackChartDuration: number;
  circleChartDuration: number;
} = {
  barChartDuration: 0,
  lineChartDuration: 0,
  stackChartDuration: 0,
  circleChartDuration: 0,
};
const DurationSlicer = createSlice({
  name: 'selectedDuration',
  initialState,
  reducers: {
    setBarChartDuration(state, action: PayloadAction<number>) {
      return {
        ...state,
        barChartDuration: action.payload,
      };
    },
    setLineChartDuration(state: any, action: PayloadAction<number>) {
      return {
        ...state,
        lineChartDuration: action.payload,
      };
    },
    setStackChartDuration(state: any, action: PayloadAction<number>) {
      return {
        ...state,
        stackChartDuration: action.payload,
      };
    },
    setCircleChartDuration(state: any, action: PayloadAction<number>) {
      return {
        ...state,
        circleChartDuration: action.payload,
      };
    },
  },
});
export const {
  setBarChartDuration,
  setLineChartDuration,
  setStackChartDuration,
  setCircleChartDuration,
} = DurationSlicer.actions;
export default DurationSlicer.reducer;
