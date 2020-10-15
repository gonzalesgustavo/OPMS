<template lang="pug">
.entrance-form
  v-sheet(color="white", elevation="1", height="100%", width="100%")
    component(:is="fType")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SignupForm from './Signup.vue';
import LoginForm from './Login.vue';
import InfoTicker from '../Design/InfoTicker.vue';

@Component({
  components: {
    login: LoginForm,
    signup: SignupForm,
    info: InfoTicker,
  },
})
export default class SystemForm extends Vue {
  @Prop({ required: true }) fType!: string;
}
</script>

<style lang="scss" scoped>
.entrance-form {
  height: 85.7%;
}
</style>
