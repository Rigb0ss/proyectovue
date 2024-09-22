import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps';
import deepEqual from 'fast-deep-equal';
const app = createApp(App)

app.use(createPinia())
app.use(router)

window.initMap = function () {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.6482353, lng: -55.0489685 },
      zoom: 12, 
    });
  
    new google.maps.Marker({
      position: { lat: -34.6482353, lng: -55.0489685 },
      map: map,
      title: 'Colinas del Edén',
    });
  };
app.mount('#app')