<template>
    <div id="map" style="height: 800px; width: 1400px; margin-top: 20px;  margin-bottom: 20px; z-index: 0;"></div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    if (window.initMap) {
      window.initMap();
    } else {
      console.error('initMap function is not defined');
    }
  });
  </script>
  
  <style scoped>

  </style>