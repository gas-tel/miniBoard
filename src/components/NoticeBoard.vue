<template>
    <div class="post_container">
        <div class="post_wrap" v-for="(item, index) in data" :key="index">
            <div class="post_heaer">
                <span class="post_title">{{ item.title }}</span>   
                <span class="post_num">{{ item.idx }}</span>   
                <span class="post_name">{{ item.name }}</span>   
            </div>
            <div class="post_body">
                {{ item.content }}
            </div>
            <div class="post_footer">
                <span class="post_date">{{ item.regDate }}</span>
                <span class="post_cnt">{{ item.viewCnt }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import data from '@/assets/data'
export default {
    data() {
        return {
            data
        }
    }
}
</script>

<style lang="scss" scoped>
    .post_container {border: 1px solid black; width: 380px; height: 550px; padding: 10px; overflow-y: scroll;
        .post_wrap {width: 100%; height: 150px;}
    }
</style>