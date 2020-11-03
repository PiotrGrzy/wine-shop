import React from "react"

import SignInForm from "../components/SignInForm"
import BgBackDropWrapper from "../styles/BgBackDropWrapper"

const signIn = () => {
  return (
    <div className="container">
      <BgBackDropWrapper>
        <SignInForm />
      </BgBackDropWrapper>
    </div>
  )
}

export default signIn
