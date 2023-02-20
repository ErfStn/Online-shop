import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Common/Input";
import "./formStyle.css";
import { toast } from "react-toastify";
import { loginUser } from "../../Servises/loginServices";
import { useAuthActions } from "../../context/AuthProvider";

const LoginForm = () => {
	const navigate = useNavigate();
	const setAuth = useAuthActions();
	const initialValues = {
		email: "",
		password: "",
	};

	const onSubmit = async values => {
		try {
			const { data } = await loginUser(values);
			setAuth(data);
			navigate("/");
		} catch (error) {
			if (error.response && error.response.data.message) {
				toast.error(`${error.response.data.message}`, {
					position: toast.POSITION.TOP_LEFT,
				});
			}
		}
		console.log(values);
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
				<Link to="/signup">Don't have an account yet?</Link>
			</form>
		</div>
	);
};

export default LoginForm;
