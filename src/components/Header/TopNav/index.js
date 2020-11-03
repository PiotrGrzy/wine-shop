import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useCart } from "cartContext/CartContextProvider"
import { useUser } from "userContext/UserContextProvider"
import { signOutUser } from "userContext/userActions"
import { ImUser } from "react-icons/im"
import { RiShoppingCartLine, RiShoppingCart2Fill } from "react-icons/ri"
import { StyledIcon, StyledTopNav } from "./styles"

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
            <button onClick={() => signOutUser(dispatch)}>Sign Out</button>
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
