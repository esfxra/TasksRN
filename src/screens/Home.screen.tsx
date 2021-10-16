import React from 'react';
import {ScrollView, View} from 'react-native';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import ActionButton from '../components/ActionButton';
import Button from '../components/base/Button';
import Text from '../components/base/Text';
import Separator from '../components/base/Separator';
import TaskItem from '../components/TaskItem';
import {HomeProps} from '../types';

export default function Home({}: HomeProps) {
  const appContext = useAppContext();
  const themeContext = useThemeContext();

  return (
    <View
      style={{flex: 1, backgroundColor: themeContext.theme.colors.background}}>
      <Button onPress={() => themeContext.toggleTheme()}>Switch theme</Button>

      <Separator />

      <Text type="heading">Tasks</Text>

      <Separator size="xs" />

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
