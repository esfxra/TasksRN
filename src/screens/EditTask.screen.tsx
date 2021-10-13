import React, {useState} from 'react';
import {Pressable, TextInput, Text, View} from 'react-native';

import {useAppContext} from '../App.provider';
import {EditTaskProps} from '../types';

export default function EditTask({navigation, route}: EditTaskProps) {
  const appContext = useAppContext();

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
    <View>
      <Text>Name</Text>
      <TextInput
        style={{borderWidth: 1}}
        value={value}
        onChangeText={handleTextChange}
      />
      <Text>{task?.complete ? 'complete' : 'incomplete'}</Text>
      <Pressable
        style={{
          alignSelf: 'flex-end',
          borderRadius: 10,
          padding: 5,
          backgroundColor: 'black',
        }}
        onPress={() => handleEditName()}>
        <Text style={{color: 'white'}}>edit name</Text>
      </Pressable>
      <Pressable
        style={{
          alignSelf: 'flex-end',
          borderRadius: 10,
          padding: 5,
          backgroundColor: 'black',
        }}
        onPress={() => handleEditComplete()}>
        <Text style={{color: 'white'}}>toggle complete</Text>
      </Pressable>
      <Pressable
        style={{
          alignSelf: 'flex-end',
          borderRadius: 10,
          padding: 5,
          backgroundColor: 'black',
        }}
        onPress={() => handleDelete()}>
        <Text style={{color: 'white'}}>delete task</Text>
      </Pressable>
    </View>
  );
}
