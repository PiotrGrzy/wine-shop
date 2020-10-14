import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Link to="/wines/reds">Reds</Link> <br />
    <Link to="/wines/whites">Whites</Link> <br />
    <Link to="/wines/sparkling">Sparkling</Link> <br />
  </>
)

export default IndexPage
