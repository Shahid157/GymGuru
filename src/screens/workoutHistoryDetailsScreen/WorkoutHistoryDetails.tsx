import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {Colors} from '../../utils/colors';
import strings from '../../utils/strings';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {styles} from './styles';
import Slider from '@react-native-community/slider';
import {iconMapping} from '../../assets/icons/iconMap';
import {WorkoutHistoryDetailsPropsTypes} from './types';
import Modal from 'react-native-modal';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import Button from '../../components/button/button';
import {workoutDetailsData} from '../../utils/dummyData';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import {useSelector} from 'react-redux';

const WorkoutHistoryDetails: FC<WorkoutHistoryDetailsPropsTypes> = () => {
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const historyItem = route.params.item;
  const time = route.params.time;
  const workoutflow = route.params.workoutflow;
  const addedTime = moment(time, 'hh:mm a')
    .add(30, 'minutes')
    .format('hh:mm a');
  const date = useSelector((state: any) => state?.TimerSlicer?.selectedDate);
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <WorkoutHeader
          onPressHistory={() => setModalVisible(true)}
          screenTitle={date}
          Icon={iconMapping['editIcon']}
        />
        <View style={styles.workoutDetailContainer}>
          <View style={styles.flexContainer}>
            <Text style={styles.workoutName}>{historyItem.workoutName}</Text>
            <Text style={styles.workoutTime}>{strings.time030}</Text>
          </View>
          <View style={styles.flexContainer}>
            <Text style={styles.trainingMin}>
              {time + strings.dash + addedTime}
            </Text>
            <Text style={styles.trainingMin}>{strings.trainingmin}</Text>
          </View>
        </View>
        <View style={styles.seekBarContainer}>
          <View style={styles.seekBarText}>
            <Text style={styles.workoutDetail}>{strings.howWorkout}</Text>
            <Text style={styles.status}>{strings.difficult}</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            thumbTintColor={Colors.primaryColors.white}
            value={0.3}
            maximumValue={0.9}
            minimumTrackTintColor={Colors.primaryColors.green}
            maximumTrackTintColor={Colors.primaryColors.grey300}
          />
        </View>
        <View style={styles.workoutDetailsContainer}>
          <Text style={styles.workoutDetailText}>{strings.workoutdetails}</Text>
          <View style={styles.divider} />
          <View style={styles.flexContainer}>
            <Text style={styles.workoutDetailHeader}>
              {strings.squatBarbell}
            </Text>
            <Text style={styles.workoutDetailHeader}>{strings.rm}</Text>
          </View>
          {workoutDetailsData?.map((item, index) => {
            return (
              <View style={styles.flexContainer} key={index}>
                <Text style={styles.detailText}>{item.exercise}</Text>
                <Text style={styles.detailText}>{item.rm}</Text>
              </View>
            );
          })}
        </View>
        <View>
          <Modal
            deviceHeight={windowHeight}
            deviceWidth={windowWidth}
            coverScreen={true}
            onBackdropPress={() => setModalVisible(false)}
            backdropOpacity={0.6}
            isVisible={isModalVisible}>
            <View style={styles.modalContainer}>
              <View>{iconMapping['successIcon']}</View>
              <Text style={styles.completedText}>
                {strings.completeWorkout}
              </Text>
              <Text style={styles.description}>
                {strings.workoutDescription}
              </Text>
              <Button
                onPress={() => {
                  workoutflow &&
                    navigation.navigate(strings.exercisedetail_screen, {
                      item: historyItem,
                      workoutFlow: true,
                    });
                  setModalVisible(false);
                }}
                activeOpacity={strings.buttonOpacity}
                textStyle={styles.buttonText}
                buttonText={strings.workoutResult}
                style={styles.button}
              />
              <Text
                onPress={() => setModalVisible(false)}
                style={styles.cancel}>
                {strings.cancel}
              </Text>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutHistoryDetails;
