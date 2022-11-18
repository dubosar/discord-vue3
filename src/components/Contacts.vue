<script setup>

</script>

<template>
  <div id="contacts">
    <div class="pa-2">
      <div class="top">
        <div class="button">Find or start a conversation</div>
      </div>
    </div>
    <v-divider color="black" thickness="1.5"></v-divider>

    <div class="pa-2">
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

      <div class="d-flex justify-space-between align-center">
        <div class="text-overline">Direct messages</div>
        <v-icon>mdi-plus</v-icon>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#contacts {
  border-radius: 10px 0 0 0;
  box-sizing: border-box;
  background: var(--dark);
  color: var(--white);
}
.top{
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
</style>
