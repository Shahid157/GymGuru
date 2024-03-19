import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import {iconMapping} from '../../assets/icons/iconMap';
import {CalenderStripComponentPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import strings from '../../utils/strings';

const CalenderStrip: FC<CalenderStripComponentPropsTypes> = () => {
  const [weekStartDate, setWeekStartDate] = useState('');
  const [weekEndDate, setWeekEndDate] = useState('');
  const [monthName, setMonthName] = useState('');
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  interface MyRefType {
    getPreviousWeek: () => void;
    getNextWeek: () => void;
    ref: () => void;
  }
  const calenderStripRef = useRef<any | MyRefType>(null);
  return (
    <>
      <View>
        <View style={styles.dateMonthView}>
          <Text
            numberOfLines={1}
            style={
              styles.monthDate
            }>{`${monthName} ${weekStartDate} - ${weekEndDate}`}</Text>
        </View>
        <View style={styles.arrowView}>
          <TouchableOpacity
            onPress={() => {
              setSelectedWeek(0), calenderStripRef?.current?.getPreviousWeek();
            }}
            style={styles.arrow}>
            {selectedWeek === 0
              ? iconMapping['leftArrowSecondary']
              : iconMapping['leftArrow']}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedWeek(1), calenderStripRef?.current?.getNextWeek();
            }}
            style={styles.arrow}>
            {selectedWeek === 1
              ? iconMapping['PrimaryRightArrow']
              : iconMapping['rightArrowSecondary']}
          </TouchableOpacity>
        </View>
        <View style={styles.weekView}>
          <Text style={styles.weekText}>{strings.thisWeek}</Text>
        </View>
        <CalendarStrip
          ref={calenderStripRef}
          style={styles.calenderStrip}
          showMonth={false}
          dateNumberStyle={styles.dateNumStyle}
          dayContainerStyle={styles.dateContainer}
          dateNameStyle={styles.dateNameStyle}
          calendarColor={Colors.primaryColors.lightGrey}
          leftSelector={[]}
          rightSelector={[]}
          minDate={new Date()}
          onDateSelected={date => setSelectedDate(date)}
          selectedDate={selectedDate}
          onWeekChanged={(start, end) => {
            const startMonth = start.format('MMM');
            const endMonth = end?.format('MMM');
            if (startMonth === endMonth) {
              setMonthName(startMonth);
            } else {
              setMonthName(`${startMonth} / ${endMonth}`);
            }
            setWeekStartDate(start?.format('DD'));
            setWeekEndDate(end?.format('DD'));
          }}
          useIsoWeekday={false}
          highlightDateNumberContainerStyle={styles.highlightDateNumContainer}
          highlightDateContainerStyle={styles.highlightDateContainer}
          highlightDateNumberStyle={styles.highlightDateNum}
          highlightDateNameStyle={styles.highlightDateName}
        />
      </View>
    </>
  );
};

export default CalenderStrip;
