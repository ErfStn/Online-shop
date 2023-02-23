import { Link, useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../context/AuthProvider";
import Layout from "../Layout/Layout";

const Profile = () => {
	const userData = useAuth();
	const setUserData = useAuthActions();
	const navigate = useNavigate();

	const logoutHandler = () => {
		setUserData(false);
		navigate("/");
	};

	return (
		<Layout>
			<div className="container">
				<div className="profileDetail">
					<h2>Profile Detail</h2>
					<p>Name: {userData.name}</p>
					<p>Email: {userData.email}</p>
					<p>Phone Number: {userData.phoneNumber}</p>
					<div>
						{" "}
						{userData ? (
							<button className="btn primary" onClick={logoutHandler}>
								Log out
							</button>
						) : (
							<Link className="btn primary" to="/login">
								Log in
							</Link>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Profile;
