import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {styles} from './styles';
import {BarChart, StackedBarChart, ProgressChart} from 'react-native-chart-kit';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import {UserDetailChartPropsTypes} from './types';
import strings from '../../utils/strings';
import {Images} from '../../assets/images';
import {Colors} from '../../utils/colors';
import ChartHeader from '../chartHeader/chartHeader';
import {useDispatch} from 'react-redux';
import {setNutritionValue} from '../../redux/toolkit/NutritionSlicer';

const UserDetailChart: FC<UserDetailChartPropsTypes> = ({
  barChart,
  progressChart,
  stackedBarChart,
  barChartData,
  progressChartData,
  hidePointsAtIndex,
  stackedBarChartData,
  hidePointsInStackChart,
}) => {
  const dispatch = useDispatch();
  const [progressChartButton, setProgressChartButton] = useState(false);
  useEffect(() => {
    if (progressChartButton) {
      dispatch(setNutritionValue(strings.percentage40));
    } else {
      dispatch(setNutritionValue(strings.percentage10));
    }
  }, [progressChartButton]);

  return (
    <View style={styles.container}>
      <View style={styles.chartView}>
        {barChart && (
          <>
            {Object.keys(barChartData)?.length > 1 && (
              <>
                <ChartHeader
                  barChart={true}
                  lineChart={false}
                  stackChart={false}
                />
                <BarChart
                  style={styles.graphStyle}
                  yAxisSuffix={strings.null}
                  yAxisLabel={strings.null}
                  yLabelsOffset={1}
                  data={barChartData}
                  width={windowWidth / 1.38}
                  fromZero={true}
                  hidePointsAtIndex={hidePointsAtIndex}
                  flatColor={true}
                  withCustomBarColorFromData={true}
                  height={windowHeight / 4}
                  chartConfig={styles.chartConfig}
                />
              </>
            )}
          </>
        )}
        {progressChart && (
          <>
            {Object.keys(progressChartData)?.length > 1 && (
              <>
                <View style={styles.daysContainer}>
                  <TouchableOpacity
                    onPress={() => setProgressChartButton(!progressChartButton)}
                    activeOpacity={strings.buttonOpacity}
                    style={[
                      styles.trainingContainer,
                      {
                        backgroundColor: progressChartButton
                          ? Colors.primaryColors.black
                          : Colors.primaryColors.white,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.weekText,
                        {
                          color: progressChartButton
                            ? Colors.primaryColors.white
                            : Colors.primaryColors.black,
                        },
                      ]}>
                      {strings.training}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setProgressChartButton(!progressChartButton)}
                    activeOpacity={strings.buttonOpacity}
                    style={[
                      styles.trainingContainer,
                      {
                        backgroundColor: !progressChartButton
                          ? Colors.primaryColors.black
                          : Colors.primaryColors.white,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.offDaytext,
                        {
                          color: !progressChartButton
                            ? Colors.primaryColors.white
                            : Colors.primaryColors.black,
                        },
                      ]}>
                      {strings.offdays}
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.targetText}>{strings.macroTarget}</Text>
                <ProgressChart
                  data={progressChartData}
                  width={windowWidth / 1.3}
                  height={windowHeight / 3.5}
                  withCustomBarColorFromData={true}
                  strokeWidth={8}
                  radius={32}
                  chartConfig={styles.progressChartConfig}
                  hideLegend={true}
                  textPercent={
                    progressChartButton
                      ? strings.percentage40
                      : strings.percentage10
                  }
                />
                <View style={styles.chartPropContainer}>
                  {progressChartData?.labels?.map(
                    (item: any, index: number) => {
                      return (
                        <View key={index} style={styles.chartPropContent}>
                          <Image
                            style={{tintColor: progressChartData.colors[index]}}
                            source={Images.dot}
                          />
                          <Text style={styles.chartPropText}> {item}</Text>
                        </View>
                      );
                    },
                  )}
                </View>
                <View style={styles.divider} />
                <View style={styles.bottomTextContainer}>
                  <View>
                    <Text style={styles.dateText}>{strings.startdate}</Text>
                    <Text style={styles.detailText}>
                      {progressChartButton ? strings.dateApr : strings.dateMay}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.dateText}>{strings.comments}</Text>
                    <Text style={styles.detailText}>{strings.calories}</Text>
                  </View>
                </View>
              </>
            )}
          </>
        )}
      </View>
      {stackedBarChart && (
        <>
          {Object.keys(stackedBarChartData)?.length > 1 && (
            <>
              <ChartHeader
                barChart={false}
                lineChart={false}
                stackChart={true}
              />
              <View style={styles.stackChartView}>
                <StackedBarChart
                  data={stackedBarChartData}
                  style={styles.stackChart}
                  hideLegend={true}
                  yLabelsOffset={1}
                  width={windowWidth / 1.2}
                  yAxisSuffix={strings.stackChartSuffix}
                  height={windowHeight / 4}
                  decimalPlaces={0}
                  hidePointsAtIndex={hidePointsInStackChart}
                  barPercentage={0}
                  chartConfig={styles.stackedBarConfig}
                />
              </View>
            </>
          )}
        </>
      )}
    </View>
  );
};

export default UserDetailChart;
