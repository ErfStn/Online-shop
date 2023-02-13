import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../context/provider";
import "./cart.css";
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
					{cart.map(item => (
						<div key={item.id} className="itemList">
							<div className="itemImg">
								<img src={item.image} alt={cart.name}></img>
							</div>
							<div>
								<p>{item.name}</p>
							</div>
							<div>
								<p>${item.price}</p>
							</div>
							<div className="itemBtn">
								<button onClick={() => decHandler(item)}>-</button>
								<p className="">{item.quantity}</p>
								<button onClick={() => incHandler(item)}>+</button>
							</div>
							<div>
								<p>${item.price * item.quantity}</p>
							</div>
						</div>
					))}
				</section>
				<section className="cartSummery">
					<div>cart cartSummery</div>
					<p>{total}$</p>
				</section>
			</div>
		</Layout>
	);
};

export default CartPage;
