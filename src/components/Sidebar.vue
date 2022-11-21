<script setup>

const channels = [
  { name: 'First channel', img: 'https://i.pravatar.cc/100' },
  { name: 'Second channel', img: 'https://i.pravatar.cc/200' },
  { name: 'Third channel', img: 'https://i.pravatar.cc/300' },
]

</script>

<template>
  <div id="sidebar">
    <div class="cell direct mb-2 active">
      <div class="wrap">
        <img src="../assets/images/discord-icon.svg" alt="">
      </div>
    </div>
    <v-divider class="mb-2" style="width: 35px" color="gray" thickness="2"></v-divider>

    <div v-for="(channel, index) in channels" :key="index"  class="cell mb-2">
      <div class="wrap">
        <img :src="channel.img" alt="">
      </div>
    </div>

    <div class="cell system mb-2">
      <div class="wrap">
        <v-icon class="rotate">mdi-close</v-icon>
      </div>
    </div>
    <div class="cell system mb-2">
      <div class="wrap">
        <v-icon>mdi-compass</v-icon>
      </div>
    </div>


  </div>
</template>

<style scoped lang="scss">
#sidebar {
  background: var(--black);
  color: var(--white);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.cell{
  width: 48px;
  height: 48px;

  &.direct{
    .wrap {
      background: var(--main);
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
  &.system{
    .rotate{
      rotate: 45deg;
    }
    .wrap {
      background: var(--gray);
      color: var(--green);
    }
    &.active, &:hover {
      .wrap {
        color: var(--white);
        background: var(--green);
      }
    }
  }

  .wrap {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    overflow: hidden;
    & > * {
      width: 100%;
    }
  }
  &.active, &:hover {
    .wrap {
      border-radius: 15px;
      transition: border-radius 0.1s;
    }
      &:before {
        content: '';
        background: var(--white);
        width: 4px;
        height: 60%;
        display: block;
        top: 20%;
        left: -11px;
        position: absolute;
        border-radius: 0 4px 4px 0;
      }
  }
}

</style>
