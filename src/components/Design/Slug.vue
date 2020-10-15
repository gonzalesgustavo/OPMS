<template lang="pug">
div(class="slug-container")
  div(class="slug-title")
    h1 {{ title }}
    h5 {{ subtext }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Slug extends Vue {
  @Prop({ required: true, type: String }) title = '';
  @Prop() subtext = '';
}
</script>

<style lang="scss" scoped>
.slug-container {
  width: 100%;
  height: 9em;
  margin-top: 2rem;
  background: var(--bg-dark);
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  .slug-title {
    text-align: center;
    padding-top: 2rem;
    h5 {
      letter-spacing: 2px;
      padding-top: 1rem;
    }
  }
}
</style>
