import { useCart, useCartActions } from "../context/provider";
import * as data from "../data";
import Layout from "../Layout/Layout";

const HomePage = () => {
	const cart = useCart()
	const dispatch = useCartActions();
	const addProductHandler = product => {
		dispatch({ type: "ADD_TO_CART", payload: product });
		// console.log(product);
	};

	return (
		<Layout>
			<h2>Online Shop</h2>
			<main className="container">
				<section className="productList">
					{data.products.map(product => {
						return (
							<section className="product" key={product.id}>
								<div>
									<img src={product.image} alt={product.name} />
								</div>
								<div className="produtcDescription">
									<p>{product.name}</p>
									<p>$ {product.price}</p>
									<button
										className="btn primary"
										onClick={() => {
											addProductHandler(product);
										}}
									>
										add to cart
									</button>
								</div>
							</section>
						);
					})}
				</section>
			</main>
		</Layout>
	);
};

export default HomePage;
