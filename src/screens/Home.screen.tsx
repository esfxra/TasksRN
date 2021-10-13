import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {useAppContext} from '../App.provider';
import {HomeProps} from '../types';

export default function Home({navigation}: HomeProps) {
  const appContext = useAppContext();

  return (
    <View>
      {appContext.tasks.length === 0 ? (
        <>
          <Text>No tasks have been added (yet).</Text>
          <Pressable onPress={() => navigation.navigate('AddTask')}>
            <Text style={{fontWeight: 'bold'}}>Add one.</Text>
          </Pressable>
        </>
      ) : (
        appContext.tasks.map(task => <Text>{task.name}</Text>)
      )}
    </View>
  );
}
