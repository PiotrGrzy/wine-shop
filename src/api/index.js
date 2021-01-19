/* eslint-disable no-undef */
import axios from "axios"

export const api = axios.create({
  baseURL: process.env.GATSBY_USERS_SERVER_URL,
  withCredentials: true,
  timeout: 10 * 1000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "https://gatsby-wine-shop-backend.herokuapp.com/",
  },
})
