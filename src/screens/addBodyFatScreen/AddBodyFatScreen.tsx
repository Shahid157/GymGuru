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
import React, {useState} from 'react';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import strings from '../../utils/strings';
import Modal from 'react-native-modal';
import Button from '../../components/button/button';
import DatePicker from 'react-native-date-picker';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import moment from 'moment';

const AddBodyFatScreen = () => {
  const [date, setDate] = useState(new Date());
  const [bodyFat, setBodyFat] = useState('40');
  const [isModalVisible, setModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const formatDate = moment(date);
  const formattedDate = formatDate.format('MMMM DD, YYYY');
  const formattedTime = formatDate.format('hh:mm A');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <WorkoutHeader screenTitle={strings.addbodyfat} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              styles.tabContainer,
              {marginTop: 15, padding: Platform.OS === strings.ios ? 16 : 2},
            ]}>
            <Text style={styles.propText}>{strings.bodyfat}</Text>
            <View style={styles.propsContainer}>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={bodyFat}
                onChangeText={text => setBodyFat(text)}
              />
              <Text style={styles.percent}>{strings.percentage}</Text>
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
            activeOpacity={strings.buttonOpacity}
            style={styles.button}
            textStyle={styles.buttonText}
            buttonText={strings.addbodyfat}
          />
        </ScrollView>
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

export default AddBodyFatScreen;
