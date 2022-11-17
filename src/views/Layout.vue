<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar2.vue'
import Contacts from '../components/Contacts.vue'
import Main from '../components/Main.vue'
</script>

<template>
  <div id="layout">
    <Header />
    <Sidebar />
    <Contacts />
    <Main />
  </div>
</template>

<style scoped lang="scss">
   #layout {
     background: var(--black);
     min-height: 700px;
      display: grid;
      grid-template-areas:
         "h h h"
         "s c m";
      grid-template-columns: 70px 250px auto;
      grid-template-rows: 25px auto;
      border-radius: 5px;
      overflow: hidden;

      #header{
         grid-area: h;
      }
      #sidebar{
         grid-area: s;
      }
      #contacts{
         grid-area: c;
      }
      #main{
         grid-area: m;
      }
   }
</style>
