<script setup>

</script>

<template>
  <div id="contacts">
    <div class="top pa-3">
      <div class="button">Find or start a conversation</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#contacts {
  border-radius: 10px 0 0 0;
  background: var(--dark);
  color: var(--white);
}
.top{
  border-bottom: 1.5px solid var(--black);
  .button {
    cursor: pointer;
    border-radius: 4px;
    padding: 1px 5px;
    box-sizing: border-box;
    background: var(--black);
    color: var(--light-gray);
  }
}
</style>