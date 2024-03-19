import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import ActivityGraph from '../../components/activityGraphComponent/activityGraph';
import UserWeightChart from '../../components/userWeightChart/userWeightChart';
import {weightChartData, weightList} from '../../utils/dummyData';
import {useSelector} from 'react-redux';

const WeightScreen = () => {
  const duration = useSelector(
    (state: any) => state?.DurationSlicer?.circleChartDuration,
  );
  const [progress, setProgress] = useState<number>();
  const [weightPercentage, setWeightPercentage] = useState('');
  const [goToWeight, setGoToWeight] = useState('');
  const [weekAgoWeight, setWeekAgoWeight] = useState('');
  const [weight, setweight] = useState('');

  useEffect(() => {
    if (duration === 0) {
      setProgress(0.7);
      setWeightPercentage(strings.percentage40);
      setGoToWeight('5.7');
      setWeekAgoWeight('170.7');
      setweight('124');
    } else if (duration === 1) {
      setProgress(0.6);
      setWeightPercentage('35%');
      setGoToWeight('4.6');
      setWeekAgoWeight('150.5');
      setweight('115');
    } else if (duration === 2) {
      setProgress(0.5);
      setWeightPercentage('30%');
      setGoToWeight('3.7');
      setWeekAgoWeight('130.2');
      setweight('109');
    } else if (duration === 3) {
      setProgress(0.4);
      setWeightPercentage('25%');
      setGoToWeight('2.8');
      setWeekAgoWeight('110.4');
      setweight('101');
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
          screenTitle={strings.weight}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ActivityGraph
            summary={strings.weightSummary}
            weightSummary={true}
            weight={weight}
            weekAgoWeight={weekAgoWeight}
            weightPercent={weightPercentage}
            toGoWeight={goToWeight}
            weightProgress={progress}
          />
          <View style={styles.chartContainer}>
            <Text style={styles.weightText}>{strings.weightchart}</Text>
            <View style={styles.divider} />
            <UserWeightChart
              accordionLinechart={true}
              weightData={weightChartData}
            />
          </View>
          <View style={styles.weightListContainer}>
            <Text style={styles.weightListText}>{strings.weightList}</Text>
            <View style={styles.weightListDivider} />
            {weightList?.map((item: any, index: number) => {
              return (
                <View style={styles.weightList} key={index}>
                  <View style={styles.datetime}>
                    <Text style={styles.date}>{item?.date}</Text>
                    <Text style={styles.time}>{item?.time}</Text>
                  </View>
                  <Text style={styles.weight}>{item?.weight}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WeightScreen;
