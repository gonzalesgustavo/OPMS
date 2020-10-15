<template lang="pug">
.taskbox-container
  .task-box(v-for="task in tasks")
    v-avatar(
      :color="task.project.color || 'purple darken-1'"
      size="25"
      style="font-size: 5pt; color: white;") {{task.project.title | initials}} 
    h5 {{task.message | textlimit(15)}}
</template>

<script lang="ts">
import { Task } from '@/types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class TaskBox extends Vue {
  @Prop() tasks!: Array<Task>;
}
</script>

<style lang="scss" scoped>
.taskbox-container {
  width: 100%;
  max-height: 450px;
  overflow: auto;
  border: 1px solid var(--color-dark);
  padding: 1rem;
  padding-top: 0;
  .task-box {
    display: flex;
    padding-top: 1rem;
    h5 {
      padding-top: 4px;
      margin-left: 0.5rem;
      font-size: 8pt;
    }
  }
}
</style>
