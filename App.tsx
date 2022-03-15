import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {pages} from './src/routes';
import {AppPages} from './src/routes/appPath';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Header from './src/shared/components/Header';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Navigator
            screenOptions={{
              header: Header,
            }}
            initialRouteName={AppPages.SPLASH_SCREEN}>
            {pages.map(({name, component}, index) => (
              <Screen name={name} component={component} key={index} />
            ))}
          </Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
