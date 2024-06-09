import * as React from "react"
import Menu from "./Menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Menu siteTitle={ siteTitle } />
  </header>
)

export default Header
