import {TouchableOpacity, View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {Colors} from '../../utils/colors';
import {iconMapping} from '../../assets/icons/iconMap';
import {styles} from './styles';
import strings from '../../utils/strings';
import {WorkoutHistoryCalenderPropsTypes} from './types';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {setSelectedDate} from '../../redux/toolkit/TimerSlicer';

const WorkoutHistoryCalender: FC<WorkoutHistoryCalenderPropsTypes> = ({
  onPressTime,
}) => {
  const dispatch: any = useDispatch();
  const time = moment().format('hh:mm A');
  const currentDate = moment().format('YYYY-MM-DD');
  const [selected, setSelected] = useState<string>(currentDate);
  const date = moment(selected);
  const formattedDate = date.format('ddd, MMM D');
  dispatch(setSelectedDate(formattedDate));
  const [currentMonth, setCurrentMonth] = useState<any>(new Date());
  const previousMonth = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };
  const customHeader = <View />;

  const nextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };
  const nextYear = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 12);
    setCurrentMonth(nextMonth);
  };
  const monthName = moment(currentMonth).format('MMMM YYYY');
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          <Text style={styles.month}>{monthName}</Text>
          <TouchableOpacity
            activeOpacity={strings.buttonOpacity}
            onPress={nextYear}>
            {iconMapping['smallPrimaryRightArrow']}
          </TouchableOpacity>
        </View>
        <View style={styles.flexContainer}>
          <TouchableOpacity
            activeOpacity={strings.buttonOpacity}
            style={styles.leftArrow}
            onPress={previousMonth}>
            {iconMapping['leftArrowSecondary']}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={strings.buttonOpacity}
            onPress={nextMonth}>
            {iconMapping['PrimaryRightArrow']}
          </TouchableOpacity>
        </View>
      </View>
      <Calendar
        hideArrows={true}
        current={currentMonth.toISOString().split('T')[0]}
        key={currentMonth}
        enableSwipeMonths={true}
        customHeaderTitle={customHeader}
        disableMonthChange={false}
        hideExtraDays={true}
        firstDay={1}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: Colors.primaryColors.pink,
          },
        }}
        theme={{
          textDayFontSize: 16,
          textDayFontWeight: '500',
          textDayHeaderFontSize: 13,
          textDayHeaderFontWeight: '500',
        }}
        hideDayNames={false}
        showWeekNumbers={false}
        style={styles.calender}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{strings.time}</Text>
        <TouchableOpacity
          onPress={onPressTime}
          activeOpacity={strings.buttonOpacity}
          style={styles.timeView}>
          <Text style={styles.calenderTime}>{time}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkoutHistoryCalender;
