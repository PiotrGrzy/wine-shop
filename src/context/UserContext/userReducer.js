import { SIGN_IN, SIGN_OUT } from "./userActionTypes"

const userReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userData: action.payload }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, useData: null }
    default:
      break
  }
}

export default userReducer