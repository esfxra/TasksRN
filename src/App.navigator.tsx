import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home.screen';
import AddTask from './screens/AddTask.screen';
import EditTask from './screens/EditTask.screen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home screen, where all tasks are shown */}
        <Stack.Screen component={Home} name="Home" />
        {/* Add and Edit modals */}
        <Stack.Group
          screenOptions={{
            presentation: 'transparentModal',
            headerShown: false,
          }}>
          <Stack.Screen component={AddTask} name="AddTask" />
          <Stack.Screen component={EditTask} name="EditTask" />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
