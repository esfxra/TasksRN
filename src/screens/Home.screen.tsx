import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {useAppContext} from '../App.provider';
import {useThemeContext} from '../Theme.provider';
import ActionButton from '../components/ActionButton';
import {HomeProps} from '../types';

export default function Home({navigation}: HomeProps) {
  const appContext = useAppContext();
  const themeContext = useThemeContext();

  return (
    <View
      style={{flex: 1, backgroundColor: themeContext.theme.colors.background}}>
      <Pressable
        style={{
          marginBottom: themeContext.theme.spacing.s,
          borderRadius: 5,
          backgroundColor: themeContext.theme.colors.foreground,
        }}
        onPress={() => themeContext.toggleTheme()}>
        <Text style={{color: themeContext.theme.colors.background}}>
          Switch theme
        </Text>
      </Pressable>

      {appContext.tasks.length === 0 ? (
        <>
          <Text style={{color: themeContext.theme.colors.foreground}}>
            No tasks have been added (yet).
          </Text>
          <Pressable onPress={() => navigation.navigate('AddTask')}>
            <Text
              style={{
                color: themeContext.theme.colors.foreground,
                fontWeight: 'bold',
              }}>
              Add one.
            </Text>
          </Pressable>
        </>
      ) : (
        appContext.tasks.map(task => (
          <Pressable
            key={task.id}
            onPress={() => navigation.navigate('EditTask', {taskId: task.id})}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: themeContext.theme.colors.foreground,
                  marginRight: 5,
                }}>
                {task.name}
              </Text>
              <Text style={{color: themeContext.theme.colors.foreground}}>
                {task.complete ? 'complete' : 'incomplete'}
              </Text>
            </View>
          </Pressable>
        ))
      )}
      <ActionButton />
    </View>
  );
}
