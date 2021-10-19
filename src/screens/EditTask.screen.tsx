import React, {useState} from 'react';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import ModalLayout from '../components/ModalLayout';
import Text from '../components/base/Text';
import TextInput from '../components/base/TextInput';
import Button from '../components/base/Button';
import Row from '../components/base/Row';
import Separator from '../components/base/Separator';
import {AddTaskIcon, DeleteIcon, SaveIcon} from '../components/Icons';
import {EditTaskProps} from '../types';

export default function EditTask({navigation, route}: EditTaskProps) {
  const appContext = useAppContext();
  const {theme} = useThemeContext();

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
        <Button
          label="Delete"
          icon={<DeleteIcon color={theme.colors.background} size={16} />}
          onPress={() => handleDelete()}
        />

        <Separator size="xxs" vertical={true} />

        <Button
          label={`Mark ${task?.complete ? 'incomplete' : 'complete'}`}
          icon={<AddTaskIcon color={theme.colors.background} size={16} />}
          onPress={() => handleEditComplete()}
        />

        <Separator size="xxs" vertical={true} />

        <Button
          label="Save"
          icon={<SaveIcon color={theme.colors.background} size={16} />}
          onPress={() => handleEditName()}
        />
      </Row>
    </ModalLayout>
  );
}
