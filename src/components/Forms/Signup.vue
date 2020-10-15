<template lang="pug">
   div(class="inner-cont")
      div(class="d-flex justify-center")
        h2 Sign Up
      div(class="d-flex justify-center")
        v-text-field(
              label="Name"
              outlined)
      div(class="d-flex justify-center mv-up")
        v-text-field(
              label="Email"
              outlined)
      div(class="d-flex justify-center mv-up")
        v-text-field(
              label="@username"
              outlined)
      div(class="d-flex justify-center mv-up")
        v-row(no-gutters)
          v-col(cols="6")
            v-text-field(
              label="Password"
              outlined)
          v-col(cols="6")
            v-text-field(
              label="Confirm"
              outlined)
      div(class="d-flex justify-center adj-pd")
        v-btn 
          router-link(to="/main/23344", style="cursor: pointer; text-decoration: none;") Sign Up
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class SignupForm extends Vue {}
</script>

<style lang="scss" scoped>
.inner-cont {
  width: 70%;
  margin: 0 auto;
  padding-top: 1rem;
  h2 {
    margin-bottom: 1.5rem;
  }
  .mv-up {
    margin-top: -20px;
  }
  .adj-pd {
    padding-bottom: 2rem;
  }
}
</style>
