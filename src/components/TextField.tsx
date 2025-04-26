import React from "react";

interface TextFieldProps {
	name: string;
	label: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}
const TextField = ({
	name,
	label,
	type,
	value,
	onChange,
	placeholder,
}: TextFieldProps) => {
	return (
		<div
			className="text-field"
		>
			<label
				htmlFor={name}
				style={{
					fontWeight: "400",
					fontSize: 16,
					color: "#000",
				}}
			>
				{label}:
			</label>
			<input
				type={type}
				id={name}
				name={name}
				required
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				className="input-field"
			/>
		</div>
	);
};

export default TextField;
