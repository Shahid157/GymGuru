import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import strings from '../../utils/strings';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import {ChartHeaderPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {windowWidth} from '../../utils/dimensions';
import {useDispatch} from 'react-redux';
import {
  setBarChartDuration,
  setLineChartDuration,
  setStackChartDuration,
} from '../../redux/toolkit/DurationSlicer';

const ChartHeader: FC<ChartHeaderPropsTypes> = ({
  barChart,
  lineChart,
  stackChart,
  minDuration,
}) => {
  const scrollRef: any = useRef();
  const dispatch = useDispatch();
  const [selectDuration, setSelectDuration] = useState<any>(0);
  const [switchButton, setSwitchButton] = useState(0);

  useEffect(() => {
    if (barChart) {
      dispatch(setBarChartDuration(selectDuration));
    } else if (stackChart) {
      dispatch(setStackChartDuration(selectDuration));
    } else if (lineChart) {
      dispatch(setLineChartDuration(selectDuration));
    }
  }, [selectDuration]);

  const incrementFunction = () => {
    setSwitchButton(1);
    if (selectDuration < 3) {
      scrollRef.current?.scrollTo({x: 0, animated: true});
      setSelectDuration(selectDuration + 1);
    } else {
      setSelectDuration(0);
      scrollRef.current?.scrollTo({x: 0, animated: true});
    }
    if (selectDuration === 2) {
      scrollRef.current?.scrollTo({x: 72, animated: true});
    }
  };
  const decrementFunction = () => {
    setSwitchButton(0);
    if (selectDuration === 0) {
      scrollRef.current?.scrollTo({x: 72, animated: true});
      setSelectDuration(3);
    } else {
      setSelectDuration(selectDuration - 1);
    }
    if (selectDuration === 1) {
      scrollRef.current?.scrollTo({x: 0, animated: true});
    }
  };
  return (
    <View>
      <View
        style={[
          styles.contentContainer,
          {justifyContent: minDuration ? 'center' : 'space-between'},
        ]}>
        {minDuration ? (
          <>
            <TouchableOpacity
              onPress={() => setSelectDuration(4)}
              style={[
                styles.weekContainer,
                {
                  backgroundColor:
                    selectDuration === 4
                      ? Colors.primaryColors.black
                      : Colors.primaryColors.lightGrey,
                },
              ]}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      selectDuration === 4
                        ? Colors.primaryColors.white
                        : Colors.primaryColors.black,
                  },
                ]}>
                {strings.m1}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectDuration(5)}
              style={[
                styles.weekContainer,
                {
                  backgroundColor:
                    selectDuration === 5
                      ? Colors.primaryColors.black
                      : Colors.primaryColors.lightGrey,
                },
              ]}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      selectDuration === 5
                        ? Colors.primaryColors.white
                        : Colors.primaryColors.black,
                  },
                ]}>
                {strings.m2}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectDuration(6)}
              style={[
                styles.weekContainer,
                {
                  backgroundColor:
                    selectDuration === 6
                      ? Colors.primaryColors.black
                      : Colors.primaryColors.lightGrey,
                },
              ]}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      selectDuration === 6
                        ? Colors.primaryColors.white
                        : Colors.primaryColors.black,
                  },
                ]}>
                {strings.y1}
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <ScrollView
              ref={scrollRef}
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{width: windowWidth / 1.6}}>
              <TouchableOpacity
                onPress={() => setSelectDuration(0)}
                style={[
                  styles.weekContainer,
                  {
                    backgroundColor:
                      selectDuration === 0
                        ? Colors.primaryColors.black
                        : Colors.primaryColors.white,
                  },
                ]}>
                <Text
                  style={[
                    styles.text,
                    {
                      color:
                        selectDuration === 0
                          ? Colors.primaryColors.white
                          : Colors.primaryColors.black,
                    },
                  ]}>
                  {strings.days}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectDuration(1)}
                style={[
                  styles.weekContainer,
                  {
                    backgroundColor:
                      selectDuration === 1
                        ? Colors.primaryColors.black
                        : Colors.primaryColors.white,
                  },
                ]}>
                <Text
                  style={[
                    styles.text,
                    {
                      color:
                        selectDuration === 1
                          ? Colors.primaryColors.white
                          : Colors.primaryColors.black,
                    },
                  ]}>
                  {strings.week}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectDuration(2)}
                style={[
                  styles.weekContainer,
                  {
                    backgroundColor:
                      selectDuration === 2
                        ? Colors.primaryColors.black
                        : Colors.primaryColors.white,
                  },
                ]}>
                <Text
                  style={[
                    styles.text,
                    {
                      color:
                        selectDuration === 2
                          ? Colors.primaryColors.white
                          : Colors.primaryColors.black,
                    },
                  ]}>
                  {strings.month}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectDuration(3)}
                style={[
                  styles.weekContainer,
                  {
                    backgroundColor:
                      selectDuration === 3
                        ? Colors.primaryColors.black
                        : Colors.primaryColors.white,
                  },
                ]}>
                <Text
                  style={[
                    styles.text,
                    {
                      color:
                        selectDuration === 3
                          ? Colors.primaryColors.white
                          : Colors.primaryColors.black,
                    },
                  ]}>
                  {strings.year}
                </Text>
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.arrowContainer}>
              <TouchableOpacity
                onPress={() => {
                  decrementFunction();
                }}>
                {switchButton === 0
                  ? iconMapping['leftArrowSecondary']
                  : iconMapping['leftArrow']}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  incrementFunction();
                }}
                style={styles.arrow}>
                {switchButton === 1
                  ? iconMapping['PrimaryRightArrow']
                  : iconMapping['rightArrowSecondary']}
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default ChartHeader;
