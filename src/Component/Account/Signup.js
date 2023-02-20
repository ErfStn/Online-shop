import Input from "../../Common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./formStyle.css";
import { signupUser } from "../../Servises/signupServices";
import { toast } from "react-toastify";
import { useAuthActions } from "../../context/AuthProvider";

const SignupForm = () => {
	// const [error, setError] = useState(null);
	const navigate = useNavigate();

	const setAuth = useAuthActions();

	const initialValues = {
		id: "",
		name: "",
		email: "",
		phoneNumber: "",
		password: "",
		cofirmPassword: "",
	};

	const validationSchema = yup.object({
		name: yup.string().max(12, "its too long!").required("Name is required"),
		email: yup.string().email("Invalid email").required("Email is required"),
		phoneNumber: yup
			.string()
			.required("Invalid phone number")
			.matches(/^[0-9]{11}$/, "Invalid phone number")
			.nullable(),
		password: yup
			.string()
			.required("Please Enter your password")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
				// (?=.*[!@#$%^&*])(?=.{8,})
				"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
			),
		cofirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "Passwords must match"),
	});

	const onSubmit = async values => {
		const { name, email, phoneNumber, password } = values;
		const userData = {
			name,
			email,
			phoneNumber,
			password,
		};
		try {
			const { data } = await signupUser(userData);
			setAuth(data);
			navigate("/");
		} catch (error) {
			if (error.response && error.response.data.message) {
				toast.error(`${error.response.data.message}`, {
					position: toast.POSITION.TOP_LEFT,
				});
			}
		}
	};

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
				<Input formik={formik} label="Name" name="name" />
				<Input formik={formik} label="Email" name="email" />
				<Input
					formik={formik}
					label="Phone Number"
					name="phoneNumber"
					type="tel"
				/>
				<Input
					formik={formik}
					label="Password"
					name="password"
					type="password"
				/>
				<Input
					formik={formik}
					label="Cofirm Password"
					name="cofirmPassword"
					type="password"
				/>
				<button
					type="submit"
					className="btn primary"

					// disabled={!formik.isValid}
				>
					Sign in
				</button>
				<Link to="/login">Allready have an account?</Link>
			</form>
		</div>
	);
};

export default SignupForm;
