import './assets/main.css'
import dotenv from 'dotenv'
dotenv.config();

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app') // mount the App.vue component within the #app div in the index.html file

const clerkPubKey = process.env.VITE_CLERK_PUBLISHABLE_KEY; // retrieve publishable key from env file

