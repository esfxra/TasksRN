import React from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import Row from './base/Row';
import Text from './base/Text';
import TaskCheckbox from './TaskCheckbox';
import {Task} from '../types';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({task}: TaskItemProps) {
  const navigation = useNavigation();
  const {dispatch} = useAppContext();
  const {theme} = useThemeContext();

  function toggleComplete() {
    dispatch({type: 'ToggleComplete', payload: {id: task.id}});
  }

  return (
    <View
      style={{
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.foreground,
        opacity: task.complete ? 0.5 : 1,
      }}>
      <Row>
        <TaskCheckbox complete={task.complete} onPress={toggleComplete} />
        <Pressable
          style={{
            flex: 1,
            paddingVertical: theme.spacing.s,
          }}
          onPress={() => navigation.navigate('EditTask', {taskId: task.id})}>
          <Text>{task.name}</Text>
        </Pressable>
      </Row>
    </View>
  );
}
