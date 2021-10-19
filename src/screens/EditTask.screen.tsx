import React, {useState} from 'react';
import {View} from 'react-native';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import Text from '../components/base/Text';
import TextInput from '../components/base/TextInput';
import Button from '../components/base/Button';
import Separator from '../components/base/Separator';
import {EditTaskProps} from '../types';
import ModalLayout from '../components/ModalLayout';
import Row from '../components/base/Row';

export default function EditTask({navigation, route}: EditTaskProps) {
  const appContext = useAppContext();

  const {taskId} = route.params;
  const task = appContext.tasks.find(task => task.id === taskId);

  const [value, setValue] = useState(task?.name);

  function closeModal() {
    navigation.goBack();
  }

  function handleTextChange(text: string) {
    setValue(text);
  }

  function handleEditName() {
    appContext.dispatch({
      type: 'EditName',
      payload: {id: taskId, name: value ? value : ''},
    });

    closeModal();
  }

  function handleEditComplete() {
    appContext.dispatch({type: 'ToggleComplete', payload: {id: taskId}});

    closeModal();
  }

  function handleDelete() {
    appContext.dispatch({type: 'Delete', payload: {id: taskId}});

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
        <Button onPress={() => handleDelete()}>delete</Button>
        <Separator size="xs" vertical={true} />
        <Button onPress={() => handleEditComplete()}>
          {`mark ${task?.complete ? 'incomplete' : 'complete'}`}
        </Button>
        <Separator size="xs" vertical={true} />
        <Button onPress={() => handleEditName()}>edit</Button>
      </Row>
    </ModalLayout>
  );
}
