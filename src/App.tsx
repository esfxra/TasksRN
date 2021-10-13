import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {useAppContext} from './App.provider';

export default function App() {
  const appContext = useAppContext();

  return (
    <SafeAreaView>
      <Text>App</Text>
      {appContext.tasks.length === 0 ? (
        <Text>No tasks have been added (yet).</Text>
      ) : (
        appContext.tasks.map(task => <Text>{task.name}</Text>)
      )}
    </SafeAreaView>
  );
}
