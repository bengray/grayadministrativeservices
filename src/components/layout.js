import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "@mui/material"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>

      </div>
      <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            background: `var(--color-secondary)`,
          }}
        >
          <div
            className="footer"
            style={{
              margin: `0 auto`,
              maxWidth: `var(--size-content)`,
              padding: `var(--size-gutter)`,
              color: `var(--color-text-secondary)`,
            }}
          >
            © {new Date().getFullYear()} &middot; {data.site.siteMetadata?.title || ``}<br />
            <Link href="/" underline="hover">Some Link Text</Link>
          </div>
        </footer>
    </>
  )
}

export default Layout
