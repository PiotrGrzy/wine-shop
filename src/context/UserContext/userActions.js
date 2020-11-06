/* eslint-disable no-undef */
import axios from "axios"

import { SIGN_IN, SIGN_OUT, SIGN_UP } from "./userActionTypes"

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

export const signInUser = async (dispatch, formData) => {
  const options = {
    method: "post",
    url: `${process.env.GATSBY_API_URL}/user/auth/login`,
    data: formData,
    withCredentials: true,
  }

  try {
    const response = await axios(options)
    dispatch({ type: SIGN_IN, payload: response.data.user })
  } catch (err) {
    console.log(err)
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

  const options = {
    method: "post",
    url: `${process.env.GATSBY_API_URL}/user/auth/register`,
    data: userData,
    withCredentials: true,
  }

  try {
    const response = await axios(options)
    dispatch({ type: SIGN_UP, payload: response.data.user })
  } catch (err) {
    console.log(err)
  }
}

export const signOutUser = dispatch => {
  dispatch({ type: SIGN_OUT })
}
