import {Image, Text, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {LineChart} from 'react-native-chart-kit';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import strings from '../../utils/strings';
import {UserWeightChartProps} from './types';
import ChartHeader from '../chartHeader/chartHeader';
import {Images} from '../../assets/images';

const UserWeightChart: FC<UserWeightChartProps> = ({
  weight,
  viewButtons,
  durationButtons,
  accordionLinechart,
  weightChartData,
  chartData,
  minDuration,
  weightData,
  weightChart,
}) => {
  return (
    <View style={styles.container}>
      {viewButtons ? (
        <>
          <View style={styles.contentContainer}>
            <Text style={styles.metricsText}>{strings.metrics}</Text>
            <View style={styles.viewContainer}>
              <Text style={styles.viewText}>{strings.viewText}</Text>
            </View>
          </View>
          <Text style={styles.weightText}>{weight}</Text>
        </>
      ) : null}
      <>
        {durationButtons && (
          <View style={styles.durationButton}>
            <ChartHeader lineChart={true} stackChart={false} barChart={false} />
          </View>
        )}
        {minDuration && (
          <View style={styles.durationButton}>
            <ChartHeader minDuration={true} />
          </View>
        )}
        <View style={styles.lineChart}>
          {accordionLinechart ? (
            <>
              <View style={styles.weightChartView}>
                {Object.keys(weightData).length > 1 && (
                  <LineChart
                    data={weightData}
                    width={windowWidth / 1.1}
                    segments={2}
                    withShadow={false}
                    height={windowHeight / 3.7}
                    withDots={false}
                    chartConfig={styles.accordionChartConfig}
                    withVerticalLines={false}
                    fromNumber={0}
                    bezier={true}
                    style={styles.chart}
                  />
                )}
              </View>
            </>
          ) : (
            <View>
              <View style={styles.weightChartView}>
                {Object.keys(chartData).length > 1 && (
                  <LineChart
                    data={chartData}
                    width={windowWidth / 1.1}
                    segments={2}
                    withShadow={false}
                    renderDotContent={({x, y, index}) => {
                      return (
                        <View key={index}>
                          {index === 6 && (
                            <>
                              <View
                                style={[
                                  styles.legendBox,
                                  {top: y - 75, left: x - 28},
                                ]}>
                                <Text style={styles.value}>
                                  {strings.chartValue}
                                </Text>
                                <Text style={styles.date}>
                                  {strings.marDate}
                                </Text>
                              </View>
                              <Image
                                style={[
                                  styles.edge,
                                  {top: y - 30, left: x - 8},
                                ]}
                                source={Images.bottomedge}
                              />
                            </>
                          )}
                        </View>
                      );
                    }}
                    height={windowHeight / 4}
                    withDots={minDuration ? false : true}
                    chartConfig={styles.chartConfig}
                    withVerticalLines={false}
                    fromNumber={90}
                    bezier={true}
                    style={styles.chart}
                  />
                )}
              </View>
            </View>
          )}
        </View>
      </>
    </View>
  );
};

export default UserWeightChart;
