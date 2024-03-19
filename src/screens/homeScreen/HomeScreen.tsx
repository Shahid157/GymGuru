import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import Header from '../../components/header/header';
import {iconMapping} from '../../assets/icons/iconMap';
import {styles} from './styles';
import strings from '../../utils/strings';
import CalenderStrip from '../../components/calenderStripComponent/calenderStripComponent';
import UserWorkout from '../../components/userWorkout/userWorkout';
import UserProgressTracker from '../../components/userProgressTracker/userProgressTracker';
import UserHabits from '../../components/userHabits/userHabits';
import {
  userHabitsData,
  userLessonData,
  userProgressTrackData,
  videoUrl,
  workoutData,
} from '../../utils/dummyData';
import Modal from 'react-native-modal';
import VideoPlayer from 'react-native-video-player';
import UserLesson from '../../components/userLesson/userLesson';
import {HomeScreenPropsTypes} from './types';
import {Colors} from '../../utils/colors';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import auth from '@react-native-firebase/auth';

const HomeScreen: FC<HomeScreenPropsTypes> = ({navigation}) => {
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const user = auth().currentUser;

  const renderItemProgressTrack = (item: any) => {
    return (
      <UserProgressTracker
        trackerTitle={item.trackerTitle}
        quantity={item.quantity}
        totalQuantity={item.totalQuantity}
        icon={item.icon}
        progress={item.progress}
      />
    );
  };
  const renderItemHabits = (item: any) => {
    return (
      <UserHabits
        icon={item.icon}
        title={item.habitTitle}
        description={item.description}
        detailText={item.detailText}
      />
    );
  };
  const renderItemLesson = (item: any) => {
    return (
      <UserLesson
        icon={item.image}
        lessonTitle={item.title}
        description={item.description}
        onPressVideo={() => setVideoModalVisible(true)}
        detailText={item.detailText}
        onPress={() =>
          item.detailText === strings.playVideo && setVideoModalVisible(true)
        }
      />
    );
  };
  const truncateString = (str, maxLength) => {
    if (!str) return '';

    if (str.length <= maxLength) return str;

    return str.substr(0, maxLength - 3) + '...';
  };
  const truncatedDisplayName = truncateString(user?.displayName, 15);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <Header
        paddingHorizontal={15}
        screenTitle={strings.titleHomeScreen + truncatedDisplayName}
        icon={iconMapping['bellIcon']}
        description={true}
        descriptionText={strings.descriptionHomeScreen}
      />
      <ScrollView
        style={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <CalenderStrip />
          <UserWorkout
            workoutData={workoutData}
            onPress={() => navigation.navigate(strings.exercisedetail_screen)}
          />
          <Text style={styles.progressText}>{strings.todayProgress}</Text>
          <FlatList
            scrollEnabled={false}
            data={userProgressTrackData}
            renderItem={item => renderItemProgressTrack(item.item)}
          />
          <Text style={styles.progressText}>{strings.habits}</Text>
          <FlatList
            scrollEnabled={false}
            data={userHabitsData}
            renderItem={item => renderItemHabits(item.item)}
          />
          <Text style={styles.progressText}>{strings.lesson}</Text>
          <FlatList
            scrollEnabled={false}
            data={userLessonData}
            renderItem={item => renderItemLesson(item.item)}
          />
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
                  autoplay
                  pauseOnPress={true}
                  style={styles.video}
                  resizeMode="contain"
                  video={{
                    uri: videoUrl,
                  }}
                />
              </View>
            </SafeAreaView>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
