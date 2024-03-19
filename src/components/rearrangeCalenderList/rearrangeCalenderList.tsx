import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {workoutCalenderData} from '../../utils/dummyData';
import {Colors} from '../../utils/colors';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {addRearrangeData} from '../../redux/toolkit/RearrangeSlicer';

const RearrangeCalenderList = () => {
  const dispatch: any = useDispatch();
  const moment = require('moment');
  moment.suppressDeprecationWarnings = true;
  const weekStartDate = useSelector(
    (state: any) => state?.TimerSlicer?.weekStartDate,
  );
  const rearrangeData = useSelector(
    (state: any) => state?.RearrangeSlicer?.rearrangeData,
  );

  const [data, setData] = useState<any>(workoutCalenderData);
  const [currentWeek, setCurrentWeek] = useState([]);
  const [previousIndex, setPreviousIndex] = useState<any>();
  const [nextIndex, setNextIndex] = useState<any>();
  const obj: object = rearrangeData[previousIndex];
  const obj2: object = rearrangeData[nextIndex];

  useEffect(() => {
    const firstDayOfWeek = moment(weekStartDate || moment().weekday(1));
    const weekDates: any = [];
    for (let i = 0; i < 7; i++) {
      weekDates.push(firstDayOfWeek.clone().add(i, 'days'));
    }
    setCurrentWeek(weekDates);
  }, [weekStartDate]);
  useEffect(() => {
    dispatch(addRearrangeData(data));
  }, [data]);

  const formattedDates = currentWeek.map(day => moment(day).format('DD'));
  const renderItem = ({item, drag, isActive, index}: any) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.workoutContainer,
            {
              backgroundColor: isActive
                ? Colors.primaryColors.grey400
                : Colors.primaryColors.grey400,
              borderRadius: isActive ? 8 : 8,
            },
          ]}>
          {formattedDates.includes(item.date) && (
            <>
              <View>
                <Text numberOfLines={1} style={styles.workout}>
                  {item.workoutName}
                </Text>
                <View style={styles.statusView}>
                  <Text
                    style={[
                      styles.status,
                      {
                        color:
                          item.status === strings.completed
                            ? Colors.primaryColors.green
                            : item.status === strings.missed
                            ? Colors.primaryColors.pink
                            : item.status === strings.upcoming
                            ? Colors.primaryColors.secondaryGrey
                            : Colors.primaryColors.black,
                      },
                    ]}>
                    {item.status}
                  </Text>
                  <View style={styles.dot}>{iconMapping['blackdot']}</View>
                  <Text style={styles.status}>{item.exercise}</Text>
                </View>
              </View>

              <View>{iconMapping['dotsContainer']}</View>
            </>
          )}
        </TouchableOpacity>
        <View style={styles.divider} />
      </ScaleDecorator>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={currentWeek}
            renderItem={({item: day}) => {
              const date: string = moment(day).format('DD');
              return (
                <View style={styles.column}>
                  <Text style={styles.day}>{moment(day).format('ddd')}</Text>
                  <Text style={styles.date}>{date}</Text>
                </View>
              );
            }}
          />
        </View>
        <DraggableFlatList
          scrollEnabled={false}
          onPlaceholderIndexChange={(index: number) => setNextIndex(index)}
          onRelease={(index: number) => setPreviousIndex(index)}
          showsVerticalScrollIndicator={false}
          data={rearrangeData || data}
          onDragEnd={({data}) => setData(data)}
          keyExtractor={(item: any) => item.id}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

export default RearrangeCalenderList;
