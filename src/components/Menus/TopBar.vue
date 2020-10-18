<template lang="pug">
.topbar-container
  div(class="topbar-left")
    slot(name="title")
  div(class="topbar-right")
    slot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class TopBar extends Vue {}
</script>

<style lang="scss" scoped>
.topbar-container {
  width: 100%;
  height: 50px;
  border: 2px solid black;
  border-radius: 4px;
  padding: 0.4rem;
  display: flex;
  .topbar-left {
    width: 50%;
  }
  .topbar-right {
    width: 50%;
    text-align: right;
    padding-right: 1rem;
    margin-top: -5px;
  }
}
</style>
