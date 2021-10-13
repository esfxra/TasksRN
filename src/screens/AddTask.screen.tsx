import React, {useState} from 'react';
import {Pressable, TextInput, Text, View} from 'react-native';

import {useAppContext} from '../App.provider';
import {AddTaskProps} from '../types';

export default function AddTask({navigation}: AddTaskProps) {
  const appContext = useAppContext();
  const [value, setValue] = useState('');

  function handleTextChange(text: string) {
    setValue(text);
  }

  function handleAdd() {
    appContext.dispatch({
      type: 'AddTask',
      payload: {id: String(Date.now()), name: value},
    });

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
      <Pressable
        style={{
          alignSelf: 'flex-end',
          borderRadius: 10,
          padding: 5,
          backgroundColor: 'black',
        }}
        onPress={() => handleAdd()}>
        <Text style={{color: 'white'}}>add task</Text>
      </Pressable>
    </View>
  );
}
