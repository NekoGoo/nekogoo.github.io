import { createApp } from 'vue';
import './app';
import App from './App.vue';
import router from './router';
import { key, store } from './store';

// https://vuejs.org/style-guide
const app = createApp(App);
app.use(store, key); // State management
app.use(router); // Begin routing & history
app.mount('#app'); // Attach app to the DOM

console.log(`store attributes: ${store.state.attributes.data.length}`);
console.log(`store effects: ${store.state.effects.data.length}`);
console.log(`store tags: ${store.state.tags.data.length}`);
console.log(`store items: ${store.state.items.data.length}`);

console.log(`store liveGame: ${store.state.liveGame}`);
