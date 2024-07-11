import * as Actions from '../Action/ActionTypes'
const User = (
  state = {
    user: null,
    myNotification: [],
    myLanguage: null,
  },
  action,
) => {
  console.log('showing values of actions here', action)
  switch (action.type) {
    case Actions.USER:
      return {
        ...state,
        user: action.user,
      }

    case Actions.NOTIFICATIONS:
      return {
        ...state,
        myNotification: state.myNotification.concat(action.myNotification),
      }

    case Actions.LANGUAGE:
      return {
        ...state,
        myLanguage: action.myLanguage,
      }

    case Actions.DELETE_NOTIFICATIONS:
      return {
        ...state,
        myNotification: [],
      }

    default:
      return state
  }
}

export default User
