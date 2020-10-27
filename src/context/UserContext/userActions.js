import { SIGN_IN, SIGN_OUT } from "./userActionTypes"

const userData = {
  id: "3232323k2ok",
  firstName: "Peter",
  lastName: "Kovalski",
  favorites: [],
  history: [],
  address: {
    country: "Poland",
    street: "Myśliwska",
    home: "33",
    zipCode: "80-283",
  },
  phone: "999-999-999",
  registerDate: "2020-10-26",
}

export const signInUser = dispatch => {
  dispatch({ type: SIGN_IN, payload: userData })
}

export const signOutUser = dispatch => {
  dispatch({ type: SIGN_OUT })
}
