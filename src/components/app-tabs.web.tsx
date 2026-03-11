import { Tabs, TabList, TabTrigger, TabSlot, TabTriggerSlotProps } from 'expo-router/ui';
import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

// ─── Tab bar icons (SF Symbol text equivalents) ───────────────────────────────

const TAB_ICONS: Record<string, string> = {
  home: '⌂',
  feed: '▶',
  activity: '🔔',
  profile: '◉',
};

function TabIcon({ name, focused }: { name: string; focused?: boolean }) {
  return (
    <Text style={[styles.tabIcon, !focused && styles.tabIconDim]}>
      {TAB_ICONS[name]}
    </Text>
  );
}


export default function AppTabs() {
  return (
    <Tabs style={{ flex: 1 }}>
      <TabSlot style={{ flex: 1, paddingBottom: 56 }} />
      <TabList asChild>
        <View style={styles.tabBar}>
          <TabTrigger name="home" href="/" asChild>
            {({ isFocused, ...props }: TabTriggerSlotProps) => (
              <Pressable {...props} style={styles.tabButton}>
                <TabIcon name="home" focused={isFocused} />
              </Pressable>
            )}
          </TabTrigger>

          <TabTrigger name="feed" href="/feed" asChild>
            {({ isFocused, ...props }: TabTriggerSlotProps) => (
              <Pressable {...props} style={styles.tabButton}>
                <TabIcon name="feed" focused={isFocused} />
              </Pressable>
            )}
          </TabTrigger>

          <TabTrigger name="create" href="/create" asChild>
            {({ ...props }: TabTriggerSlotProps) => (
              <Pressable {...props} style={styles.plusButton}>
                <Text style={styles.plusIcon}>+</Text>
              </Pressable>
            )}
          </TabTrigger>

          <TabTrigger name="activity" href="/activity" asChild>
            {({ isFocused, ...props }: TabTriggerSlotProps) => (
              <Pressable {...props} style={styles.tabButton}>
                <TabIcon name="activity" focused={isFocused} />
              </Pressable>
            )}
          </TabTrigger>

          <TabTrigger name="profile" href="/profile" asChild>
            {({ isFocused, ...props }: TabTriggerSlotProps) => (
              <Pressable {...props} style={styles.tabButton}>
                <TabIcon name="profile" focused={isFocused} />
              </Pressable>
            )}
          </TabTrigger>
        </View>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#111',
    borderTopColor: '#222',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabButton: {
    width: 48,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    color: '#fff',
    fontSize: 22,
    opacity: 1,
  },
  tabIconDim: {
    opacity: 0.4,
  },
  plusButton: {
    width: 48,
    height: 38,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    color: '#000',
    fontSize: 24,
    fontWeight: '300',
    lineHeight: 28,
  },
});
