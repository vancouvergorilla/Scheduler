import * as firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDlv_n99f3gvELdpLXQkxLtk1PYnckXnlA",
  authDomain: "scheduler-94a34.firebaseapp.com",
  databaseURL: "https://scheduler-94a34-default-rtdb.firebaseio.com",
  projectId: "scheduler-94a34",
  storageBucket: "scheduler-94a34.appspot.com",
  messagingSenderId: "519686643176",
  appId: "1:519686643176:web:de51c277c359033d31185d",
  measurementId: "G-7W6BMDGKL1"

};

firebase.initializeApp(firebaseConfig);

export { firebase };