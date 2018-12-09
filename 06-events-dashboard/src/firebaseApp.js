import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAlVYYVySxYQaNzts2eGV4TnCkMzwCv5Xk',
  authDomain: 'turnout-vue-117c4.firebaseapp.com',
  databaseURL: 'https://turnout-vue-117c4.firebaseio.com',
  projectId: 'turnout-vue-117c4',
  storageBucket: 'turnout-vue-117c4.appspot.com',
  messagingSenderId: '838751226963'
};

export const firebaseApp = firebase.initializeApp(config);

export const eventsRef = firebase
  .database()
  .ref()
  .child('events');
