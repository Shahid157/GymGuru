import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {FC, useState} from 'react';
import {DumbbellRearDeltScreenPropsType} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import {Images} from '../../assets/images';
import strings from '../../utils/strings';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import UserWeightChart from '../../components/userWeightChart/userWeightChart';
import {
  exerciseChartData,
  exerciseDetailPropsData,
} from '../../utils/dummyData';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const DumbbellRearDeltScreen: FC<DumbbellRearDeltScreenPropsType> = ({
  navigation,
}) => {
  const route: any = useRoute();
  const [buttonColor, setButtonColor] = useState(true);

  const stopWatchButtonHandler = () => {
    setButtonColor(true);
  };
  const timerButtonHandler = () => {
    setButtonColor(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <WorkoutHeader screenTitle={strings.dumbbell_Rear_Delt_Row} />
        <View style={styles.stopWatchContainer}>
          <TouchableOpacity
            activeOpacity={strings.buttonOpacity}
            onPress={stopWatchButtonHandler}
            style={[
              styles.stopWatchButton,
              {
                backgroundColor: buttonColor
                  ? Colors.primaryColors.white
                  : Colors.primaryColors.grey300,
              },
            ]}>
            <Text style={styles.stopWatchText}>{strings.about}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={strings.buttonOpacity}
            onPress={timerButtonHandler}
            style={[
              styles.timerButton,
              {
                backgroundColor: buttonColor
                  ? Colors.primaryColors.grey300
                  : Colors.primaryColors.white,
              },
            ]}>
            <Text style={styles.stopWatchText}>{strings.history}</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          extraHeight={110}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          {buttonColor ? (
            <View style={styles.aboutContent}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={Images.DumbbellDeltRow}
              />
              <TextInput
                placeholderTextColor={Colors.primaryColors.secondaryGrey}
                placeholder={strings.add_your_own_note}
                style={styles.input}
              />
              <Text style={styles.instructionText}>{strings.instructions}</Text>
              <Text style={styles.pehragraphText}>
                {strings.historDetails1}
              </Text>
            </View>
          ) : (
            <View style={styles.scrollView}>
              <UserWeightChart
                minDuration={true}
                chartData={exerciseChartData}
              />
              <View style={styles.propsContainer}>
                <View style={styles.flex}>
                  <Text style={styles.date}>{strings.april08}</Text>
                  <Text style={styles.squatText}>{strings.squatBarbell}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.propsHeader}>
                  <Text style={styles.propHeading}>{strings.set}</Text>
                  <Text style={styles.propHeading}>{strings.reps}</Text>
                  <Text style={styles.propHeading}>{strings.weightlb}</Text>
                  <View />
                </View>
                <View style={styles.mapContainer}>
                  {exerciseDetailPropsData?.map((item, index) => {
                    return (
                      <View key={index}>
                        <View style={styles.propsInnerView}>
                          <Text style={styles.id}>{item.id}</Text>
                          <Text style={styles.reps}>{item?.reps}</Text>
                          <Text style={styles.reps}>{item.weight}</Text>
                          <View />
                        </View>
                        <View style={styles.propsDivider} />
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          )}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DumbbellRearDeltScreen;
