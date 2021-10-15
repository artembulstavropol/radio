<template>
    <div class="player">
        <div class="player-holder">
            <span class="player-icon"
                  :class="playingStatus ? 'ion-pause': 'ion-play'"
                   v-on:click="triggerAudio()"></span>
            <span class="player-label">{{lastListeningRadio.radiostation ? lastListeningRadio.radiostation.name : 'Включите радио' }}</span>
            <Equalizer/>
            <Volume/>
        </div>
    </div>
</template>


<script>
    import Volume from "./Volume";
    import Equalizer from "./Equalizer";
    export default {
        components:{
            Volume,
            Equalizer
        },

        methods:{
            triggerAudio(){
                if(!this.lastListeningRadio.radiostation){
                    this.$store.dispatch('currentPlay/newAudioObject', new Audio())
                    //console.log(this.currentRadiostationList)
                    const data = {
                        radiostation: this.currentRadiostationList[0],
                        bitreit: this.currentRadiostationList[0]['bitreit'],
                        play: true
                    };
                    this.$store.dispatch('currentPlay/triggerAudio', data)
                } else{
                    this.$store.dispatch('currentPlay/triggerAudio', {
                        radiostation: this.currentPlayRadio,
                        bitreit: this.currentBitreit,
                        play: !this.playingStatus
                    })
                }

            }
        },

        computed:{
            currentRadiostationList(){
                return this.$store.getters['currentPlay/currentRadiostationList']
            },
            currentPlayRadio(){
                return this.$store.getters['currentPlay/currentPlayRadio']
            },

            playingStatus(){
                return this.$store.getters['currentPlay/playingStatus']
            },

            currentBitreit(){
                return this.$store.getters['currentPlay/bitreit']
            },

            lastListeningRadio(){
                return this.$store.getters['currentPlay/lastListeningRadio']
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "../scss/_vars.scss";

    .player{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .player-holder{
        background: darken($theme, 25%);
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        overflow: hidden;
        -webkit-box-shadow: 0px 0px 13px 0px darken($theme, 40%);
        -moz-box-shadow:    0px 0px 13px 0px darken($theme, 40%);
        box-shadow:         0px 0px 13px 0px darken($theme, 40%);
    }

    .player-icon{
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        font-size: 24px;
        color: $white;
        background: darken($theme, 15%);
        margin-right: 3px;
    }

    .player-label{
        position: absolute;
        left: 50px;
        padding-left: 37px;
        color: $white;
        font-weight: 500;
        font-size: 13px;
    }
</style>
