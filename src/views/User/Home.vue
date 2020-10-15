<template lang="pug">
.userhome-container
  app-dark-bar
  router-view
</template>

<script>
import DarkBarVue from '../../components/Design/DarkBar.vue';
export default {
  name: 'UserHome',
  components: {
    'app-dark-bar': DarkBarVue,
  },
};
</script>
