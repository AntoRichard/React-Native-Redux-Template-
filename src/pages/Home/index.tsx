import React from 'react';
import {FC} from 'react';
import {View, Text} from 'react-native';
import {HomeStyles} from './homeStyles';

interface HomeProps {}

const Home: FC<HomeProps> = props => {
  const {} = props;
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.text}>Home page</Text>
    </View>
  );
};

export default Home;
