import {Task} from '../types';

import React from 'react';
import {SectionList, View} from 'react-native';

import TaskItem from './TaskItem';
import Text from './base/Text';
import Separator from './base/Separator';

interface TaskListProps {
  tasks: Task[];
}

function renderItem({item}: {item: Task}) {
  return <TaskItem key={item.id} task={item} />;
}

function renderSectionHeader({section: {title}}: {section: {title: string}}) {
  return (
    <>
      <Text type="subHeading">{title}</Text>
      <Separator size="xxs" />
    </>
  );
}

export default function TaskList({tasks}: TaskListProps) {
  const pending = tasks.filter(task => !task.complete);
  const complete = tasks.filter(task => task.complete);

  const sectionedData = [
    {title: 'Pending', data: pending},
    {title: 'Completed', data: complete},
  ];

  return (
    <View style={{flex: 1}}>
      {!tasks.length ? (
        <Text>No tasks have been added (yet).</Text>
      ) : (
        <SectionList
          sections={sectionedData}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          renderSectionFooter={() => <Separator />}
        />
      )}
    </View>
  );
}
