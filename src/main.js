import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAHfjPzkvazWvmXr1rZdDHcFb7aBOSIyL4",
    authDomain: "loginapp-d6516.firebaseapp.com",
    projectId: "loginapp-d6516",
    storageBucket: "loginapp-d6516.appspot.com",
    messagingSenderId: "456899811699",
    appId: "1:456899811699:web:99232f9cf6fd40cb4b4d06",
    measurementId: "G-F537KRTJPF"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;

import './assets/styles/style.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
