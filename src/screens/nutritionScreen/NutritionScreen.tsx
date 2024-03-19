import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import ActivityGraph from '../../components/activityGraphComponent/activityGraph';
import {useRoute} from '@react-navigation/core';
import {
  dailyProgressChartData,
  macroDistributionData,
  monthlyProgressChartData,
  weeklyProgressChartData,
  yearlyProgressChartData,
} from '../../utils/dummyData';
import {Images} from '../../assets/images';
import {useSelector} from 'react-redux';

const NutritionScreen = () => {
  const route: any = useRoute();
  const nutritionCal: any = route?.params.nutritionCount;
  const totalCal: any = route?.params.totalCal;
  const duration = useSelector(
    (state: any) => state?.DurationSlicer?.circleChartDuration,
  );
  const [progressChartData, setProgressChartData] = useState<any>([]);
  const [progress, setProgress] = useState<number>();

  useEffect(() => {
    if (duration === 0) {
      setProgressChartData(dailyProgressChartData);
      setProgress(0.4);
    } else if (duration === 1) {
      setProgressChartData(weeklyProgressChartData);
      setProgress(0.34);
    } else if (duration === 2) {
      setProgressChartData(monthlyProgressChartData);
      setProgress(0.27);
    } else if (duration === 3) {
      setProgressChartData(yearlyProgressChartData);
      setProgress(0.24);
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
          screenTitle={strings.nutrition}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ActivityGraph
            nutritionSummary={true}
            summary={strings.nutritionSummary}
            progressChartData={progressChartData}
            nutritionCal={nutritionCal}
            totalCal={totalCal}
            nutritionProgress={progress}
          />
          <View style={styles.macroContainer}>
            <Text style={styles.macroText}>{strings.macroDistribution}</Text>
            <View style={styles.divider} />
            <View style={styles.macroContent}>
              <View style={styles.protienHeader}>
                <Text style={styles.propsHeading}>{strings.macro}</Text>
                <Text style={styles.propsHeading}>{strings.actual}</Text>
                <Text style={styles.propsHeading}>{strings.goal}</Text>
              </View>
              {macroDistributionData?.labels?.map(
                (item: any, index: number) => {
                  return (
                    <View key={index}>
                      <View style={styles.protiensContainer}>
                        <View style={styles.chartPropContent}>
                          <Image
                            style={{
                              tintColor: macroDistributionData.colors[index],
                            }}
                            source={Images.dot}
                          />
                          <Text style={styles.chartPropText}>
                            {item?.macro}
                          </Text>
                        </View>
                        <Text style={styles.actualProps}>{item?.actual}</Text>
                        <Text style={styles.consumedProps}>{item?.goal}</Text>
                      </View>
                      <View style={styles.listDivider} />
                    </View>
                  );
                },
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NutritionScreen;
