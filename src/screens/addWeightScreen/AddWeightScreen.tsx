import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import strings from '../../utils/strings';
import DatePicker from 'react-native-date-picker';
import Button from '../../components/button/button';
import {iconMapping} from '../../assets/icons/iconMap';
import RBSheet from 'react-native-raw-bottom-sheet';
import Modal from 'react-native-modal';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {addMetricsWeight} from '../../redux/toolkit/AddMetricsWeight';

const AddWeightScreen = () => {
  const refRBSheet: any = useRef();
  const dispatch: any = useDispatch();
  const navigation: any = useNavigation();
  const [weight, setWeight] = useState('40');
  const [unit, setUnit] = useState(strings.lb);
  const [date, setDate] = useState(new Date());
  const [isModalVisible, setModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);

  const formatDate = moment(date);
  const formattedDate = formatDate.format('MMMM DD, YYYY');
  const formattedTime = formatDate.format('hh:mm A');

  const addWeight = () => {
    const date = formatDate.format('MMM DD');
    const time = formatDate.format('h:mm A');
    const data: any = {weight: weight + ' ' + unit, date: date, time: time};
    dispatch(addMetricsWeight(data));
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <WorkoutHeader screenTitle={strings.weight} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.tabContainer,
              {marginTop: 15, padding: Platform.OS === strings.ios ? 16 : 2},
            ]}>
            <Text style={styles.propText}>{strings.weight}</Text>
            <View style={styles.propsContainer}>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={weight}
                onChangeText={text => setWeight(text)}
              />
              <Text style={styles.slyash}>{strings.vslyash}</Text>
              <TouchableOpacity
                onPress={() => refRBSheet?.current?.open()}
                activeOpacity={strings.buttonOpacity}
                style={styles.lbIcon}>
                <Text style={styles.lbText}>{unit}</Text>
                {iconMapping['arrowDown']}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.tabContainer}>
            <Text style={styles.propText}>{strings.date}</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.propsContainer}>
              <Text style={styles.date}>{formattedDate}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabContainer}>
            <Text style={styles.propText}>{strings.time}</Text>
            <TouchableOpacity
              onPress={() => setTimeModalVisible(true)}
              style={styles.propsContainer}>
              <Text style={styles.date}>{formattedTime}</Text>
            </TouchableOpacity>
          </View>
          <Button
            onPress={addWeight}
            activeOpacity={strings.buttonOpacity}
            style={styles.button}
            textStyle={styles.buttonText}
            buttonText={strings.addweight}
          />
        </ScrollView>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={300}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          }}>
          <Text style={styles.selectUnit}>{strings.selectunit}</Text>
          <TouchableOpacity
            onPress={() => {
              setUnit(strings.lb), refRBSheet?.current?.close();
            }}
            style={styles.unitView}>
            <Text style={styles.unitText}>{strings.lb}</Text>
            {unit === strings.lb ? (
              <View>{iconMapping['checkmark']}</View>
            ) : (
              <View style={styles.circle} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setUnit(strings.kg), refRBSheet?.current?.close();
            }}
            style={styles.unitView}>
            <Text style={styles.unitText}>{strings.kg}</Text>
            {unit === strings.kg ? (
              <View>{iconMapping['checkmark']}</View>
            ) : (
              <View style={styles.circle} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setUnit(strings.g), refRBSheet?.current?.close();
            }}
            style={styles.unitView}>
            <Text style={styles.unitText}>{strings.g}</Text>
            {unit === strings.g ? (
              <View>{iconMapping['checkmark']}</View>
            ) : (
              <View style={styles.circle} />
            )}
          </TouchableOpacity>
        </RBSheet>
        <Modal
          deviceHeight={windowHeight}
          deviceWidth={windowWidth}
          coverScreen={true}
          onBackdropPress={() => setModalVisible(false)}
          backdropOpacity={0.6}
          isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <DatePicker
              textColor={Colors.primaryColors.black}
              date={date}
              mode="date"
              onDateChange={date => setDate(date)}
            />
          </View>
        </Modal>
        <Modal
          deviceHeight={windowHeight}
          deviceWidth={windowWidth}
          coverScreen={true}
          onBackdropPress={() => setTimeModalVisible(false)}
          backdropOpacity={0.6}
          isVisible={timeModalVisible}>
          <View style={styles.modalContainer}>
            <DatePicker
              textColor={Colors.primaryColors.black}
              date={date}
              mode="time"
              onDateChange={date => setDate(date)}
            />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default AddWeightScreen;
