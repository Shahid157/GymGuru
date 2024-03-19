import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import AddItemSlicer from '../toolkit/AddItemSlicer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserSlicer from '../toolkit/UserSlicer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AddPhotosSlicer from '../toolkit/AddPhotosSlicer';
import DurationSlicer from '../toolkit/DurationSlicer';
import NutritionSlicer from '../toolkit/NutritionSlicer';
import CommentsSlicer from '../toolkit/CommentsSlicer';
import TimerSlicer from '../toolkit/TimerSlicer';
import AddExerciseSlicer from '../toolkit/AddExerciseSlicer';
import addVideoExerciseSlicer from '../toolkit/AddVideoExerciseSlicer';
import RearrangeSlicer from '../toolkit/RearrangeSlicer';
import AddGoalsSlicer from '../toolkit/AddGoalsSlicer';
import AddMetricsWeight from '../toolkit/AddMetricsWeight';
import AuthSlicer from '../toolkit/AuthSlicer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const reducer = combineReducers({
  AddItemSlicer,
  UserSlicer,
  AddPhotosSlicer,
  DurationSlicer,
  NutritionSlicer,
  CommentsSlicer,
  TimerSlicer,
  AddExerciseSlicer,
  addVideoExerciseSlicer,
  RearrangeSlicer,
  AddGoalsSlicer,
  AddMetricsWeight,
  AuthSlicer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const toolkitStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(toolkitStore);
export default toolkitStore;
