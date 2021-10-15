<template>
  <div class="radiostations radiostations-card">
    <div class="radiostations-holder">
      <div v-for="(radiostation, index) in radiostations" :key="index" class="radiostations-item">
        <div class="radio-logo">
          <img :src="require(`../assets/img/radio-logo/${radiostation.id}.jpg`)" alt="">
          <div class="play-icon" :class="currentPlayRadio.id === radiostation.id && playingStatus ? 'active': ''">
            <span id="play-button" class="icon">
              <i v-if="!playingStatus || currentPlayRadio.id !== radiostation.id" class="ion-play" v-on:click="triggerAudio({radiostation, bitreit: false, play: true})"></i>
              <i v-if="playingStatus && currentPlayRadio.id === radiostation.id" class="ion-pause" v-on:click="triggerAudio({radiostation, bitreit: false, play: false})"></i>
            </span>
          </div>
        </div>
        <span class="radio-name">{{radiostation.name}}</span>
        <div class="bitreit-block">
          <span v-for="(bitreit, key) in radiostation.stream" :key="key" v-on:click="triggerAudio({radiostation, bitreit: key, play: true})" :class="currentPlayRadio.id === radiostation.id && currentBitreit === key && playingStatus ? 'active': ''">{{key}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    export default {
        props:['radiostations'],
        data(){
            return{}
        },

        methods:{
            triggerAudio(data){
                this.$store.dispatch('currentPlay/triggerAudio', data)
            }
        },

        mounted(){},

        computed:{
            currentPlayRadio(){
                return this.$store.getters['currentPlay/currentPlayRadio']
            },

            playingStatus(){
                return this.$store.getters['currentPlay/playingStatus']
            },

            currentBitreit(){
                return this.$store.getters['currentPlay/bitreit']
            }
        }
    }
</script>


<style lang="scss" scoped>
  @import '../scss/_vars.scss';
  .radiostations-card{
    padding: 10px;
    max-width: 350px;
    margin: 0 auto;

    @media screen and (max-width: 992px){
        display: block;
    }

    @media screen and (min-width: 993px){
      display: none;
    }

    .radiostations-item{
      margin-bottom: 15px;
      background: rgba($theme, 0.5);
      display: flex;
      justify-content: left;
      align-items: center;

      .radio-logo{
        width: 50px;
        height: 50px;
        position: relative;
        cursor: pointer;

        img{
          display: block;
          width: 100%;
          height: auto;
        }
      }

      .radiostations-holder{
        padding: 0;
      }

      .play-icon{
        position: absolute;
        background: rgba($theme, 0.5);
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        display: none;

        &.active{
          display: flex !important;
        }
      }

      .icon{
        font-size: 26px;
        display: block;
        margin: 0 auto;
        width: 45px;
        height: 45px;
        border: 3px white solid;
        //line-height: 80px;
        border-radius: 50%;
        cursor: pointer;
        text-align: center;
        color: white;

        i{
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
      }

      &:hover .play-icon{
        display: flex;
      }

      .radio-name{
        color: $white;
        display: block;
        font-weight: 600;
        padding-left: 13px;
        font-size: 12px;
      }

      .bitreit-block{
        margin-left: auto;
        color: $white;
        margin-right: 10px;
        font-weight: 600;
        font-size: 12px;

        span{
          display: inline-block;
          padding: 0 5px;
          cursor: pointer;
          text-decoration: underline;
          border-radius: 4px;

          &.active{
            color: $theme;
            background: white;
            text-decoration: none;
            font-weight: 700;
            padding: 0 7px;
          }
        }
      }
    }
  }
</style>
