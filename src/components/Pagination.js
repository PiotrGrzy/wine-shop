import React from "react"
import PropTypes from "prop-types"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FcPrevious } from "react-icons/fc"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import styled from "styled-components"

const StyledWrapper = styled.div`
  margin: 2rem 0;
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-size: 2.4rem;
    vertical-align: center;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.6);
  }
`

const StyledButton = styled.button`
  padding: 1rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  color: var(--white);
  background-color: ${props =>
    props.disabled ? "lightgrey" : "var(--dark-purple)"};
  cursor: ${props => (props.disabled ? "auto" : "pointer")};
  &:hover {
    background-color: ${props =>
      props.disabled ? "lightgrey" : "var(--wisteria)"};
  }
  font-size: 3rem;
  border-radius: 5px;
`

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <StyledWrapper>
      <div className="buttons">
        <StyledButton
          disabled={currentPage <= 0}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          <BsChevronLeft color="var(--white)" />
        </StyledButton>
        <p>
          Page {currentPage + 1}/{totalPages}
        </p>

        <StyledButton
          disabled={currentPage >= totalPages - 1}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          <BsChevronRight color="var(--white)" />
        </StyledButton>
      </div>
    </StyledWrapper>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}

export default Pagination
