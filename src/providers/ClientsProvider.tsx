import * as React from 'react'

export const ClientsContext = React.createContext<FormRegistration>({
  register: (null as unknown) as any,
  errors: (null as unknown) as any
})

export class ClientsProvider extends React.Component<FormRegistration> {
  state = {}

  render() {
    const { children, register, errors } = this.props

    return (
      <ClientsContext.Provider value={{ register, errors }}>{children}</ClientsContext.Provider>
    )
  }
}

export const ClientsConsumer = ClientsContext.Consumer
