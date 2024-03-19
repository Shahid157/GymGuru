import {ScrollView, SectionList, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import moment from 'moment';
import strings from '../../utils/strings';
import {
  workoutHistoryCalenderData,
  workoutHistoryData,
} from '../../utils/dummyData';
import HistoryExcercise from '../historyExcerciseComponent/historyExcerciseComponent';
import {useNavigation} from '@react-navigation/native';
import {HistoryCalenderStripPropsTypes} from './types';

const HistoryCalenderStrip: FC<HistoryCalenderStripPropsTypes> = ({
  exerciseDetail,
  onPress,
}) => {
  const navigation: any = useNavigation();
  const [weekStartDate, setWeekStartDate] = useState('');

  useEffect(() => {
    const firstDayOfWeek = moment(weekStartDate || moment().weekday(1));
    const weekDates: any = [];
    for (let i = 0; i < 7; i++) {
      weekDates.push(firstDayOfWeek.clone().add(i, 'days'));
    }
  }, [weekStartDate]);

  const renderItem = (item: any, section: any, index: number) => {
    return (
      <View
        style={[
          styles.renderItem,
          {flexDirection: !exerciseDetail ? 'row' : 'column'},
        ]}>
        {!exerciseDetail && (
          <View>
            <View style={styles.circle} />
            <View style={styles.dashedLine} />
          </View>
        )}
        <HistoryExcercise
          onPress={() => {
            const itemParam = item;
            const titleParam = section.title;
            exerciseDetail
              ? navigation.navigate(strings.workoutExcercise_screen, {
                  item: itemParam,
                  date: titleParam,
                })
              : onPress(itemParam, titleParam);
          }}
          workoutName={item.workoutName}
          time={item.time}
          weight={item.weight}
          reps={item.reps}
          excercise={item.exercise}
          bestSet={item.bestset}
          exerciseDetail={exerciseDetail}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CalendarStrip
        calendarHeaderFormat={moment().format('ddd, hA')}
        calendarAnimation={{type: 'sequence', duration: 30}}
        daySelectionAnimation={{
          type: 'background',
          duration: 300,
          highlightColor: '',
        }}
        showDayNameFirstLetter={true}
        showDayName={false}
        style={styles.calenderStrip}
        onWeekChanged={(start: any) => {
          setWeekStartDate(start);
        }}
        selectedDate={moment('2023-09-19', 'YYYY-MM-DD')}
        calendarColor={Colors.primaryColors.white}
        dateNumberStyle={styles.dateNumStyle}
        showMonth={false}
        dateNameStyle={styles.dateName}
        iconContainer={styles.iconContainer}
        highlightDateNameStyle={styles.highlightDateNameStyle}
        highlightDateNumberStyle={styles.highlightDateNumberStyle}
        highlightDateContainerStyle={styles.highlightDateContainer}
      />

      <View style={styles.sectionList}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SectionList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            sections={
              exerciseDetail ? workoutHistoryData : workoutHistoryCalenderData
            }
            keyExtractor={(item: any, index: number) => item + index}
            renderItem={item => renderItem(item.item, item.section, item.index)}
            renderSectionHeader={({section: {title}}) => (
              <Text
                style={[styles.title, {paddingLeft: exerciseDetail ? 0 : 25}]}>
                {title}
              </Text>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default HistoryCalenderStrip;
