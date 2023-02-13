import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartProvider from "./context/provider";
import Layout from "./Layout/Layout";
import CartPage from "./Pages/Cart";
import HomePage from "./Pages/HomePage";

function App() {
	return (
		<div className="App">
			<CartProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</CartProvider>
		</div>
	);
}

export default App;
