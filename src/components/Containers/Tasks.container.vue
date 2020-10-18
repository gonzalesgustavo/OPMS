<template lang="pug">
.tasks-container
  v-list(flat)
    v-list-item-group(
      color="primary") 
      .tasks-body
        template(v-for="task in tasks")
          div
            v-avatar(
              :color="task.project.color"
              :style="{color: 'white' }"
              size="56") {{ task.project.title | initials}}
            app-taskitem(:message="task.message")

        
</template>

<script lang="ts">
import { Task } from '@/types';
import { Component, Vue } from 'vue-property-decorator';
import TaskBox from '../Boxes/TaskBox.vue';

@Component({
  components: {
    'app-taskitem': TaskBox,
  },
})
export default class TaskContainer extends Vue {
  tasks: Array<Task> = [];

  mounted() {
    this.$store.dispatch('fetchTasks');
    this.tasks = this.$store.state.Task.tasks;
  }
}
</script>

<style lang="scss" scoped>
.tasks-container {
  width: 100%;
  height: 100%;
  padding: 1rem;
  .tasks-body {
    display: flex;
    flex-direction: column;
    div {
      margin-right: 1rem;
      margin: 0.2rem;
      display: flex;
    }
  }
}
</style>
