<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --bg-dark: rgba(22, 70, 75, 0.568);
  --color-primary: rgb(25, 120, 129);
  --color-primary-tint: rgb(173, 243, 250);
  --color-dark: rgb(0, 0, 0);
}
</style>
