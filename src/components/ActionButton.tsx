import React from 'react';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useThemeContext} from '../Theme.provider';
import Icon from './base/Icon';

export default function ActionButton() {
  const navigation = useNavigation();
  const {theme} = useThemeContext();

  function navigateToAddTask() {
    navigation.navigate('AddTask');
  }

  return (
    <Pressable
      onPress={navigateToAddTask}
      style={{
        position: 'absolute',
        bottom: theme.spacing.m * 3,
        right: theme.spacing.m,
        padding: theme.spacing.m,
        borderRadius: 999,
        backgroundColor: theme.colors.foreground,
      }}>
      <Icon name="Add" size="xl" color="background" />
    </Pressable>
  );
}
