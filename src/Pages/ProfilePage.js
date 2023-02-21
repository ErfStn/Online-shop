import { useAuth } from "../context/AuthProvider";
import Layout from "../Layout/Layout";

const Profile = () => {
    const userData = useAuth()
	return (
		<Layout>
            <div className="container">
                <div className="profileDetail">
                    <h2>Profile Detail</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Phone Number: {userData.phoneNumber}</p>
                </div>
            </div>
		</Layout>
	);
};

export default Profile;
