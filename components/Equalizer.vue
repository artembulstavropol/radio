<template>

    <div id="wrapper" :class="!playingStatus ? 'non-playing':''">
        <div class="equalizer">
            <span class="equalizer-item equalizer-1"></span>
            <span class="equalizer-item equalizer-2"></span>
            <span class="equalizer-item equalizer-3"></span>
            <span class="equalizer-item equalizer-none"></span>
        </div>
    </div>
</template>


<script>
    export default {
        computed:{
            playingStatus(){
                return this.$store.getters['currentPlay/playingStatus']
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/_vars.scss";
    @keyframes music {
        0% {
            height: 3px;
        }

        50% {
            height: 20px;
        }

        100% {
            height: 5px;
        }
    }

    @keyframes music-stop {
        0% {
            height: 3px;
        }

        50% {
            height: 3px;
        }

        100% {
            height: 3px;
        }
    }

    @mixin equalize($number) {
        animation: music #{$number}s linear infinite;
    }

    @mixin equalize-stop($number) {
        animation: music-stop #{$number}s linear 1;
    }

    #wrapper{
        position: absolute;
        left: 53px;
    }

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .equalizer {
        position: relative;
        height: 20px;
        overflow: hidden;
        margin-left: 7px;
        //margin-bottom: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .equalizer-item {
        display: inline-block;
        background: $blue;
        width: 3px;
        height: 3px;
        transition: $default-transition;
        background: $danger !important;
        margin: 0 2px;
    }

    .equalizer-none {
        opacity: 0;
    }

    .equalizer-1 {
        @include equalize(.5);
    }

    .equalizer-2 {
        @include equalize(.9);
    }

    .equalizer-3 {
        @include equalize(.7);
    }

    #wrapper.non-playing{
        .equalizer-item{
            @include equalize-stop(.9);
            //animation: none;
            transition: $default-transition;
            //height: 3px;
            background: $blue !important;
        }

        /*.equalizer-none{*/
        /*    height: 2px;*/
        /*}*/

        /*.equalizer-1{*/
        /*    height: 5px;*/
        /*}*/

        /*.equalizer-2{*/
        /*    height: 13px;*/
        /*}*/

        /*.equalizer-3{*/
        /*    height: 20px;*/
        /*}*/
    }
</style>
