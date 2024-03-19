import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {WorkoutHistoryScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import HistoryCalenderStrip from '../../components/historyCalenderStripComponent/historyCalenderStripComponent';

const WorkoutHistoryScreen: FC<WorkoutHistoryScreenPropsTypes> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <WorkoutHeader
          onPressHistory={() =>
            navigation.navigate(strings.workoutHistoryCalender_screen)
          }
          screenTitle={strings.history}
          Icon={iconMapping['calenderIcon']}
        />
        <HistoryCalenderStrip exerciseDetail={true} />
      </View>
    </SafeAreaView>
  );
};

export default WorkoutHistoryScreen;
