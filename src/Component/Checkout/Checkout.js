import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useCart } from "../../context/provider";
import Layout from "../../Layout/Layout";
import "./checkout.css";

const Checkout = () => {
	const { cart, total } = useCart();
	const userData = useAuth();
	const originalTotalPrice = cart.length
		? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
		: 0;

	if (!cart.length) {
		return (
			<Layout>
				{" "}
				<main className="container">
					<Link to="/">Back to shopping</Link>
				</main>
			</Layout>
		);
	}

	return (
		<Layout>
			<main className="container ">
				<div className="checkoutPage">
					<section className="profilerDetail">
						<h3>Profile Detail</h3>

						<p>Name: {userData.name}</p>
						<p>Email: {userData.email}</p>
						<p>Phone Number: {userData.phoneNumber}</p>
					</section>
					<section className="cartDetail">
						<h3>Cart Detail</h3>
						<div className="summeryItem">
							<p>original total price</p>
							<p>{originalTotalPrice}$</p>
						</div>
						<div className="summeryItem">
							<p>discount price</p>
							<p>{originalTotalPrice - total}$</p>
						</div>
						<div className="summeryItem net">
							<p>total price</p>
							<p>{total}$</p>
						</div>
						<Link to="/signup?redirect=/checkout" className="btn primary ">
							Buy
						</Link>
					</section>
				</div>
			</main>
		</Layout>
	);
};

export default Checkout;
