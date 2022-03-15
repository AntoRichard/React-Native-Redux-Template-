import {StyleSheet} from 'react-native';
import { COLOR } from '../../styles/theme.color';

export const HeaderStyle = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "black"
  },
  name: {
      color: COLOR.white,
      paddingVertical: 8,
      paddingHorizontal: 12
  },
});
