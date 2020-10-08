<template>
  <v-app>
    <v-main class="main-bod">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.main-bod{
  background: #22272e;
}
:root {
  --color-bg-dark: rgb(51, 62, 74);
  --color-primary: #d8a2e8;
}
</style>
