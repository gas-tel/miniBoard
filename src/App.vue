<template>
  <div id="app">
    <NoticeHeader/>
    <NoticeBoard :data="data"/>
    <PageNation/>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
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
      data : [],
    }
  },
  methods: {

    getList: function() {
      const vm = this;
      axios.post('/board/list?idx=25',{
        withCredentials : true
      })
          .then(function(response) {
            vm.data = response.data.data
            console.log(vm.data);
          })
          .catch(function(error) {
            console.log(error);
          });
    }
  },
  created() {
    this.getList()
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
