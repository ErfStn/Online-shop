import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Common/Input";
import "./formStyle.css";
import { toast } from "react-toastify";
import { loginUser } from "../../Servises/loginServices";
import { useAuth, useAuthActions } from "../../context/AuthProvider";
import useQuerry from "../../Hooks/querry";
import { useEffect } from "react";

const LoginForm = () => {
	const navigate = useNavigate();
	const setAuth = useAuthActions();
	const userData = useAuth();
	const querry = useQuerry();
	const redirect = querry.get("redirect") || "/";

	useEffect(() => {
		if (userData) navigate(redirect);
	}, [redirect, userData]);

	const initialValues = {
		email: "",
		password: "",
	};

	const onSubmit = async values => {
		try {
			const { data } = await loginUser(values);
			setAuth(data);
			navigate("/" + redirect);
		} catch (error) {
			if (error.response && error.response.data.message) {
				toast.error(`${error.response.data.message}`, {
					position: toast.POSITION.TOP_LEFT,
				});
			}
		}
	};

	const validationSchema = yup.object({
		email: yup.string().email("Invalid email").required("Email is required"),

		password: yup.string().required("Please Enter your password"),
	});

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
		validateOnMount: true,
		enableReinitialize: true,
	});
	return (
		<div className="container">
			<form onSubmit={formik.handleSubmit}>
				<Input formik={formik} label="Email" name="email" />
				<Input
					formik={formik}
					label="Password"
					name="password"
					type="password"
				/>
				<button type="submit" className="btn primary">
					Log in
				</button>
				<Link to={`/signup?redirect=${redirect}`}>
					Don't have an account yet?
				</Link>
			</form>
		</div>
	);
};

export default LoginForm;
