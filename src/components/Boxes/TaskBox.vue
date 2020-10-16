<template lang="pug">
.taskbox-container
  v-list-item(class="item-rad" v-ripple="false")        
    v-list-item-icon(@click="handleDone")
      v-icon {{icon}}
    v-list-item-content 
        v-list-item-title(style="overflow: auto;") 
          p(ref="text") {{ message }} 
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class TaskBox extends Vue {
  @Prop() message!: string;
  @Ref() readonly text!: HTMLParagraphElement;
  icon = 'mdi-checkbox-blank-outline';
  onStatus = false;
  handleDone(): void {
    if (!this.onStatus) {
      this.onStatus = true;
      this.text.style.textDecoration = 'line-through';
      this.icon = 'mdi-check-box-outline';
    } else {
      this.onStatus = false;
      this.text.style.textDecoration = 'none';
      this.icon = 'mdi-checkbox-blank-outline';
    }
  }
}
</script>

<style lang="scss" scoped>
.taskbox-container {
  width: auto;
  border: 2px solid rgba(50, 181, 204, 0.897);
  border-radius: 30px;
  p {
    padding: 0;
    margin: 0;
  }
}
</style>
