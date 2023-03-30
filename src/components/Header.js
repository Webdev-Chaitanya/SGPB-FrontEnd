import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
    <header className="header-top-strip py-3">
      <div className="container=xxl">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <p>
              Hotline: <a href="tel:+91 8605336589">+91 8605336589</a>
              </p>
          </div>
        </div>
      </div>
    </header>
   </>
  )
}

export default Header