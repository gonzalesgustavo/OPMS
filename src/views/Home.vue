<template>
  <div>
    <app-base-nav />
    <div class="home">
      <div class="logsig-container">
        <v-card>
          <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            centered
            dark
            icons-and-text
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#signup">
              Sign-up
              <v-icon>mdi-clipboard-account-outline</v-icon>
            </v-tab>

            <v-tab href="#login">
              Login
              <v-icon>mdi-door-open</v-icon>
            </v-tab>

            <v-tab href="#info">
              Info
              <v-icon>mdi-information-variant</v-icon>
            </v-tab>
          </v-tabs>
        </v-card>
        <app-sys-form :fType="tab" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import BaseNav from "../components/Navs/BaseNav.vue";
import SystemForm from "../components/system/EntranceForm.vue";

@Component({
  components: {
    "app-base-nav": BaseNav,
    "app-sys-form": SystemForm
  }
})
export default class Home extends Vue {
  tab = "";
}
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
