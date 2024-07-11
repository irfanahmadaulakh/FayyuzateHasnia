import React, { useRef } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import Pdf from 'react-native-pdf'
import { useEffect } from 'react'
import { useState } from 'react'
import { CustomLoader } from '../../../Components'
import { Modal } from 'react-native'
import GetPageNoModal from './Components/GetPageNoModal'
import PageStatusBar from './Components/PageStatusBar'
let pages

const ReadBook = () => {
  const pageRef = useRef(null)
  const [showPageNumberModal, setShowPageNumberModal] = useState(false)
  const [pagenumber, setPageNumber] = useState()
  const [currentPagenumber, setCurrentpageNumber] = useState(1)
  // const source = equire('@/Assets/Book/fayyuzatehasnia.pdf')
  const source = { uri: 'bundle-assets://pdf/fayyuzatehasnia.pdf' }
  // const source = require('@/Assets/PhotoGallery/photoGallary.pdf')

  useEffect(() => {
    console.log('pagerefff', pageRef.current)
    pageRef?.current?.setPage(1)
  }, [])

  const onNextPress = () => {
    pageRef?.current?.setPage(pages + 1)
  }
  const onBackPress = () => {
    pageRef?.current?.setPage(pages - 1)
  }
  const onResetPagePress = () => {
    pageRef?.current?.setPage(1)
  }
  const onPageNumberPress = () => {
    setShowPageNumberModal(!showPageNumberModal)
  }
  const onCancelPress = () => {
    setShowPageNumberModal(!showPageNumberModal)
  }
  const onSubmitPress = () => {
    setShowPageNumberModal(!showPageNumberModal)
    pageRef?.current?.setPage(parseInt(pagenumber))
  }

  return (
    <View style={styles.container}>
      <GetPageNoModal
        showPageNumberModal={showPageNumberModal}
        setShowPageNumberModal={setShowPageNumberModal}
        number={pagenumber}
        setNumber={setPageNumber}
        onSubmitPress={onSubmitPress}
        onCancelPress={onCancelPress}
      />
      <PageStatusBar
        onNextPress={onNextPress}
        onBackPress={onBackPress}
        onResetPagePress={onResetPagePress}
        onPageNumberPress={onPageNumberPress}
        pageNo={currentPagenumber}
      />
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
          setCurrentpageNumber(page)
          pages = page
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
  goToPageModal: {
    width: WP('60'),
    height: WP('90'),
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: Colors.appLight,
  },
})

export default ReadBook
