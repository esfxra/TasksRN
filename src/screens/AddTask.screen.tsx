import React, {useState} from 'react';
import {Pressable, TextInput, Text, View} from 'react-native';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import {AddTaskProps} from '../types';

export default function AddTask({navigation}: AddTaskProps) {
  const appContext = useAppContext();
  const themeContext = useThemeContext();
  const [value, setValue] = useState('');

  function handleTextChange(text: string) {
    setValue(text);
  }

  function handleAdd() {
    appContext.dispatch({
      type: 'Add',
      payload: {id: String(Date.now()), name: value},
    });

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
      <Pressable
        style={{
          alignSelf: 'flex-end',
          borderRadius: 10,
          padding: themeContext.theme.spacing.s,
          backgroundColor: themeContext.theme.colors.foreground,
        }}
        onPress={() => handleAdd()}>
        <Text style={{color: themeContext.theme.colors.background}}>
          add task
        </Text>
      </Pressable>
    </View>
  );
}
