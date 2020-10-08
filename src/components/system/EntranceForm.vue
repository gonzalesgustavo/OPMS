<template lang="pug">
.entrance-form
  v-sheet(color="white", elevation="1", height="100%", width="100%")
    component(:is="fType")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SignUpForm from "../forms/SignUp.vue";
import LoginForm from "../forms/Login.vue";
import InfoTicker from "../system/Info.vue";

@Component({
  components: {
    signup: SignUpForm,
    login: LoginForm,
    info: InfoTicker
  }
})
export default class EntranceForm extends Vue {
  @Prop() fType = "";
}
</script>

<style lang="scss" scoped>
.entrance-form {
  height: 85.7%;
  background: rgb(107, 107, 107);
}
</style>
