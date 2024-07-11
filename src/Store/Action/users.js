import * as ActionTypes from './ActionTypes'

export const userAuth = user => ({
  type: ActionTypes.USER,
  user: user,
})
export const myNotification = myNotification => ({
  type: ActionTypes.NOTIFICATIONS,
  myNotification: myNotification,
})
export const deleteNotification = notifydel => ({
  type: ActionTypes.DELETE_NOTIFICATIONS,
  delNotification: notifydel,
})

export const myLanguage = myLanguage => ({
  type: ActionTypes.LANGUAGE,
  myLanguage: myLanguage,
})
