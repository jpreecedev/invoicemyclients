import React from 'react'
import firebase from 'firebase/app'
import { useList, useObjectVal } from 'react-firebase-hooks/database'
import { useAuthState } from 'react-firebase-hooks/auth'

import { Loading } from '../components/Loading'

function useFirebaseList<T extends firebase.database.DataSnapshot>(
  ref: string
): [T[], null] | [null, null | React.ReactElement] {
  const [user, initialising] = useAuthState(firebase.auth())
  const [snapshots, loading] = useList(firebase.database().ref(`${user?.uid}/${ref}/`))

  if (loading || initialising) {
    return [null, <Loading key="loading" />]
  }

  if (!snapshots) {
    return [null, null]
  }

  return [
    snapshots.map(snapshot => ({
      key: snapshot.key,
      ...snapshot.val()
    })) as T[],
    null
  ]
}

function useFirebaseObject<T extends firebase.database.DataSnapshot>(
  ref: string
): [T, null] | [null, null | React.ReactElement] {
  const [user, initialising] = useAuthState(firebase.auth())
  const [value, loading] = useObjectVal<T>(firebase.database().ref(`${user?.uid}/${ref}/`))

  if (loading || initialising) {
    return [null, <Loading key="loading" />]
  }

  if (!value) {
    return [null, null]
  }

  return [value, null]
}

export { useFirebaseList, useFirebaseObject }
