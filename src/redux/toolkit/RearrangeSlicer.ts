import {createSlice} from '@reduxjs/toolkit';

const initialState: {
  rearrangeData: any;
} = {
  rearrangeData: [],
};
const RearrangeSlicer = createSlice({
  name: 'addComments',
  initialState,
  reducers: {
    addRearrangeData(state: any, action: any) {
      return {
        ...state,
        rearrangeData: action.payload,
      };
    },
  },
});
export const {addRearrangeData} = RearrangeSlicer.actions;
export default RearrangeSlicer.reducer;
