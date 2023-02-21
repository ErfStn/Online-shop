import { useLocation } from "react-router-dom";

const useQuerry = () => {
	return new URLSearchParams(useLocation().search);
};

export default useQuerry;
