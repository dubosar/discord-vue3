<script setup>
import mockUsers from '../mock-users'
import { ref, computed, reactive } from "vue";
import UserCard from '../UserCard'

const users = reactive(mockUsers)
const onlineUsers = computed(() => {
  return users.filter(user => user.online)
})

const searchText = ref('')
const foundUsers = computed(() => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchText.value.toLowerCase()))
})
</script>

<template>
  <div id="main">
    <div class="top pa-2 d-flex justify-space-between align-center">
      <div class="section mx-2">
        <v-icon class="mr-2">mdi-account-multiple</v-icon>
        <span class="font-weight-bold">Friends</span>
      </div>
      <v-divider vertical color="light-gray" class="mx-2"></v-divider>
      <div class="section">
        <v-btn variant="tonal" size="x-small">Online</v-btn>
        <v-btn variant="text" size="x-small">All</v-btn>
        <v-btn variant="text" size="x-small">Pending</v-btn>
        <v-btn variant="text" size="x-small">Blocked</v-btn>
        <v-btn variant="flat" size="x-small" color="green">Add Friend</v-btn>
      </div>
      <v-spacer></v-spacer>
      <div class="section">
        <v-btn icon variant="text">
          <v-icon>mdi-message-plus</v-icon>
        </v-btn>
      </div>
      <v-divider vertical color="light-gray" class="mx-2"></v-divider>
      <div class="section">
        <v-btn icon variant="text">
          <v-icon>mdi-inbox</v-icon>
        </v-btn>
        <v-btn icon variant="text">
          <v-icon>mdi-help-circle</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="users py-3 px-6">
      <v-text-field
        @click:clear="searchText = ''"
        v-model="searchText"
        placeholder="Search"
        clearable
        variant="solo"
        hide-details
        density="compact"
        single-line
        append-inner-icon="mdi-magnify"
      />

      <div class="text-overline mt-3">online - {{ onlineUsers.length }}</div>
      <UserCard
        v-for="user in foundUsers"
        :key="user.id"
        :user="user"
        :clearable="false"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
#main {
  background: var(--dark-gray);
  .top  {
    height: 45px;
    border-bottom: 1.5px solid var(--black);
  }
  .user {
    cursor: pointer;
    color: var(--light-gray);
    padding: 4px 4px;
    margin: 2px 0;
    border-radius: 4px;
    font-weight: 400;
    img{
      width: 35px;
      height: 35px;
      border-radius: 100%;
    }
  }
}
</style>
