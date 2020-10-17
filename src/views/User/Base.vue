<template lang="pug">
.base-container
  app-side-nav(:currentLocation="location" )
  .base-body
    .base-btnbar
      v-btn(outlined, color="indigo", @click="setLocation('project')") Projects
      v-btn(outlined color="purple lighten-1", @click="setLocation('message')") Messages
      v-btn(outlined color="blue lighten-1", @click="setLocation('task')") Tasks
      v-btn(outlined color="amber darken-4", @click="setLocation('note')") Notes
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
import SideNavBase from '@/components/Menus/SideNav.base.vue';

@Component({
  name: 'UserBase',
  components: {
    'app-sidebar-actions': SidebarActionsVue,
    'app-message-container': MessageContainer,
    'app-task-container': TaskContainer,
    'app-project-container': ProjectContainer,
    'app-note-container': NoteContainer,
    'app-side-nav': SideNavBase,
  },
})
export default class UserBase extends Vue {
  selectedView = 'app-project-container';
  location = 'project';

  setCurrentLoc() {
    this.location = this.$store.state.Button.baseNavAdd;
  }
  setLocation(location: string): void {
    this.$store.dispatch('assignBaseNavLocation', location);
    this.setCurrentLoc();

    switch (location) {
      case 'project':
        this.selectedView = 'app-project-container';
        break;
      case 'message':
        this.selectedView = 'app-message-container';
        break;
      case 'task':
        this.selectedView = 'app-task-container';
        break;
      case 'note':
        this.selectedView = 'app-note-container';
        break;
      default:
        this.selectedView = 'app-project-container';
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
.base-container {
  width: 100%;
  height: 100vh;
  display: inline-flex;
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
