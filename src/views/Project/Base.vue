<template lang="pug">
.project-base
  p hello
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ProjectBase',
  components: {},
})
export default class ProjectBase extends Vue {}
</script>
