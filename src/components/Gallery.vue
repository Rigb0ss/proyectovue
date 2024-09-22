<template>
  <div>
    <Carousel :autoplay="8000" :wrap-around="true">
      <Slide v-for="(item, index) in items" :key="index">
        <img
          :src="item.src"
          :alt="item.alt"
          class="carousel__item"
          @click="openModal(index)"
        />
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>

    <Modal 
      v-if="modalVisible" 
      :src="items[currentIndex].src" 
      :alt="items[currentIndex].alt" 
      @close="closeModal" 
      @next="showNextImage" 
      @prev="showPrevImage" 
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import Modal from './Modal.vue';
import img1 from '@/images/img1.jpg';
  import img2 from '@/images/img2.jpg';
  import img3 from '@/images/img3.jpg';
  import img4 from '@/images/img4.jpg';
  import img5 from '@/images/img5.jpg';
  import img6 from '@/images/img6.jpg';
  import img7 from '@/images/img7.jpg';
  import img8 from '@/images/img8.jpg';
  import img9 from '@/images/img9.jpg';
  import img10 from '@/images/img10.jpg';
  import img20 from '@/images/img20.jpg';
  import img11 from '@/images/img11.jpg';
  import img12 from '@/images/img12.jpg';
  import img13 from '@/images/img13.jpg';
  import img14 from '@/images/img14.jpg';
  import img15 from '@/images/img15.jpg';
  import img16 from '@/images/img16.jpg';
  import img17 from '@/images/img17.jpg';
  import img18 from '@/images/img18.jpg';
  import img19 from '@/images/img19.jpg';
  import img21 from '@/images/img21.jpg';
  import img22 from '@/images/img22.jpg';
  import img23 from '@/images/img23.jpg';
  import img24 from '@/images/img24.jpg';
  import img25 from '@/images/img25.jpg';
  import img26 from '@/images/img26.jpg';
  import img27 from '@/images/img27.jpg';
  import img28 from '@/images/img28.jpg';
  import img29 from '@/images/img29.jpg';
  import img30 from '@/images/img30.jpg';
  import img31 from '@/images/img31.jpg';
  import img32 from '@/images/img32.jpg';
  import img33 from '@/images/img33.jpg';
  import img34 from '@/images/img34.jpg';
  import img35 from '@/images/img35.jpg';
  import img36 from '@/images/img36.jpg';
  import img37 from '@/images/img37.jpg';
  import img38 from '@/images/img38.jpg';
  import img39 from '@/images/img39.jpg';
  import img40 from '@/images/img40.jpg';


export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
    Pagination,
    Modal,
  },
  setup() {
    const modalVisible = ref(false);
    const currentIndex = ref(0);


    const items = [
    { src: img1, alt: 'Image 1' },
          { src: img2, alt: 'Image 1' },
          { src: img3, alt: 'Image 1' },
          { src: img4, alt: 'Image 1' },
          { src: img5, alt: 'Image 1' },
          { src: img6, alt: 'Image 1' },
          { src: img7, alt: 'Image 1' },
          { src: img8, alt: 'Image 1' },
          { src: img9, alt: 'Image 1' },
          { src: img10, alt: 'Image 1' },
          { src: img11, alt: 'Image 1' },
          { src: img12, alt: 'Image 1' },
          { src: img13, alt: 'Image 1' },
          { src: img14, alt: 'Image 1' },
          { src: img15, alt: 'Image 1' },
          { src: img16, alt: 'Image 1' },
          { src: img17, alt: 'Image 1' },
          { src: img18, alt: 'Image 1' },
          { src: img19, alt: 'Image 1' },
          { src: img20, alt: 'Image 1' },
          { src: img21, alt: 'Image 1' },
          { src: img22, alt: 'Image 1' },
          { src: img23, alt: 'Image 1' },
          { src: img24, alt: 'Image 1' },
          { src: img25, alt: 'Image 1' },
          { src: img26, alt: 'Image 1' },
          { src: img27, alt: 'Image 1' },
          { src: img28, alt: 'Image 1' },
          { src: img29, alt: 'Image 1' },
          { src: img30, alt: 'Image 1' },
          { src: img31, alt: 'Image 1' },
          { src: img32, alt: 'Image 1' },
          { src: img33, alt: 'Image 1' },
          { src: img34, alt: 'Image 1' },
          { src: img35, alt: 'Image 1' },
          { src: img36, alt: 'Image 1' },
          { src: img37, alt: 'Image 1' },
          { src: img38, alt: 'Image 1' },
          { src: img39, alt: 'Image 1' },
          { src: img40, alt: 'Image 1' },
      // Add more images as needed...
    ];

    const openModal = (index) => {
      currentIndex.value = index;
      modalVisible.value = true;
    };

    const closeModal = () => {
      modalVisible.value = false;
    };

    const showNextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % items.length;
    };

    const showPrevImage = () => {
      currentIndex.value = (currentIndex.value - 1 + items.length) % items.length;
    };

    return {
      items,
      modalVisible,
      currentIndex,
      openModal,
      closeModal,
      showNextImage,
      showPrevImage,
    };
  },
});
</script>

<style scoped>
.carousel__item {
  width: 1200px;
  height: 620px;
  cursor: pointer;
}
</style>