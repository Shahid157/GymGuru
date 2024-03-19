import {createSlice, PayloadAction} from '@reduxjs/toolkit';
const initialState: {
  selectedSeconds: number;
  selectedMinutes: number;
  selectedHours: number;
  selectedDate: string;
  weekStartDate: string;
  autoPlayVideo: boolean;
} = {
  selectedSeconds: 0,
  selectedMinutes: 0,
  selectedHours: 0,
  selectedDate: '',
  weekStartDate: '',
  autoPlayVideo: false,
};
const TimerSlicer = createSlice({
  name: 'selectedTime',
  initialState,
  reducers: {
    setFormattedSeconds(state, action: PayloadAction<number>) {
      return {
        ...state,
        selectedSeconds: action.payload,
      };
    },
    setFormattedMinutes(state: any, action: PayloadAction<number>) {
      return {
        ...state,
        selectedMinutes: action.payload,
      };
    },
    setFormattedHours(state: any, action: PayloadAction<number>) {
      return {
        ...state,
        selectedHours: action.payload,
      };
    },
    setSelectedDate(state: any, action: PayloadAction<string>) {
      return {
        ...state,
        selectedDate: action.payload,
      };
    },
    setWeekStartedDate(state: any, action: PayloadAction<string>) {
      return {
        ...state,
        weekStartDate: action.payload,
      };
    },
    setAutoPlayVideo(state: any, action: PayloadAction<boolean>) {
      return {
        ...state,
        autoPlayVideo: action.payload,
      };
    },
  },
});
export const {
  setFormattedSeconds,
  setFormattedMinutes,
  setFormattedHours,
  setSelectedDate,
  setWeekStartedDate,
  setAutoPlayVideo,
} = TimerSlicer.actions;
export default TimerSlicer.reducer;
