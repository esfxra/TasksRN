import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useThemeContext} from '../Theme.provider';
import Button from './base/Button';
import {AddTaskIcon} from './Icons';

export default function ActionButton() {
  const navigation = useNavigation();
  const {theme} = useThemeContext();

  function navigateToAddTask() {
    navigation.navigate('AddTask');
  }

  return (
    <View
      style={{
        position: 'absolute',
        bottom: theme.spacing.m * 3,
        right: theme.spacing.m,
      }}>
      <Button
        label="Add task"
        icon={<AddTaskIcon color={theme.colors.background} size={16} />}
        onPress={navigateToAddTask}
      />
    </View>
  );
}
