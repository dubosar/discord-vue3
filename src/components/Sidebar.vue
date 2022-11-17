<script setup>

</script>

<template>
  <div id="sidebar">
    <div class="cell active direct">
      <img src="src/assets/discord-icon.svg" alt="">
    </div>
    <v-divider class="mx-4 my-3" color="gray" thickness="2"></v-divider>
    <div class="cell group mb-2">
      <img src="https://i.pravatar.cc/300" alt="">
    </div>
    <div class="cell group mb-2">
      <img src="https://i.pravatar.cc/200" alt="">
    </div>
    <div class="cell group mb-2">
      <img src="https://i.pravatar.cc/100" alt="">
    </div>

    <div class="cell system mb-2">
      <v-icon class="rotate">mdi-close</v-icon>
    </div>
    <div class="cell system mb-2">
      <v-icon>mdi-compass</v-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
#sidebar {
  background: var(--black);
  color: var(--white);
}
.cell{
  border-radius: 100%;
  margin: auto;
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  &.active {
    border-radius: 15px;

    &:before {
      content: '';
      background: var(--white);
      width: 4px;
      height: 80%;
      display: block;
      left: -10px;
      position: absolute;
      border-radius: 0 4px 4px 0;
    }
  }
  &:hover {
    border-radius: 15px;
    transition: border-radius 0.1s;
    &:before {
      content: '';
      background: var(--white);
      width: 4px;
      height: 40%;
      display: block;
      left: -10px;
      position: absolute;
      border-radius: 0 4px 4px 0;
    }
  }
  &.group {
    img{
      width: 50px;
      height: 50px;
    }
    overflow: hidden;
  }
  &.direct {
    background: var(--main);
    img{
      width: 30px;
      height: 30px;
    }
  }
  &.system{
    background: var(--dark-gray);
    color: var(--green);
    .rotate{
      rotate: 45deg;
    }
  }
}

</style>