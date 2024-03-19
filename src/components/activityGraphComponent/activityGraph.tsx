import {Image, Text, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import DurationButtons from '../durationButtons/durationButtons';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {BarChart, ProgressChart} from 'react-native-chart-kit';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import {Colors} from '../../utils/colors';
import strings from '../../utils/strings';
import {ActivityGraphPropsTypes} from './types';
import {Images} from '../../assets/images';
import {stepDailyChartData} from '../../utils/dummyData';

const ActivityGraph: FC<ActivityGraphPropsTypes> = ({
  steps,
  totalSteps,
  progress,
  summary,
  stepSummary,
  nutritionCal,
  totalCal,
  nutritionProgress,
  nutritionSummary,
  weightSummary,
  weight,
  weightProgress,
  stepChartData,
  progressChartData,
  weightPercent,
  toGoWeight,
  weekAgoWeight,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{summary}</Text>
      <View style={styles.divider} />
      <View style={styles.duration}>
        <DurationButtons />

        {stepSummary && (
          <View style={styles.progressView}>
            <AnimatedCircularProgress
              size={300}
              fill={progress * 100}
              width={15}
              tintColor={Colors.primaryColors.pink}
              backgroundColor={Colors.primaryColors.paleGrey}
              arcSweepAngle={180}
              padding={25}
              rotation={270}
              style={styles.progress}
            />
            <Text style={styles.date}>{strings.today}</Text>
            <Text style={styles.stepsText}>{steps}</Text>
            <Text style={styles.totalSteps}>{`of ${totalSteps} Steps`}</Text>
            <BarChart
              style={styles.graphStyle}
              yAxisSuffix={strings.null}
              yAxisLabel={strings.null}
              yLabelsOffset={1}
              data={stepChartData ? stepChartData : stepDailyChartData}
              width={windowWidth / 1.2}
              flatColor={true}
              withCustomBarColorFromData={true}
              height={windowHeight / 4}
              chartConfig={styles.chartConfig}
            />
          </View>
        )}

        {nutritionSummary && (
          <View>
            <ProgressChart
              data={progressChartData}
              width={windowWidth / 1.3}
              height={windowHeight / 3.5}
              withCustomBarColorFromData={true}
              strokeWidth={10}
              radius={32}
              chartConfig={styles.progressChartConfig}
              hideLegend={true}
              textPercent={`${nutritionProgress * 100}%`}
            />
            <Text style={styles.calText}>
              {strings.youconsumed}
              <Text style={styles.cal}>{` ${nutritionCal} cal`}</Text>
              {`/${totalCal} cal`}
            </Text>
            <View style={styles.protienHeader}>
              <Text style={styles.propsHeading}>{strings.macro}</Text>
              <Text style={styles.propsHeading}>{strings.consumed}</Text>
              <Text style={styles.propsHeading}>{strings.remaining}</Text>
              <Text style={styles.propsHeading}>{strings.goal}</Text>
            </View>
            <View>
              {progressChartData?.labels?.map((item: any, index: number) => {
                return (
                  <View key={index}>
                    <View style={styles.protiensContainer}>
                      <View style={styles.chartPropContent}>
                        <Image
                          style={{tintColor: progressChartData.colors[index]}}
                          source={Images.dot}
                        />
                        <Text style={styles.chartPropText}> {item?.macro}</Text>
                      </View>
                      <Text style={styles.consumedProps}>{item?.consumed}</Text>
                      <Text style={styles.remainingProps}>
                        {item?.remaining}
                      </Text>
                      <Text style={styles.consumedProps}>{item?.goal}</Text>
                    </View>
                    <View style={styles.divider} />
                  </View>
                );
              })}
            </View>
          </View>
        )}
        {weightSummary && (
          <View style={styles.progressView}>
            <AnimatedCircularProgress
              size={300}
              fill={weightProgress * 100}
              width={15}
              tintColor={Colors.primaryColors.AccentLightBlue}
              backgroundColor={Colors.primaryColors.paleGrey}
              arcSweepAngle={180}
              padding={25}
              rotation={270}
              style={styles.progress}
            />
            <Text style={styles.goalText}>{strings.goalWeight}</Text>
            <Text style={styles.weightText}>{weight}</Text>
            <View style={styles.weightContainer}>
              <View style={styles.propContainer}>
                <Text style={styles.detail}>{weekAgoWeight}</Text>
                <Text style={styles.status}>{strings.weekago}</Text>
              </View>
              <View style={styles.propContainer}>
                <Text style={styles.detail}>{weightPercent}</Text>
                <Text style={styles.status}>{strings.complete}</Text>
              </View>
              <View style={styles.propContainer}>
                <Text style={styles.detail}>{toGoWeight}</Text>
                <Text style={styles.status}>{strings.togo}</Text>
              </View>
            </View>
            <Text style={styles.weightDate}>{strings.datemarch}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ActivityGraph;
