import React, { useState } from "react"
import { sortWines } from "../utils/sorting"
import Pagination from "./Pagination"
import WineListItem from "./WineListItem"
import WineListStyles from "../styles/WineListStyles"
import StyledSelect from "../styles/StyledSelect"
import { NAME_ASC, NAME_DES, PRICE_ASC, PRICE_DES } from "../consts/sorting"
import styled from "styled-components"

const StyledSortingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    border: none;
    outline: none;
    font-size: 1.6rem;
    padding: 1rem;
    margin-left: 1rem;
  }
  label {
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    font-size: 2rem;
    padding: 1rem;
  }
`

const WineList = ({ wines, total, title }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState(NAME_ASC)
  const [winesPerPage, setWinesPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(0)

  const filteredWines = wines.filter(({ name }) => {
    return !searchQuery || name.includes(searchQuery)
  })

  const totalPages = Math.ceil(filteredWines.length / winesPerPage)

  const sortedWines = sortWines(sortBy, filteredWines)

  const winesWithPagination = sortedWines.splice(
    currentPage * winesPerPage,
    winesPerPage
  )

  return (
    <div>
      <p>total in our stock: {total}</p>
      <StyledSortingWrapper>
        <label htmlFor="search">
          Search:
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
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

export default WineList
