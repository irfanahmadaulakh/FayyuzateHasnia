import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, ReadBook, InfoStack } from '../Containers/Main'
import { Colors } from '../Theme/Variables'
import { useTheme } from '../Hooks'
import { Image, TouchableOpacity, View } from 'react-native'
import { WP } from '../Theme/Responsive'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  const { Images, Layout } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.appPrimary,
        tabBarInactiveTintColor: Colors.appQuaternary,
        tabBarActiveBackgroundColor: Colors.appLight,
        tabBarInactiveBackgroundColor: Colors.appLight,
        tabBarStyle: { height: WP('20') },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <View
                style={[
                  Layout.bottomFocusedContainer,
                  { backgroundColor: color },
                ]}
              >
                <Image
                  style={Layout.bottomTabIconFocused}
                  source={Images.tabBarIcon.home}
                />
              </View>
            ) : (
              <View
                style={[Layout.bottomContainer, { backgroundColor: color }]}
              >
                <Image
                  style={Layout.bottomTabIcon}
                  source={Images.tabBarIcon.home}
                />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="ReadBook"
        component={ReadBook}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <View
                style={[
                  Layout.bottomFocusedContainer,
                  { backgroundColor: color },
                ]}
              >
                <Image
                  style={Layout.bottomTabIconFocused}
                  source={Images.tabBarIcon.readBook}
                />
              </View>
            ) : (
              <View
                style={[Layout.bottomContainer, { backgroundColor: color }]}
              >
                <Image
                  style={Layout.bottomTabIcon}
                  source={Images.tabBarIcon.readBook}
                />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="InfoStack"
        component={InfoStack}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <View
                style={[
                  Layout.bottomFocusedContainer,
                  { backgroundColor: color },
                ]}
              >
                <Image
                  style={Layout.bottomTabIconFocused}
                  source={Images.tabBarIcon.info}
                />
              </View>
            ) : (
              <View
                style={[Layout.bottomContainer, { backgroundColor: color }]}
              >
                <Image
                  style={Layout.bottomTabIcon}
                  source={Images.tabBarIcon.info}
                />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
