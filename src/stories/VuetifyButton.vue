<template>
  <v-btn class="btn-primary">{{ label }}</v-btn>
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

<style lang="scss">
@import '@/scss/main.scss';

.v-btn {
  background: $background-primary !important;
}
</style>
