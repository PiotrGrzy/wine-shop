import React from "react"
import PropTypes from "prop-types"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { StyledWrapper, StyledButton } from "./styles"

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (currentPage > totalPages) {
    setCurrentPage(totalPages - 1)
  }
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
