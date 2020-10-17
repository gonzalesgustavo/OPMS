<template lang="pug">
  .tribox-container
    .box-h
      slot(name="left")
    .box-h
      p center
    .box-h
      p right
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class TriTicketContainer extends Vue {}
</script>

<style lang="scss" scoped>
.tribox-container {
  border: 2px solid var(--color-primary-tint);
  border-radius: 10px;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  .box-h {
    padding: 1rem;
    height: 400px;
    overflow: auto;
    &:nth-child(1) {
      border-right: 2px solid blue;
    }
    &:nth-child(2) {
      border-right: 2px solid blue;
    }
  }
}
</style>
