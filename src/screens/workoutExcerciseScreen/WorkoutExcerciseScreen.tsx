import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import {WorkoutExcercisePropsTypes} from './types';
import {Colors} from '../../utils/colors';
import Modal from 'react-native-modal';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {iconMapping} from '../../assets/icons/iconMap';
import WorkoutExcerciseHeader from '../../components/workoutExcerciseHeader/workoutExcerciseHeader';
import {useRoute} from '@react-navigation/native';
import WorkoutExercises from '../../components/workoutExercises/workoutExercises';
import RBSheet from 'react-native-raw-bottom-sheet';
import strings from '../../utils/strings';
import ImagePicker from 'react-native-image-crop-picker';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import Button from '../../components/button/button';
import {Images} from '../../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {addVideoExercise} from '../../redux/toolkit/AddVideoExerciseSlicer';
import {createThumbnail} from 'react-native-create-thumbnail';
import VideoPlayer from 'react-native-video-player';
import {setAutoPlayVideo} from '../../redux/toolkit/TimerSlicer';

const WorkoutExcercise: FC<WorkoutExcercisePropsTypes> = ({navigation}) => {
  const dispatch: any = useDispatch();
  const exerciseVideoDetailData = useSelector(
    (state: any) => state?.addVideoExerciseSlicer,
  );
  const autoPlay: boolean = useSelector(
    (state: any) => state?.TimerSlicer?.autoPlayVideo,
  );

  const route: any = useRoute();
  const videoRef: any = useRef();
  const refRBSheet: any = useRef();
  const historyItem = route.params.item;
  const historyDate = route.params.date;
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnableVideos, setIsEnableVideos] = useState(autoPlay);
  const [isModalVisible, setModalVisible] = useState(false);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [reps, setReps] = useState(0);
  const [videoTitle, setVideoTitle] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');
  const [videoTime, setVideoTime] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [videoUrl, setvideoUrl] = useState('');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [addVideoError, setAddVideoError] = useState({
    error: false,
    msg: '',
  });
  const [videoTitleError, setVideoTitleError] = useState({
    error: false,
    msg: '',
  });
  const [repsError, setRepsError] = useState({
    error: false,
    msg: '',
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.resume();
    }
  }, [currentVideoIndex]);
  useEffect(() => {
    dispatch(setAutoPlayVideo(isEnableVideos));
  }, [isEnableVideos]);

  const videoPicker = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
    })
      .then(video => {
        if (video) {
          setvideoUrl(video.path);
          const durationInMilliseconds: any = video.duration;
          const seconds = Math.floor(durationInMilliseconds / 1000);
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = seconds % 60;
          const videoFormattedTime = `${String(minutes).padStart(
            2,
            '0',
          )}:${String(remainingSeconds).padStart(2, '0')}`;
          setVideoTime(videoFormattedTime);
          setSelectedVideo(video.filename || '');
          setAddVideoError({error: false, msg: ''});
          createThumbnail({
            url: video.path,
            timeStamp: 1000,
          })
            .then((response: any) => setThumbnail(response?.path))
            .catch((err: any) => console.log({err}));
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  const onPressVideo = (item: any, index: number) => {
    setVideoModalVisible(true);
    setCurrentVideoIndex(index);
    setvideoUrl(item?.videoUrl);
  };
  const playNextVideo = () => {
    if (currentVideoIndex < exerciseVideoDetailData.length - 1) {
      if (isEnableVideos) {
        setCurrentVideoIndex(currentVideoIndex + 1);
      } else {
        setCurrentVideoIndex(currentVideoIndex);
      }
    }
  };
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleVideoSwitch = () => {
    setIsEnableVideos(previousState => !previousState);
  };
  const addExercises = () => {
    if (!videoUrl) {
      setAddVideoError({error: true, msg: strings.pleaseselectvideo});
    } else if (!videoTitle) {
      setVideoTitleError({error: true, msg: strings.pleaseaddtitle});
    } else if (!reps) {
      setRepsError({error: true, msg: strings.pleaseaddreps});
    } else {
      const addVideoExcercise: any = {
        image: thumbnail,
        title: videoTitle,
        time: videoTime,
        multiplyNum: reps,
        videoUrl: videoUrl,
      };
      dispatch(addVideoExercise(addVideoExcercise));
      setModalVisible(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <WorkoutHeader
          onPressHistory={() => refRBSheet?.current?.open()}
          Icon={iconMapping['dotVertical']}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <WorkoutExcerciseHeader
            date={historyDate}
            onPressStart={() =>
              navigation.navigate(strings.exercisedetail_screen, {
                item: historyItem,
                workoutFlow: false,
              })
            }
            onPressCancel={() => navigation.goBack()}
            workoutName={historyItem?.workoutName}
          />
          <WorkoutExercises
            onPress={() => {
              setThumbnail(''),
                setSelectedVideo(''),
                setVideoTime(''),
                setvideoUrl(''),
                setVideoTitle(''),
                setReps(0),
                setModalVisible(true);
            }}
            onPressVideo={onPressVideo}
            exercisesData={exerciseVideoDetailData}
          />
          <RBSheet
            ref={refRBSheet}
            closeOnPressMask={true}
            closeOnPressBack={true}
            height={280}
            customStyles={{
              container: {
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              },
            }}>
            <View style={styles.sheetContainer}>
              <View style={styles.flexContainer}>
                <View>
                  <Text style={styles.sheetHeadingText}>
                    {strings.resttimer}
                  </Text>
                  <Text style={styles.sheetDesText}>
                    {isEnabled
                      ? strings.timeractivated
                      : strings.timerdeactivated}
                  </Text>
                </View>
                <Switch
                  trackColor={{
                    false: Colors.monochromeColors.grey5,
                    true: Colors.primaryColors.pink,
                  }}
                  thumbColor={Colors.primaryColors.white}
                  ios_backgroundColor={Colors.monochromeColors.grey5}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <View style={styles.divider} />
              <View style={styles.flexContainer}>
                <View>
                  <Text style={styles.sheetHeadingText}>
                    {strings.autoplayvideo}
                  </Text>
                  <Text style={styles.sheetDesText}>
                    {isEnableVideos ? strings.autoplayon : strings.autoplayoff}
                  </Text>
                </View>
                <Switch
                  trackColor={{
                    false: Colors.monochromeColors.grey5,
                    true: Colors.primaryColors.pink,
                  }}
                  thumbColor={Colors.primaryColors.white}
                  ios_backgroundColor={Colors.monochromeColors.grey5}
                  onValueChange={toggleVideoSwitch}
                  value={isEnableVideos}
                />
              </View>
              <View style={styles.divider} />
              <View style={styles.flexContainer}>
                <Text style={styles.sheetHeadingText}>
                  {strings.downloadworkout}
                </Text>
                <TouchableOpacity>
                  {iconMapping['downloadIcon']}
                </TouchableOpacity>
              </View>
              <View style={styles.divider} />
              <View style={styles.flexContainer}>
                <Text style={styles.sheetHeadingText}>
                  {strings.printworkout}
                </Text>
                <TouchableOpacity>{iconMapping['printIcon']}</TouchableOpacity>
              </View>
              <View style={styles.divider} />
            </View>
          </RBSheet>
          <Modal
            deviceHeight={windowHeight}
            deviceWidth={windowWidth}
            coverScreen={true}
            onBackdropPress={() => setModalVisible(false)}
            backdropOpacity={0.6}
            isVisible={isModalVisible}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                onPress={videoPicker}
                style={styles.videoModalTouchContainer}>
                <Image
                  style={styles.uploadImageStyle}
                  source={thumbnail ? {uri: thumbnail} : Images.videoUpload}
                />
              </TouchableOpacity>
              {selectedVideo && (
                <Text style={styles.addVideoNameText}>{selectedVideo}</Text>
              )}
              {addVideoError.error ? (
                <Text style={styles.videoError}>{addVideoError.msg}</Text>
              ) : null}
              <Text style={styles.addModalText}>{strings.videotitle}</Text>
              <TextInput
                placeholder={strings.squats}
                placeholderTextColor={Colors.primaryColors.secondaryGrey}
                style={styles.modalInput}
                onChangeText={(text: any) => {
                  setVideoTitle(text),
                    setVideoTitleError({error: false, msg: ''});
                }}
              />
              {videoTitleError.error ? (
                <Text style={styles.error}>{videoTitleError.msg}</Text>
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
              <Button
                onPress={addExercises}
                activeOpacity={strings.buttonOpacity}
                textStyle={styles.modalButtonText}
                buttonText={strings.add}
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
            onBackButtonPress={() => setVideoModalVisible(false)}
            style={styles.modal}
            isVisible={videoModalVisible}>
            <SafeAreaView style={styles.videoModal}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => setVideoModalVisible(false)}>
                {iconMapping['backArrow']}
                <Text style={styles.backText}>{strings.back}</Text>
              </TouchableOpacity>
              <View style={styles.videoView}>
                <VideoPlayer
                  ref={videoRef}
                  autoplay={true}
                  onEnd={playNextVideo}
                  pauseOnPress={true}
                  style={styles.video}
                  resizeMode="contain"
                  video={{
                    uri: exerciseVideoDetailData[currentVideoIndex]?.videoUrl,
                  }}
                />
              </View>
            </SafeAreaView>
          </Modal>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutExcercise;
