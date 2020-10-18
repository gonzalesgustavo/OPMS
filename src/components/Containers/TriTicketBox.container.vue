<template lang="pug">
  .tribox-container
    .box-h
      slot(name="left")
    .box-h
      slot(name="center")
    .box-h
      slot(name="right")
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
  height: 50%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  .box-h {
    padding: 1rem;
    height: 400px;
    overflow: auto;
    border: 2px double black;

    &:nth-child(1) {
      border-right: 3px double black;
    }
    &:nth-child(2) {
      border-right: 3px double black;
    }
  }
}
</style>
