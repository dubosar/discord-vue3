<script setup>
import mockUsers from '../mock-users'
import { ref, computed, reactive, Transition } from "vue";
import UserCard from '../UserCard'

const users = reactive(mockUsers)
const filterButtons = reactive(['online', 'all', 'pending', 'blocked', ])
const filter = ref('all')
const searchText = ref('')

const filteredUsers = computed(() => {
  switch (filter.value) {
    case 'online': return users.filter(user => user.online)
    case 'all': return users
    case 'pending': return users.filter(user => user.pending)
    case 'blocked': return users.filter(user => user.blocked)
  }
})

const foundUsers = computed(() => {
  return filteredUsers.value.filter((user) =>
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
        <v-btn
          @click="filter = button"
          v-for="button in filterButtons"
          class="mr-2"
          :variant="button === filter ? 'tonal' : 'text'"
          size="x-small"
        >
          {{ button }}
        </v-btn>
        <v-btn class="mr-2" variant="flat" size="x-small" color="green">Add Friend</v-btn>
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
    <div class="users py-3 pl-6 pr-2">
      <div class="stable pr-6">
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

        <div class="online-label text-overline mt-3">online - {{ filteredUsers.length }}</div>
      </div>
      <Transition>
        <div class="scroll-area pr-3">
          <UserCard
            v-for="user in foundUsers"
            :key="user.id"
            :user="user"
            :clearable="false"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
#main {
  background: var(--dark-gray);
  overflow: hidden;
  .top  {
    height: 45px;
    border-bottom: 1.5px solid var(--black);
  }
  .users {
    height: 100%;
    display: grid;
    grid-template-rows: 90px auto;
    .online-label{
      border-bottom: 1px solid var(--gray)
    }
    .scroll-area {
      overflow-y: scroll;
    }
  }
}
</style>
