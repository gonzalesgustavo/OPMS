<template lang="pug">
.project-home
  app-darkbar
  v-container(elevation="4")
    app-tribox
      div(slot="left")
        v-expansion-panels
          v-expansion-panel(
            v-for="i in 5"
            :key="i")
            v-expansion-panel-header title
            v-expansion-panel-content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</template>
<script lang="ts">
import TriTicketContainer from '@/components/Boxes/TriTicketBox.container.vue';
import DarkBarVue from '@/components/Design/DarkBar.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ProjectHome',
  components: {
    'app-darkbar': DarkBarVue,
    'app-tribox': TriTicketContainer,
  },
})
export default class ProjectHome extends Vue {}
</script>

<style lang="scss" scoped>
.project-home {
  width: 100%;
  height: 100vh;
}
</style>
