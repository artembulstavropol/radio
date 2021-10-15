const list = [
    {
        name: "Europa plus",
        id: 1,
        stream: {
            '64': 'https://europaplus.hostingradio.ru:8033/europaplus64.mp3',
            '128': 'https://europaplus.hostingradio.ru:8030/ep128',
            '320': 'https://europaplus.hostingradio.ru:8014/europaplus320.mp3'
        },
        streamMassive:['64','128','320'],
        smallLogo: 'https://top-radio.ru/assets/image/radio/180/europa-plus.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 1
    },

    {
        name: "Русское Радио",
        id: 2,
        stream: {
            '96': 'https://rusradio.hostingradio.ru/rusradio96.aacp'
        },
        streamMassive: ['96'],
        smallLogo: 'https://top-radio.ru/assets/image/radio/180/rusradio.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 2
    },

    {
        name: "SOUNDPARK DEEP",
        id: 3,
        stream: {
            '128': 'https://r163-172-168-211.relay.radiotoolkit.com:30003/spdeep'
        },
        streamMassive: ['128'],
        smallLogo: 'https://top-radio.ru/assets/image/radio/180/spdeep.jpg',
        jenre: ['electron_music'],
        hostCountry: 'Russia',
        parentRadiostation: 2
    },

    {
        name: "Amsterdam Trance Radio",
        id: 4,
        stream: {
            '192': 'https://strm112.1.fm/atr_mobile_mp3'
        },
        streamMassive: ['192'],
        //smallLogo: 'https://onlayn-radio.ru/uploads/posts/2014-07/1406031120_logo.png',
        jenre: ['electron_music', 'trance_vocal'],
        hostCountry: 'Netherlands',
        parentRadiostation: 4
    },

   {
        name: "Хит FM",
        id: 5,
        stream: {
          '96': 'https://hitfm.hostingradio.ru/hitfm96.aacp'
        },
        streamMassive: ['96'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/hit-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 5
   },

  {
      name: "Relax Fm",
      id: 6,
      stream: {
          '256': 'https://pub0301.101.ru:8443/stream/air/mp3/256/200',
          '64': 'https://pub0301.101.ru:8443/stream/air/aac/64/200'
      },
      streamMassive: ['64','256'],
      //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
      jenre: ['lite_music', 'relax'],
      hostCountry: 'Russia',
      parentRadiostation: 6
  },

  {
    name: "Маруся Fm",
    id: 7,
    stream: {
      '128': 'https://radio-holding.ru:9433/marusya_default',
      '64': 'https://pub0101.101.ru/stream/pull/aac/64/301'
    },
    streamMassive: ['64','128'],
    //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
    jenre: ['dance'],
    hostCountry: 'Russia',
    parentRadiostation: 7
  },

  {
    name: "Новое Радио",
    id: 8,
    stream: {
      '128': 'https://icecast-newradio.cdnvideo.ru/newradio3'
    },
    streamMassive: ['128'],
    //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
    jenre: ['pop'],
    hostCountry: 'Russia',
    parentRadiostation: 8
  },

  {
    name: "Радио Монте-Карло",
    id: 9,
    stream: {
      '96': 'https://montecarlo.hostingradio.ru/montecarlo96.aacp'
    },
    streamMassive: ['96'],
    //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
    jenre: ['pop', 'retro', 'relax'],
    hostCountry: 'Russia',
    parentRadiostation: 9
  },

  {
    name: "DFM",
    id: 10,
    stream: {
      '96': 'https://dfm.hostingradio.ru/dfm96.aacp'
    },
    streamMassive: ['96'],
    //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
    jenre: ['dance'],
    hostCountry: 'Russia',
    parentRadiostation: 10
  },

  {
    name: "Радио ENERGY",
    id: 11,
    stream: {
      '256': 'https://pub0301.101.ru:8443/stream/air/mp3/256/99',
      '64': 'https://pub0301.101.ru:8000/stream/air/aac/64/99'
    },
    streamMassive: ['64','256'],
    //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
    jenre: ['pop'],
    hostCountry: 'Russia',
    parentRadiostation: 11
  },

  {
    name: "Радио Ваня",
    id: 12,
    stream: {
      '96': 'https://radiokrug.ru/radio/vanya/icecast.audio'
    },
    streamMassive: ['96'],
    //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
    jenre: ['dance', 'pop'],
    hostCountry: 'Russia',
    parentRadiostation: 12
  },

    {
        name: "Радио Рекорд",
        id: 13,
        stream: {
            '64': 'https://air.radiorecord.ru:805/rr_aac_64',
            '128': 'https://air.radiorecord.ru:805/rr_128',
            '320': 'https://air.radiorecord.ru:805/rr_320'
        },
        streamMassive: ['64','128','320'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['dance', 'pop'],
        hostCountry: 'Russia',
        parentRadiostation: 13
    },

    {
        name: "Russian Mix - Радио Рекорд",
        id: 14,
        stream: {
            '64': 'https://air.radiorecord.ru:805/rus_aac_64',
            '128': 'https://air.radiorecord.ru:805/rus_128',
            '320': 'https://air.radiorecord.ru:805/rus_320'
        },
        streamMassive: ['64','128','320'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['dance', 'pop'],
        hostCountry: 'Russia',
        parentRadiostation: 14
    },

    {
        name: "Ретро FM",
        id: 15,
        stream: {
            '64': 'https://retro.hostingradio.ru:8043/retro64',
            '128': 'https://retro.hostingradio.ru:8043/retro128',
            '320': 'https://retro.hostingradio.ru:8014/retro320.mp3'
        },
        streamMassive: ['64','128','320'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['retro'],
        hostCountry: 'Russia',
        parentRadiostation: 15
    },

    {
        name: "Юмор FM",
        id: 16,
        stream: {
            '64': 'https://pub0301.101.ru:8443/stream/air/aac/64/102',
            '256': 'https://pub0301.101.ru:8443/stream/air/mp3/256/102'
        },
        streamMassive: ['64','256'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['fun'],
        hostCountry: 'Russia',
        parentRadiostation: 16
    },

    {
        name: "НАШЕ Радио",
        id: 17,
        stream: {
            '64': 'https://nashe1.hostingradio.ru/nashe-64.mp3',
            '128': 'https://nashe1.hostingradio.ru/nashe-128.mp3',
            '256': 'https://nashe1.hostingradio.ru/nashe-256'
        },
        streamMassive: ['64','128','256'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['rock'],
        hostCountry: 'Russia',
        parentRadiostation: 17
    },

    {
        name: "Авторадио",
        id: 18,
        stream: {
            '64': 'https://pub0301.101.ru:8443/stream/air/aac/64/100',
            '256': 'https://pub0301.101.ru:8443/stream/air/mp3/256/100'
        },
        streamMassive: ['64','256'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop', 'retro'],
        hostCountry: 'Russia',
        parentRadiostation: 18
    },

    {
        name: "Дорожное радио",
        id: 19,
        stream: {
            '64': 'https://dorognoe.hostingradio.ru/dorognoe_acc',
            '320': 'https://dorognoe.hostingradio.ru/radio'
        },
        streamMassive: ['64','320'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop', 'retro'],
        hostCountry: 'Russia',
        parentRadiostation: 19
    },

    {
        name: "Радио Шансон",
        id: 20,
        stream: {
            '48': 'https://chanson.hostingradio.ru:8041/chanson48.aacp',
            '128': 'https://chanson.hostingradio.ru:8041/chanson128.mp3',
            '256': 'https://chanson.hostingradio.ru:8041/chanson256.mp3',
        },
        streamMassive: ['48','128', '256'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['russian_shanson'],
        hostCountry: 'Russia',
        parentRadiostation: 20
    },

    {
        name: "Comedy Radio",
        id: 21,
        stream: {
            '64': 'https://pub0301.101.ru:8000/stream/air/aac/64/202',
            '256': 'https://ic7.101.ru:8000/s60',
        },
        streamMassive: ['64','256'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['fun', 'pop'],
        hostCountry: 'Russia',
        parentRadiostation: 21
    },

    {
        name: "Радио Мир",
        id: 22,
        stream: {
            '128': 'https://icecast-mirtv.cdnvideo.ru/radio_mir128'
        },
        streamMassive: ['128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 22
    },

    {
        name: "Радио Maximum",
        id: 23,
        stream: {
            '96': 'https://maximum.hostingradio.ru/maximum96.aacp',
            '128': 'https://maximum.hostingradio.ru/maximum128.mp3'
        },
        streamMassive: ['96', '128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['rock'],
        hostCountry: 'Russia',
        parentRadiostation: 23
    },

    {
        name: "Радио для двоих",
        id: 24,
        stream: {
            '128': 'https://radiokrug.ru/radio/for2/icecast.audio'
        },
        streamMassive: ['128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 24
    },

    {
        name: "Радио Romantika",
        id: 25,
        stream: {
            '64': 'https://pub0301.101.ru:8443/stream/air/aac/64/101',
            '256': 'https://pub0301.101.ru:8443/stream/air/mp3/256/101',
        },
        streamMassive: ['64','256'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 25
    },

    {
        name: "Свое FM",
        id: 26,
        stream: {
            '128': 'https://getradio.me/svoefm'
        },
        streamMassive: ['128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 26
    },

    {
        name: "Rock - Радио Рекорд",
        id: 27,
        stream: {
            '64': 'https://air.radiorecord.ru:805/rock_aac_64',
            '128': 'https://air.radiorecord.ru:805/rock_128',
            '320': 'https://air.radiorecord.ru:805/rock_320',
        },
        streamMassive: ['64','128', '320'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['rock'],
        hostCountry: 'Russia',
        parentRadiostation: 27
    },

    {
        name: "Гоп FM - Радио Рекорд",
        id: 28,
        stream: {
            '64': 'https://air.radiorecord.ru:805/gop_aac_64',
            '128': 'https://air.radiorecord.ru:805/gop_128',
            '320': 'https://air.radiorecord.ru:805/gop_320',
        },
        streamMassive: ['64','128', '320'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 28
    },

    {
        name: "Жара FM",
        id: 29,
        stream: {
            '128': 'https://top.radiosolo.ru/radio/zharafm/icecast.audio'
        },
        streamMassive: ['128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 29
    },

    {
        name: "Like FM",
        id: 30,
        stream: {
            '64': 'https://pub0301.101.ru:8443/stream/air/aac/64/219',
            '256': 'https://pub0301.101.ru:8443/stream/air/mp3/256/219'
        },
        streamMassive: ['64', '256'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 30
    },

    {
        name: "Эхо Москвы",
        id: 31,
        stream: {
            '32': 'https://icecast-echomsksni.cdnvideo.ru/stream',
            '128': 'https://icecast-echomsksni.cdnvideo.ru/stream2'
        },
        streamMassive: ['32', '128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['talk', 'news'],
        hostCountry: 'Russia',
        parentRadiostation: 30
    },

    {
        name: "Вести FM",
        id: 32,
        stream: {
            '64': 'https://icecast-vgtrk.cdnvideo.ru/vestifm_mp3_64kbps',
            '128': 'https://icecast-vgtrk.cdnvideo.ru/vestifm_mp3_128kbps',
            '192': 'https://icecast-vgtrk.cdnvideo.ru/vestifm_mp3_192kbps'
        },
        streamMassive: ['64', '128', '192'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['news'],
        hostCountry: 'Russia',
        parentRadiostation: 32
    },

    {
        name: "Пи FM",
        id: 33,
        stream: {
            '96': 'https://cdn.pifm.ru/96',
            '192': 'https://cdn.pifm.ru/mp3'
        },
        streamMassive: ['96', '192'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 33
    },

    {
        name: "Питер FM",
        id: 34,
        stream: {
            '160': 'https://radiokrug.ru/radio/piterfm/icecast.audio'
        },
        streamMassive: ['160'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 34
    },

    {
        name: "Маяк",
        id: 35,
        stream: {
            '64': 'https://icecast-vgtrk.cdnvideo.ru/mayakfm_mp3_64kbps',
            '128': 'https://icecast-vgtrk.cdnvideo.ru/mayakfm_mp3_128kbps',
            '192': 'https://icecast-vgtrk.cdnvideo.ru/mayakfm_mp3_192kbps'
        },
        streamMassive: ['64','128','192'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop', 'news', 'talk'],
        hostCountry: 'Russia',
        parentRadiostation: 35
    },

    {
        name: "КоммерсантЪ",
        id: 36,
        stream: {
            '32': 'http://kommersant77.hostingradio.ru:8016/kommersant32.mp3',
            '64': 'http://kommersant77.hostingradio.ru:8016/kommersant64.mp3',
            '128': 'http://kommersant77.hostingradio.ru:8016/kommersant128.mp3'
        },
        streamMassive: ['32','64','128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['news', 'talk'],
        hostCountry: 'Russia',
        parentRadiostation: 36
    },

    {
        name: "Радио 7 на семи холмах",
        id: 37,
        stream: {
            '64': 'https://radio7.hostingradio.ru:8040/radio764.mp3',
            '128': 'https://radio7.hostingradio.ru:8040/radio7128.mp3',
            '256': 'https://radio7.hostingradio.ru:8040/radio7256.mp3'
        },
        streamMassive: ['64','128','256'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop', 'retro'],
        hostCountry: 'Russia',
        parentRadiostation: 37
    },

    {
        name: "Radio Miami",
        id: 38,
        stream: {
            '128': 'https://vofile.ru/ukraine/radio-maiami-ua/icecast.audio'
        },
        streamMassive: ['128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['rep', 'hip-hop'],
        hostCountry: 'Ukraine',
        parentRadiostation: 38
    },

    {
        name: "Радио Континенталь",
        id: 39,
        stream: {
            '128': 'https://radiosolo.ru/radio/radiocon/icecast.audio'
        },
        streamMassive: ['128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 39
    },

    {
        name: "Хорошее радио",
        id: 40,
        stream: {
            '64': 'https://top.radiosolo.ru/radio/horosheefm/icecast.audio'
        },
        streamMassive: ['64'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop'],
        hostCountry: 'Russia',
        parentRadiostation: 40
    },

];


module.exports = list;
