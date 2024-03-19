import {TextInput, View} from 'react-native';
import {styles} from './styles';
import {InputPropsTypes} from './types';
import {FC} from 'react';

const InputText: FC<InputPropsTypes> = ({
  style,
  multiline,
  autoFocus,
  hint,
  onChangeText,
  onEndEditing,
  onFocus,
  value,
  inputStyle,
  keyboardType,
  maxLength,
  placeholderTextColor,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        multiline={multiline}
        autoCorrect={false}
        autoFocus={autoFocus}
        placeholder={hint}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        value={value}
        style={inputStyle}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
};
export default InputText;
