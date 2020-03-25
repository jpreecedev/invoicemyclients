import React from 'react'
import firebase from 'firebase/app'
import { useList } from 'react-firebase-hooks/database'
import { useAuthState } from 'react-firebase-hooks/auth'

import { CLIENTS_REF } from '../constants/firebase'
import { Loading } from '../components/Loading'

function useFirebaseList<T>(): [T[], null] | [null, null | React.ReactElement] {
  const [user, initialising] = useAuthState(firebase.auth())
  const [snapshots, loading] = useList(firebase.database().ref(`${user?.uid}/${CLIENTS_REF}/`))

  if (loading || initialising) {
    return [null, <Loading key="loading" />]
  }

  if (!snapshots) {
    return [null, null]
  }

  return [snapshots.map(snapshot => snapshot.val()) as T[], null]
}

export { useFirebaseList }
