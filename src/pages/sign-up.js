import React from "react"
import SEO from "components/SEO"
import SignUpForm from "../components/SignUpForm"
import BgBackDropWrapper from "../styles/BgBackDropWrapper"

const signUp = ({ location }) => {
  return (
    <>
      <SEO title="Register New Account" />
      <div className="container">
        <BgBackDropWrapper>
          <SignUpForm prevLocation={location.prevLocation} />
        </BgBackDropWrapper>
      </div>
    </>
  )
}

export default signUp
