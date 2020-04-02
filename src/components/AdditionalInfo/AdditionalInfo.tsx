import React from 'react';

import { FormLabelGroup } from '../FormLabelGroup';
import { ClientsContext } from '../../providers';

const AdditionalInfo: React.FC = () => {
	const { register, errors, additionalInfo } = React.useContext<ClientsProviderProps>(
		ClientsContext
	);

	return (
		<>
			<FormLabelGroup
				id="additionalInfo.currency"
				label="Currency"
				register={register}
				errors={errors}
				defaultValue={additionalInfo?.currency}
			/>
			<FormLabelGroup
				id="additionalInfo.paymentTerms"
				label="Payment terms"
				register={register}
				errors={errors}
				defaultValue={additionalInfo?.paymentTerms}
			/>
		</>
	);
};

export { AdditionalInfo };
