import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('screen').width;
export const windowHeight = Dimensions.get('screen').height;

export function getThumbnail(url: any) {
  try {
    const baseUrl = url.split('?')[0];
    const currentExtension = baseUrl.split('.').pop();
    let newUrl = baseUrl.replace(`.${currentExtension}`, `.jpg`);
    if (!newUrl.includes('https://')) {
      newUrl = newUrl.replace('http://', 'https://');
    }
    return {uri: newUrl};
  } catch (error) {
    return {uri: ''};
  }
}
