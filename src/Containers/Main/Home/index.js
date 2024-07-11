import React from 'react'
import { View, Text, StyleSheet, Image, BackHandler, Alert } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { Brand } from '@/Components'
import { WP } from '@/Theme/Responsive'
import { useTheme } from '@/Hooks'
import { useEffect } from 'react'
import { navigate } from '@/Navigators/utils'
import { useSelector } from 'react-redux'
import RNExitApp from 'react-native-exit-app'
import { t } from 'i18next'
import i18n from '@/Translations'
import HomeReadBook from './Components/homeReadBook'

const Home = () => {
  const { Images } = useTheme()
  const currentUserName = useSelector(state => state.user?.user)
  const language = useSelector(state => state.user?.myLanguage)
  console.log(
    'eiurwryuweriyuwer',
    useSelector(state => state.user?.myLanguage),
  )
  i18n.changeLanguage(language)

  // const hijriDate = new Intl.DateTimeFormat('ar-IND-u-ca-islamic', {
  //   day: 'numeric',
  //   month: 'long',
  //   // weekday: 'long',
  //   year: 'numeric',
  // }).format(Date.now())

  const currentDate = new Date()
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dayName = daysOfWeek[currentDate.getDay()]
  const day = String(currentDate.getDate()).padStart(2, '0')
  const month = monthsOfYear[currentDate.getMonth()]
  const year = currentDate.getFullYear()
  const formattedDate = `${day} ${month} ${year}`

  return (
    <View style={styles.container}>
      <Brand />
      <Text style={styles.salamStyle}>{t('salam')}</Text>
      <Text style={styles.nameStyle}>{currentUserName}</Text>
      <View style={styles.dateViewStyle}>
        <View>
          <Text style={styles.dayTextStyle}> {dayName}</Text>
          <Text style={styles.dateTextStyle}> {formattedDate}</Text>
          {/* <Text style={styles.dateTextStyleHijri}>
            {' '}
            {moment(date).format('iYYYY iMMMM iD')}
          </Text> */}
        </View>

        <Image source={Images.homeBookIcon} style={styles.icon} />
      </View>
      <Image source={Images.homeBookImage} style={styles.bookImageStyle} />
      <HomeReadBook
        title={t('readBook')}
        onPress={() => navigate('ReadBook')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.appLight,
    paddingTop: WP('8'),
  },
  salamStyle: {
    fontSize: WP('5'),
    marginLeft: WP('1'),
    color: Colors.appPrimary,
    marginBottom: WP('1'),
    fontWeight: 'bold',
    width: WP(90),
  },
  dateTextStyle: {
    fontSize: WP('4'),
    marginLeft: WP('1'),
    color: Colors.appPrimary,
    marginBottom: WP('1'),
    fontWeight: 'bold',
  },
  dateTextStyleHijri: {
    fontSize: WP('4'),
    marginLeft: WP('1'),
    color: Colors.appPrimary,
    marginBottom: WP('1'),
    fontWeight: 'bold',
  },
  dayTextStyle: {
    fontSize: WP('4'),
    marginLeft: WP('1'),
    color: Colors.appPrimary,
    fontWeight: '400',
    marginBottom: WP('1'),
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  nameStyle: {
    fontSize: WP('5'),
    marginLeft: WP('1'),
    color: Colors.appPrimary,
    fontWeight: '400',
    marginBottom: WP('5'),
    fontWeight: 'bold',
    width: WP(90),
  },
  dateViewStyle: {
    width: WP(90),
    backgroundColor: Colors.appQuaternary,
    height: WP(35),
    borderRadius: WP(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WP('5'),
  },
  icon: {
    width: WP('20'),
    height: WP('24'),
  },
  bookImageStyle: {
    width: WP(90),
    height: WP('55'),
    borderRadius: WP(4),
    marginVertical: WP(4),
    // resizeMode: 'contain',
  },
})

export default Home
