import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Onboarding, Login } from '../Containers/Authentication'

const Stack = createStackNavigator()

// @refresh reset
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
