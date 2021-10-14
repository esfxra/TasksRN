import React from 'react';
import {Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useThemeContext} from '../Theme.provider';

export default function ActionButton() {
  const themeContext = useThemeContext();
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
        backgroundColor: themeContext.theme.colors.foreground,
      }}
      onPress={navigateToAddTask}>
      <Text style={{color: themeContext.theme.colors.background}}>
        add task
      </Text>
    </Pressable>
  );
}
