import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Button from './base/Button';

export default function ActionButton() {
  const navigation = useNavigation();

  function navigateToAddTask() {
    navigation.navigate('AddTask');
  }

  return (
    <View style={{position: 'absolute', bottom: 40, right: 40}}>
      <Button onPress={navigateToAddTask}>add task</Button>
    </View>
  );
}
