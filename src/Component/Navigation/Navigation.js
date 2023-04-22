import { NavLink } from "react-router-dom";
import { useCart } from "../../context/provider";
import "./navigation.css";
import logo from "../../Image/logo.png";
import { useAuth } from "../../context/AuthProvider";

const Navigation = () => {
	const { cart, total } = useCart();
	const userData = useAuth();
	return (
		<header className="mainNavigation">
			<nav>
				<div>
					<ul>
						<li>
							<NavLink to="/">
								<img className="logo" src={logo} alt="logo" />
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? "activeLink" : "")}
							>
								Home
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className="testL">
							<NavLink
								to="/cart"
								className={({ isActive }) => (isActive ? "activeLink" : "")}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									fill="currentColor"
									className="bi bi-cart"
									viewBox="0 0 16 16"
								>
									{" "}
									<path
										d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
										fill="#a855fa"
									></path>{" "}
								</svg>
							</NavLink>
							<span>{cart.length}</span>
						</li>
						<li>
							<NavLink
								to={userData ? "/profile" : "/login"}
								className={"navLink"}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="26"
									height="26"
								>
									{" "}
									<svg>
										{" "}
										<path fill="none" d="M0 0h24v24H0z" />{" "}
										<path
											fill="#a855fa"
											d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
										/>{" "}
									</svg>{" "}
								</svg>
								{userData ? "Profile" : "Login / signup"}
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
