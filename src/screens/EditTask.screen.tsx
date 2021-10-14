import React, {useState} from 'react';
import {View} from 'react-native';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import Text from '../components/base/Text';
import TextInput from '../components/base/TextInput';
import Button from '../components/base/Button';
import Separator from '../components/base/Separator';
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
      <Text>Name</Text>
      <TextInput value={value} onChangeText={handleTextChange} />

      <Separator />

      <Text>{task?.complete ? 'complete' : 'incomplete'}</Text>

      <Separator />

      <Button onPress={() => handleEditName()}>edit name</Button>

      <Separator />

      <Button onPress={() => handleEditComplete()}>toggle complete</Button>

      <Separator />

      <Button onPress={() => handleDelete()}>delete task</Button>
    </View>
  );
}
