import React from 'react'
import { SafeAreaView, StatusBar, Alert } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import AuthNavigator from './Auth'
import messaging from '@react-native-firebase/messaging'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myNotification } from '@/Store/Action'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const prevNotificaions = useSelector(state => state.user)
  console.log('preeeea', prevNotificaions)

  useEffect(() => {
    requestUserPermission()
    getToken()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        remoteMessage?.notification?.title,
        remoteMessage?.notification?.body,
      )

      const notification = {
        title: remoteMessage?.notification?.title,
        body: remoteMessage?.notification?.body,
      }

      dispatch(myNotification([notification]))
    })
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage)
      const notification = {
        title: remoteMessage?.notification?.title,
        body: remoteMessage?.notification?.body,
      }

      dispatch(myNotification([notification]))
    })

    return unsubscribe
  }, [])

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission()
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (enabled) {
      console.log('Authorization status:', authStatus)
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken()
    console.log('Token', token)
  }

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!user ? (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          ) : null}
          {/* <Stack.Screen name="Auth" component={AuthNavigator} /> */}
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
