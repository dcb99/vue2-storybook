<template>
  <v-btn :label="label"></v-btn>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
