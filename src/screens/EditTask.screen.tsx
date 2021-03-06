import React, {useState} from 'react';

import {useAppContext} from '../App.provider';
import ModalLayout from '../components/ModalLayout';
import Text from '../components/base/Text';
import TextInput from '../components/base/TextInput';
import Button from '../components/base/Button';
import Row from '../components/base/Row';
import Separator from '../components/base/Separator';
import {EditTaskProps} from '../types';

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
    <ModalLayout title="Edit task" closeModal={closeModal}>
      <Text type="bodyBold">Task name</Text>
      <TextInput
        value={value}
        onChangeText={handleTextChange}
        autoFocus={true}
      />

      <Separator />

      <Row justifyContent="flex-end">
        <Button label="Delete" icon="Delete" onPress={() => handleDelete()} />

        <Separator size="xxs" vertical={true} />

        <Button
          label={`Mark ${task?.complete ? 'incomplete' : 'complete'}`}
          icon="AddTask"
          onPress={() => handleEditComplete()}
        />

        <Separator size="xxs" vertical={true} />

        <Button label="Save" icon="Save" onPress={() => handleEditName()} />
      </Row>
    </ModalLayout>
  );
}
