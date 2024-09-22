<script>
import Whatsapp from './icons/IconWhatsapp.vue'

export default {
  methods: {
    scrollToGallery() {
      const galleryElement = document.getElementById("gallery-section");
      const offset = 120; // Adjust this value to control how much earlier it scrolls to

      if (galleryElement) {
        const galleryPosition = galleryElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: galleryPosition,
          behavior: "smooth"
        });
      }
    },
    scrollToMaps() {
      const mapsElement = document.getElementById("maps-section");
      if (mapsElement) {
        mapsElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<template>
  <header class="header">
    <img src="@/images/logo.png" alt="Logo" class="logo"/>
    <div class="nav-links">
      <p @click="scrollToGallery">Galería</p>
      <p @click="scrollToMaps">Ubicación</p>
      <p> 
        <a href="https://wa.me/59892868073">Whatsapp</a>
      </p>
    </div>
    <div class="nav-links">
      <p>
        <a href="mailto:Colinasdeleden2021@gmail.com">Colinasdeleden2021@gmail.com</a>
      </p>
    </div>
  </header>
</template>


<style scoped>

@font-face {
  font-family: 'Adam Script';
  src: url('@/assets/fonts/adam-script.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center the logo and nav links horizontally */
  padding: 10px;
  background-color: #dadcb8; /* Example background color */
}

.nav-links {
  display: flex;
  justify-content: space-between; /* Spread out the <p> elements */
  gap: 20px; /* Add space between the <p> elements */
  margin-top: 10px; /* Add some space between the logo and the links */
}

.nav-links p {
  margin: 0;
  color: #93b332;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Adam Script', cursive; 
  cursor: pointer;
}
.nav-links a {
  margin: 0;
  color: #93b332;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Adam Script', cursive; 
  cursor: pointer;
}
.header p:hover {
  text-decoration: underline;
}

.logo {
  width: 700px; /* Adjust the size of the logo */
  height: 300px;
}
</style>