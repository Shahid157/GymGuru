import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import UserWeightChart from '../../components/userWeightChart/userWeightChart';
import {exerciseChartData} from '../../utils/dummyData';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';

const MetricsWeightScreen = () => {
  const navigation: any = useNavigation();
  const weightList: any = useSelector(
    (state: any) => state?.AddMetricsWeight?.metricsData,
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <WorkoutHeader
          onPressHistory={() => navigation.navigate(strings.add_weight_screen)}
          Icon={iconMapping['plusbutton']}
          screenTitle={strings.weight}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.chartContent}>
            <UserWeightChart minDuration={true} chartData={exerciseChartData} />
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
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MetricsWeightScreen;
