<template>
  <v-btn :dark="isDark" class="btn-primary">{{ label }}</v-btn>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    isDark: Boolean,
  },
};
</script>
