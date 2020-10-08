<template>
  <div>
    <app-base-nav />
    <div class="home">
      <div class="logsig-container">
        hello
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import BaseNav from "../components/Navs/BaseNav.vue";

@Component({
  components: {
    "app-base-nav": BaseNav
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  margin-top: 8%;

  .logsig-container {
    width: 400px;
    height: 500px;
    border: 2px solid var(--color-primary);
  }
}
</style>
