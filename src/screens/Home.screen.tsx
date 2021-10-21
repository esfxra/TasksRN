import React from 'react';
import {View} from 'react-native';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import ActionButton from '../components/ActionButton';
import {HomeProps} from '../types';
import TaskList from '../components/TaskList';

export default function Home({}: HomeProps) {
  const {tasks} = useAppContext();
  const {theme} = useThemeContext();

  return (
    <View
      style={{
        flex: 1,
        padding: theme.spacing.m,
        backgroundColor: theme.colors.background,
      }}>
      <TaskList tasks={tasks} />
      <ActionButton />
    </View>
  );
}
