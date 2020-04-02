import React from 'react';
import clsx from 'clsx';

interface FormLabelGroupProps {
	id: string;
	label: string;
	validation?: Record<string, any>;
	defaultValue?: string;
}

const resolve = (obj: any, path: any) => {
	path = path.split('.');
	let current = obj;
	while (path.length) {
		if (typeof current !== 'object') return undefined;
		current = current[path.shift()];
	}
	return current;
};

const getValidationMessage = (label: string, error: Errors): string => {
	switch (error.type) {
		case 'required':
			return `${label} is required`;
		case 'maxLength':
			return `${label} is too long`;
		case 'minLength':
			return `${label} is too short`;
	}
	return 'This field is invalid';
};

const FormLabelGroup: React.FC<FormLabelGroupProps & FormRegistration> = ({
	id,
	label,
	register,
	errors,
	defaultValue = undefined,
	validation = { required: false },
}) => {
	const error = resolve(errors || {}, id);
	return (
		<div className="form-label-group">
			<input
				type="text"
				className={clsx('form-control form-control-flush', {
					'is-invalid': error,
				})}
				id={id}
				name={id}
				placeholder={label}
				ref={register(validation)}
				defaultValue={defaultValue}
			/>
			<label htmlFor={id}>{label}</label>
			{error && <div className="invalid-feedback">{getValidationMessage(label, error)}</div>}
		</div>
	);
};

export { FormLabelGroup };
