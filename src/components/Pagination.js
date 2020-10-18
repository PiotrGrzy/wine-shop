import React from "react"
import PropTypes from "prop-types"

const Pagination = ({
  totalPages,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div>
      <div>
        <select
          value={itemsPerPage}
          onChange={e => setItemsPerPage(parseInt(e.target.value))}
        >
          {[20, 30, 50].map(value => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <p>
        Page {currentPage + 1}/{totalPages}
      </p>

      <div>
        <button
          disabled={currentPage <= 0}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          Prev
        </button>
        <button
          disabled={currentPage >= totalPages - 1}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  setItemsPerPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}

export default Pagination
