<script setup>
import { ref } from 'vue'

const users = [
  { id: 1, name: 'John Doe', img: 'https://i.pravatar.cc/150', active: true, },
  { id: 2, name: 'Mike Brooke', img: 'https://i.pravatar.cc/250', active: false, },
  { id: 3, name: 'Sasha Grey', img: 'https://i.pravatar.cc/350', active: true, },
  { id: 4, name: 'Mugiwara Luffy', img: 'https://i.pravatar.cc/450', active: false, },
  { id: 5, name: 'Tim Cook', img: 'https://i.pravatar.cc/550', active: true, },
  { id: 6, name: 'Johny Sins', img: 'https://i.pravatar.cc/650', active: true, },
  { id: 7, name: 'John Doe', img: 'https://i.pravatar.cc/151', active: true, },
  { id: 8, name: 'Mike Brooke', img: 'https://i.pravatar.cc/251', active: false, },
  { id: 9, name: 'Sasha Grey', img: 'https://i.pravatar.cc/351', active: true, },
  { id: 10, name: 'Mugiwara Luffy', img: 'https://i.pravatar.cc/451', active: false, },
  { id: 11, name: 'Tim Cook', img: 'https://i.pravatar.cc/551', active: true, },
  { id: 12, name: 'Johny Sins', img: 'https://i.pravatar.cc/651', active: true, },
]
const selectedUser = ref(3)
</script>

<template>
  <div id="sideArea">
    <div class="top">
      <div class="pa-2">
        <div class="button text-caption">Find or start a conversation</div>
      </div>
    </div>

    <div class="pa-2 scroll-area">
      <div class="tabs">
        <div class="tab active">
          <v-icon class="mr-2">mdi-account-multiple</v-icon>
          Friends
        </div>
        <div class="tab">
          <v-icon class="mr-2">mdi-clock-fast</v-icon>
          Nitro
        </div>
      </div>

      <div class="d-flex justify-space-between align-center px-2">
        <div class="text-overline">Direct messages</div>
        <v-icon>mdi-plus</v-icon>
      </div>

      <div class="recent">
        <div
          v-for="user in users"
          :key="user.id"
          class="user d-flex align-center justify-space-between align-center"
          :class="user.id === selectedUser ? 'active' : ''"
        >
          <div class="d-flex align-center">
            <v-badge dot :color="user.active ? 'green' : 'gray'" offset-x="10" offset-y="20" bordered>
              <img :src="user.img" class="mr-3">
            </v-badge>

            <span class="ellipsis">{{ user.name }}</span>
          </div>
          <v-icon class="close-icon" size="x-small">mdi-close</v-icon>
        </div>
      </div>
    </div>

    <div class="personal d-flex justify-space-between">
      <div class="my-data d-flex align-center ml-2">
        <v-badge dot color="green" offset-x="10" offset-y="28" bordered>
          <img src="https://i.pravatar.cc/650" class="mr-3 avatar">
        </v-badge>
        <div>
          <div>Roman</div>
          <div>#6309</div>
        </div>
      </div>
      <div class="tools d-flex align-center justify-space-evenly mx-2">
        <v-icon>mdi-microphone</v-icon>
        <v-icon>mdi-headphones</v-icon>
        <v-icon>mdi-cog</v-icon>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#sideArea {
  height: 100%;
  display: grid;
  grid-template-rows: 45px auto 50px;
  border-radius: 10px 0 0 0;
  box-sizing: border-box;
  background: var(--dark);
}

.scroll-area{
  max-height: 600px;
  overflow: hidden;
  margin-right: 5px;
  &:hover{
    margin-right: 0;
    overflow-y: auto;
  }
}

.top{
  border-bottom: 1.5px solid var(--black);
  .button {
    cursor: pointer;
    border-radius: 4px;
    padding: 4px 8px;
    box-sizing: border-box;
    background: var(--black);
    color: var(--light-gray);
  }
}
.tab {
  cursor: pointer;
  color: var(--light-gray);
  padding: 10px 15px;
  margin: 2px 0;
  border-radius: 4px;
  font-weight: 400;
  &:hover, &.active{
    background: var(--gray);
    color: var(--white);
  }
}
.recent {
  .user {
    cursor: pointer;
    color: var(--light-gray);
    padding: 4px 4px;
    margin: 2px 0;
    border-radius: 4px;
    font-weight: 400;
    &:hover, &.active{
      background: var(--gray);
      color: var(--white);
    }
    &:hover:not(.active){
      .close-icon{
        display: block;
      }
    }
    img{
      width: 35px;
      height: 35px;
      border-radius: 100%;
    }
    .close-icon{
      display: none;
    }
  }
}

.personal{
  background: #292b2f;
  .avatar{
    width: 35px;
    height: 35px;
    border-radius: 100%;
  }
  .tools{
    gap: 12px
  }
}
</style>
