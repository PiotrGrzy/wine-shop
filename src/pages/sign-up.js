import React from "react"
import SignUpForm from "../components/SignUpForm"
import BgBackDropWrapper from "../styles/BgBackDropWrapper"

const signUp = () => {
  return (
    <div className="container">
      <BgBackDropWrapper>
        <SignUpForm />
      </BgBackDropWrapper>
    </div>
  )
}

export default signUp
