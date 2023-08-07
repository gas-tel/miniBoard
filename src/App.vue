<template>
  <div id="app">
    <NoticeHeader/>
    <NoticeBoard :data="data"/>
    <PageNation/>
  </div>
</template>

<script>
import axios from 'axios';
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
      data : []
    }
  },
   methods: {
    get() {
      axios
        .get('https://dummyjson.com/products')
        .then((result) => {
          this.data = result.data.products;
          console.log(this.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("finally");
        });
    },
  },
  mounted() {
    this.get();
  }
}
</script>

<style>
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
html {
  font-size: 10px;
  font-family: 'Pretendard-Regular';
}
#app {width: 38rem;}
</style>
