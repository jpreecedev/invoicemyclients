import * as React from 'react';

export const ClientsContext = React.createContext<ClientsProviderProps>({
	register: (undefined as unknown) as any,
	errors: (undefined as unknown) as any,
	clientDetails: undefined,
	contacts: undefined,
	billingAddress: undefined,
	shippingAddress: undefined,
	additionalInfo: undefined,
});

export class ClientsProvider extends React.Component<ClientsProviderProps> {
	render() {
		const { children, ...rest } = this.props;
		return <ClientsContext.Provider value={{ ...rest }}>{children}</ClientsContext.Provider>;
	}
}

export const ClientsConsumer = ClientsContext.Consumer;
