<template lang="pug">
.notes-box
  .notes-toolbar
    div
      p(class="date-proj") {{date}}
    .menu
      v-icon mdi-pencil-outline
      v-icon(color="red lighten-1") mdi-close
  .notes-body
    p {{message}}
  .note-footer
    v-avatar(
      :color="project.color"
      size="35"
      style="font-size: 10pt;") {{ project.title | initials }}
        
</template>

<script lang="ts">
import { ProjectMicro } from '@/types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class NoteBox extends Vue {
  @Prop({ required: true }) message!: string;
  @Prop() date!: string;
  @Prop() project!: ProjectMicro;
}
</script>

<style lang="scss" scoped>
.notes-box {
  width: 200px;
  max-height: 200px;
  min-height: 200px;
  border-radius: 12px;
  border: 1px solid rgba(50, 146, 153, 0.76);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  .notes-toolbar {
    display: grid;
    padding: 4px;
    padding-bottom: 0;
    grid-template-columns: 60% 40%;
    background: rgba(68, 198, 207, 0.76);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    .date-proj {
      padding: 0;
      margin-top: 7px;
      margin-left: 8px;
      font-size: 8pt;
    }
    .menu {
      text-align: right;
      i {
        padding-left: 5px;
      }
    }
  }
  .notes-body {
    height: 110px;
    padding: 0.5rem;
    p {
      padding: 0;
      overflow: auto;
    }
  }
  .note-footer {
    text-align: center;
  }
}
</style>
