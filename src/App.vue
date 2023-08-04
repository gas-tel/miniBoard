<template>
  <NoticeHeader/>
  <NoticeBoard/>
  <PageNation/>
</template>

<script>
import NoticeBoard from '@/components/NoticeBoard.vue';
import NoticeHeader from './components/NoticeHeader.vue';
import PageNation from './components/PageNation.vue';

export default {
  name: 'App',
  components: {
    NoticeBoard,
    NoticeHeader,
    PageNation
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}
</style>
