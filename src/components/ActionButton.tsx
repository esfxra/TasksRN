import React from 'react';
import {Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function ActionButton() {
  const navigation = useNavigation();

  function navigateToAddTask() {
    navigation.navigate('AddTask');
  }

  return (
    <Pressable
      style={{
        position: 'absolute',
        bottom: 40,
        right: 40,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'black',
      }}
      onPress={navigateToAddTask}>
      <Text style={{color: 'white'}}>add task</Text>
    </Pressable>
  );
}
