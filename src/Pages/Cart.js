import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../context/provider";
import "./cart.css";
import { Link, NavLink } from "react-router-dom";

const CartPage = () => {
	const { cart, total } = useCart();
	const dispatch = useCartActions();
	if (!cart.length) {
		return (
			<Layout>
				<h2>cart is empty!</h2>
			</Layout>
		);
	}

	const incHandler = cartITem => {
		dispatch({ type: "ADD_TO_CART", payload: cartITem });
	};
	const decHandler = cartITem => {
		dispatch({ type: "REMOVE_PRODUCT", payload: cartITem });
	};

	return (
		<Layout>
			<div className="cart-page">
				<section className="cartItemList">
					<div className="cartheader">
						<div></div>
						<div>Name</div>
						<div>Off Price</div>
						<div>Quantity</div>
						<div>Total Price</div>
					</div>
					{cart.map(item => (
						<div key={item.id} className="itemList">
							<div className="itemImg">
								<img src={item.image} alt={cart.name}></img>
							</div>
							<div>
								<p>{item.name}</p>
							</div>
							<div>
								<p>${item.offPrice}</p>
							</div>
							<div className="itemBtn">
								<button onClick={() => decHandler(item)}>-</button>
								<button className="">{item.quantity}</button>
								<button onClick={() => incHandler(item)}>+</button>
							</div>
							<div>
								<p>${item.offPrice * item.quantity}</p>
							</div>
						</div>
					))}
				</section>
				<section>
					<CartSummery cart={cart} total={total} />
				</section>
			</div>
		</Layout>
	);
};
export default CartPage;

const CartSummery = ({ total, cart }) => {
	const originalTotalPrice = cart.length
		? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
		: 0;

	return (
		<section className="cartSummery">
			<h2>Cart Summery</h2>
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
			<NavLink
				to="/cart/checkout"
				className="btn primary "
			>
				Checkout
			</NavLink>
		</section>
	);
};
