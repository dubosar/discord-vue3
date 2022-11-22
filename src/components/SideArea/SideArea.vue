<script setup>
import mockUsers from '../mock-users'
import {reactive, ref, onMounted, nextTick } from 'vue'
import UserCard from '../UserCard'

const selectedUser = ref(3)
const users = reactive(mockUsers)
const scrollArea = ref(null)
let hasScroll = ref(false)

onMounted(async () => {
  await nextTick()
  hasScroll = scrollArea.value.scrollHeight > scrollArea.value.clientHeight
  console.log(hasScroll)
})
</script>

<template>
  <div id="sideArea">
    <div class="top">
      <div class="pa-2">
        <div class="button text-caption">Find or start a conversation</div>
      </div>
    </div>

    <div class="pa-2 scroll-area" ref="scrollArea">
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
        <UserCard
          v-for="user in users"
          :key="user.id"
          :user="user"
          :clearable="true"
          :selectedUser="selectedUser"
        />
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
  overflow: hidden;
  display: grid;
  grid-template-rows: 45px auto 50px;
  border-radius: 10px 0 0 0;
  box-sizing: border-box;
  background: var(--dark);
}
.scroll-area{
  overflow-y: scroll;
  margin-right: 5px;
  &:hover{
    margin-right: 5px;
    overflow-y: auto;
  }
}

.top{
  height: 45px;
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
