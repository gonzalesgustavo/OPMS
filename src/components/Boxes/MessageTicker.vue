<template lang="pug">
.message-ticker
    v-card(
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400")
  
    v-card-title
      v-icon(
        medium
        left) mdi-message-text-outline
      span(class="title font-weight-light") {{ title }}

    v-card-text(class="t-box") "{{msg}}"

    v-card-actions
      v-list-item(class="grow")
        v-list-item-avatar(color="grey darken-3")
          v-img(
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light")

        v-list-item-content
          v-list-item-title(data-testid="messageticker-sender") {{sender}}

        v-row(
          align="center"
          justify="end")
         
          v-icon(class="mr-1") mdi-checkbox-marked-circle-outline
          span(class="mr-1") ·
          v-icon(class="mr-1") mdi-reply
          span(class="mr-1") .
          v-icon(class="mr-1") mdi-delete-forever-outline
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MessageTicker extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop() msg!: string;
  @Prop() sender!: string;
}
</script>

<style lang="scss" scoped>
.message-ticker {
  width: 300px;
  height: 220px;
  border: 2px solid blue;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  .t-box {
    min-height: 70px;
    max-width: 270px;
    max-height: 90px;
    overflow: auto;
  }
}
</style>
