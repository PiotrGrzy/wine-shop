import React, { useState } from "react"
import PropTypes from "prop-types"
import { sortWines } from "../utils/sortWines"
import Pagination from "./Pagination"
import WineListItem from "./WineListItem"
import WineListStyles from "../styles/WineListStyles"
import StyledSelect from "../styles/StyledSelect"
import {
  NAME_ASC,
  NAME_DES,
  PRICE_ASC,
  PRICE_DES,
} from "../consts/sortingOptions"
import styled from "styled-components"
import normalizeWineType from "../utils/normalizeWineType"

const StyledSortingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  input {
    border: none;
    outline: none;
    font-size: 1.6rem;
    padding: 0.5rem;
    margin-left: 1rem;
  }
  label {
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    padding: 0.5rem;
  }
`
const StyledTitle = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: var(--bg-backdrop-white);
  text-transform: capitalize;
  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    display: block;
  }
  p {
    margin-top: 1rem;
    font-size: 1.8rem;
  }
`

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
