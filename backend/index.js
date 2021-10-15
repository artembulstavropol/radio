const list = require('./radiostations')
const express = require('express')
const app = express()
const port = 4200
const { paginationNumber } = require('../config/index');
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

let jenreList = [];

getJenreList = () => {
  list.map((item)=>{
    item.jenre.map((jenre)=>{
      if(!jenreList.includes(jenre)){
        jenreList.push(jenre)
      }
    })
  })
}

getJenreList();
server.listen(port)

app.get('/endpoint', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    const { jenre, page } = req.query;
    let _list = list;
    const _page = page ? page - 0 : 1;


    if(jenre){
      _list = _list.filter(item => item.jenre.includes(jenre))
    }

    //ВЫЧИСЛЕНИЯ ДЛЯ ПАГИНАЦИИ
    let paginationLimit = 0;//количество страниц пагинации
    const divider = _list.length % paginationNumber;//остаток от деления
    if(divider){
        paginationLimit = ((_list.length - divider) / paginationNumber) + 1;
    } else {
        paginationLimit = _list.length / paginationNumber;
    }
    //КОНЕЦ ВЫЧИСЛЕНИЙ ДЛЯ ПАГИНАЦИИ

    //ВЫБОРКА СТРАНИЦЫ ПАГИНАЦИИ
    _list = _list.slice(paginationNumber*(_page-1), paginationNumber * _page);
    //КОНЕЦ ВЫБОРКИ ДЛЯ СТРАНИЦЫ ПАГИНАЦИИ

    res.send({
        list:_list,
        jenreList,
        paginationLimit,
        page: _page,
        allRadiostatiosCounter: list.length
    })
})

app.get('/jenre', async(req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.send(jenreList)
})

app.get('/favorite', async(req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    console.log('FAVORITE')
    res.send(req.query.ids);
})



let connections = [];

io.sockets.on('connection', (socket)=>{
  connections.push(socket);
  io.sockets.emit('sendUsersOnline', connections.length)

  socket.on('disconnect', (data)=>{
      connections = connections.filter(function(item) {
        return item !== socket
      });

    io.sockets.emit('sendUsersOnline', connections.length)
  })
})

