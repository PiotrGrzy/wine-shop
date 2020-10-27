import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useCart } from "../context/CartContext/CartContextProvider"
import { useUser } from "../context/UserContext/UserContextProvider"
import { signInUser, signOutUser } from "../context/UserContext/userActions"
import { ImUser } from "react-icons/im"
import { GiWineBottle } from "react-icons/gi"
import { RiShoppingCartLine, RiShoppingCart2Fill } from "react-icons/ri"
import Button from "./Button"

const StyledIcon = styled(GiWineBottle)`
  color: var(--misty-rose);
`

const StyledTopNav = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 2rem;
  align-items: center;
  h1 {
    font-size: 2.8rem;
    color: var(--misty-rose);
  }
  .cart {
    position: relative;
    font-size: 3.3rem;
    grid-column: 3;
  }
  .cart-counter {
    position: absolute;
    font-size: 1.4rem;
    top: 0.8rem;
    right: 1rem;
    color: var(--wisteria);
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const TopNav = ({ siteTitle }) => {
  const { cart } = useCart()
  const { user, dispatch } = useUser()
  return (
    <StyledTopNav className="container">
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
      <div className="user-actions">
        {user.isSignedIn ? (
          <div>
            <ImUser />
            <p>Welcome {user.userData.firstName}!</p>
            <Button onClick={() => signOutUser(dispatch)}>Sign Out</Button>
          </div>
        ) : (
          <div>
            <Button onClick={() => signInUser(dispatch)}>Sign In</Button>
            <Button onClick={() => signInUser(dispatch)}>Register</Button>
          </div>
        )}
      </div>
    </StyledTopNav>
  )
}

export default TopNav
