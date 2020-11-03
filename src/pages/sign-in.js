import React from "react"
import SEO from "components/SEO"
import SignInForm from "../components/SignInForm"
import BgBackDropWrapper from "../styles/BgBackDropWrapper"

const signIn = () => {
  return (
    <>
      <SEO title="Sign In" />
      <div className="container">
        <BgBackDropWrapper>
          <SignInForm />
        </BgBackDropWrapper>
      </div>
    </>
  )
}

export default signIn
