import React from "react"
import Layout from "./src/components/Layout"
import { CartContextProvider } from "./src/context/CartContext/CartContextProvider"
import { UserContextProvider } from "./src/context/UserContext/UserContextProvider"

export function wrapPageElement({ element, props }) {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Layout {...props}>{element}</Layout>
      </CartContextProvider>
    </UserContextProvider>
  )
}
