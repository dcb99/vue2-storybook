<template>
  <v-btn>{{ label }}</v-btn>
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
