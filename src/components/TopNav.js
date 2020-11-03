import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useCart } from "../context/CartContext/CartContextProvider"
import { useUser } from "../context/UserContext/UserContextProvider"
import { signOutUser } from "../context/UserContext/userActions"
import { ImUser } from "react-icons/im"
import { GiWineBottle } from "react-icons/gi"
import { RiShoppingCartLine, RiShoppingCart2Fill } from "react-icons/ri"

const StyledIcon = styled(GiWineBottle)`
  color: var(--secondary-light);
`

const StyledTopNav = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 2rem;
  align-items: center;
  font-size: 1.6rem;
  color: var(--secondary-light);
  padding: 1rem;
  h1 {
    font-size: 2.8rem;
  }
  .cart {
    position: relative;
    font-size: 3.3rem;
    grid-column: 3;
  }
  .cart-counter {
    position: absolute;
    font-size: 1.4rem;
    font-weight: 700;
    top: 0.7rem;
    right: 1rem;
    color: var(--primary);
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    margin: 0 2rem;
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
