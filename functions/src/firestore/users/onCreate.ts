import { firestore } from 'firebase-functions'
import { IFirestore } from '../../interfaces/firestore'

const onCreate = firestore.document('users/{userId}').onCreate(async (snap, context) => {
  console.log(snap)
  console.log(context)
  return true
})

export const usersOnCreate: IFirestore = {
  name: 'firestoreUsersOnCreate',
  schedule: onCreate
}
