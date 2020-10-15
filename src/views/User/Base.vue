<template lang="pug">
.base-container
  .menu-left
    app-sidebar-actions
    hr
    h2 Tasks
    app-taskbox(:tasks="tasks")
  .center-field
    p center
  .right-menu
    app-messageticker
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TaskBoxVue from '../../components/Boxes/TaskBox.vue';
import SidebarActionsVue from '../../components/Menus/SidebarActions.vue';
import { Message, Task } from '@/types';
import MessageTicker from '@/components/Boxes/MessageTicker.vue';

@Component({
  name: 'UserBase',
  components: {
    'app-sidebar-actions': SidebarActionsVue,
    'app-taskbox': TaskBoxVue,
    'app-messageticker': MessageTicker,
  },
})
export default class UserBase extends Vue {
  tasks: Array<Task> = [];
  messages: Array<Message> = [];

  mounted() {
    this.$store.dispatch('fetchTasks');
    this.$store.dispatch('fetchMessages');
    this.tasks = this.$store.state.Task.tasks;
    this.messages = this.$store.state.Message.messages;
    console.log(this.tasks);
  }
}
</script>

<style lang="scss" scoped>
.base-container {
  width: 100%;
  height: 100vh;
  display: inline-flex;
  .menu-left {
    width: 15%;
    padding: 1rem;
    border-right: 2px double var(--color-dark);
    hr {
      margin-top: 1rem;
      background: var(--color-dark);
    }
    h2 {
      text-align: center;
      margin-top: 0.5rem;
    }
  }
  .center-field {
    width: 70%;
    padding: 1rem;
  }
  .right-menu {
    width: 15%;
    border-left: 2px double var(--color-dark);
    padding: 1rem;
  }
}
</style>
