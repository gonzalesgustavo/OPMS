<template lang="pug">
.message-container
  .message-body
    template(v-for="message in messages")
      message-ticker(:title="message.project.title", :msg="message.msg", :sender="message.from")
</template>

<script lang="ts">
import { Message } from '@/types';
import { Component, Vue } from 'vue-property-decorator';
import MessageTicker from './MessageTicker.vue';

@Component({
  components: {
    'message-ticker': MessageTicker,
  },
})
export default class MessageContainer extends Vue {
  messages: Array<Message> = [];

  mounted() {
    this.$store.dispatch('fetchMessages');
    this.messages = this.$store.state.Message.messages;
  }
}
</script>

<style lang="scss" scoped>
.message-container {
  width: 100%;
  height: 100%;
  padding: 1rem;
  .message-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  }
}
</style>
