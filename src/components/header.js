import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GiWineBottle } from "react-icons/gi"
import { RiShoppingCartLine, RiShoppingCart2Fill } from "react-icons/ri"
import { ImUser } from "react-icons/im"
import styled from "styled-components"
import Navbar from "./Navbar"
import Button from "./Button"
import { useCart } from "../context/CartContext/CartContextProvider"
import { useUser } from "../context/UserContext/UserContextProvider"
import { signInUser, signOutUser } from "../context/UserContext/userActions"

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--dark-byzantium);
  padding: 1rem;
  /* box-shadow: 0px 2px 5px 0px var(--dark-byzantium); */
  h1 {
    font-size: 2.8rem;
    color: var(--misty-rose);
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart {
    position: relative;
    font-size: 3.3rem;
  }
  .cart-counter {
    position: absolute;
    font-size: 1.4rem;
    top: 0.8rem;
    right: 1rem;
    color: var(--wisteria);
  }
`

const StyledIcon = styled(GiWineBottle)`
  color: var(--misty-rose);
`

const Header = ({ siteTitle }) => {
  const { cart } = useCart()
  const { user, dispatch } = useUser()
  return (
    <>
      <StyledHeader>
        <div className="container">
          <h1>
            <StyledIcon />
            <Link to="/">{siteTitle}</Link>
          </h1>
          <div className="cart">
            <Link to="/order">
              {cart.items.length > 0 ? (
                <RiShoppingCart2Fill />
              ) : (
                <RiShoppingCartLine />
              )}
              {cart.items.length > 0 && (
                <span className="cart-counter">{cart.items.length}</span>
              )}
            </Link>
          </div>

          <div>
            {user.isSignedIn ? (
              <div>
                <ImUser />
                <Button onClick={() => signOutUser(dispatch)}>Sign Out</Button>
              </div>
            ) : (
              <div>
                <Button onClick={() => signInUser(dispatch)}>Sign In</Button>
                <Button onClick={() => signInUser(dispatch)}>Register</Button>
              </div>
            )}
          </div>
        </div>
      </StyledHeader>
      <Navbar />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
