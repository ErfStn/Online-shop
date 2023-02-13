import { createContext, useContext, useReducer } from "react";
import CartReducer from "./cartReducer";

const CartContext = createContext();
const CartContextDispacher = createContext();

const initialState = {
	cart: [],
	total: 0,
};

const CartProvider = ({ children }) => {
	const [cart, dispatch] = useReducer(CartReducer, initialState);

	return (
		<CartContext.Provider value={cart}>
			<CartContextDispacher.Provider value={dispatch}>
				{children}
			</CartContextDispacher.Provider>
		</CartContext.Provider>
	);
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispacher);
