<template lang="pug">
div(class="bod-container")
  div(class="nav-container")
    v-row
      v-col(cols="8", md="8")
        v-app-bar-nav-icon(class="cing")
      v-col(cols="4", md="4")
        v-autocomplete(
            v-model="model"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            color="white"
            class="search-bar"
            hide-no-data
            hide-selected
            item-text="Description"
            item-value="API"
            placeholder="Search"
            prepend-icon="mdi-database-search"
            return-object)
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class MainNav extends Vue {}
</script>

<style lang="scss" scoped>
.bod-container {
  width: 100vw;
  height: 100vh;
  background: #273133;
  .nav-container {
    width: 100vw;
    height: 3.5rem;
    background-color: #425559;
    .search-bar {
      margin-top: -1rem;
      width: 80%;
    }
    .cing {
      background: transparent;
      color: #cfc0fa;
      border: none;
      font-size: 44pt;
      margin-left: 2rem;
    }
  }
}
</style>
