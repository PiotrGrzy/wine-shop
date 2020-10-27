import { SIGN_IN, SIGN_OUT } from "./userActionTypes"

export const signInUser = dispatch => {
  dispatch({ type: SIGN_IN })
}

export const signOutUser = dispatch => {
  dispatch({ type: SIGN_OUT })
}
