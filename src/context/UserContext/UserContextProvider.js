import React, { createContext, useReducer, useContext } from "react"
import PropTypes from "prop-types"
import userReducer from "./userReducer"

const UserContext = createContext()

const initialState = {
  loading: false,
  error: null,
  isSignedIn: false,
  userData: null,
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider value={{ user: state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("No context provided")
  }

  return context
}

UserContextProvider.propTypes = {
  children: PropTypes.node,
}
