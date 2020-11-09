import { api } from "../../api"

import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  SIGN_UP_FAIL,
  SIGN_IN_FAIL,
  SET_LOADING,
} from "./userActionTypes"

// const userData = {
//   id: "3232323k2ok",
//   firstName: "Peter",
//   lastName: "Kovalski",
//   email: "peter.kovalski@example.com",
//   favorites: [],
//   history: [],
//   address: {
//     country: "Poland",
//     city: "Gdańsk",
//     street: "Myśliwska",
//     home: "33",
//     zipCode: "80-283",
//   },
//   phone: "999-999-999",
//   registerDate: "2020-10-26",
// }

export const setLoading = dispatch => {
  dispatch({ type: SET_LOADING })
}

export const signInUser = async (dispatch, formData) => {
  try {
    const response = await api.post("/user/login", formData)
    dispatch({ type: SIGN_IN, payload: response.data.user })
  } catch (err) {
    const errMsg = err.response
      ? err.response.data.msg
      : "Server error, pls try again"

    dispatch({
      type: SIGN_IN_FAIL,
      payload: errMsg,
    })
  }
}

export const signUpUser = async (dispatch, formData) => {
  const {
    firstName,
    lastName,
    email,
    country,
    city,
    street,
    home,
    zipCode,
    phone,
    password,
  } = formData

  const userData = {
    firstName,
    lastName,
    email,
    phone,
    password,
    hashedPassword: password,
    address: { country, city, street, home, zipCode },
  }

  try {
    const response = await api.post("/user/register", userData)
    dispatch({ type: SIGN_UP, payload: response.data.user })
  } catch (err) {
    const errMsg = err.response
      ? err.response.data.msg
      : "Server error, pls try again"

    dispatch({
      type: SIGN_UP_FAIL,
      payload: errMsg,
    })
  }
}

export const signOutUser = dispatch => {
  dispatch({ type: SIGN_OUT })
}
