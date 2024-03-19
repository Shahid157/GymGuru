import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ButtonPropsTypes} from './types';
import {FC} from 'react';
import {Colors} from '../../utils/colors';

const Button: FC<ButtonPropsTypes> = ({
  onPress,
  style,
  buttonText,
  textStyle,
  activeOpacity,
  disabled,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      testID="button-container"
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[styles.container, style, {opacity: disabled ? 0.5 : null}]}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primaryColors.black} />
      ) : (
        <Text style={[styles.textStyle, textStyle]}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
