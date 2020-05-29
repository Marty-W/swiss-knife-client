const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

// TODO maintenance job az budes mit hotovy tasks a habits
// https://firebase.google.com/docs/functions/schedule-functions

exports.createUserDb = functions
  .region('europe-west2')
  .auth.user()
  .onCreate((user) => {
    const { uid, email, displayName } = user

    admin
      .firestore()
      .collection('users')
      .doc(uid)
      .set({
        name: displayName,
        email,
        pomo: {
          dailyGoal: 0,
          completed: 0,
        },
      })
  })