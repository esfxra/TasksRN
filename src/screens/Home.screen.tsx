import React from 'react';
import {Pressable, View} from 'react-native';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import ActionButton from '../components/ActionButton';
import Row from '../components/base/Row';
import Button from '../components/base/Button';
import Text from '../components/base/Text';
import {HomeProps} from '../types';
import Separator from '../components/base/Separator';

export default function Home({navigation}: HomeProps) {
  const appContext = useAppContext();
  const themeContext = useThemeContext();

  return (
    <View
      style={{flex: 1, backgroundColor: themeContext.theme.colors.background}}>
      <Button onPress={() => themeContext.toggleTheme()}>Switch theme</Button>

      <Separator />

      <Text type="heading">Tasks</Text>

      <Separator size="xs" />

      {appContext.tasks.length === 0 ? (
        <Text>No tasks have been added (yet).</Text>
      ) : (
        appContext.tasks.map(task => (
          <View key={task.id}>
            <Pressable
              onPress={() =>
                navigation.navigate('EditTask', {taskId: task.id})
              }>
              <Row>
                <Text>
                  {`${task.name} ${task.complete ? 'complete' : 'incomplete'}`}
                </Text>
              </Row>
            </Pressable>

            <Separator />
          </View>
        ))
      )}
      <ActionButton />
    </View>
  );
}
