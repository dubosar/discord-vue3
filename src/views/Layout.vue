<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import SideArea from '../components/SideArea/SideArea.vue'
import MainArea from '../components/MainArea/MainArea.vue'
</script>

<template>
  <div id="layout">
    <Header />
    <Sidebar />
    <SideArea />
    <MainArea />
  </div>
</template>

<style scoped lang="scss">
   #layout {
     background: var(--black);
     min-height: 700px;
      display: grid;
      grid-template-areas:
         "h h h"
         "s sa ma";
      grid-template-columns: 70px 240px auto;
      grid-template-rows: 25px auto;
      border-radius: 5px;
      overflow: hidden;

      #header{
         grid-area: h;
      }
      #sidebar{
         grid-area: s;
      }
      #sideArea{
         grid-area: sa;
      }
      #mainArea{
         grid-area: ma;
      }
   }
</style>
