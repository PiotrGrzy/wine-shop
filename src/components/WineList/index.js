import React, { useState } from "react"
import PropTypes from "prop-types"
import { sortWines } from "utils/sortWines"
import normalizeWineType from "utils/normalizeWineType"
import Pagination from "components/Pagination"
import WineListItem from "components/WineListItem"
import WineListStyles from "styles/WineListStyles"
import StyledSelect from "styles/StyledSelect"
import { NAME_ASC, NAME_DES, PRICE_ASC, PRICE_DES } from "consts/sortingOptions"
import { StyledTitle, StyledSortingWrapper } from "./styles"

const WineList = ({ wines, total, title }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState(NAME_ASC)
  const [winesPerPage, setWinesPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(0)

  const filteredWines = wines.filter(({ name }) => {
    return !searchQuery || name.toLowerCase().includes(searchQuery)
  })

  const totalPages = Math.ceil(filteredWines.length / winesPerPage)

  const sortedWines = sortWines(sortBy, filteredWines)

  const winesWithPagination = sortedWines.splice(
    currentPage * winesPerPage,
    winesPerPage
  )

  return (
    <div>
      <StyledSortingWrapper>
        <label htmlFor="search">
          Search:
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value.toLowerCase())}
            placeholder="Wine name.."
          />
        </label>
        <label htmlFor="sorting">
          Sort by:
          <StyledSelect
            id="sorting"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            <option value={NAME_ASC}>Name A-Z</option>
            <option value={NAME_DES}>Name Z-A</option>
            <option value={PRICE_ASC}>Price lowest to highest</option>
            <option value={PRICE_DES}>Price highest to lowest</option>
          </StyledSelect>
        </label>
        <label htmlFor="winesPerPage">
          Wines/Page:
          <StyledSelect
            id="winesPerPage"
            value={winesPerPage}
            onChange={e => setWinesPerPage(parseInt(e.target.value))}
          >
            {[20, 30, 50].map(value => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </StyledSelect>
        </label>
      </StyledSortingWrapper>

      <Pagination
        totalPages={totalPages}
        itemsPerPage={winesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <StyledTitle>
        <h2>{normalizeWineType(title)} wines</h2>
        <p>{total} wines in this category</p>
      </StyledTitle>
      <WineListStyles>
        {winesWithPagination.map(wine => {
          return <WineListItem key={wine.id} wine={wine} />
        })}
      </WineListStyles>
      <Pagination
        totalPages={totalPages}
        itemsPerPage={winesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

WineList.propTypes = {
  wines: PropTypes.array.isRequired,
  total: PropTypes.number,
  title: PropTypes.string,
}

export default WineList
