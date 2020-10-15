<template lang="pug">
.base-container
  .base-body
    .base-btnbar
      v-btn(outlined, color="indigo") Projects
      v-btn(outlined color="purple lighten-1") Messages
      v-btn(outlined color="blue lighten-1") Tasks
      v-btn(outlined color="blue-grey lighten-2") Settings
    .base-display
      app-messages

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TaskBoxVue from '../../components/Boxes/TaskBox.vue';
import SidebarActionsVue from '../../components/Menus/SidebarActions.vue';
import { Task } from '@/types';
import MessageContainer from '@/components/Boxes/Message.container.vue';

@Component({
  name: 'UserBase',
  components: {
    'app-sidebar-actions': SidebarActionsVue,
    'app-taskbox': TaskBoxVue,
    'app-messages': MessageContainer,
  },
})
export default class UserBase extends Vue {
  tasks: Array<Task> = [];

  mounted() {
    this.$store.dispatch('fetchTasks');
    this.tasks = this.$store.state.Task.tasks;
  }
}
</script>

<style lang="scss" scoped>
.base-container {
  width: 100%;
  height: 100vh;
  .base-body {
    width: 95%;
    height: 90%;
    // background: gray;
    margin: 0 auto;
    margin-top: 1rem;
    .base-btnbar {
      width: 80%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      margin: 0 auto;
      padding-top: 2rem;
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
    }
    .base-display {
      width: 75%;
      height: 80%;
      margin: 0 auto;
      margin-top: 1rem;
    }
  }
}
</style>
