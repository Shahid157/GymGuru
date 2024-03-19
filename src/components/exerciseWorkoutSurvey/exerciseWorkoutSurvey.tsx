import {
  FlatList,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {styles} from './styles';
import {workoutSurveyData} from '../../utils/dummyData';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../button/button';
import {Colors} from '../../utils/colors';
import {windowHeight} from '../../utils/dimensions';
import {ExerciseWorkoutSurveyPropsTypes} from './types';
import {useSelector} from 'react-redux';

const ExerciseWorkoutSurvey: FC<ExerciseWorkoutSurveyPropsTypes> = ({
  onPress,
}) => {
  const [selectedNum, setSelectedNum] = useState<number>();
  const selectedHours = useSelector(
    (state: any) => state?.TimerSlicer?.selectedHours,
  );
  const selectedMinutes = useSelector(
    (state: any) => state?.TimerSlicer?.selectedMinutes,
  );
  const selectedSeconds = useSelector(
    (state: any) => state?.TimerSlicer?.selectedSeconds,
  );

  const renderItem = (item: any, index: number) => {
    return (
      <View style={styles.renderItem}>
        <TouchableOpacity
          activeOpacity={strings.buttonOpacity}
          onPress={() => setSelectedNum(index)}
          style={[
            styles.numView,
            {
              borderColor:
                selectedNum === index
                  ? Colors.primaryColors.pink
                  : Colors.primaryColors.paleGrey,
              borderWidth: selectedNum === index ? 1.5 : 1,
              backgroundColor:
                selectedNum === index
                  ? Colors.monochromeColors.lightestPink
                  : Colors.primaryColors.white,
            },
          ]}>
          <Text style={styles.num}>{item.num}</Text>
        </TouchableOpacity>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraHeight={Platform.OS === 'ios' ? 50 : windowHeight / 6}
        extraScrollHeight={Platform.OS === 'ios' ? 50 : windowHeight / 6}
        showsVerticalScrollIndicator={false}>
        <View style={styles.icon}>{iconMapping['successIconSecondary']}</View>
        <Text style={styles.title}>{strings.endofWorkout}</Text>
        <Text style={styles.desText}>{strings.howdidfeel}</Text>
        <View style={styles.flatList}>
          <FlatList
            data={workoutSurveyData}
            horizontal={true}
            renderItem={item => renderItem(item?.item, item?.index)}
          />
        </View>
        <Text style={styles.trainingText}>{strings.trainingtime}</Text>
        <Text
          style={
            styles.timer
          }>{`${selectedHours}:${selectedMinutes}:${selectedSeconds}`}</Text>
        <Text style={styles.notes}>{strings.notes}</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholderTextColor={Colors.primaryColors.secondaryGrey}
          placeholder={strings.notesplaceholder}
        />
        <Button
          disabled={
            selectedSeconds > 0 || selectedMinutes > 0 || selectedHours > 0
              ? false
              : true
          }
          onPress={onPress}
          style={styles.button}
          textStyle={styles.buttonText}
          buttonText={strings.confirm}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ExerciseWorkoutSurvey;
