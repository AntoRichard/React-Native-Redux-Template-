import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {HeaderStyle} from './header.style';
import {AppPages} from '../../../routes/appPath';
import Icon from 'react-native-vector-icons/AntDesign';

interface HeaderProps extends NativeStackHeaderProps {}

const noHeaders = [AppPages.SPLASH_SCREEN];

const Header: FC<HeaderProps> = props => {
  const {route, back, navigation} = props;

  if (noHeaders?.includes(route?.name)) {
    return null;
  }

  const hasBackBtn = back && back?.title !== AppPages.SPLASH_SCREEN;

  const handleGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={HeaderStyle.container}>
      {hasBackBtn ? (
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="left" size={20} />
        </TouchableOpacity>
      ) : null}
      <Text style={HeaderStyle.name}>{route?.name}</Text>
    </View>
  );
};

export default Header;
