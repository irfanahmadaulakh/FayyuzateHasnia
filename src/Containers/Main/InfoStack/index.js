import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Info from './Info'
import PhotoGallery from './PhotoGallery'
import Notification from './Notification'
import MapNavigation from './MapNavigation'
import Support from './Support'
import Privacy from './Privacy'
import About from './About'

const Stack = createStackNavigator()

// @refresh reset
const InfoStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="PhotoGallery" component={PhotoGallery} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="MapNavigation" component={MapNavigation} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

export default InfoStack
