<template>
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="item in items" :key="item.src">
        <img :src="item.src" :alt="item.alt" class="carousel__item" />
      </Slide>
  
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Autoplay',
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    data() {
      return {
        items: [
          { src: 'https://picsum.photos/600/400/?image=0', alt: 'Image 1' },
          { src: 'https://picsum.photos/600/400/?image=1', alt: 'Image 2' },
          // Add more images as needed
        ],
      }
    },
  })
  </script>
  
  <style scoped>
  .carousel__item {
    width: 100%;
    height: 520px;
  }
  
  </style>