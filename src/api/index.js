/* eslint-disable no-undef */
import axios from "axios"

export const api = axios.create({
  baseURL: process.env.GATSBY_USERS_SERVER_URL,
  withCredentials: true,
  timeout: 10 * 1000,
})
