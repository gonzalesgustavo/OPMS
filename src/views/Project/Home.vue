<template lang="pug">
.project-home
  app-darkbar
  v-container(elevation="4")
    app-addbar
      h3(slot="title") Tasks
      v-icon(color="blue-grey lighten-2", size="45") mdi-plus-box
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
import TriTicketContainer from '@/components/Containers/TriTicketBox.container.vue';
import DarkBarVue from '@/components/Design/DarkBar.vue';
import TopBar from '@/components/Menus/TopBar.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ProjectHome',
  components: {
    'app-darkbar': DarkBarVue,
    'app-tribox': TriTicketContainer,
    'app-addbar': TopBar,
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
