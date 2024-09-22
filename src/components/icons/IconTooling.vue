<template>
  <SvgIcon type="mdi" :path="mdiMapMarker" />
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMapMarker } from '@mdi/js';

export default {
  name: "IconTooling",
  components: {
    SvgIcon
  },
  data() {
    return {
      mdiMapMarker,
    };
  },
};
</script>
