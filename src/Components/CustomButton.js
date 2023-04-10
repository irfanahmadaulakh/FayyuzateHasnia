import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { WP } from '../Theme/Responsive'
import { Colors } from '../Theme/Variables'

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: WP('60'),
    height: WP('12'),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WP('5'),
    marginTop: WP('4'),
    backgroundColor: Colors.appSecondary,
  },
  text: {
    fontSize: WP('5'),
    fontWeight: 'bold',
    color: Colors.white,
  },
})
export default CustomButton
