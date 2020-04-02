import React from 'react';

import { FormLabelGroup } from '../FormLabelGroup';
import { ClientsContext } from '../../providers';

const Contacts: React.FC = () => {
	const { register, errors, contacts } = React.useContext<ClientsProviderProps>(ClientsContext);

	return (
		<>
			<FormLabelGroup
				id="contacts.firstName"
				label="First name"
				register={register}
				errors={errors}
				validation={{ required: true, minLength: 1, maxLength: 50 }}
				defaultValue={contacts?.firstName}
			/>
			<FormLabelGroup
				id="contacts.lastName"
				label="Last name"
				register={register}
				errors={errors}
				validation={{ required: true, minLength: 1, maxLength: 50 }}
				defaultValue={contacts?.lastName}
			/>
			<FormLabelGroup
				id="contacts.email"
				label="Email address"
				register={register}
				errors={errors}
				defaultValue={contacts?.email}
			/>
			<FormLabelGroup
				id="contacts.phoneNumber"
				label="Phone number"
				register={register}
				errors={errors}
				defaultValue={contacts?.phoneNumber}
			/>
		</>
	);
};

export { Contacts };
