<template lang="pug">
.projects-container
  .project-body
    template(v-for="project in projects")
      app-projectbox(:title="project.title", :username="project.userId")

        
</template>

<script lang="ts">
import { Project } from '@/types';
import { Component, Vue } from 'vue-property-decorator';
import ProjectBox from './ProjectBox.vue';

@Component({
  components: {
    'app-projectbox': ProjectBox,
  },
})
export default class ProjectContainer extends Vue {
  projects: Array<Project> = [];
  mounted(): void {
    this.$store.dispatch('fetchProjects');
    this.projects = this.$store.state.Project.projects;
  }
}
</script>

<style lang="scss" scoped>
.projects-container {
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: auto;
  .project-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
}
</style>
