import {
  SIGN_IN,
  SIGN_IN_FAIL,
  SIGN_UP,
  SIGN_UP_FAIL,
  SIGN_OUT,
  SET_LOADING,
} from "./userActionTypes"

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true }
    case SIGN_IN:
    case SIGN_UP:
      return {
        isSignedIn: true,
        userData: action.payload,
        error: null,
        loading: false,
      }
    case SIGN_IN_FAIL:
      return {
        isSignedIn: false,
        userData: null,
        error: { login: action.payload },
        loading: false,
      }
    case SIGN_UP_FAIL:
      return {
        isSignedIn: false,
        userData: null,
        error: { register: action.payload },
        loading: false,
      }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userData: null }
    default:
      break
  }
}

export default userReducer
