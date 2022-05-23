import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../constants";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import styles from "../styles/component-styles/form-component.module.scss";

const { CHARTDATA } = ROUTES;
const phoneRegExp = /^[6789]\d{9}$/;
const emailRegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,12}$/;

const validations = Yup.object({
	name: Yup.string()
		.min(2, "Name must be at least 2 letters")
		.max(30, "Name should be less than 30 characters")
		.required("Name is required"),
	phone: Yup.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.required("Phone number is required"),
	email: Yup.string()
		.matches(emailRegExp, "Email is not valid")
		.required("Email is required"),
	password: Yup.string()
		.matches(
			passwordRegExp,
			"Password must contain at least one number,upper and lower case character"
		)
		.min(1, "Password should be less than 8 characters")
		.required("Password is required"),
	confirmPass: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Confirm your password"),
	fullname: Yup.string(),
});

const FormComponent = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.formContainer}>
			<h1 className={styles.formContainer__heading}>Create an account</h1>
			<Formik
				initialValues={{
					fullname: "",
					phone: "",
					email: "",
					password: "",
					confirmPass: "",
				}}
				validationSchema={validations}
				onSubmit={(values) => {
					console.log(values);
					// navigate(CHARTDATA);
				}}>
				{({ errors, touched }) => (
					<Form>
						<div className={styles.formContainer__inputWrapper}>
							<label className={styles.formContainer__inputWrapper__label}>
								Your email
							</label>
							<Field
								name='email'
								className={styles.formContainer__inputWrapper__input}
							/>
							{errors.email && touched.email ? (
								<span className={styles.formContainer__inputWrapper__error}>
									{errors.email}
								</span>
							) : null}
						</div>
						<div className={styles.formContainer__inputWrapper}>
							<label className={styles.formContainer__inputWrapper__label}>
								{" "}
								Your Password{" "}
							</label>
							<Field
								className={styles.formContainer__inputWrapper__input}
								type='password'
								name='password'
							/>
							{errors.password && touched.password ? (
								<span className={styles.formContainer__inputWrapper__error}>
									{errors.password}
								</span>
							) : null}
						</div>
						<div className={styles.formContainer__inputWrapper}>
							<label className={styles.formContainer__inputWrapper__label}>
								{" "}
								Confirm your password{" "}
							</label>
							<Field
								className={styles.formContainer__inputWrapper__input}
								type='password'
								name='confirmPass'
							/>
							{errors.confirmPass && touched.confirmPass ? (
								<span className={styles.formContainer__inputWrapper__error}>
									{errors.confirmPass}
								</span>
							) : null}
						</div>
						<div className={styles.formContainer__inputWrapper}>
							<label className={styles.formContainer__inputWrapper__label}>
								{" "}
								Your full name{" "}
							</label>
							<Field
								className={styles.formContainer__inputWrapper__input}
								name='fullname'
							/>
							{errors.fullname && touched.fullname ? (
								<span className={styles.formContainer__inputWrapper__error}>
									{errors.fullname}
								</span>
							) : null}
						</div>
						<div className={styles.formContainer__inputWrapper}>
							<label className={styles.formContainer__inputWrapper__label}>
								Your phone number
							</label>
							<Field
								className={
									styles["formContainer__inputWrapper__input--phoneInput"]
								}
								name='phone'
							/>
							{errors.phone && touched.phone ? (
								<span className={styles.formContainer__inputWrapper__error}>
									{errors.phone}
								</span>
							) : null}
						</div>
						{/* CHECKBOX To do */}
						{/* <div className={styles["formContainer__inputWrapper--checkbox"]}>
							<label
								className={
									styles["formContainer__inputWrapper__label--checkbox"]
								}>
								<Field
									type='checkbox'
									name='checked'
									value='accepted'
									className={styles.formContainer__inputWrapper__input}
								/>{" "}
								I read and agree Terms and Conditions
							</label>
						</div> */}
						<button type='submit' className={styles.cta__btn}>
							Create account
						</button>
					</Form>
				)}
			</Formik>
			{/* <Link className={styles.cta__btn} to={CHARTDATA}>
				{" "}
				Create Account{" "}
			</Link> */}
		</div>
	);
};
export default FormComponent;
