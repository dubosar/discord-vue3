<script setup>
  import {ref, reactive} from "vue";
  import FriendsList from './FriendsList'
  const filterButtons = reactive(['online', 'all', 'pending', 'blocked',])
  const filter = ref('all')

</script>

<template>
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
  <FriendsList :pickedFilter="filter"/>
</template>

<style scoped lang="scss">
.top {
  height: 45px;
  border-bottom: 1.5px solid var(--black);
}
</style>
