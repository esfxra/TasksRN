import React, {useState} from 'react';
import {View} from 'react-native';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import Text from '../components/base/Text';
import TextInput from '../components/base/TextInput';
import Button from '../components/base/Button';
import Separator from '../components/base/Separator';
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
      <Text>Name</Text>
      <TextInput value={value} onChangeText={handleTextChange} />

      <Separator />

      <Button onPress={handleAdd}>add task</Button>
    </View>
  );
}
