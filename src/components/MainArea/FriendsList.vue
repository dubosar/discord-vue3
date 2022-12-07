<script setup>
import {computed, ref, onMounted} from "vue";
import {useUsersStore} from "@/store/UsersStore.js";
let users = useUsersStore();
import UserCard from '../UserCard'
const props = defineProps(['pickedFilter'])

onMounted (() => {
  users.getAllUsers()
})

const searchText = ref('')
const filteredUsers = computed(() => {
  switch (props.pickedFilter) {
    case 'online': return users.friends.filter(user => user.online)
    case 'all': return users.friends
    case 'pending': return users.friends.filter(user => user.pending)
    case 'blocked': return users.friends.filter(user => user.blocked)
  }
})

const foundUsers = computed(() => {
  return filteredUsers.value.filter((user) =>
    user.name.toLowerCase().includes(searchText.value.toLowerCase()))
})

</script>

<template>
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
    <TransitionGroup class="scroll-area pr-3" name="list" tag="ul">
      <UserCard
        v-for="user in foundUsers"
        :key="user.id"
        :user="user"
        :clearable="false"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translatey(-30px);
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
</style>
