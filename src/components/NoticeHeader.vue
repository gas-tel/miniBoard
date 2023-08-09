<template lang="">
    <div class="board_header">
        <i class="xi-volume-mute"></i><span>공지사항</span>
        <button @click="newPost">새글 작성{{this.addPostState}}</button>
    </div>
</template>
<script>
export default {
    props : ['addPostState'],
    methods : {
        newPost (){
            this.$emit("addPostBtn", !this.addPostState)
        }
    }
}
</script>
<style lang="scss">
    .board_header {font-size:2rem; padding: 1rem; display: flex; justify-content: center; align-content: center;
    box-shadow: 0 2px 2px -2px #ddd;}
    .xi-volume-mute:before {line-height: 1.2;}
</style>