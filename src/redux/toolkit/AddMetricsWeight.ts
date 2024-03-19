import {createSlice} from '@reduxjs/toolkit';

const weightList = [
  {
    date: 'Mar 26',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 25',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 24',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 23',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 22',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 21',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 20',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 19',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 18',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
];
const addMetricsWeightSlicer = createSlice({
  name: 'addMetricsWeight',
  initialState: {metricsData: weightList},
  reducers: {
    addMetricsWeight(state: any, action) {
      state.metricsData.push({...action.payload});
    },
  },
});
export const {addMetricsWeight} = addMetricsWeightSlicer.actions;
export default addMetricsWeightSlicer.reducer;
