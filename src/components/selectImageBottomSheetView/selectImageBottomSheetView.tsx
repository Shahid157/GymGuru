import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {Images} from '../../assets/images';
import {SelectImageBottomSheetViewPropsTypes} from './types';
import strings from '../../utils/strings';

const SelectImageBottomSheetView: FC<SelectImageBottomSheetViewPropsTypes> = ({
  _takePhoto,
  _chooseFromGallery,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={strings.buttonOpacity}
        onPress={_takePhoto}>
        <Image style={styles.image} source={Images.cameraIcon} />
        <Text style={styles.text}>{strings.takePhoto}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={strings.buttonOpacity}
        onPress={_chooseFromGallery}>
        <Image style={styles.image} source={Images.galleryIcon} />
        <Text style={styles.text}>{strings.chooseGallery}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectImageBottomSheetView;
