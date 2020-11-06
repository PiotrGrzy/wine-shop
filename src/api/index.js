/* eslint-disable no-undef */
import axios from "axios"

export const api = axios.create({
  baseURL: process.env.GATSBY_API_URL,
  withCredentials: true,
})
