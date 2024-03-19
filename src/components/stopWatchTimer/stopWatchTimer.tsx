import React, {useEffect, useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import {styles} from './styles';
import {Colors} from '../../utils/colors';
import strings from '../../utils/strings';
import {StopWatchTimerPropsTypes} from './types';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  setFormattedHours,
  setFormattedMinutes,
  setFormattedSeconds,
} from '../../redux/toolkit/TimerSlicer';

const stopWatchTimer: React.FC<StopWatchTimerPropsTypes> = ({
  showStopWatch,
}) => {
  const dispatch: any = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerStart, setTimerStart] = useState<boolean>(false);
  const [stopwatchStart, setStopwatchStart] = useState<boolean>(false);
  const [stopwatchReset, setStopwatchReset] = useState<boolean>(false);
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [selectedSeconds, setSelectedSeconds] = useState(0);
  const [circleTimer, setCircleTimer] = useState(false);
  const [initialTime, setinitialTime] = useState(0);
  const [key, setKey] = useState(1);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isTimerReset, setIsTimerReset] = useState(false);
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    if (timerStart) {
      toggleStopwatch();
    } else {
      resetStopwatch();
    }
  }, [timerStart]);

  useEffect(() => {
    if (isTimerReset) {
      resetTimer();
    }
  }, [isTimerReset]);

  useEffect(() => {
    const totalSeconds =
      selectedHours * 3600 + selectedMinutes * 60 + selectedSeconds;
    setinitialTime(totalSeconds);
  }, [selectedHours, selectedMinutes, selectedSeconds]);
  useEffect(() => {
    const totalDuration =
      parseInt(hours) * 3600 * 1000 +
      parseInt(minutes) * 60 * 1000 +
      parseInt(seconds) * 1000;
    setIsTimerReset(true);
    setIsTimerStart(false);
  }, [hours, minutes, seconds]);

  if (selectedHours < 10) {
    const formattedHours: any = 0 + '' + selectedHours;
    dispatch(setFormattedHours(formattedHours));
  } else {
    dispatch(setFormattedHours(selectedHours));
  }
  if (selectedMinutes < 10) {
    const formattedMinutes: any = 0 + '' + selectedMinutes;
    dispatch(setFormattedMinutes(formattedMinutes));
  } else {
    dispatch(setFormattedMinutes(selectedMinutes));
  }
  if (selectedSeconds < 10) {
    const formattedSeconds: any = 0 + '' + selectedSeconds;
    dispatch(setFormattedSeconds(formattedSeconds));
  } else {
    dispatch(setFormattedSeconds(selectedSeconds));
  }
  const toggleTimer = () => {
    setCircleTimer(true);
    setTimerStart(!timerStart);
    setIsTimerStart(!isTimerStart);
    setIsPlaying(!isPlaying);
  };

  const resetTimer = () => {
    setCircleTimer(false);
    setIsTimerReset(true);
    setIsTimerStart(false);
    setTimerStart(false);
    setKey(prevKey => prevKey + 1);
    setIsPlaying(false);
  };

  const toggleStopwatch = () => {
    setStopwatchStart(!stopwatchStart);
    setStopwatchReset(false);
  };

  const resetStopwatch = () => {
    setStopwatchStart(false);
    setStopwatchReset(true);
  };
  const options = {
    container: {
      backgroundColor: Colors.primaryColors.white,
      padding: 5,
      borderRadius: 5,
      alignSelf: 'center',
    },
    text: {
      fontSize: 36,
      color: Colors.primaryColors.black,
      marginLeft: 7,
      fontWeight: '600',
    },
  };
  const formatTime = (time: any) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };
  const handleTimeChange = (elapsedTime: string) => {
    const timeComponents = elapsedTime.split(':');

    if (timeComponents.length === 3) {
      const hours = parseInt(timeComponents[0], 10);
      const minutes = parseInt(timeComponents[1], 10);
      const seconds = parseInt(timeComponents[2], 10);
      const formattedHours: any = hours.toString().padStart(2, '0');
      const formattedMinutes: any = minutes.toString().padStart(2, '0');
      const formattedSeconds: any = seconds.toString().padStart(2, '0');
      if (!stopwatchStart) {
        dispatch(setFormattedHours(formattedHours));
        dispatch(setFormattedMinutes(formattedMinutes));
        dispatch(setFormattedSeconds(formattedSeconds));
      }
    } else {
      console.log('Invalid elapsedTime format');
    }
  };
  return (
    <View style={styles.container}>
      {showStopWatch ? (
        <>
          <View style={styles.stopWatchContainer}>
            <Stopwatch
              laps
              start={stopwatchStart}
              reset={stopwatchReset}
              options={options}
              getTime={(time: string) => handleTimeChange(time)}
            />
          </View>

          <View style={styles.startStopContainer}>
            <TouchableHighlight
              onPress={resetStopwatch}
              style={styles.resetButton}>
              <Text style={styles.resetText}>{strings.reset}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => toggleStopwatch()}
              style={styles.startStopButton}>
              <Text style={styles.startStopText}>
                {!stopwatchStart ? strings.start : strings.stop}
              </Text>
            </TouchableHighlight>
          </View>
        </>
      ) : (
        <>
          <View style={styles.timerContainer}>
            {isTimerReset ? (
              <>
                {circleTimer ? (
                  <CountdownCircleTimer
                    key={key}
                    isPlaying={isPlaying}
                    duration={initialTime}
                    colors={'#EB5757'}
                    strokeWidth={8}
                    onComplete={() => {
                      setIsPlaying(false);
                    }}>
                    {({remainingTime}) => (
                      <View>
                        <Text style={styles.circleTime}>
                          {formatTime(remainingTime)}
                        </Text>
                      </View>
                    )}
                  </CountdownCircleTimer>
                ) : (
                  <View style={styles.pickerContainer}>
                    <View style={styles.flexContainer}>
                      <Text style={styles.durationName}>{strings.hr}</Text>
                      <Picker
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        selectedValue={selectedHours}
                        dropdownIconColor={Colors.primaryColors.secondaryGrey}
                        onValueChange={itemValue =>
                          setSelectedHours(itemValue)
                        }>
                        {Array.from({length: 24}, (_, i) => (
                          <Picker.Item
                            label={i.toString()}
                            value={i}
                            key={`hour-${i}`}
                          />
                        ))}
                      </Picker>
                    </View>
                    <View style={styles.flexContainer}>
                      <Text style={styles.durationName}>{strings.min}</Text>
                      <Picker
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        selectedValue={selectedMinutes}
                        dropdownIconColor={Colors.primaryColors.secondaryGrey}
                        onValueChange={itemValue =>
                          setSelectedMinutes(itemValue)
                        }>
                        {Array.from({length: 60}, (_, i) => (
                          <Picker.Item
                            label={i.toString()}
                            value={i}
                            key={`hour-${i}`}
                          />
                        ))}
                      </Picker>
                    </View>
                    <View style={styles.flexContainer}>
                      <Text style={styles.durationName}>{strings.sec}</Text>
                      <Picker
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        selectedValue={selectedSeconds}
                        dropdownIconColor={Colors.primaryColors.secondaryGrey}
                        onValueChange={itemValue =>
                          setSelectedSeconds(itemValue)
                        }>
                        {Array.from({length: 60}, (_, i) => (
                          <Picker.Item
                            label={i.toString()}
                            value={i}
                            key={`seconds-${i}`}
                          />
                        ))}
                      </Picker>
                    </View>
                  </View>
                )}
              </>
            ) : (
              <Timer
                totalDuration={
                  parseInt(hours) * 3600 * 1000 +
                  parseInt(minutes) * 60 * 1000 +
                  parseInt(seconds) * 1000
                }
                start={isTimerStart}
                reset={isTimerReset}
                options={options}
                handleFinish={() => {
                  setIsTimerStart(false);
                }}
              />
            )}
          </View>

          <View style={styles.startStopContainer}>
            <TouchableHighlight onPress={resetTimer} style={styles.resetButton}>
              <Text style={styles.resetText}>{strings.reset}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={toggleTimer}
              disabled={initialTime === 0 ? true : false}
              style={styles.startStopButton}>
              <Text style={styles.startStopText}>
                {!isTimerStart ? strings.start : strings.stop}
              </Text>
            </TouchableHighlight>
          </View>
        </>
      )}
    </View>
  );
};

export default stopWatchTimer;
