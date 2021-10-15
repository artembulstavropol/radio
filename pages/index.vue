<template>
  <div class="holder">

    <div class="top-header">
      <div class="users-online">Онлайн: <span v-if="usersOnline">{{usersOnline}}</span></div>
      <a href="/" class="logo-holder">
        <img src="/logo.png" alt="">
      </a>
    </div>

    <FilterRadio/>
    <RadiostationsList :radiostations='currentRadiostationList'/>
    <RadiostationsCard :radiostations='currentRadiostationList'/>
    <Pagination/>
    <Player/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import RadiostationsList from '~/components/RadiostationsList.vue'
import RadiostationsCard from '~/components/RadiostationsCard.vue'
import MobileDetect from 'mobile-detect'
import Player from '~/components/Player.vue'
import Pagination from '~/components/Pagination.vue'
import FilterRadio from '~/components/FilterRadio.vue'
import staticJenreList from '../static/jenreList'

export default {

  layout: 'default',
  components: {
      Logo,
      RadiostationsList,
      RadiostationsCard,
      Player,
      Pagination,
      FilterRadio
    },
    head(){
      return{
          title: "Радио Онлайн - слушать радиостанции России бесплатно",
          meta:[
              {name: 'theme-color', content: "white"},
              {name: "description",  content:"Слушайте бесплатно онлайн радио в хорошем качестве на сайте Radio-Online.Top на комппьютере или в вашем смартфоне."},
              {name:"keywords", content:"радио, радио онлайн, онлайн радио, слушать радио, слушать радио онлайн, радио онлайн слушать бесплатно, радиостанции россии, радио россия, онлайн радио, радио онлайн бесплатно, слушать радио онлайн бесплатно, радио онлайн без регистрации, радиостанции, все радиостанции, radio online, музыка онлайн, слушать музыку"},
              {hid:"og:site_name",property:"og:site_name", content:"RADIO-ONLINE.TOP"},
              {hid:"og:image",property:"og:image", content:`https://radio-online.top/logo.png?id=190`}
            ]
        }
      },

    data () {
        return {
            staticJenreList,
            jenre: '',
            selected: null
        }
    },
    mounted(){
      let md = new MobileDetect(window.navigator.userAgent);
      this.$store.dispatch('sockets/socketConnect', window.location);
    },

    watchQuery: true,

    async asyncData (ctx) {
        await ctx.store.dispatch('currentPlay/fetch', ctx.query)
        return {
            jenre: ctx.query.jenre ? ctx.query.jenre : '',
            page: ctx.query.page ? ctx.query.page : ''
        }
    },

  methods: {

  },

    computed:{
        currentRadiostationList(){
            return this.$store.getters['currentPlay/currentRadiostationList']
        },

        usersOnline(){
            return this.$store.getters['sockets/usersOnline']
        },

        jenreList(){
            return this.$store.getters['currentPlay/jenreList']
        },

        currentJenre(){
            return this.$store.getters['currentPlay/currentJenre']
        }
    }
}
</script>

<style lang="scss" scoped>
  @import "../scss/_vars.scss";

  .users-online{
    color: $white;
    text-align: center;
    font-weight: 400;
    margin-bottom: 20px;

    span{
      font-weight: 700;
    }
  }



  .logo-holder{
    max-width: 170px;
    margin: 0 auto;
    display: block;
    margin-bottom: 3em;
  }
  img{
    display: block;
    max-width: 250px;
    height: auto;
    margin: auto;
    width: 100%;
  }

  .holder{
    padding: 40px 15px 70px 15px;
  }

  .slider{
    width: 100%;
    max-width: 400px;
    display: block;
    margin: 0 auto;
    margin-bottom: 90px;
  }

  .radio-list{
    max-width: 400px;
    margin: 0 auto;
  }

  @media screen and (max-width: 992px){

    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      direction: rtl;
    }

    .logo-holder{
      margin: initial;
      margin-bottom: 30px;
      max-width: 100px;
    }

    .holder{
      padding-top: 20px;
    }
  }
</style>
