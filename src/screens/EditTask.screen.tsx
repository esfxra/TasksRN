import React, {useState} from 'react';
import {Pressable, TextInput, Text, View} from 'react-native';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import {EditTaskProps} from '../types';

export default function EditTask({navigation, route}: EditTaskProps) {
  const appContext = useAppContext();
  const themeContext = useThemeContext();

  const {taskId} = route.params;
  const task = appContext.tasks.find(task => task.id === taskId);

  const [value, setValue] = useState(task?.name);

  function handleTextChange(text: string) {
    setValue(text);
  }

  function handleEditName() {
    appContext.dispatch({
      type: 'EditName',
      payload: {id: taskId, name: value ? value : ''},
    });

    navigation.goBack();
  }

  function handleEditComplete() {
    appContext.dispatch({type: 'ToggleComplete', payload: {id: taskId}});

    navigation.goBack();
  }

  function handleDelete() {
    appContext.dispatch({type: 'Delete', payload: {id: taskId}});

    navigation.goBack();
  }

  return (
    <View
      style={{flex: 1, backgroundColor: themeContext.theme.colors.background}}>
      <Text style={{color: themeContext.theme.colors.foreground}}>Name</Text>
      <TextInput
        style={{
          color: themeContext.theme.colors.foreground,
          borderColor: themeContext.theme.colors.foreground,
          borderWidth: 1,
        }}
        value={value}
        onChangeText={handleTextChange}
      />
      <Text style={{color: themeContext.theme.colors.foreground}}>
        {task?.complete ? 'complete' : 'incomplete'}
      </Text>
      <Pressable
        style={{
          alignSelf: 'flex-end',
          borderRadius: 10,
          padding: themeContext.theme.spacing.s,
          backgroundColor: themeContext.theme.colors.foreground,
        }}
        onPress={() => handleEditName()}>
        <Text style={{color: themeContext.theme.colors.background}}>
          edit name
        </Text>
      </Pressable>
      <Pressable
        style={{
          alignSelf: 'flex-end',
          borderRadius: 10,
          padding: themeContext.theme.spacing.s,
          backgroundColor: themeContext.theme.colors.foreground,
        }}
        onPress={() => handleEditComplete()}>
        <Text style={{color: themeContext.theme.colors.background}}>
          toggle complete
        </Text>
      </Pressable>
      <Pressable
        style={{
          alignSelf: 'flex-end',
          borderRadius: 10,
          padding: themeContext.theme.spacing.s,
          backgroundColor: themeContext.theme.colors.foreground,
        }}
        onPress={() => handleDelete()}>
        <Text style={{color: themeContext.theme.colors.background}}>
          delete task
        </Text>
      </Pressable>
    </View>
  );
}
