import React from "react"
import SEO from "components/SEO"
import BgBackDropWrapper from "../styles/BgBackDropWrapper"
import styled from "styled-components"
import StyledLink from "../styles/StyledLink"

const StyledConfirmation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin: 4rem 1rem;
    color: var(--white);
  }
  .box {
    border-radius: 5px;
    padding: 2rem;
    margin: 2rem;
    background-color: var(--primary-light);
  }
  p {
    font-size: 1.6rem;
    margin: 4rem 1rem;
    color: var(--secondary-light);
  }
`

const ContinueLink = styled(StyledLink)`
  text-align: center;
  margin: 2rem auto;
  width: 20rem;
  border-radius: 1rem;
  padding: 1rem;
  background-color: var(--primary);
`

const success = () => {
  return (
    <>
      <SEO title="Order has been sent, thank you!" />
      <div className="container">
        <BgBackDropWrapper>
          <StyledConfirmation>
            <div className="box">
              <h2>Thank you, your order has been sent.</h2>
              <p>You will receive all details on your email address</p>

              <ContinueLink color="var(--secondary-light)" to="/">
                Continue
              </ContinueLink>
            </div>
          </StyledConfirmation>
        </BgBackDropWrapper>
      </div>
    </>
  )
}

export default success
