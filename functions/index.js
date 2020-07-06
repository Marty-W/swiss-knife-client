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
    const userRef = admin.firestore().collection('users').doc(uid)
    const pomoStatsRef = userRef.collection('pomo').doc('stats')
    const timeEntriesRef = userRef.collection('pomo').doc('timeEntries')
    const taskListRef = userRef.collection('taskList').doc('todos')

    userRef.set({
      name: displayName,
      email,
    })

    pomoStatsRef.set({
      dailyGoal: 0,
      completed: 0,
    })

    timeEntriesRef.set({
      timeEntries: [],
    })
  })
