import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartProvider from "./context/provider";
import CartPage from "./Pages/Cart";
import HomePage from "./Pages/HomePage";
import Checkout from "./Component/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import AuthProvider from "./context/AuthProvider";
import Profile from "./Pages/ProfilePage";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<CartProvider>
					<ToastContainer />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				</CartProvider>
			</AuthProvider>
		</div>
	);
}

export default App;
