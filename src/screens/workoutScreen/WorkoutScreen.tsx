import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {FC} from 'react';
import {WorkoutScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import {styles} from './styles';
import WorkoutCalenderStrip from '../../components/workoutCalenderStrip/workoutCalenderStrip';
import strings from '../../utils/strings';

const WorkoutScreen: FC<WorkoutScreenPropsTypes> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <WorkoutHeader
          onPressRearrange={() =>
            navigation.navigate(strings.workoutRearrange_screen)
          }
          onPressHistory={() =>
            navigation.navigate(strings.workoutHistory_screen)
          }
          rearrangeIcon={true}
          Icon={iconMapping['historyIcon']}
        />
        <WorkoutCalenderStrip calendarStrip={true} />
      </View>
    </SafeAreaView>
  );
};

export default WorkoutScreen;
