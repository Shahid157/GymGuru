import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {SocialButtonsPropsTypes} from './types';
import {styles} from './styles';

const SocialButtons: FC<SocialButtonsPropsTypes> = ({onPress, logo, text}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={
            text == `Sign in with Apple`
              ? styles.containerApple
              : styles.container
          }>
          <Image style={styles.imgContainer} source={logo} />
          <Text
            style={
              text == `Sign in with Apple`
                ? styles.textStyleforApple
                : styles.textStyle
            }>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SocialButtons;
