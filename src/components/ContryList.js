import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const query = graphql`
  {
    allWines {
      nodes {
        location {
          country
        }
      }
    }
  }
`

const ContryList = () => {
  const data = useStaticQuery(query)
  const uniqueCountries = [
    ...new Set(data.allWines.nodes.map(wine => wine.location.country)),
  ]
  return (
    <div>
      {uniqueCountries.map(country => (
        <Link key={country} to={`/wines/${country.slice(0, -1)}`}>
          {country}
        </Link>
      ))}
    </div>
  )
}

export default ContryList
