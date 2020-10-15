<template lang="pug">
.message-ticker
  .ticker-from 
    h5 {{ from | textlimit(12) }}
    v-avatar(
      :color="project.color || 'purple darken-1'"
      size="25"
      style="font-size: 5pt; color: white; padding: 0; margin-right: 12px;") {{ project.title | initials }}
  p {{message}}
</template>

<script lang="ts">
import { ProjectMicro } from '@/types';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MessageTicker extends Vue {
  @Prop({ required: true }) from!: string;
  @Prop() message!: string;
  @Prop() project!: ProjectMicro;
}
</script>

<style lang="scss" scoped>
.message-ticker {
  width: 100%;
  border: 1px solid var(--color-dark);
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  background: var(--color-primary-tint);
  padding-top: 0.7rem;
  .ticker-from {
    height: 29px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    justify-items: right;
    h5 {
      padding-top: 12pxc;
      margin-left: -20px;
    }
  }
  p {
    padding-left: 0.5rem;
  }
}
</style>
