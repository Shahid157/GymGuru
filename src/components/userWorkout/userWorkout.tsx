import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {UserWorkoutPropsTypes} from './types';
import strings from '../../utils/strings';
import {styles} from './styles';
import Button from '../button/button';
import {workoutColors} from '../../utils/dummyData';

const UserWorkout: FC<UserWorkoutPropsTypes> = ({
  onPress,
  onPressDetail,
  workoutData,
}) => {
  const renderItem = (item: any, index: number) => {
    const colorIndex = index % workoutColors.length;
    const bgColor = workoutColors[colorIndex];
    return (
      <View style={[styles.CardioTextView, {backgroundColor: bgColor}]}>
        <View>{item.icon}</View>
        <Text style={styles.text}>{item.workoutName}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.todayText}>{strings.todayHave}</Text>
        <TouchableOpacity
          onPress={onPressDetail}
          activeOpacity={strings.buttonOpacity}>
          <Text style={styles.detailText}>{strings.details}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.workoutView}>
        <Text style={styles.three}>{workoutData?.length}</Text>
        <Text style={styles.workoutText}>{strings.workout}</Text>
      </View>
      <View style={styles.flatList}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={workoutData}
          renderItem={item => renderItem(item?.item, item?.index)}
        />
      </View>
      <Button
        activeOpacity={strings.buttonOpacity}
        style={styles.button}
        textStyle={styles.buttonText}
        buttonText={strings.startWorkout}
        onPress={onPress}
      />
    </View>
  );
};

export default UserWorkout;
