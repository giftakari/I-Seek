import React from "react"

function Header() {
  return (
    <nav>
      <div className="nav-wrapper purple darken-4">
        <a href="#!" className="brand-logo left">
          <i className="material-icons">backup</i>ISeek
        </a>
        <ul className="right">
          <li>
            <a href="sass.html">
              <i className="material-icons">search</i>
            </a>
          </li>
          <li>
            <a href="badges.html">
              <i className="material-icons">view_module</i>
            </a>
          </li>
          <li>
            <a href="collapsible.html">
              <i className="material-icons">refresh</i>
            </a>
          </li>
          <li>
            <a href="mobile.html">
              <i className="material-icons">more_vert</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
