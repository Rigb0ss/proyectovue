<script setup>
import Gallery from '@/components/Gallery.vue';
import TheWelcome from '../components/TheWelcome.vue';
import GoogleMaps from '@/components/GoogleMaps.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

</script>

<template>
  <Header />
  <main class="main-container">

    <div class="info">
      <TheWelcome />
    </div>

    <div id="gallery-section" class="full-width">
      <Gallery />
    </div>

    <div id="maps-section" class="maps">
      <GoogleMaps />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.info {
  max-width: 950px;
  margin: 0 auto;
  margin-top: 20px; 
}


.full-width {
  width: 100%;
  max-width: none;
  margin: 0; 
  padding: 0;
  
}
.maps{
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  width: 100%; 
}


#gallery-section, #maps-section {
  margin-top: 50px;
}

/* Handle responsiveness to ensure full width on all screen sizes */
@media (min-width: 1024px) {
  .info {
    max-width: 950px;
  }
  
  .full-width {
    width: 100%; /* Ensure full width for larger screens */
  }
}
</style>