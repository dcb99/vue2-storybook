<template>
  <v-container>
    <v-row class="text-center">
      <VuetifyButton label="SUBMIT" />
    </v-row>
  </v-container>
</template>

<script>
import VuetifyButton from '../stories/VuetifyButton.vue';

export default {
  name: 'HelloWorld',
  componets: {
    VuetifyButton,
  },
};
</script>
