import {Image, Text, View} from 'react-native';
import React, {FC} from 'react';
import {UserProfileHeaderProps} from './types';
import {styles} from './styles';
import strings from '../../utils/strings';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';

const ProfileHeader: FC<UserProfileHeaderProps> = ({
  imageUrl,
  dotIcon,
  userName,
  userAddress,
  userEmail,
  userStatus,
  userAge,
  userWeight,
  userHeight,
}) => {
  const user = auth().currentUser;
  const selectedHours = useSelector((state: any) =>
    console.log(state?.AuthSlicer),
  );
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageandDetailContainer}>
          <Image style={styles.imageContainer} source={imageUrl} />
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.nameText}>
              {/* {userName} */}
              {user?.displayName}
            </Text>
            <Text numberOfLines={1} style={styles.cityText}>
              {userAddress}
            </Text>
            <Text numberOfLines={1} style={styles.emailText}>
              {/* {userEmail} */}
              {user?.email}
            </Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <View>{dotIcon}</View>
          <Text style={styles.statusText}>{userStatus}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.userInfoView}>
        <View style={styles.directionView}>
          <Text style={styles.userInfo}>{userAge}</Text>
          <Text style={styles.userDetailText}>{strings.age}</Text>
        </View>
        <View style={styles.directionView}>
          <Text style={styles.userInfo}>{userWeight}</Text>
          <Text style={styles.userDetailText}>{strings.weight}</Text>
        </View>
        <View style={styles.directionView}>
          <Text style={styles.userInfo}>{userHeight}</Text>
          <Text style={styles.userDetailText}>{strings.height}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
