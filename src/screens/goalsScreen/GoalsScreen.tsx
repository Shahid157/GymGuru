import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import Button from '../../components/button/button';
import GoalsTable from '../../components/goalsTable/goalsTable';
import {useRoute} from '@react-navigation/core';
import Modal from 'react-native-modal';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {addGoalsData} from '../../redux/toolkit/AddGoalsSlicer';

const GoalsScreen = () => {
  const route: any = useRoute();
  const dispatch: any = useDispatch();
  const goalsCount: any = route?.params.goals;
  const goalsData = useSelector((state: any) => state.AddGoalsSlicer.goals);
  const [isModalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState('');
  const [days, setDays] = useState('');
  const [percentage, setPercentage] = useState<number>(0);

  const [addGoalsError, setAddGoalsError] = useState({
    error: false,
    msg: '',
  });
  const [addDaysError, setAddDaysError] = useState({
    error: false,
    msg: '',
  });
  const [addPercentageError, setAddPercentageError] = useState({
    error: false,
    msg: '',
  });

  const addGoals = () => {
    if (!goals) {
      setAddGoalsError({error: true, msg: 'Please add goal name'});
    } else if (!days) {
      setAddDaysError({error: true, msg: 'Please add days'});
    } else if (!percentage) {
      setAddPercentageError({error: true, msg: 'Please add progress'});
    } else {
      const data = {
        day: days,
        goaltitle: goals,
        progress: Number(percentage),
      };
      dispatch(addGoalsData(data));
      setModalVisible(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <WorkoutHeader
          Icon={iconMapping['shareIcon']}
          screenTitle={strings.goals}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.goalsContainer}>
            <Text style={styles.goalsText}>{`${goalsCount} Goals`}</Text>
            <View style={styles.divider} />
            <View style={styles.goalsContentContainer}>
              <GoalsTable goalsData={goalsData} />
              <Button
                onPress={() => {
                  setModalVisible(true),
                    setGoals(''),
                    setDays(''),
                    setPercentage(0);
                }}
                activeOpacity={strings.buttonOpacity}
                buttonText={strings.setgoals}
                textStyle={styles.buttonText}
                style={styles.button}
              />
            </View>
          </View>
        </ScrollView>
        <Modal
          deviceHeight={windowHeight}
          deviceWidth={windowWidth}
          coverScreen={true}
          onBackdropPress={() => setModalVisible(false)}
          backdropOpacity={0.6}
          isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.addModalText}>{strings.goalname}</Text>
            <TextInput
              placeholder={strings.goalname}
              placeholderTextColor={Colors.primaryColors.secondaryGrey}
              style={styles.modalInput}
              onChangeText={(text: any) => {
                setGoals(text);
                setAddGoalsError({error: false, msg: ''});
              }}
            />
            {addGoalsError.error ? (
              <Text style={styles.error}>{addGoalsError.msg}</Text>
            ) : null}
            <Text style={styles.addModalText}>{strings.days}</Text>
            <TextInput
              placeholder={strings.zero}
              placeholderTextColor={Colors.primaryColors.secondaryGrey}
              style={styles.modalInput}
              keyboardType="number-pad"
              onChangeText={(text: any) => {
                setDays(text);
                setAddDaysError({error: false, msg: ''});
              }}
            />
            {addDaysError.error ? (
              <Text style={styles.error}>{addDaysError.msg}</Text>
            ) : null}
            <Text style={styles.addModalText}>{strings.progress}</Text>
            <TextInput
              placeholder={'0.1 to 1'}
              placeholderTextColor={Colors.primaryColors.secondaryGrey}
              style={styles.modalInput}
              keyboardType="number-pad"
              onChangeText={(text: any) => {
                setPercentage(text);
                setAddPercentageError({error: false, msg: ''});
              }}
            />
            {addPercentageError.error ? (
              <Text style={styles.error}>{addPercentageError.msg}</Text>
            ) : null}
            <Button
              onPress={addGoals}
              activeOpacity={strings.buttonOpacity}
              textStyle={styles.modalButtonText}
              buttonText={strings.add}
              style={styles.modalButton}
            />
            <Text onPress={() => setModalVisible(false)} style={styles.cancel}>
              {strings.cancel}
            </Text>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default GoalsScreen;
