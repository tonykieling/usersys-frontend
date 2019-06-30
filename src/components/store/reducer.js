import { saveState, clearUserLS } from './localStorage.js'

const initialState = {
  id:         "",
  email:      "",
  password:   "",
  userAdmin:  ""
}

const reducer = (state = initialState, action) => {
  console.log("inside reducer state:", state, " - action:", action)
  let newState = {...state}
  if (action.type === "LOGIN") {
    console.log("user in reducer:", action.data)
    newState = {
      id:         action.data.user.id,
      email:      action.data.user.email,
      name:       action.data.user.name,
      userAdmin:  action.data.user.userAdmin,
      userActive: action.data.user.userActive
    }
    saveState(newState)

  } else if (action.type === "LOGOUT") {
    newState = {
      id:         undefined,
      email:      undefined,
      password:   undefined,
      userAdmin:  undefined,
      userActive: undefined
    }
    clearUserLS()
  } else if (action.type === "ADMINCHANGEUSER") {
    console.log("userToBeChanged in reducer:", action.data)
    newState = {...state,
      userToBeChangedId:          action.data.id,
      userToBeChangedEmail:       action.data.email,
      userToBeChangedName:        action.data.name,
      userToBeChangedUserAdmin:   action.data.user_admin,
      userToBeChangedUserActive:  action.data.user_active
    }
  }

  return newState
}

export default reducer
