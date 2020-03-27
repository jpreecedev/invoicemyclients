import React from 'react'
import firebase from 'firebase/app'
import { useList, useObjectVal } from 'react-firebase-hooks/database'
import { useAuthState } from 'react-firebase-hooks/auth'
import { INVOICES_REF, CLIENTS_REF } from '../constants/firebase'

function useFirebaseInvoiceList(): [InvoiceFormData[] | null, boolean] {
  const [user, initialising] = useAuthState(firebase.auth())
  const [result, setResult] = React.useState<InvoiceFormData[]>([])
  const [loading, setLoading] = React.useState(true)

  const [snapshots, snapshotLoading] = useList(
    firebase.database().ref(`${user?.uid}/${INVOICES_REF}/`)
  )

  React.useEffect(() => {
    if (snapshotLoading || initialising) {
      return
    }

    setLoading(false)

    if (!snapshots) {
      setResult([])
      return
    }

    const mappedSnapshots = snapshots.map(
      snapshot =>
        ({
          key: snapshot.key,
          ...snapshot.val()
        } as InvoiceFormData)
    )

    const promises: Promise<firebase.database.DataSnapshot>[] = []
    mappedSnapshots.forEach(snapshot => {
      promises.push(
        firebase
          .database()
          .ref(`${user?.uid}/${CLIENTS_REF}/${snapshot.clientId}`)
          .once('value')
      )
    })

    Promise.allSettled(promises)
      .then(settledPromises => {
        settledPromises.forEach((settledPromise, index) => {
          const mappedSnapshot = mappedSnapshots[index]
          if (settledPromise.status === 'fulfilled') {
            const clientValue: ClientAddFormData = settledPromise.value.val()
            mappedSnapshot.companyName = clientValue.clientDetails.companyName
            mappedSnapshot.contactName = `${clientValue.contacts.firstName} ${clientValue.contacts.lastName}`
          }
        })
      })
      .finally(() => {
        setResult(mappedSnapshots)
      })
  }, [snapshotLoading, initialising, snapshots, user])

  return [result, loading]
}

function useFirebaseList<T extends firebase.database.DataSnapshot>(
  ref: string
): [T[] | null, boolean] {
  const [user, initialising] = useAuthState(firebase.auth())
  const [snapshots, loading] = useList(firebase.database().ref(`${user?.uid}/${ref}/`))

  if (loading || initialising) {
    return [null, true]
  }

  if (!snapshots) {
    return [null, false]
  }

  return [
    snapshots.map(snapshot => ({
      key: snapshot.key,
      ...snapshot.val()
    })) as T[],
    false
  ]
}

function useFirebaseObject<T extends firebase.database.DataSnapshot>(
  ref: string
): [T | null, boolean] {
  const [user, initialising] = useAuthState(firebase.auth())
  const [value, loading] = useObjectVal<T>(firebase.database().ref(`${user?.uid}/${ref}/`))

  if (loading || initialising) {
    return [null, true]
  }

  if (!value) {
    return [null, false]
  }

  return [value, false]
}

export { useFirebaseList, useFirebaseObject, useFirebaseInvoiceList }
