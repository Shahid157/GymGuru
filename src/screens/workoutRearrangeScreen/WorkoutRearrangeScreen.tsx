import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {FC} from 'react';
import {WorkoutRearrangePropsTypes} from './types';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import strings from '../../utils/strings';
import RearrangeCalenderList from '../../components/rearrangeCalenderList/rearrangeCalenderList';

const WorkoutRearrangeScreen: FC<WorkoutRearrangePropsTypes> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <WorkoutHeader screenTitle={strings.rearrange} />
        <RearrangeCalenderList />
      </View>
    </SafeAreaView>
  );
};

export default WorkoutRearrangeScreen;
