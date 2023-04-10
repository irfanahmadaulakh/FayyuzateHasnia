import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'

const PageStatusBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.round}>
        <Text> bar</Text>
      </View>
      <View style={styles.round}>
        <Text> bar</Text>
      </View>
      <View style={styles.round}>
        <Text> bar</Text>
      </View>
      <View style={styles.round}>
        <Text> bar</Text>
      </View>
      <View style={styles.round}>
        <Text> bar</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: WP('90'),
    // padding: WP('5'),
    // borderRadius: WP('5'),
    backgroundColor: Colors.white,
  },
  round: {
    width: WP('13'),
    height: WP('13'),
    borderRadius: WP('100'),
    backgroundColor: Colors.appQuaternary,
  },
})

export default PageStatusBar
