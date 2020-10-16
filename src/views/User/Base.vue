<template lang="pug">
.base-container
  .base-body
    .base-btnbar
      v-btn(outlined, color="indigo", @click="selectedView = 'app-project-container'") Projects
      v-btn(outlined color="purple lighten-1", @click="selectedView = 'app-message-container'") Messages
      v-btn(outlined color="blue lighten-1", @click="selectedView = 'app-task-container'") Tasks
      v-btn(outlined color="amber darken-4", @click="selectedView = 'app-note-container'") Notes
    .base-display
      component(:is="selectedView") 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SidebarActionsVue from '../../components/Menus/SidebarActions.vue';
import MessageContainer from '@/components/Boxes/Message.container.vue';
import TaskContainer from '@/components/Boxes/Tasks.container.vue';
import ProjectContainer from '@/components/Boxes/Project.container.vue';
import NoteContainer from '@/components/Boxes/Note.container.vue';

@Component({
  name: 'UserBase',
  components: {
    'app-sidebar-actions': SidebarActionsVue,
    'app-message-container': MessageContainer,
    'app-task-container': TaskContainer,
    'app-project-container': ProjectContainer,
    'app-note-container': NoteContainer,
  },
})
export default class UserBase extends Vue {
  selectedView = 'app-project-container';
}
</script>

<style lang="scss" scoped>
.base-container {
  width: 100%;
  height: 100vh;
  .base-body {
    width: 95%;
    height: 90%;
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
