<template lang="">
    <div class="addPost" :class="{'active':addPostState}">
        <div class="header">
            <i class="xi-long-arrow-right" @click="newPost"></i>
            <button @click="submit">완료</button>
        </div>
        <ul>
            <li>
                <span class="label">글제목</span>
                <input type="text" v-model="postTitle">
            </li>
            <li>
                <span class="label">닉네임</span>
                <input type="text" v-model="postName">
            </li>
            <li>
                <span class="label">내용</span>
                <textarea v-model="postContent"></textarea>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props : ['addPostState'],
    methods : {
        newPost (){
            this.$emit("addPostBtn", !this.addPostState)
        },
        submit() {
            if(this.postTitle && this.postName && this.postContent){
                this.$emit("addPost", [this.postTitle, this.postName, this.postContent])
                this.$emit("addPostBtn", !this.addPostState)
            } else {
                alert("작성이 완료되지 않은 항목이 존재합니다.")
            }
        }
    },
    data() {
        return {
            postTitle : "",
            postName : "",
            postContent : ""
        }
    }
}
</script>
<style lang="scss" scoped>
    .addPost {position: fixed; left: 100%; top: 0; width: calc(100% - 30rem); min-width: 35rem; background: #fff; height: 100%; transition: .3s all;
        &.active {left: 50%; top: 50%; transform: translate(-50%,-50%);}
        .header {font-size: 2rem; padding: 1rem; display: flex; justify-content: space-between;}
    }
</style>