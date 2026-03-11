import { Tabs } from 'expo-router';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

const TABS: { name: string; iconActive: IoniconName; iconInactive: IoniconName; isPlus?: boolean }[] = [
  { name: 'index',    iconActive: 'home',                iconInactive: 'home-outline' },
  { name: 'feed',     iconActive: 'tv',                  iconInactive: 'tv-outline' },
  { name: 'create',   iconActive: 'add',                 iconInactive: 'add',                 isPlus: true },
  { name: 'activity', iconActive: 'notifications',       iconInactive: 'notifications-outline' },
  { name: 'profile',  iconActive: 'person-circle',       iconInactive: 'person-circle-outline' },
];

function ShowrunnerTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const activeRouteName = state.routes[state.index]?.name;

  return (
    <View style={[styles.tabBar, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {TABS.map((tab) => {
        const isFocused = activeRouteName === tab.name;
        const routeIndex = state.routes.findIndex((r) => r.name === tab.name);

        if (routeIndex < 0) return null;

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: state.routes[routeIndex].key, canPreventDefault: true });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(tab.name);
          }
        };

        if (tab.isPlus) {
          return (
            <Pressable key={tab.name} style={styles.plusButton} onPress={onPress}>
              <Ionicons name="add" size={26} color="#000" />
            </Pressable>
          );
        }

        return (
          <Pressable key={tab.name} style={styles.tabButton} onPress={onPress}>
            <Ionicons
              name={isFocused ? tab.iconActive : tab.iconInactive}
              size={26}
              color={isFocused ? '#fff' : 'rgba(255,255,255,0.4)'}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <AnimatedSplashOverlay />
      <Tabs
        tabBar={(props) => <ShowrunnerTabBar {...props} />}
        screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="feed" />
        <Tabs.Screen name="create" />
        <Tabs.Screen name="activity" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#111',
    borderTopColor: '#222',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabButton: {
    width: 48,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    width: 48,
    height: 38,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
