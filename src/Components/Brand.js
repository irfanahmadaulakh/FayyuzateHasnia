import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import { WP } from '../Theme/Responsive'
import { Colors } from '../Theme/Variables'

const Brand = () => {
  const { Layout, Images } = useTheme()

  return (
    <View style={styles.container}>
      <Image
        style={[Layout.fullSize, styles.tint]}
        source={Images.logo}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WP('80'),
    height: WP('20'),
    marginBottom: WP('5'),
  },
  tint: {
    tintColor: Colors.appPrimary,
  },
})

export default Brand
