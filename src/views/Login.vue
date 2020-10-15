<template lang="pug">
.container
  app-slug(
    title='Ohmni Project Managment System',
    subtext='A Simple managment system for all programming projects'
  )
  .logsig-container
    v-card
      v-tabs(
        v-model="tab"
        background-color="deep-purple accent-4"
        centered
        dark
        icons-and-text)
        v-tabs-slider
        v-tab(href="#signup") Sign-up
          v-icon mdi-clipboard-account-outline
        v-tab(href="#login") Login
          v-icon mdi-door-open
        v-tab( href="#info") Info
          v-icon mdi-information-variant
    app-sys-form(:fType="tab")
</template>

<script lang="ts">
import Slug from '@/components/Design/Slug.vue';
import SystemForm from '@/components/Forms/SystemForm.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    'app-slug': Slug,
    'app-sys-form': SystemForm,
  },
})
export default class LoginView extends Vue {
  tab = '';
}
</script>

<style lang="scss" scoped>
.container {
  width: 90vw;
  height: 100vh;
  margin: 0 auto;
  .logsig-container {
    width: 500px;
    margin: 0 auto;
    margin-top: 4rem;
  }
}
</style>
