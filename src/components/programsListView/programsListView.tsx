import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {ProgramListViewPropsTypes} from './types';
import strings from '../../utils/strings';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {Images} from '../../assets/images';
const ProgramListView: FC<ProgramListViewPropsTypes> = ({
  icon,
  title,
  description,
  detailText,
  onPressDetail,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>{icon}</View>
        <View style={styles.viewWrapper}>
          <View style={styles.textView}>
            <Text numberOfLines={2} style={styles.description}>
              {description}
            </Text>
            <Text style={styles.habitTitle}>{title}</Text>
            <TouchableOpacity
              activeOpacity={strings.buttonOpacity}
              onPress={onPressDetail}>
              <Text style={styles.detailText}>{detailText}</Text>
            </TouchableOpacity>
          </View>
          <Menu>
            <MenuTrigger text="..." />
            <MenuOptions
              customStyles={{
                optionsContainer: styles.optionsContainer,
              }}>
              <MenuOption onSelect={() => {}} style={styles.menuItem}>
                <Image
                  source={Images.duplicateIcon}
                  style={styles.iconStyle}></Image>
                <Text> {strings.duplicate}</Text>
              </MenuOption>
              <MenuOption onSelect={() => {}} style={styles.menuItem}>
                <Image
                  source={Images.archiveIcon}
                  style={styles.iconStyle}></Image>
                <Text> {strings.archive}</Text>
              </MenuOption>
              <MenuOption onSelect={() => {}} style={styles.menuItem}>
                <Image
                  source={Images.folderIcon}
                  style={styles.iconStyle}></Image>
                <Text> {strings.setFolder}</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
    </View>
  );
};

export default ProgramListView;
