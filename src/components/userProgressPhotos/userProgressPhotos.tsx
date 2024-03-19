import {
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import Button from '../button/button';
import strings from '../../utils/strings';
import {UserProgressPhotosPropsTypes} from './types';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import SelectImageBottomSheetView from '../selectImageBottomSheetView/selectImageBottomSheetView';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {addPhoto} from '../../redux/toolkit/AddPhotosSlicer';
import {iconMapping} from '../../assets/icons/iconMap';

const UserProgressPhotos: FC<UserProgressPhotosPropsTypes> = ({onPress}) => {
  const refRBSheet = useRef<any>(null);
  const dispatch = useDispatch();
  const currentDate = moment().format('MM/DD');
  const [images, setImages] = useState<any>([]);
  const [singleImage, setSingleImage] = useState(false);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState({
    image: '',
    date: '',
  });
  useEffect(() => {
    getDataFromLocalStorage();
  }, []);
  const addDataInLocalStorage = async (images: any) => {
    try {
      await AsyncStorage.setItem(strings.images, JSON.stringify(images));
      dispatch(addPhoto(images?.length));
    } catch (error) {
      console.log('err', error);
    }
  };
  const getDataFromLocalStorage = async () => {
    try {
      const data: any = await AsyncStorage.getItem(strings.images);
      const getData = JSON.parse(data);
      if (getData?.length > 0) {
        setSelectedImage({image: getData[0]?.image, date: getData[0]?.date});
      }
      setImages(getData);
    } catch (error) {
      console.log('errr', error);
    }
  };
  const onPressImage = (item: any) => {
    setSelectedImage({image: item?.image, date: item?.date});
  };

  const requestCameraPermission = async () => {
    try {
      if (Platform.OS === strings.ios) {
        check(PERMISSIONS.IOS.CAMERA)
          .then(result => {
            switch (result) {
              case RESULTS.DENIED:
                console.log('The permission has not been requested ');
                break;
              case RESULTS.GRANTED:
                openCamera();
                console.log('The permission is granted');
                break;
            }
          })
          .catch(error => {
            console.log('error', error);
          });
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: strings.permissiontitle,
            message: strings.permissionmessage,
            buttonNegative: strings.cancel,
            buttonPositive: strings.ok,
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          openCamera();
        } else {
          console.log('Camera permission denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const openCamera = () => {
    let array: any = [...(images || [])];
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        array.unshift({image: image?.path, date: currentDate});
        setSelectedImage({image: image?.path, date: currentDate});
        addDataInLocalStorage(array);
        setImages(array);
        refRBSheet?.current?.close();
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  const openPicker = () => {
    let array: any = [...(images || [])];
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        array.unshift({image: image?.path, date: currentDate});
        setSelectedImage({image: image?.path, date: currentDate});
        addDataInLocalStorage(array);
        setImages(array);
        refRBSheet?.current?.close();
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  return (
    <View style={styles.container}>
      {images?.length > 0 && (
        <>
          <View style={styles.iconsContainer}>
            <TouchableOpacity
              onPress={() => setSingleImage(true)}
              activeOpacity={strings.buttonOpacity}>
              {iconMapping['singleImageIcon']}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSingleImage(false)}
              activeOpacity={strings.buttonOpacity}
              style={styles.icon}>
              {iconMapping['doubleImageIcon']}
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            {selectedImage.image !== '' ? (
              <>
                {singleImage ? (
                  <Image
                    style={[
                      styles.image,
                      {
                        resizeMode: 'cover',
                      },
                    ]}
                    source={{
                      uri: selectedImage.image,
                    }}
                  />
                ) : (
                  <View style={styles.doubleiImageContainer}>
                    <View>
                      <Image
                        style={[
                          styles.doubleiImage,
                          {
                            resizeMode: 'cover',
                          },
                        ]}
                        source={{
                          uri: selectedImage.image,
                        }}
                      />
                      <Text style={styles.dateOnLeftImage}>
                        {selectedImage.date}
                      </Text>
                    </View>
                    <View>
                      <Image
                        style={[
                          styles.doubleiImage,
                          {
                            resizeMode: 'cover',
                            marginLeft: 8,
                          },
                        ]}
                        source={{
                          uri:
                            imageIndex === images?.length - 1
                              ? images[0]?.image
                              : images[imageIndex + 1]?.image,
                        }}
                      />
                      <Text style={styles.dateOnRightImage}>
                        {imageIndex === images?.length - 1
                          ? images[0]?.date
                          : images[imageIndex + 1]?.date}
                      </Text>
                    </View>
                  </View>
                )}
              </>
            ) : null}
            {singleImage && (
              <View style={styles.dateContainer}>
                <Text style={styles.dateOnImage}>{selectedImage.date}</Text>
              </View>
            )}
          </View>
          <View style={styles.contentContainer}>
            <ScrollView
              horizontal
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}>
              {images?.map((item: any, index: number) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      onPressImage(item), setImageIndex(index);
                      if (index == images.length - 1) {
                        setNextIndex(0);
                      } else {
                        setNextIndex(index + 1);
                      }
                    }}>
                    {item?.image !== '' ? (
                      <Image
                        style={[
                          styles.smallImage,
                          {
                            borderWidth: singleImage
                              ? selectedImage.image === item.image
                                ? 2
                                : 0
                              : imageIndex == index || nextIndex == index
                              ? 2
                              : 0,
                          },
                        ]}
                        source={{
                          uri: item?.image,
                        }}
                      />
                    ) : null}
                    <Text style={styles.date}>{item.date}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </>
      )}
      <Button
        activeOpacity={strings.buttonOpacity}
        style={styles.button}
        textStyle={styles.buttonText}
        buttonText={strings.addphoto}
        onPress={() => refRBSheet?.current?.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        height={220}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <SelectImageBottomSheetView
          _takePhoto={() => requestCameraPermission()}
          _chooseFromGallery={() => openPicker()}
        />
      </RBSheet>
    </View>
  );
};

export default UserProgressPhotos;
