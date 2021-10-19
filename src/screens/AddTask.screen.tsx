import React, {useState} from 'react';

import {useAppContext} from '../App.provider';
import ModalLayout from '../components/ModalLayout';
import Text from '../components/base/Text';
import TextInput from '../components/base/TextInput';
import Button from '../components/base/Button';
import Row from '../components/base/Row';
import Separator from '../components/base/Separator';
import {AddTaskIcon} from '../components/Icons';
import {AddTaskProps} from '../types';

export default function AddTask({navigation}: AddTaskProps) {
  const appContext = useAppContext();
  const [value, setValue] = useState('');

  function closeModal() {
    navigation.goBack();
  }

  function handleTextChange(text: string) {
    setValue(text);
  }

  function handleAdd() {
    appContext.dispatch({
      type: 'Add',
      payload: {id: String(Date.now()), name: value},
    });

    closeModal();
  }

  return (
    <ModalLayout closeModal={closeModal}>
      <Text>Name</Text>
      <TextInput
        value={value}
        onChangeText={handleTextChange}
        autoFocus={true}
      />

      <Separator />

      <Row justifyContent="flex-end">
        <Button
          label="Add task"
          icon={<AddTaskIcon color="white" size={16} />}
          onPress={handleAdd}
        />
      </Row>
    </ModalLayout>
  );
}
