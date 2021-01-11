import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useCartContext } from "cartContext/CartContextProvider"
import { useUserContext } from "userContext/UserContextProvider"
import { signOutUser } from "userContext/userActions"
import {
  RiShoppingCartLine,
  RiShoppingCart2Fill,
  RiLogoutBoxRLine,
} from "react-icons/ri"
import { StyledIcon, StyledTopNav } from "./styles"

const TopNav = ({ siteTitle }) => {
  const { cart } = useCartContext()
  const { user, dispatch } = useUserContext()
  return (
    <StyledTopNav className="container">
      <h1>
        <StyledIcon />
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div className="cart">
        <Link to="/order">
          {cart.items.length > 0 ? (
            <>
              <RiShoppingCart2Fill />
              <span className="cart-counter">{cart.items.length}</span>
            </>
          ) : (
            <RiShoppingCartLine />
          )}
        </Link>
      </div>
      <div className="user-actions">
        {user.isSignedIn ? (
          <div>
            <button onClick={() => signOutUser(dispatch)}>
              <RiLogoutBoxRLine style={{ fontSize: "3rem" }} />
            </button>
          </div>
        ) : (
          <div>
            <Link to="/sign-in">Sign In</Link>|
            <Link to="/sign-up">Register</Link>
          </div>
        )}
      </div>
    </StyledTopNav>
  )
}

TopNav.propTypes = {
  siteTitle: PropTypes.string,
}

export default TopNav
