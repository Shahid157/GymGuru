import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import {ProfileScreenProps} from './types';
import Header from '../../components/header/header';
import {iconMapping} from '../../assets/icons/iconMap';
import strings from '../../utils/strings';
import {styles} from './styles';
import ProfileHeader from '../../components/userProfileHeader/userProfileHeader';
import UserWeightChart from '../../components/userWeightChart/userWeightChart';
import {
  chartData,
  sectionsData,
  videoUrl,
  profileCardData,
  metricsData,
} from '../../utils/dummyData';
import Accordion from 'react-native-collapsible/Accordion';
import UserProfileDetail from '../../components/userProfileDetail/userProfileDetail';
import {Colors} from '../../utils/colors';
import Modal from 'react-native-modal';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import VideoPlayer from 'react-native-video-player';
import {Images} from '../../assets/images';
import ClientProfileCard from '../../components/clientProfileCard/clientProfileCard';
import RBSheet from 'react-native-raw-bottom-sheet';
import CardMetrics from '../../components/metricsComponent/metricsComponent';

const ProfileScreen: FC<ProfileScreenProps> = ({navigation}) => {
  const refRBSheet: any = useRef();
  const [activeSections, setActiveSections] = useState([-1]);
  const [isModalVisible, setModalVisible] = useState(false);

  const updateSections = (activeSections: any) => {
    setActiveSections(activeSections);
  };

  const renderHeader = (section: any, index: number) => {
    const isActive = activeSections.includes(index);
    return (
      <>
        {section.activityName === strings.profileheader ? (
          <ProfileHeader
            imageUrl={Images.dummyImage}
            userName={strings.userName}
            userAddress={strings.city}
            userEmail={strings.email}
            userStatus={strings.active}
            dotIcon={iconMapping['dot']}
            userAge={strings.userAge}
            userWeight={strings.weightlbs}
            userHeight={strings.userHeight}
          />
        ) : (
          <UserProfileDetail
            day={section.day}
            onPressView={() => refRBSheet?.current?.open()}
            activityCount={section.activityCount}
            activityName={section.activityName}
            accordion={isActive ? true : false}
          />
        )}
      </>
    );
  };

  const renderContent = (section: any) => {
    return (
      <View style={styles.chartComponent}>
        <UserWeightChart chartData={chartData} weight={strings.weight} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryColors.lightGrey}
        barStyle={'dark-content'}
      />
      <View style={styles.contentContainer}>
        <Header
          backIcon={true}
          icon={iconMapping['bellIcon']}
          screenTitle={strings.profile}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Accordion
              sectionContainerStyle={styles.accordionContainer}
              sections={sectionsData}
              expandMultiple={true}
              disabled={true}
              underlayColor={Colors.primaryColors.transparent}
              activeSections={[1]}
              renderHeader={renderHeader}
              renderContent={renderContent}
              onChange={updateSections}
            />
          </View>
          <ClientProfileCard profileCardData={profileCardData} />
        </ScrollView>
      </View>
      <View>
        <Modal
          deviceHeight={windowHeight}
          deviceWidth={windowWidth}
          coverScreen={true}
          style={styles.modal}
          isVisible={isModalVisible}>
          <SafeAreaView style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setModalVisible(false)}>
              {iconMapping['backArrow']}
              <Text style={styles.backText}>{strings.back}</Text>
            </TouchableOpacity>
            <View style={styles.videoView}>
              <VideoPlayer
                autoplay={true}
                style={styles.video}
                resizeMode="contain"
                video={{uri: videoUrl}}
              />
            </View>
          </SafeAreaView>
        </Modal>
        <RBSheet
          ref={refRBSheet}
          closeOnPressMask={true}
          closeOnDragDown={true}
          closeOnPressBack={true}
          height={420}
          customStyles={{
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          }}>
          <View style={styles.metricsContainer}>
            <Text style={styles.metricsText}>{strings.metrics}</Text>
            <CardMetrics
              onPressTab={() => refRBSheet?.current?.close()}
              metricsData={metricsData}
            />
          </View>
        </RBSheet>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
