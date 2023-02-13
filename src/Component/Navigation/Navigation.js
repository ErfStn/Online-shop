import { NavLink, Router } from "react-router-dom";
import { useCart } from "../../context/provider";
import "./navigation.css";

const Navigation = () => {
  const { cart, total } = useCart()
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="testL">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
            >
              Cart
            </NavLink>
            <span>{cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
