import React from 'react'
import { Link } from 'react-router-dom'


export default function Menu() {
  return (
  <aside className="main-sidebar sidebar-dark-primary elevation-5">
  {/* Brand Logo */}
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-4 pb-4 mb-4 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <Link to="/" className="d-block">Administrador</Link>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
         <li className="nav-item has-treeview">
          <Link to="/"  className="nav-link">
            <i className="nav-icon fas fa-home" />
            <p>
              Home
            </p>
          </Link>
        </li>  
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-hospital-user" />
            <p>
              Municipios
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/listado/Tamaulipas/homicidios/dolosos" className="nav-link">
              <i className="nav-icon fas fa-skull" />
                <p>Homidicios Dolosos</p>
              </Link>
            </li>
          </ul>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/listado/Tamaulipas/homicidios/culposos" className="nav-link">
              <i className="nav-icon fas fa-skull" />
                <p>Homidicios Culposos</p>
              </Link>
            </li>
          </ul>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/listado/Tamaulipas/secuestro" className="nav-link">
              <i className="nav-icon fas fa-skull"/>
                <p>Secuestro</p>
              </Link>
            </li>
          </ul>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/listado/Tamaulipas/feminicidios" className="nav-link">
              <i className="nav-icon fas fa-skull"/>
                <p>Femincidios</p>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-hospital-user" />
            <p>
              Estados
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/listado/Estados/homicidios/dolosos" className="nav-link">
              <i className="nav-icon fas fa-skull" />
                <p>Homidicios Dolosos</p>
              </Link>
            </li>
          </ul>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/listado/Estados/homicidios/culposos" className="nav-link">
              <i className="nav-icon fas fa-skull" />
                <p>Homidicios Culposos</p>
              </Link>
            </li>
          </ul>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/listado/Estados/secuestro" className="nav-link">
              <i className="nav-icon fas fa-skull"/>
                <p>Secuestro</p>
              </Link>
            </li>
          </ul>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/listado/Estados/feminicidios" className="nav-link">
              <i className="nav-icon fas fa-skull"/>
                <p>Femincidios</p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

  )
}
