import url from '../helpers/url'

export const state = () =>({
  currentRadiostationList:[],
  maxRange: 100,
  minRange: 0,
  currentRange: 30,
  currentVolume: 0.09,
  playingStatus: false,
  currentPlayRadio: {},
  audioObject: null,
  bitreit: false,
  currentJenre: '',
  jenreList: [],
  currentPaginationPage: 1,
  paginationLimit: 1,//Максимальное количество страниц
  lastListeningRadio:{}
})

export const mutations = {
  setCurrentList(state, currentRadiostationList){
    state.currentRadiostationList = currentRadiostationList;
  },

  setPlayingStatus(state, playingStatus){
    state.playingStatus = playingStatus;
  },

  setAudioObject(state, audioObject){
    state.audioObject = audioObject;
  },

  setCurrentJenre(state, currentJenre){
      state.currentJenre = currentJenre
  },

  setCurrentPlayRadio(state, radiostation){
    state.currentPlayRadio = radiostation;
  },

  setVolume(state, data){
      state.currentRange = data;
      state.currentVolume = (data/100)*(data/100);
      state.audioObject ? state.audioObject.volume = (data/100)*(data/100) : null;
  },

  setBitreit(state, bitreit){
    state.bitreit = bitreit;
  },

  setJenreList(state, jenreList){
    state.jenreList = jenreList;
  },

  setLastListeningRadio(state, lastListeningRadio){
    state.lastListeningRadio = lastListeningRadio
  },

  setPaginationPage(state, currentPaginationPage){
    state.currentPaginationPage = currentPaginationPage;
  },

  setPaginationLimit(state, paginationLimit){
    state.paginationLimit = paginationLimit;
  }
}

export const actions = {

  /////////////////////////////////////
  async fetch(ctx, data){
    const jenre = data.jenre || '';
    const page = data.page || 1;

    try{
      const response  = await this.$axios.$get(`${url.getUrl()}/endpoint?jenre=${jenre}&page=${page}`)
      const currentRadiostationList = response['list'];
      const jenreList = response['jenreList'];
      const paginationLimit = response['paginationLimit']
      ctx.commit('setJenreList', jenreList)
      ctx.commit('setCurrentList', currentRadiostationList)
      ctx.commit('setPaginationPage', page)
      ctx.commit('setPaginationLimit', paginationLimit)
      ctx.commit('setCurrentJenre', jenre)
    }catch (e) {
      console.log(e)
      ctx.commit('setCurrentList', [])
    }
  },
  //////////////////////////////////////


  //////////////////////////////////////
  async getJenreList(ctx, data){
    try{
      const jenre = await this.$axios.$get(`${url.getUrl()}/jenre`)
      ctx.commit('setJenreList', jenre)
    }catch(e){
      console.log(e);
      ctx.commit('setJenreList', [])
    }
  },
  /////////////////////////////////////


  /////////////////////////////////////
  triggerAudio(ctx, data){
      const {radiostation, bitreit, play} = data;
      if(!play){
          ctx.getters.audioObject.pause();
          ctx.commit('setPlayingStatus', false);
      } else{
        const audio = ctx.getters.audioObject ? ctx.getters.audioObject : new Audio();
        audio.pause();
        audio.volume = ctx.getters.currentVolume;
        radiostation['streamMassive'].includes(bitreit) ? audio.src = radiostation['stream'][bitreit] : audio.src = radiostation['stream'][radiostation['streamMassive'][0]];
        audio.play();
        ctx.commit('setPlayingStatus', true);
        ctx.commit('setAudioObject', audio);
        ctx.commit('setCurrentPlayRadio', radiostation);
        radiostation['streamMassive'].includes(bitreit) ? ctx.commit('setBitreit', bitreit) : ctx.commit('setBitreit', radiostation['streamMassive'][0]);
      }
      ctx.commit('setLastListeningRadio', {radiostation, bitreit, play})
  },
  //////////////////////////////////////


  //////////////////////////////////////
  newAudioObject(ctx, data){
    ctx.commit('setAudioObject', data);
  },
  //////////////////////////////////////


  //////////////////////////////////////
  changeVolume(ctx, data){
    ctx.commit('setVolume', data);
  },
  //////////////////////////////////////

}

export const getters = {
  currentRadiostationList: state => state.currentRadiostationList,
  playingStatus: state => state.playingStatus,
  currentVolume: state => state.currentVolume,
  audioObject: state => state.audioObject,
  currentPlayRadio: state => state.currentPlayRadio,
  maxRange: state => state.maxRange,
  minRange: state => state.minRange,
  currentRange: state => state.currentRange,
  bitreit: state => state.bitreit,
  jenreList: state => state.jenreList,
  lastListeningRadio: state => state.lastListeningRadio,
  currentPaginationPage: state => state.currentPaginationPage,
  paginationLimit: state => state.paginationLimit,
  currentJenre: state => state.currentJenre
}
