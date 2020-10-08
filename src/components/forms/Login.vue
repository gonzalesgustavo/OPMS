<template lang="pug">
.inner-cont
  .d-flex.justify-center
    h2 Login
  .d-flex.justify-center
    v-text-field(label="Email", outlined)
  .d-flex.justify-center.mv-up
    v-text-field(label="@username", outlined)
  .d-flex.justify-center.mv-up
    v-text-field(type="password", label="password", outlined)
  .d-flex.justify-center
    v-btn Login
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class LoginForm extends Vue {}
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
}
</style>
