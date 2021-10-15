<template>
    <div class="jenre-list jenre-list-desktop">
        <!--HIDDEN LINKS-->
        <nuxt-link to="/" :class="!currentJenre ? 'active': ''">Все</nuxt-link><!--
     --><NuxtLink :to='"?jenre="+jenre' v-for="(jenre, index) in jenreList" :key="index + 'links'" :class="currentJenre === jenre ? 'active' : ''">{{staticJenreList[jenre]}}</NuxtLink>
        <!--HIDDEN LINKS-->
    </div>
</template>

<script>
    import staticJenreList from '../static/jenreList'
    export default {
        components:{},

        data(){
            return{
                staticJenreList
            }
        },

        methods:{},

        computed:{
            jenreList(){
                return this.$store.getters['currentPlay/jenreList']
            },

            currentJenre(){
                return this.$store.getters['currentPlay/currentJenre']
            }
        }
    }
</script>

<style lang="scss">
    @import "../scss/_vars.scss";
    .jenre-list{
        padding: 0 10px;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 20px;
        max-width: 350px;

        &.jenre-list-desktop{
            max-width: 1580px;
        }

        select{
            display: block;
            width: 100%;
        }

        a, span{
            color: white;
            display: inline-block;
            padding: 2px 7px;
            border-radius: 4px;
            background: $theme;
            margin: 0 3px;
            margin-bottom: 6px;
            font-weight: 600;
            cursor: pointer;
            font-size: 12px;

            &.active{
                background: white;
                color: $theme;
                font-weight: 700;
            }
        }
    }
</style>
