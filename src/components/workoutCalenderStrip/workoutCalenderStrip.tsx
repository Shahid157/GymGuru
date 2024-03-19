import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import moment from 'moment';
import strings from '../../utils/strings';
import {workoutCalenderData} from '../../utils/dummyData';
import {iconMapping} from '../../assets/icons/iconMap';
import {WorkoutCalenderStripPropsTypes} from './types';
import {useDispatch} from 'react-redux';
import {setWeekStartedDate} from '../../redux/toolkit/TimerSlicer';

const WorkoutCalenderStrip: FC<WorkoutCalenderStripPropsTypes> = ({
  calendarStrip,
}) => {
  const dispatch: any = useDispatch();
  const [currentWeek, setCurrentWeek] = useState([]);
  const [weekStartDate, setWeekStartDate] = useState('');

  useEffect(() => {
    dispatch(setWeekStartedDate(weekStartDate.toString()));
    const firstDayOfWeek = moment(weekStartDate || moment().weekday(1));
    const weekDates: any = [];
    for (let i = 0; i < 7; i++) {
      weekDates.push(firstDayOfWeek.clone().add(i, 'days'));
    }
    setCurrentWeek(weekDates);
  }, [weekStartDate]);
  const renderItem = (item: any, date: string) => {
    return (
      <>
        {date === item.date ? (
          <TouchableOpacity style={[styles.workoutContainer]}>
            <Text style={styles.workout}>{item.workoutName}</Text>
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
          </TouchableOpacity>
        ) : null}
      </>
    );
  };

  return (
    <View style={styles.container}>
      {calendarStrip && (
        <CalendarStrip
          calendarHeaderFormat={moment().format('ddd, hA')}
          calendarAnimation={{type: 'sequence', duration: 30}}
          daySelectionAnimation={{
            type: 'background',
            duration: 300,
            highlightColor: Colors.primaryColors.pink,
          }}
          showDayNameFirstLetter={true}
          showDayName={false}
          style={styles.calenderStrip}
          onWeekChanged={(start: any) => {
            setWeekStartDate(start);
          }}
          selectedDate={moment('2023-10-11', 'YYYY-MM-DD')}
          calendarColor={Colors.primaryColors.white}
          dateNumberStyle={styles.dateNumStyle}
          showMonth={false}
          dateNameStyle={styles.dateName}
          iconContainer={styles.iconContainer}
          highlightDateNameStyle={styles.highlightDateNameStyle}
          highlightDateNumberStyle={styles.highlightDateNumberStyle}
          highlightDateContainerStyle={styles.highlightDateContainer}
        />
      )}
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatList}
          data={currentWeek}
          renderItem={({item: day}) => {
            const date: string = moment(day).format('DD');
            return (
              <>
                <View style={styles.calenderContainer}>
                  <View style={styles.column}>
                    <Text style={styles.day}>{moment(day).format('ddd')}</Text>
                    <Text style={styles.date}>{date}</Text>
                  </View>
                  <TouchableOpacity style={styles.row3}>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={item => item.id}
                      data={workoutCalenderData}
                      renderItem={item => renderItem(item?.item, date)}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.divider} />
              </>
            );
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(index: number) => index.toString()}
        />
      </View>
    </View>
  );
};

export default WorkoutCalenderStrip;
