import * as React from "react"
import { Link } from "gatsby"
import logo from "../../images/gas-logo.png"

const Menu = ({siteTitle}) => (
    <>
    <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        Home
      </Link>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        Contact
      </Link>
      <Link
        to="/"
      >
        <img src={logo} alt={siteTitle} aria-label={siteTitle} />
      </Link>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        Services
      </Link>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        About
      </Link>
    </>
)

export default Menu