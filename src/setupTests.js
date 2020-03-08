// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import 'mutationobserver-shim'

jest.mock('firebase/app', () => {
  const firebasemock = require('firebase-mock')
  const mockauth = new firebasemock.MockAuthentication()
  const mockfirestore = new firebasemock.MockFirestore()

  mockauth.setPersistence = jest.fn()

  const mock = new firebasemock.MockFirebaseSdk(
    null, // RTDB
    () => mockauth,
    () => mockfirestore
  )

  const a = {
    ...mock,
    analytics: jest.fn()
  }

  a.auth.Auth = {
    Persistence: {
      LOCAL: 'LOCAL'
    }
  }

  return a
})
