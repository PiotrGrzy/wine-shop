import React, { useState } from "react"
import { sortWines } from "../utils/sorting"
import Pagination from "./Pagination"
import WineListItem from "./WineListItem"
import WineListStyles from "../styles/WineListStyles"
import { NAME_ASC, NAME_DES, PRICE_ASC, PRICE_DES } from "../consts/sorting"

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
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <div>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value={NAME_ASC}>Name A-Z</option>
          <option value={NAME_DES}>Name Z-A</option>
          <option value={PRICE_ASC}>Price lowest to highest</option>
          <option value={PRICE_DES}>Price highest to lowest</option>
        </select>
      </div>
      <Pagination
        totalPages={totalPages}
        itemsPerPage={winesPerPage}
        setItemsPerPage={setWinesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <WineListStyles>
        {winesWithPagination.map(wine => {
          return <WineListItem key={wine.id} wine={wine} />
        })}
      </WineListStyles>
    </div>
  )
}

export default WineList
