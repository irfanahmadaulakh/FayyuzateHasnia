import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { WP } from '../Theme/Responsive'
import { Colors } from '../Theme/Variables'

const CustomTextInput = props => {
  return <TextInput style={styles.container} {...props} />
}

const styles = StyleSheet.create({
  container: {
    width: WP('90'),
    height: WP('13'),
    borderRadius: WP('2'),
    fontSize: WP('5'),
    padding: WP('3'),
    backgroundColor: Colors.appQuaternary,
  },
})

export default CustomTextInput
