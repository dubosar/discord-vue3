<script setup>
defineProps({
  user: Object,
  clearable: Boolean,
  selectedUser: Number,
})
</script>

<template>
  <v-divider v-if="!clearable" color="gray"></v-divider>
  <div
    class="user d-flex align-center justify-space-between align-center"
    :class="user.id === selectedUser ? 'active' : ''"
  >
    <div class="d-flex align-center">
      <v-badge dot :color="user.online ? 'green' : 'gray'" offset-x="10" offset-y="20" bordered>
        <img :src="user.img" class="mr-3" :alt="user.name">
      </v-badge>
      <span class="ellipsis">{{ user.name }}</span>
    </div>
    <v-icon v-if="clearable" class="close-icon" size="x-small">mdi-close</v-icon>
    <div v-else>
      <v-btn icon size="small" variant="tonal" class="mx-1">
        <v-icon>mdi-message</v-icon>
      </v-btn>
      <v-btn icon size="small" variant="tonal" class="mx-1">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
</style>
