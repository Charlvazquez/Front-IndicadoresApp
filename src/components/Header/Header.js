import React from 'react'

export default function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white bg-success">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
  </ul>
  {/* SEARCH FORM */}
  <form className="form-inline ml-3">
  </form>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    {/* Messages Dropdown Menu */}
  </ul>
</nav>

  )
}
