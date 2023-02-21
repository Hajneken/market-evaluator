<template>
  <v-card prepend-icon="mdi-cog" title="Settings">
    <v-card-actions>
      <v-switch
        v-model="sliders"
        @change="toggleSliders"
        label="Use Sliders"
        color="indigo"
      ></v-switch>
      <!-- TODO toggling dark theme -->
      <!-- <v-btn @click="toggleTheme" icon="mdi-theme-light-dark"></v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Settings",
  methods: {
    toggleSliders() {
      this.$emit("sliders-toggled", this.sliders);
    },
  },
  data() {
    return {
      sliders: false,
    };
  },
};
</script>