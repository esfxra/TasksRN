import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {useAppContext} from '../App.provider';
import ActionButton from '../components/ActionButton';
import {HomeProps} from '../types';

export default function Home({navigation}: HomeProps) {
  const appContext = useAppContext();

  return (
    <View style={{flex: 1}}>
      {appContext.tasks.length === 0 ? (
        <>
          <Text>No tasks have been added (yet).</Text>
          <Pressable onPress={() => navigation.navigate('AddTask')}>
            <Text style={{fontWeight: 'bold'}}>Add one.</Text>
          </Pressable>
        </>
      ) : (
        appContext.tasks.map(task => (
          <Pressable
            key={task.id}
            onPress={() => navigation.navigate('EditTask', {taskId: task.id})}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: 5}}>{task.name}</Text>
              <Text>{task.complete ? 'complete' : 'incomplete'}</Text>
            </View>
          </Pressable>
        ))
      )}
      <ActionButton />
    </View>
  );
}
