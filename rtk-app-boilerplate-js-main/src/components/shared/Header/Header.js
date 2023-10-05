import { Link, NavLink } from "react-router-dom";

const Header = () => {
 
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          Redux Toolkit App Demo
        </Link>
      </div>
      <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <NavLink to="/" className="nav-link px-2">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" className="nav-link px-2">
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="nav-link px-2">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav-link px-2">
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
