import React from 'react';

import { FormLabelGroup } from '../FormLabelGroup';
import { ClientsContext } from '../../providers';

const AddressForm: React.FC<{ name: 'shippingAddress' | 'billingAddress' }> = ({ name }) => {
	const { register, errors, shippingAddress, billingAddress } = React.useContext<
		ClientsProviderProps
	>(ClientsContext);

	return (
		<>
			<FormLabelGroup
				id={`${name}.addressLine1`}
				label="Address line 1"
				register={register}
				errors={errors}
				defaultValue={
					name === 'shippingAddress' ? shippingAddress?.addressLine1 : billingAddress?.addressLine1
				}
			/>
			<FormLabelGroup
				id={`${name}.addressLine2`}
				label="Address line 2"
				register={register}
				errors={errors}
				defaultValue={
					name === 'shippingAddress' ? shippingAddress?.addressLine2 : billingAddress?.addressLine2
				}
			/>
			<FormLabelGroup
				id={`${name}.city`}
				label="City"
				register={register}
				errors={errors}
				defaultValue={name === 'shippingAddress' ? shippingAddress?.city : billingAddress?.city}
			/>
			<FormLabelGroup
				id={`${name}.state`}
				label="State / Province"
				register={register}
				errors={errors}
				defaultValue={name === 'shippingAddress' ? shippingAddress?.state : billingAddress?.state}
			/>
			<FormLabelGroup
				id={`${name}.postalCode`}
				label="Postal code"
				register={register}
				errors={errors}
				defaultValue={
					name === 'shippingAddress' ? shippingAddress?.postalCode : billingAddress?.postalCode
				}
			/>
			<FormLabelGroup
				id={`${name}.country`}
				label="Country"
				register={register}
				errors={errors}
				defaultValue={
					name === 'shippingAddress' ? shippingAddress?.country : billingAddress?.country
				}
			/>
		</>
	);
};

const AddressDetails: React.FC = () => {
	return (
		<>
			<ul className="nav nav-pills mb-3" id="addresses" role="tablist">
				<li className="nav-item">
					<a
						className="nav-link active"
						id="billingaddress-tab"
						data-toggle="tab"
						href="#billingaddress"
						role="tab"
						aria-controls="billingaddress"
						aria-selected="true"
					>
						Billing Address
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="shippingaddress-tab"
						data-toggle="tab"
						href="#shippingaddress"
						role="tab"
						aria-controls="shippingaddress"
						aria-selected="false"
					>
						Shipping Address
					</a>
				</li>
			</ul>
			<div className="tab-content" id="addressesContent">
				<div
					className="tab-pane fade show active"
					id="billingaddress"
					role="tabpanel"
					aria-labelledby="billingaddress-tab"
				>
					<AddressForm name="billingAddress" />
				</div>
				<div
					className="tab-pane fade"
					id="shippingaddress"
					role="tabpanel"
					aria-labelledby="shippingaddress-tab"
				>
					<AddressForm name="shippingAddress" />
				</div>
			</div>
		</>
	);
};

export { AddressDetails };
