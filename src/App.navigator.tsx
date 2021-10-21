import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useThemeContext} from './Theme.provider';
import Home from './screens/Home.screen';
import AddTask from './screens/AddTask.screen';
import EditTask from './screens/EditTask.screen';
import Text from './components/base/Text';
import ThemeToggle from './components/ThemeToggle';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const {theme} = useThemeContext();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home screen, where all tasks are shown */}
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerTitle: '',
            headerLeft: () => <Text type="heading">Tasks</Text>,
            headerRight: () => <ThemeToggle />,
            headerStyle: {backgroundColor: theme.colors.background},
          }}
        />
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
