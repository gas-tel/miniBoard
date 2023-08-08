<template>
    <div class="post_container">
        <div class="post_wrap" v-for="(item, index) in this.data" :key="index">
            <div class="post_header">
                <span class="post_title">{{ item.title }}</span>   
                <span class="post_num"><i class="xi-label-o"></i><span>{{ item.idx }}</span></span>   
                <span class="post_name"><i class="xi-user-o"></i><span>{{ item.name }}</span></span>   
            </div>
            <div class="post_body">
                {{ item.content }}
            </div>
            <div class="post_footer">
                <span class="post_date">{{ item.rating }}</span>
                <span class="post_cnt"><i class="xi-eye-o"></i><span>{{ item.viewcnt }}</span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['data'],
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .post_container {width: 100%; height: 550px; overflow-y: scroll;
        i {padding: 0 .5rem; margin-top: .25rem;}
        &::-webkit-scrollbar-track{background-color:#F0F0F0}
        &::-webkit-scrollbar{width:0.6rem;height:0.8rem}
        &::-webkit-scrollbar-thumb{background-color:#d5d5d5;border-radius:1rem}
        .post_wrap {width: calc(100% - 2rem); padding: 1rem; 
            .post_header {display: flex; align-items: center;
                .post_title {margin-right: auto; font-size: 1.5rem; font-weight: bold;}
                .post_num {padding: 0 1rem; display: flex; align-items: center;}
                .post_name {display: flex; align-items: center;}

            }
            .post_body {font-size: 1.2rem; padding: 1rem 0;}
            .post_footer {display: flex; justify-content: space-between;
                .post_cnt {display: flex; align-items: center; 
                    i {padding: 0 .5rem; margin-top: .25rem;}
                }
            }
        }
    }
</style>