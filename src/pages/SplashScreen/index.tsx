import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {AppPages} from '../../routes/appPath';
import AuthService from '../../services/AuthService/auth.service';
import {SplashScreenStyles} from './splash.style';

const SplashScreen = () => {
  const {validateToken} = AuthService();

  const navigation = useNavigation();

  useEffect(() => {
    validateToken().then(isValid => {
        setTimeout(() => {
          if (isValid) {
            navigation.navigate(AppPages.HOME as never);
          } else {
            navigation.navigate(AppPages.LOGIN as never);
          }
        }, 2000);
    });
  }, []);
  return (
    <View style={SplashScreenStyles.container}>
      <Text style={SplashScreenStyles.text}>React Native Template</Text>
    </View>
  );
};

export default SplashScreen;
