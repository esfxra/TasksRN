import React from 'react';
import {ScrollView, View} from 'react-native';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import ActionButton from '../components/ActionButton';
import Text from '../components/base/Text';
import TaskItem from '../components/TaskItem';
import {HomeProps} from '../types';

export default function Home({}: HomeProps) {
  const appContext = useAppContext();
  const {theme} = useThemeContext();

  return (
    <View
      style={{
        flex: 1,
        padding: theme.spacing.m,
        backgroundColor: theme.colors.background,
      }}>
      {/* <Text type="heading">Tasks</Text> */}
      {/* <Separator size="xs" /> */}
      <ScrollView>
        {appContext.tasks.length === 0 ? (
          <Text>No tasks have been added (yet).</Text>
        ) : (
          appContext.tasks.map(task => <TaskItem key={task.id} task={task} />)
        )}
      </ScrollView>
      <ActionButton />
    </View>
  );
}
