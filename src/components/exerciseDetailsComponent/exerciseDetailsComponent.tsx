import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useRef} from 'react';
import {ExerciseDetailsPropsTypes} from './types';
import {styles} from './styles';
import {iconMapping} from '../../assets/icons/iconMap';
import VideoPlayer from 'react-native-video-player';
import {getThumbnail} from '../../utils/dimensions';
import strings from '../../utils/strings';

const ExerciseDetails: FC<ExerciseDetailsPropsTypes> = ({
  title,
  videoUrl,
  onPressChat,
  ref,
  paused,
  onStart,
  onPressHistory,
}) => {
  const videoRef: any = useRef();

  useEffect(() => {
    if (videoRef.current) {
      if (paused) {
        videoRef.current.pause();
      } else {
        videoRef.current.resume();
      }
    }
  }, [paused]);
  return (
    <View style={styles.container}>
      <VideoPlayer
        ref={videoRef}
        onStart={onStart}
        resizeMode="contain"
        pauseOnPress={paused}
        thumbnail={getThumbnail(videoUrl)}
        video={{uri: videoUrl}}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={onPressHistory}>
            {iconMapping['historyIconSecondary']}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={strings.buttonOpacity}
            onPress={onPressChat}
            style={styles.messageIcon}>
            {iconMapping['messageIcon']}
          </TouchableOpacity>
          <TouchableOpacity>
            {iconMapping['dotshorizontalSecondary']}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ExerciseDetails;
