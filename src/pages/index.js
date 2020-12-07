import * as React from "react"
import {Helmet} from "react-helmet";

// styles
const pageStyles = {
  color: "#330066",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#522d80",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <title>Carney Cheng</title>
      </Helmet>
      <h1 style={headingStyles}>
        Hi, I am Carney
        <br />
        <span style={headingAccentStyles}>— this website is under construction.</span>
      </h1>
    </main>
  )
}

export default IndexPage
