<template lang="pug">
.notes-container
  .notes-body
    template(v-for="note in notes")
      app-notebox(:message="note.message", :date="note.date", :project="note.project")
        
</template>

<script lang="ts">
import { Note } from '@/types';
import { Component, Vue } from 'vue-property-decorator';
import NoteBox from './NoteBox.vue';

@Component({
  components: {
    'app-notebox': NoteBox,
  },
})
export default class NoteContainer extends Vue {
  notes: Array<Note> = [];
  mounted(): void {
    this.$store.dispatch('fetchNotes');
    this.notes = this.$store.state.Note.notes;
  }
}
</script>

<style lang="scss" scoped>
.notes-container {
  width: 100%;
  height: 100%;
  padding: 1rem;
  .notes-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 1rem;
  }
}
</style>
