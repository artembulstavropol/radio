import io from 'socket.io-client'

export const state = () =>({
  usersOnline: 0,
  socket: false
})

export const mutations = {
  setUsersOnline(state, usersOnline){
    state.usersOnline = usersOnline
  },

  setSocket(state, socket){
      state.socket = socket;
  }
}

export const actions = {
  socketConnect(ctx, data){
    const socket = io(`${data.hostname}${data.hostname === 'localhost' ? ':4200' : ''}`);
    if(!ctx.getters.socket){
        socket.on("connect", () => {
          ctx.commit('setSocket', true);
        });
        socket.on("sendUsersOnline", (data)=>{
            ctx.commit('setUsersOnline', data)
        })
        socket.on('disconnect', ()=>{
          ctx.commit('setSocket', false);
        })

        socket.connect();

    }

    // socket.emit('sendMessage', 'Привет')
    // socket.on("fromServer", (data) =>{})
  }
}

export const getters = {
  usersOnline: state => state.usersOnline,
  socket: state => state.socket
}
