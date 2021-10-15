<template>
  <div class="volume-block">
    <span class="volume-icon ion-volume-medium"></span>
    <client-only>
      <range-slider
        class="slider"
        :min="minRange"
        :max="maxRange"
        step="1"
        v-model="currentRange">
      </range-slider>
    </client-only>
  </div>
</template>

<script>
    import RangeSlider from 'vue-range-slider'
    // you probably need to import built-in style
    import 'vue-range-slider/dist/vue-range-slider.css'

  export default {
        components:{
            RangeSlider
        },
      data(){
          return{

          }
      },

      methods:{

      },

      computed:{
          minRange(){
              return this.$store.getters['currentPlay/minRange']
          },

          maxRange(){
              return this.$store.getters['currentPlay/maxRange']
          },

          currentRange:{
              get(){
                  return this.$store.getters['currentPlay/currentRange']
              },

              set(value){
                  this.$store.dispatch('currentPlay/changeVolume', value)
              }
          },
      }
  }
</script>

<style lang="scss">

  @import "../scss/_vars.scss";
  .volume-block{
    color: $dark;
    display: flex;
    justify-content: right;
    align-items: flex-end;
    flex-direction: row-reverse;
    width: 80%;

    .volume-icon{
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: lighten($theme, 3%);
      position: relative;
      cursor: pointer;
      font-size: 24px;
      color: white;
    }

    .slider{

    }

    .slider{
      display: block;
      margin-left: auto;
      width: calc(100% - 50px);
      position: absolute;
      background: darken($theme, 30%);
      right: -100%;
      height: 50px;
      transition: $default-transition;
      padding: 0 20px;
    }

    &:hover .slider{
      right: 50px;
      opacity: 1;
      visibility: visible;
    }
  }

  [class*="volume-block"] .range-slider-fill{
    background: $theme;
  }
</style>
