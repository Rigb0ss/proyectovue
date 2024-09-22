<script>
import Whatsapp from './icons/IconWhatsapp.vue'


</script>
<template>
  <footer class="footer">
    <p>
    
      <a href="https://wa.me/59892868073" target="_blank" class="unstyled-link">
        092868073 <Whatsapp class="whatsapp-icon"/>
      </a> 
      |
      <a href="mailto:Colinasdeleden2021@gmail.com" class="unstyled-link">Colinasdeleden2021@gmail.com</a>
    </p>
  </footer>
</template>

<script setup>
const whatsappLink = "https://wa.me/59892868073";
</script>

  <style scoped>
  .footer {
    text-align: center;
    width: 100%;
    padding: 10px;
    background-color: rgba(65, 206, 253, 0.849);
    color: #333;
  }
  
  .footer p {
    margin: 5px 0;
    font-size: 20px;
    font-weight: bold;
  }
  .whatsapp-icon {
  position: relative;
  top: 1px;
  height: 30px;
  width: 30px;
}
.unstyled-link {
  text-decoration: none;
  color: inherit; /* Inherit color from parent */
  display: inline-flex; /* Ensure the icon is displayed correctly */
}
  </style>