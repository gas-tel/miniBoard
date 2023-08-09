<template>
  <NoticeHeader :addPostState="addPostState" @addPostBtn="addPostBtn"/>
  <NoticeBoard :data="data"/>
  <PageNation/>
  <AddPost :addPostState="addPostState" @addPostBtn="addPostBtn" @addPost="addPost"/>
  {{ addPostState }}
</template>

<script>
import axios from 'axios';
import NoticeBoard from '@/components/NoticeBoard.vue';
import NoticeHeader from './components/NoticeHeader.vue';
import PageNation from './components/PageNation.vue';
import AddPost from './components/AddPost.vue'

export default {
  name: 'App',
  components: {
    NoticeBoard,
    NoticeHeader,
    PageNation,
    AddPost
  },
  data() {
    return {
      data : [],
      addPostState : false
    }
  },
  methods: {
    addPostBtn(state){
      this.addPostState = state
    },
    addPost(postInfo) {
      axios
        .post(`/board/add?title=${postInfo[0]}&name=${postInfo[1]}&content=${postInfo[2]}`)
        .then(function(response) {
          console.log(response);
          this.$router.go();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getList: function() {
      const vm = this;
      axios
        .post('/board/list')
        .then(function(response) {
          vm.data = response.data.data
          console.log(vm.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

  },
  created() {
    this.getList()
  }
}
</script>

<style>
@import url('./assets/reset.css');
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
#app {max-width: 1280px; overflow: hidden; margin: 0 auto;}
</style>
