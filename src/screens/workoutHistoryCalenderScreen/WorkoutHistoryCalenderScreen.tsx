import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import {styles} from './styles';
import {WorkoutHistoryCalenderScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import HistoryCalenderStrip from '../../components/historyCalenderStripComponent/historyCalenderStripComponent';
import WorkoutHistoryCalender from '../../components/workoutHistoryCalender/workoutHistoryCalender';
import RBSheet from 'react-native-raw-bottom-sheet';
import DatePicker from 'react-native-date-picker';
import Button from '../../components/button/button';
import moment from 'moment';

const WorkoutHistoryCalenderScreen: FC<
  WorkoutHistoryCalenderScreenPropsTypes
> = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [itemParam, setItemParam] = useState({});
  const [titleParam, setTitleParam] = useState('');
  const time = moment(date);
  const formattedTime = time.format('hh:mm a');
  const refRBSheet: any = useRef();
  const refTimeSheet: any = useRef();
  const onPressWorkoutStrip = (itemParam: any, titleParam: string) => {
    setItemParam(itemParam);
    setTitleParam(titleParam);
    refRBSheet?.current?.open();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <WorkoutHeader
          screenTitle={strings.history}
          disabled={true}
          Icon={iconMapping['calenderIcon']}
        />
        <HistoryCalenderStrip onPress={onPressWorkoutStrip} />
        <RBSheet
          ref={refRBSheet}
          closeOnPressMask={true}
          closeOnPressBack={true}
          height={440}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          }}>
          <WorkoutHistoryCalender
            onPressTime={() => {
              refRBSheet?.current?.close();
              setTimeout(() => {
                refTimeSheet?.current?.open();
              }, 300);
            }}
          />
        </RBSheet>
        <RBSheet
          ref={refTimeSheet}
          closeOnPressMask={true}
          closeOnPressBack={true}
          height={300}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          }}>
          <View style={styles.timeSheetContainer}>
            <Button
              onPress={() => {
                refTimeSheet?.current?.close(),
                  navigation.navigate(strings.workoutHistoryDetail_screen, {
                    item: itemParam,
                    date: titleParam,
                    time: formattedTime,
                    workoutflow: false,
                  });
              }}
              style={styles.button}
              textStyle={styles.buttonText}
              buttonText={strings.done}
            />
            <DatePicker
              style={styles.time}
              textColor={Colors.primaryColors.black}
              date={date}
              mode="time"
              onDateChange={date => setDate(date)}
            />
          </View>
        </RBSheet>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutHistoryCalenderScreen;
