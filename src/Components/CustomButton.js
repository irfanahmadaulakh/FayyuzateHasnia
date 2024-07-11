import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { WP } from '../Theme/Responsive'
import { Colors } from '../Theme/Variables'
import { useTheme } from '../Hooks'

const CustomButton = ({ title, disabled, onPress, isIcon, width }) => {
  const { Images } = useTheme()
  return (
    <TouchableOpacity
      style={width ? styles.containerSec : styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      {isIcon && <Image source={Images.mapIcon} style={styles.icon} />}
      <Text style={width ? styles.textSec : styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: WP('60'),
    height: WP('12'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WP('5'),
    marginTop: WP('4'),
    backgroundColor: Colors.appPrimary,
  },
  containerSec: {
    width: WP('30'),
    height: WP('15'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: WP('1'),
    backgroundColor: Colors.appQuaternary,
    shadowColor: Colors.appPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: WP('5'),
    fontWeight: 'bold',
    color: Colors.white,
  },
  textSec: {
    fontSize: WP('5'),
    fontWeight: 'bold',
    color: Colors.appPrimary,
  },
  icon: {
    width: WP('9'),
    height: WP('9'),
    //resizeMode: 'contain',
  },
})
export default CustomButton
