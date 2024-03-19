import strings from '../utils/strings';
import OnboardingScreen from '../screens/onboardingScreen/OnboardingScreen';
import DashboardScreen from '../screens/dashboardScreen/DashboardScreen';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuScreen from '../screens/menuScreen/MenuScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import BottomNavigation from './bottomNavigation';
import WorkoutScreen from '../screens/workoutScreen/WorkoutScreen';
import WorkoutRearrangeScreen from '../screens/workoutRearrangeScreen/WorkoutRearrangeScreen';
import WorkoutHistoryScreen from '../screens/workoutHistoryScreen/WorkoutHistoryScreen';
import WorkoutExcercise from '../screens/workoutExcerciseScreen/WorkoutExcerciseScreen';
import WorkoutHistoryDetails from '../screens/workoutHistoryDetailsScreen/WorkoutHistoryDetails';
import WorkoutHistoryCalenderScreen from '../screens/workoutHistoryCalenderScreen/WorkoutHistoryCalenderScreen';
import ExerciseDetailsScreen from '../screens/exerciseDetailsScreen/ExerciseDetailsScreen';
import DumbbellRearDeltScreen from '../screens/dumbbellRearDeltScreen/DumbbellRearDeltScreen';
import ExerciseDetailsCongratulations from '../screens/exerciseDetailsCongratulationsScreen/ExerciseDetailsCongratulations';
import ExerciseDetailsShareScreen from '../screens/exerciseDetailsShareScreen/ExerciseDetailsShareScreen';
import StepTrackerScreen from '../screens/stepTrackerScreen/StepTrackerScreen';
import NutritionScreen from '../screens/nutritionScreen/NutritionScreen';
import WeightScreen from '../screens/weightScreen/WeightScreen';
import GoalsScreen from '../screens/goalsScreen/GoalsScreen';
import ProfileWorkoutHistoryScreen from '../screens/profileWorkoutHistoryScreen/ProfileWorkoutHistoryScreen';
import ProgressPhotosScreen from '../screens/progressPhotosScreen/ProgressPhotosScreen';
import ExerciseHistoryScreen from '../screens/exerciseHistoryScreen/ExerciseHistoryScreen';
import MetricsWeightScreen from '../screens/metricsWeightScreen/MetricsWeightScreen';
import AddWeightScreen from '../screens/addWeightScreen/AddWeightScreen';
import AddBodyFatScreen from '../screens/addBodyFatScreen/AddBodyFatScreen';
import SignUpScreen from '../screens/signUpScreen/SignUpScreen';
import ForgetPasswordScreen from '../screens/forgetPasswordScreen/ForgetPasswordScreen';
import ProgramsScreen from '../screens/programsScreen/ProgramsScreen';
import GroupScreen from '../screens/groupScreen/groupScreen';
const NavigationStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={strings.login_screen}
        component={LoginScreen}
        options={{title: strings.onboarding_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.foget_screen}
        component={ForgetPasswordScreen}
        options={{title: strings.onboarding_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.signup_screen}
        component={SignUpScreen}
        options={{title: strings.onboarding_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.group_screen}
        component={GroupScreen}
        options={{title: strings.onboarding_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.programs_Screen}
        component={ProgramsScreen}
        options={{title: strings.onboarding_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.bottomtab}
        component={BottomNavigation}
        options={{title: strings.bottomtab, headerShown: false}}
      />
      <Stack.Screen
        name={strings.workout_screen}
        component={WorkoutScreen}
        options={{title: strings.workout_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.workoutRearrange_screen}
        component={WorkoutRearrangeScreen}
        options={{title: strings.workoutRearrange_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.workoutHistory_screen}
        component={WorkoutHistoryScreen}
        options={{title: strings.workoutHistory_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.workoutExcercise_screen}
        component={WorkoutExcercise}
        options={{title: strings.workoutExcercise_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.exercisedetail_screen}
        component={ExerciseDetailsScreen}
        options={{title: strings.exercisedetail_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.workoutHistoryCalender_screen}
        component={WorkoutHistoryCalenderScreen}
        options={{
          title: strings.workoutHistoryCalender_screen,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={strings.workoutHistoryDetail_screen}
        component={WorkoutHistoryDetails}
        options={{
          title: strings.workoutHistoryDetail_screen,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={strings.exerciseDetailsCongratulations}
        component={ExerciseDetailsCongratulations}
        options={{
          title: strings.exerciseDetailsCongratulations,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={strings.exerciseDetailsShareScreen}
        component={ExerciseDetailsShareScreen}
        options={{
          title: strings.exerciseDetailsShareScreen,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={strings.dumbbellRearDeltScreen}
        component={DumbbellRearDeltScreen}
        options={{title: strings.dumbbellRearDeltScreen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.menu_screen}
        component={MenuScreen}
        options={{title: strings.menu_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.profile_screen}
        component={ProfileScreen}
        options={{title: strings.profile_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.stepTracker_screen}
        component={StepTrackerScreen}
        options={{title: strings.stepTracker_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.nutrition_screen}
        component={NutritionScreen}
        options={{title: strings.nutrition_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.weight_screen}
        component={WeightScreen}
        options={{title: strings.weight_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.goals_screen}
        component={GoalsScreen}
        options={{title: strings.goals_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.profile_workout_hitory}
        component={ProfileWorkoutHistoryScreen}
        options={{title: strings.profile_workout_hitory, headerShown: false}}
      />
      <Stack.Screen
        name={strings.progress_photos_screen}
        component={ProgressPhotosScreen}
        options={{title: strings.progress_photos_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.exercise_history_screen}
        component={ExerciseHistoryScreen}
        options={{title: strings.exercise_history_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.metrics_weight_screen}
        component={MetricsWeightScreen}
        options={{title: strings.metrics_weight_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.add_weight_screen}
        component={AddWeightScreen}
        options={{title: strings.add_weight_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.add_body_fat_screen}
        component={AddBodyFatScreen}
        options={{title: strings.add_body_fat_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.onboarding_screen}
        component={OnboardingScreen}
        options={{title: strings.onboarding_screen, headerShown: false}}
      />
      <Stack.Screen
        name={strings.dashboard_screen}
        component={DashboardScreen}
        options={{title: strings.dashboard_screen, headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default NavigationStack;
