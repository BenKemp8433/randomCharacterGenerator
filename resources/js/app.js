import {createApp} from 'vue';
import App from './App.vue';

import Input from './components/Input.vue';

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = createApp({});

app.component('v-app', App);

app.component('v-input', Input);

app.mount('#app');
