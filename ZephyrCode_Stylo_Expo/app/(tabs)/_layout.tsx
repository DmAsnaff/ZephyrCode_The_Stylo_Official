import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="forum"
        options={{
          title: 'Forum',
          tabBarIcon: ({ color, focused }) => (
            //<MaterialCommunityIcons name="forum-outline" size={28} color="#007AFF" />
            <MaterialCommunityIcons name={focused ? 'forum-outline' : 'forum-outline'}  size={28} color={color} />
          ),
        }}
      />
  
      <Tabs.Screen
        name="history"
        options={{
          title: 'history',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name={focused ? 'history' : 'history'} size={28} color={color} />
            //<MaterialIcons name="history" size={24} color="black" />

          ),
        }}
      />
          <Tabs.Screen
        name="Profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-outline' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
