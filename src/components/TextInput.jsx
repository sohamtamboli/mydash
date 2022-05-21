import React from "react";

const TextInput = ({
	name,
	field,
	form: { touched, errors },
	label,
	...props
}) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input {...field} {...props} />
			{touched[field.name] && errors[field.name] && (
				<span>{`${errors[field.name]} || ""}`}</span>
			)}
		</div>
	);
};

export default TextInput;
