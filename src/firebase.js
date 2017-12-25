const firebase = require('firebase');

const apiConf = {
  databaseURL: 'https://hacker-news.firebaseio.com',
};
export const firebaseApp = firebase.initializeApp(apiConf);
export const db = firebaseApp.database();
