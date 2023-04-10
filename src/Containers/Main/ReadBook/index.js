import React, { useRef } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import Pdf from 'react-native-pdf'
import { useEffect } from 'react'
import { useState } from 'react'
import { CustomLoader } from '../../../Components'
import PageStatusBar from './Components/PageStatusBar'

// import { Container } from './styles';

const ReadBook = () => {
  const pageRef = useRef(null)
  const source = require('@/Assets/Book/fayyuzatehasnia.pdf')
  useEffect(() => {
    console.log('pagerefff', pageRef.current)
    pageRef?.current?.setPage(1)
  }, [])
  return (
    <View style={styles.container}>
      <PageStatusBar />
      <Pdf
        trustAllCerts={false}
        ref={pageRef}
        source={source}
        enablePaging={true}
        renderActivityIndicator={() => <CustomLoader />}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`)
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`)
        }}
        onError={error => {
          console.log(error)
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`)
        }}
        style={styles.pdf}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.appLight,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default ReadBook
