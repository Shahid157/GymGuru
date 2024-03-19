import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {ExerciseDetailsScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {styles} from './styles';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import {useRoute} from '@react-navigation/native';
import Button from '../../components/button/button';
import strings from '../../utils/strings';
import Modal from 'react-native-modal';
import ExerciseDetails from '../../components/exerciseDetailsComponent/exerciseDetailsComponent';
import {excerciseVideoData, workoutData} from '../../utils/dummyData';
import RBSheet from 'react-native-raw-bottom-sheet';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import {Images} from '../../assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import StopWatchTimer from '../../components/stopWatchTimer/stopWatchTimer';
import ExerciseWorkoutSurvey from '../../components/exerciseWorkoutSurvey/exerciseWorkoutSurvey';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addComments} from '../../redux/toolkit/CommentsSlicer';
import {
  addExercise,
  checkExercise,
  removeLastExercise,
  uncheckExercise,
} from '../../redux/toolkit/AddExerciseSlicer';
import {useKeyboardVisible} from '../../utils/customHooks/keyboardShow';

const ExerciseDetailsScreen: FC<ExerciseDetailsScreenPropsTypes> = ({
  navigation,
}) => {
  const dispatch: any = useDispatch();
  const route: any = useRoute();
  const refRBSheet: any = useRef();
  const refChatSheet: any = useRef();
  const refTimerSheet: any = useRef();
  const refWorkoutSurvey: any = useRef();
  const flatListRef: any = useRef();
  const historyItem = route?.params?.item;
  const workoutFlow = route?.params?.workoutFlow;
  let commentsData = useSelector((state: any) => state?.CommentsSlicer);
  const exerciseDetailData = useSelector(
    (state: any) => state?.AddExerciseSlicer.exercises,
  );
  const [isModalVisible, setModalVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [addSetModalVisible, setAddSetModalVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState(true);
  const [set, setSet] = useState(0);
  const [reps, setReps] = useState(0);
  const [pausedVideo, setPausedVideo] = useState(false);
  const [invertedData, setInvertedData] = useState(false);
  const [messagesData, setMessagesData] = useState([]);
  const [weightlb, setWeightlb] = useState(0);
  const [messages, setMessages] = useState<string>();
  const showKeyboard = useKeyboardVisible();
  const [addSetError, setAddSetError] = useState({
    error: false,
    msg: '',
  });
  const [addWeightError, setAddWeightError] = useState({
    error: false,
    msg: '',
  });
  const [repsError, setRepsError] = useState({
    error: false,
    msg: '',
  });

  useEffect(() => {
    if (showKeyboard)
      flatListRef?.current?.scrollToOffset({animated: true, offset: 0});
  }, [showKeyboard]);

  useEffect(() => {
    if (commentsData.length < 5) {
      const reverseData: any = [...commentsData].reverse();
      setMessagesData(reverseData);
      setInvertedData(false);
    } else {
      setInvertedData(true);
      setMessagesData(commentsData);
    }
  }, [commentsData]);

  const sendMessage = () => {
    const data: any = {message: messages, image: strings.empty};
    dispatch(addComments(data));
    setMessages('');
  };
  const stopWatchButtonHandler = () => {
    setButtonColor(true);
  };
  const timerButtonHandler = () => {
    setButtonColor(false);
  };
  const addExerciseSet = () => {
    if (!set) {
      setAddSetError({error: true, msg: strings.pleaseaddset});
    } else if (!reps) {
      setRepsError({error: true, msg: strings.pleaseaddreps});
    } else if (!weightlb) {
      setAddWeightError({error: true, msg: strings.pleaseaddweight});
    } else {
      setAddSetModalVisible(false);
      const addSet: any = {
        set: set,
        reps: reps,
        weightlb: weightlb,
        active: true,
      };
      dispatch(addExercise(addSet));
    }
  };

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image: any) => {
        const data: any = {message: strings.empty, image: image?.path};
        dispatch(addComments(data));
      })
      .catch(error => {});
  };
  const toggleSetActive = (index: number) => {
    if (exerciseDetailData[index].active) {
      dispatch(uncheckExercise(index));
    } else {
      dispatch(checkExercise(index));
    }
  };
  const onChangeIndexHandler = (index: any) => {
    if (index.index) {
      setPausedVideo(true);
    } else if (index.prevIndex) {
      setPausedVideo(false);
    }
  };

  const renderComments = (item: any, index: number) => {
    return (
      <View key={index}>
        {item?.message !== strings.empty && (
          <View style={styles.messagesView}>
            <Text style={styles.message}>{item?.message}</Text>
          </View>
        )}

        {item?.image !== strings.empty && (
          <Image style={styles.commentsImage} source={{uri: item.image}} />
        )}
        {invertedData
          ? index == commentsData?.length - 1 && (
              <Text style={styles.delivered}>{strings.delivered}</Text>
            )
          : index == 0 && (
              <Text style={styles.delivered}>{strings.delivered}</Text>
            )}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <WorkoutHeader
              textWithBackButton={
                historyItem?.workoutName || workoutData[0].workoutName
              }
              Icon={iconMapping['alarmIcon']}
              onPressHistory={() => refTimerSheet?.current?.open()}
            />
          </View>
          <Button
            activeOpacity={strings.buttonOpacity}
            onPress={() => {
              workoutFlow ? setSaveModalVisible(true) : setModalVisible(true);
            }}
            style={styles.button}
            buttonText={strings.finish}
            textStyle={styles.buttonText}
          />
        </View>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          extraHeight={130}
          extraScrollHeight={130}
          showsVerticalScrollIndicator={false}
          style={styles.videoContainer}>
          <View style={styles.durationView}>
            <Text style={styles.durationText}>{strings.duration}</Text>
            <Text style={styles.time}>{strings.time530}</Text>
          </View>
          <View style={styles.swiperView}>
            <SwiperFlatList
              showPagination
              paginationActiveColor={Colors.primaryColors.black}
              paginationDefaultColor={Colors.primaryColors.grey300}
              paginationStyle={styles.pagination}
              paginationStyleItem={styles.paginationItem}
              data={excerciseVideoData}
              onChangeIndex={(index: object) => onChangeIndexHandler(index)}
              renderItem={({item, index}) => (
                <View key={index} style={styles.videoView}>
                  <ExerciseDetails
                    onPressChat={() => refChatSheet?.current?.open()}
                    paused={pausedVideo}
                    onStart={() => setPausedVideo(false)}
                    videoUrl={item?.video}
                    onPressHistory={() =>
                      navigation.navigate(strings.dumbbellRearDeltScreen)
                    }
                    title={
                      historyItem?.workoutName || workoutData[0].workoutName
                    }
                  />
                </View>
              )}
            />
          </View>
          <View style={styles.propsContainer}>
            <View style={styles.propsHeader}>
              <Text style={styles.propHeading}>{strings.set}</Text>
              <Text style={styles.propHeading}>{strings.reps}</Text>
              <Text style={styles.propHeading}>{strings.weightlb}</Text>
              <View>{iconMapping['checkmark']}</View>
            </View>
            {exerciseDetailData &&
              exerciseDetailData?.map((item: any, index: number) => {
                return (
                  <View key={index} style={styles.propsInnerView}>
                    <Text style={styles.id}>{item.set}</Text>
                    <Text style={styles.reps}>{item?.reps}</Text>
                    <View style={styles.propsTextContainer}>
                      <Text style={styles.reps}>{item.weightlb}</Text>
                      <View style={styles.dotsHorizontal}>
                        {iconMapping['dotshorizontal']}
                      </View>
                      <TouchableOpacity onPress={() => toggleSetActive(index)}>
                        {item?.active ? (
                          <Text>{iconMapping['checkmark']}</Text>
                        ) : (
                          <View style={styles.circle} />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}

            <Text
              onPress={() => {
                refRBSheet?.current?.open(), setSet(0);
                setWeightlb(0);
                setReps(0);
              }}
              style={styles.addSetText}>
              {strings.addSet}
            </Text>
          </View>
          <RBSheet
            ref={refRBSheet}
            closeOnPressMask={true}
            height={200}
            customStyles={{
              container: {
                backgroundColor: Colors.primaryColors.transparent,
              },
            }}>
            <View style={styles.sheetContainer}>
              <View style={styles.sheetContentContainer}>
                <TouchableOpacity
                  onPress={() => {
                    refRBSheet?.current?.close(),
                      setTimeout(() => {
                        setAddSetModalVisible(true);
                      }, 400);
                  }}
                  activeOpacity={strings.buttonOpacity}>
                  <Text style={styles.bottomSheetText}>{strings.addset}</Text>
                </TouchableOpacity>
                <View style={styles.divider} />
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeLastExercise());
                    refRBSheet?.current?.close();
                  }}
                  activeOpacity={strings.buttonOpacity}>
                  <Text style={styles.bottomSheetText}>
                    {strings.deletelast}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                activeOpacity={strings.buttonOpacity}
                onPress={() => {
                  refRBSheet?.current?.close();
                }}
                style={styles.cancelButton}>
                <Text style={styles.cancelText}>{strings.cancel}</Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
          <RBSheet
            ref={refTimerSheet}
            closeOnPressMask={true}
            height={450}
            customStyles={{
              container: {
                backgroundColor: Colors.primaryColors.white,
                borderRadius: 12,
              },
            }}>
            <View style={styles.sheetContainer}>
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
                  <Text style={styles.stopWatchText}>{strings.stopWatch}</Text>
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
                  <Text style={styles.stopWatchText}>{strings.timer}</Text>
                </TouchableOpacity>
              </View>
              {buttonColor ? (
                <StopWatchTimer showStopWatch={true} />
              ) : (
                <StopWatchTimer />
              )}
            </View>
          </RBSheet>
          <RBSheet
            ref={refChatSheet}
            closeOnPressMask={true}
            height={windowHeight / 1.1}
            customStyles={{
              container: {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
            }}>
            <View style={styles.messagesContainer}>
              <View style={styles.topBar}>
                <TouchableOpacity
                  onPress={() => refChatSheet?.current?.close()}>
                  {iconMapping['backArrowBlack']}
                </TouchableOpacity>
                <Text style={styles.comments}>{strings.comments}</Text>
                <View style={styles.extra} />
              </View>
              {commentsData?.length ? (
                <View style={styles.messagesArray}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.flatList}
                    ref={flatListRef}
                    nestedScrollEnabled
                    inverted={invertedData}
                    contentContainerStyle={styles.flatListContent}
                    data={messagesData}
                    renderItem={item => renderComments(item?.item, item?.index)}
                  />
                </View>
              ) : (
                <View style={styles.messageImage}>
                  {iconMapping['messagesImage']}
                </View>
              )}
              <View
                style={[
                  styles.bottomTab,
                  {
                    marginBottom: showKeyboard
                      ? Platform.OS === 'ios'
                        ? windowHeight / 3.2
                        : 0
                      : 0,
                  },
                ]}>
                <KeyboardAwareScrollView
                  scrollEnabled={false}
                  enableOnAndroid={true}
                  contentContainerStyle={{flexGrow: 1}}>
                  <View style={styles.bottomContainer}>
                    <Image style={styles.image} source={Images.dummyImage} />
                    <View style={styles.inputView}>
                      <TextInput
                        style={styles.input}
                        value={messages}
                        onChangeText={text => setMessages(text)}
                        placeholderTextColor={
                          Colors.primaryColors.secondaryGrey
                        }
                        placeholder={strings.commentsdot}
                      />
                      <View style={styles.smiley} />
                      <TouchableOpacity
                        onPress={() => openPicker()}
                        activeOpacity={strings.buttonOpacity}>
                        {iconMapping['camera']}
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={sendMessage}
                      activeOpacity={strings.buttonOpacity}
                      style={styles.sendButton}>
                      <View>{iconMapping['sendmark']}</View>
                    </TouchableOpacity>
                  </View>
                </KeyboardAwareScrollView>
              </View>
            </View>
          </RBSheet>
          <View>
            <Modal
              deviceHeight={windowHeight}
              deviceWidth={windowWidth}
              coverScreen={true}
              onBackdropPress={() => setModalVisible(false)}
              backdropOpacity={0.6}
              isVisible={isModalVisible}>
              <View style={[styles.modalContainer, {alignItems: 'center'}]}>
                <View>{iconMapping['celebrateIcon']}</View>
                <Text style={styles.completedText}>
                  {strings.finishWorkout}
                </Text>
                <Text style={styles.description}>{strings.allexercises}</Text>
                <Button
                  onPress={() => {
                    setModalVisible(false);
                    setTimeout(() => {
                      refWorkoutSurvey?.current?.open();
                    }, 400);
                  }}
                  activeOpacity={strings.buttonOpacity}
                  textStyle={styles.modalButtonText}
                  buttonText={strings.finish}
                  style={styles.modalButton}
                />
                <Text
                  onPress={() => setModalVisible(false)}
                  style={styles.cancel}>
                  {strings.cancel}
                </Text>
              </View>
            </Modal>
            <Modal
              deviceHeight={windowHeight}
              deviceWidth={windowWidth}
              coverScreen={true}
              onBackdropPress={() => setSaveModalVisible(false)}
              backdropOpacity={0.6}
              isVisible={saveModalVisible}>
              <View style={[styles.modalContainer, {alignItems: 'center'}]}>
                <View>{iconMapping['handShake']}</View>
                <Text style={styles.completedText}>{strings.savechanges}</Text>
                <Text style={styles.description}>{strings.changesnotsave}</Text>
                <Button
                  onPress={() => {
                    setSaveModalVisible(false);
                  }}
                  activeOpacity={strings.buttonOpacity}
                  textStyle={styles.modalButtonText}
                  buttonText={strings.saveworkout}
                  style={styles.modalButton}
                />
                <Text
                  onPress={() => setSaveModalVisible(false)}
                  style={styles.cancel}>
                  {strings.exitwithout}
                </Text>
              </View>
            </Modal>
            <Modal
              deviceHeight={windowHeight}
              deviceWidth={windowWidth}
              coverScreen={true}
              onBackdropPress={() => setAddSetModalVisible(false)}
              backdropOpacity={0.6}
              isVisible={addSetModalVisible}>
              <View style={styles.modalContainer}>
                <Text style={styles.addModalText}>{strings.set}</Text>
                <TextInput
                  placeholder={strings.zero}
                  placeholderTextColor={Colors.primaryColors.secondaryGrey}
                  style={styles.modalInput}
                  keyboardType="number-pad"
                  onChangeText={(text: any) => {
                    setSet(text), setAddSetError({error: false, msg: ''});
                  }}
                />
                {addSetError.error ? (
                  <Text style={styles.error}>{addSetError.msg}</Text>
                ) : null}
                <Text style={styles.addModalText}>{strings.reps}</Text>
                <TextInput
                  placeholder={strings.zero}
                  placeholderTextColor={Colors.primaryColors.secondaryGrey}
                  style={styles.modalInput}
                  keyboardType="number-pad"
                  onChangeText={(text: any) => {
                    setReps(text), setRepsError({error: false, msg: ''});
                  }}
                />
                {repsError.error ? (
                  <Text style={styles.error}>{repsError.msg}</Text>
                ) : null}
                <Text style={styles.addModalText}>{strings.weightlb}</Text>
                <TextInput
                  placeholder={strings.zero}
                  placeholderTextColor={Colors.primaryColors.secondaryGrey}
                  style={styles.modalInput}
                  keyboardType="number-pad"
                  onChangeText={(text: any) => {
                    setWeightlb(text),
                      setAddWeightError({error: false, msg: ''});
                  }}
                />
                {addWeightError.error ? (
                  <Text style={styles.error}>{addWeightError.msg}</Text>
                ) : null}
                <Button
                  onPress={addExerciseSet}
                  activeOpacity={strings.buttonOpacity}
                  textStyle={styles.modalButtonText}
                  buttonText={strings.add}
                  style={styles.modalButton}
                />
                <Text
                  onPress={() => setAddSetModalVisible(false)}
                  style={styles.cancel}>
                  {strings.cancel}
                </Text>
              </View>
            </Modal>
          </View>
          <RBSheet
            ref={refWorkoutSurvey}
            closeOnPressMask={true}
            height={windowHeight / 1.1}
            customStyles={{
              container: {
                backgroundColor: Colors.primaryColors.white,
                borderRadius: 12,
              },
            }}>
            <ExerciseWorkoutSurvey
              onPress={() => {
                refWorkoutSurvey?.current?.close();
                setTimeout(() => {
                  navigation.navigate(strings.exerciseDetailsCongratulations);
                }, 200);
              }}
            />
          </RBSheet>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExerciseDetailsScreen;
