import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import * as Progress from 'react-native-progress';
import {iconMapping} from '../../assets/icons/iconMap';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import {windowWidth} from '../../utils/dimensions';
import strings from '../../utils/strings';
import {ClientProfileCardPropsTypes} from './types';
import {useNavigation} from '@react-navigation/native';

const ClientProfileCard: FC<ClientProfileCardPropsTypes> = ({
  profileCardData,
}) => {
  const navigation: any = useNavigation();
  const onPressItem = (item: any) => {
    if (item?.activityName === strings.steptracker) {
      navigation.navigate(strings.stepTracker_screen, {
        itemCount: item?.activityCount,
        totalSteps: item?.totalQuantity,
        progress: item?.progress,
      });
    } else if (item?.activityName === strings.nutrition) {
      navigation.navigate(strings.nutrition_screen, {
        nutritionCount: item?.activityCount,
        totalCal: item?.totalQuantity,
        progress: item?.progress,
      });
    } else if (item?.activityName === strings.weight) {
      navigation.navigate(strings.weight_screen, {
        weight: item?.activityCount,
        progress: item?.progress,
      });
    } else if (item?.activityName === strings.goals) {
      navigation.navigate(strings.goals_screen, {
        goals: item?.activityCount,
      });
    } else if (item?.activityName === strings.workouthistory) {
      navigation.navigate(strings.profile_workout_hitory, {
        workouts: item?.activityCount,
      });
    } else if (item?.activityName === strings.progressPhotos) {
      navigation.navigate(strings.progress_photos_screen, {
        progressPhotos: item?.activityCount,
      });
    } else if (item?.activityName === strings.exercisehistory) {
      navigation.navigate(strings.exercise_history_screen, {
        exercises: item?.activityCount,
      });
    }
  };
  return (
    <View>
      <FlatList
        data={profileCardData}
        scrollEnabled={false}
        renderItem={({item, index}: any) => {
          return (
            <TouchableOpacity
              activeOpacity={strings.buttonOpacity}
              onPress={() => onPressItem(item)}
              style={[
                styles.itemContainer,
                {marginBottom: index === profileCardData.length - 1 ? 10 : 0},
              ]}>
              <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                  {/* svg icon */}
                  {item?.activityIcon}
                  <Text
                    style={[
                      styles.title,
                      {
                        color:
                          index === 0
                            ? Colors.primaryColors.pink
                            : index % 2
                            ? Colors.primaryColors.cyan
                            : Colors.primaryColors.AccentLightBlue,
                      },
                    ]}>
                    {item?.activityName}
                  </Text>
                </View>
                <View>{iconMapping['rightVector']}</View>
              </View>
              <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.quantity}>{item?.activityCount}</Text>
                  {item?.totalQuantity && (
                    <>
                      <Text style={styles.slyash}> / </Text>
                      <Text style={styles.totalQuantity}>
                        {item.totalQuantity}
                      </Text>
                    </>
                  )}
                  <Text style={styles.activityDetail}>
                    {item.activityDetail}
                  </Text>
                </View>
                <View>
                  {item.activityName === strings.steptracker && (
                    <Progress.Bar
                      style={styles.progressBar}
                      color={Colors.primaryColors.pink}
                      progress={item.progress}
                      width={windowWidth / 7}
                    />
                  )}
                  {item.activityName === strings.nutrition && (
                    <Progress.Circle
                      size={40}
                      progress={item.progress}
                      thickness={5}
                      unfilledColor={Colors.primaryColors.paleGrey}
                      borderColor={Colors.primaryColors.transparent}
                      fill={Colors.primaryColors.transparent}
                      color={Colors.primaryColors.pink}
                    />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ClientProfileCard;
