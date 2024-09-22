<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <img :src="src" :alt="alt" class="modal-image" />
      <button class="prev-btn" @click="prevImage"><</button>
      <button class="next-btn" @click="nextImage">></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
  },
  emits: ['close', 'next', 'prev'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
    nextImage() {
      this.$emit('next');
    },
    prevImage() {
      this.$emit('prev');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
}

.modal-image {
  max-width: 90vw;
  max-height: 80vh;
}

.prev-btn, .next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #dadcb8; 
  border: none; /* No border */
  color: Black; /* White text color */
  padding: 10px;
  cursor: pointer;
  font-size: 30px;
  z-index: 1;
  transition: opacity 0.3s; /* Smooth hover transition */
  opacity: 0.6; /* Make the button slightly transparent */
}

.prev-btn {
  left: -80px;
}

.next-btn {
  right: -80px;
}

.prev-btn:hover, .next-btn:hover {
  opacity: 1; 
}
</style>