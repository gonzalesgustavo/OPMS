<template lang="pug">
  div(class="basenav-container")
    v-row
      v-col(cols="10". xl="10")
        h2 Ohmni Projecto
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class BaseNav extends Vue {}
</script>

<style lang="scss" scoped>
.basenav-container {
  width: 100vw;
  height: 3rem;
  background-color: #425559;
  padding: 3px;
  color: var(--color-primary);
  .logbtn {
    margin-top: -7.5px;
  }
  h2 {
    margin-top: -10px;
  }
}
</style>
