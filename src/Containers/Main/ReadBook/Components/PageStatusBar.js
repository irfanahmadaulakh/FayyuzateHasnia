import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import { useTheme } from '@/Hooks'

const PageStatusBar = ({
  onNextPress,
  onBackPress,
  onResetPagePress,
  onPageNumberPress,
  noMid,
  currentImageIndex,
  imagesLength,
  pageNo,
}) => {
  const { Images } = useTheme()
  console.log('dsfsdsfds', pageNo)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.round}
        onPress={onBackPress}
        disabled={currentImageIndex === 0}
      >
        {/* <Text style={styles.textStyle}> Back</Text> */}
        <Image source={Images.backPageIcon} style={styles.icon} />
      </TouchableOpacity>
      {!noMid && (
        <TouchableOpacity
          style={styles.roundMiddle}
          onPress={onPageNumberPress}
        >
          {/* <Text style={styles.textStyle}>Page number</Text> */}
          <Image source={Images.page_numberIcon} style={styles.icon} />
        </TouchableOpacity>
      )}
      {/* {!noMid && <Text style={styles.textStyle}>{pageNo}</Text>} */}
      <TouchableOpacity
        style={styles.round}
        // onPress={onNextPress}
        disabled={true}
      >
        <Text style={styles.textStyle}>{pageNo}</Text>
      </TouchableOpacity>
      {!noMid && (
        <TouchableOpacity style={styles.roundMiddle} onPress={onResetPagePress}>
          {/* <Text style={styles.textStyle}> Reset page</Text> */}
          <Image source={Images.resetIcon} style={styles.icon} />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.round}
        onPress={onNextPress}
        disabled={currentImageIndex === imagesLength - 1}
      >
        {/* <Text style={styles.textStyle}> Next</Text> */}
        <Image source={Images.nextIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: WP('99'),
    backgroundColor: Colors.appLight,
    justifyContent: 'space-between',
    paddingHorizontal: WP('2'),
    paddingVertical: WP('2'),
    borderRadius: WP('3'),
  },
  round: {
    width: WP('13'),
    height: WP('13'),
    borderRadius: WP('100'),
    backgroundColor: Colors.appQuaternary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundMiddle: {
    width: WP('25'),
    height: WP('13'),
    borderRadius: WP('3'),
    backgroundColor: Colors.appQuaternary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    // width: WP('9'),
    // height: WP('8'),
    // borderRadius: WP('10'),
    // backgroundColor: '#788098',
    // justifyContent: 'center',
    fontSize: WP('5'),
    color: Colors.appPrimary,
    fontWeight: '500',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    width: WP('9'),
    height: WP('9'),
  },
})

export default PageStatusBar
