import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import ActivityGraph from '../../components/activityGraphComponent/activityGraph';
import {useRoute} from '@react-navigation/core';
import Button from '../../components/button/button';
import {
  stepDailyChartData,
  stepMonthlyChartData,
  stepWeeklyChartData,
  stepYearlyChartData,
} from '../../utils/dummyData';
import {useSelector} from 'react-redux';

const StepTrackerScreen = () => {
  const route: any = useRoute();
  const countTotalSteps: any = route?.params?.totalSteps;
  const duration = useSelector(
    (state: any) => state?.DurationSlicer?.circleChartDuration,
  );
  const [stepChartData, setStepChartData] = useState<any>();
  const [durationName, setDurationName] = useState<string>();
  const [distance, setDistance] = useState<string>();
  const [steps, setSteps] = useState<string>();
  const [totalSteps, setTotalSteps] = useState<string>();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (duration === 0) {
      setDurationName(strings.daily);
      setDistance(strings.km5);
      setSteps(strings.steps70);
      setProgress(0.7);
      setTotalSteps('6,386');
      setStepChartData(stepDailyChartData);
    } else if (duration === 1) {
      setDurationName(strings.weekly);
      setDistance(strings.km25);
      setSteps(strings.steps35k);
      setProgress(0.6);
      setTotalSteps('5,834');
      setStepChartData(stepWeeklyChartData);
    } else if (duration === 2) {
      setDurationName(strings.monthly);
      setDistance(strings.km110);
      setSteps(strings.steps100k);
      setProgress(0.5);
      setTotalSteps('5,153');
      setStepChartData(stepMonthlyChartData);
    } else if (duration === 3) {
      setDurationName(strings.yearly);
      setDistance(strings.km1200);
      setSteps(strings.steps1m);
      setProgress(0.4);
      setTotalSteps('4,368');
      setStepChartData(stepYearlyChartData);
    }
  }, [duration]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <WorkoutHeader
          Icon={iconMapping['shareIcon']}
          screenTitle={strings.steptracker}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ActivityGraph
            stepSummary={true}
            summary={strings.stepsummary}
            steps={totalSteps}
            stepChartData={stepChartData}
            totalSteps={countTotalSteps}
            progress={progress}
          />
          <View style={styles.averageContainer}>
            <Text style={styles.averageText}>{strings.average}</Text>
            <View style={styles.divider} />
            <View style={styles.textContainer}>
              <View>
                <Text style={styles.heading}>{durationName}</Text>
                <Text style={styles.detail}>{steps}</Text>
              </View>
              <View style={styles.distanceContainer}>
                <Text style={styles.heading}>{strings.distance}</Text>
                <Text style={styles.detail}>{distance}</Text>
              </View>
            </View>
          </View>
          <Button
            activeOpacity={strings.buttonOpacity}
            buttonText={strings.settarget}
            textStyle={styles.buttonText}
            style={styles.button}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StepTrackerScreen;
