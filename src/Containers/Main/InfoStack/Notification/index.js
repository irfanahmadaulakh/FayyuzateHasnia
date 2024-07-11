import React from 'react'
import { View, Text, StyleSheet, ScrollView, LogBox } from 'react-native'
import { Colors } from '@/Theme/Variables'
import { WP } from '@/Theme/Responsive'
import { CustomHeader } from '@/Components'
import { t } from 'i18next'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNotification } from '@/Store/Action'

// import { Container } from './styles';

const Notification = () => {
  const prevNotificaions = useSelector(state => state.user?.myNotification)
  console.log('545454545', prevNotificaions)
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <CustomHeader
        title={t('notification')}
        showBell={'true'}
        onDelPress={() => dispatch(deleteNotification())}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {prevNotificaions.map((notification, index) => (
          <View key={index} style={styles.notificationContainer}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationBody}>{notification.body}</Text>
          </View>
        ))}
      </ScrollView> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {prevNotificaions.length === 0 ? (
          <Text style={styles.noNotificationText}>{t('noNotification')}</Text>
        ) : (
          prevNotificaions.map((notification, index) => (
            <View key={index} style={styles.notificationContainer}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationBody}>{notification.body}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.appLight,
    paddingTop: WP('10'),
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    margin: WP('7'),
    width: WP('85'),
    borderRadius: WP('5'),
    padding: WP('3'),
    backgroundColor: Colors.white,
  },
  description: {
    margin: WP('3'),
    lineHeight: WP('5'),
    textAlign: 'center',
  },
  notificationContainer: {
    backgroundColor: Colors.white,
    width: WP(90),
    borderRadius: WP('3'),
    margin: WP('3'),
    padding: WP('3'),
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.appPrimary,
  },
  notificationBody: {
    fontSize: 14,
  },
  noNotificationText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: WP('30'),
  },
})

export default Notification
