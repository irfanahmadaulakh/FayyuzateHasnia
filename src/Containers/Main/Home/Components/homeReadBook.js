import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { WP } from '@/Theme/Responsive'
import { Colors } from '@/Theme/Variables'

const HomeReadBook = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WP('80'),
    height: WP('12'),
    backgroundColor: Colors.appQuaternary,
    borderRadius: WP('2'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: WP('3'),
    marginBottom: WP('3'),
  },
  title: {
    fontSize: WP('4.5'),
    color: Colors.appPrimary,
  },
})
export default HomeReadBook
