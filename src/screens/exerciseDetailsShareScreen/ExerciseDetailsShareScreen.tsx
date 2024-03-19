import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import React, {FC} from 'react';
import {ExerciseDetailsSharePropsTypes} from './types';
import {Colors} from '../../utils/colors';
import WorkoutHeader from '../../components/workoutHeader/workoutHeader';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {shareScreenImages} from '../../utils/dummyData';

const ExerciseDetailsShareScreen: FC<ExerciseDetailsSharePropsTypes> = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: strings.shareMessage,
      });
      if (result.action === Share.sharedAction) {
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <StatusBar
          backgroundColor={Colors.primaryColors.lightGrey}
          barStyle={'dark-content'}
        />
        <WorkoutHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headingView}>
            <Text style={styles.heading}>{strings.goodJob}</Text>
            {iconMapping['smallCelebrateIcon']}
          </View>
          <Text style={styles.description}>{strings.secondWorkout}</Text>
          <View>
            <SwiperFlatList
              showPagination
              paginationActiveColor={Colors.primaryColors.black}
              paginationDefaultColor={Colors.primaryColors.grey300}
              paginationStyleItem={styles.paginationItem}
              data={shareScreenImages}
              renderItem={({item, index}) => (
                <View key={index} style={styles.ImageView}>
                  <Image source={item} style={styles.image} />
                </View>
              )}
            />
          </View>
          <Text style={styles.shareWorkoutText}>{strings.shareWorkout}</Text>
          <View style={styles.icons}>
            <TouchableOpacity activeOpacity={strings.buttonOpacity}>
              {iconMapping['instaIcon']}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={strings.buttonOpacity}>
              {iconMapping['fbIcon']}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={strings.buttonOpacity}>
              {iconMapping['twitterIcon']}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={strings.buttonOpacity}>
              {iconMapping['copyIcon']}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onShare}
              activeOpacity={strings.buttonOpacity}>
              {iconMapping['verticalIcon']}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExerciseDetailsShareScreen;
