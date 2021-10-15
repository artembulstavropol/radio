<template>
    <div class="pagination-holder">
        <b-pagination
                v-if="paginationLimit !== 1"
                v-model="currentPaginationPage"
                :total-rows="paginationLimit"
                first-number
                last-number
                per-page="1"
        >
            <template #page="{ page, active }">
                <b v-if="active">{{ page }}</b>
                <NuxtLink :to="{route: '/', query: {jenre: currentJenre ? currentJenre : '', page}}" v-else>{{ page }}</NuxtLink>
            </template>
        </b-pagination>
    </div>
</template>

<script>
    export default {
        components:{

        },

        methods:{

        },

        computed:{
            currentPaginationPage:{
                get(){
                    return this.$store.getters['currentPlay/currentPaginationPage']
                },

                set(value){

                }
            },

            paginationLimit(){
                return this.$store.getters['currentPlay/paginationLimit']
            },

            currentJenre(){
                return this.$store.getters['currentPlay/currentJenre']
            }
        }
    }
</script>

<style lang="scss">
    @import "../scss/_vars.scss";
    .pagination-holder{
        display: flex;
        justify-content: center;
        padding: 30px 15px;

        *{
            z-index: 0;
        }

        li:first-child,
        li:last-child{
            display: none;
        }

        button{
            padding: 0 !important;
            border-color: lighten($theme, 30%);
        }

        a,b,span{
            padding: 10px !important;
            display: block;
            min-width: 36px;
            font-weight: 600;
        }

        li:first-child,
        li:last-child{
            display: none;
        }

        ul{
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
            overflow: hidden;
        }
    }
</style>
