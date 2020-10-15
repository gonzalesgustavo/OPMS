<template lang="pug">
.sidebaractions-container
  .icon-box(v-for="n in 4")
    p .
</template>

<style lang="scss" scoped>
.sidebaractions-container {
  width: 100%;
  border: 2px solid black;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 5px;
  .icon-box {
    width: 100%;
    height: 50px;
    background: blue;
  }
}
</style>
