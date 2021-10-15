const list = [
    {
        name: "STUDIO 21",
        id: 41,
        stream: {
            '96': 'https://icecast-studio21.cdnvideo.ru/S21_1',
            '256': 'https://icecast-studio21.cdnvideo.ru/S21cl_1r'
        },
        streamMassive: ['96','256'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['rep'],
        hostCountry: 'Russia',
        parentRadiostation: 41
    },

    {
        name: "Радиола",
        id: 42,
        stream: {
            '64': 'https://radiola.hostingradio.ru/radiola_sam_64.aac',
            '128': 'https://radiola.hostingradio.ru/radiola_sam_128.mp3'
        },
        streamMassive: ['64','128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['retro'],
        hostCountry: 'Russia',
        parentRadiostation: 42
    },

    {
        name: "Милицейская Волна",
        id: 43,
        stream: {
            '128': 'https://radiomv.hostingradio.ru:80/radiomv128.mp3',
            '256': 'https://radiomv.hostingradio.ru:80/radiomv256.mp3'
        },
        streamMassive: ['128','256'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['retro'],
        hostCountry: 'Russia',
        parentRadiostation: 43
    },

    {
        name: "Радио Искатель",
        id: 44,
        stream: {
            '48': 'https://iskatel.hostingradio.ru:8015/iskatel-48.aac',
            '128': 'https://iskatel.hostingradio.ru:8015/iskatel-128.mp3'
        },
        streamMassive: ['48','128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['rock'],
        hostCountry: 'Russia',
        parentRadiostation: 44
    },

    {
        name: "Chill-Out",
        id: 45,
        stream: {
            '64': 'https://air.radiorecord.ru:805/chil_aac_64',
            '128': 'https://air.radiorecord.ru:805/chil_128',
            '320': 'https://air.radiorecord.ru:805/chil_320',
        },
        streamMassive: ['64','128','320'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['lite_music', 'chillout'],
        hostCountry: 'Russia',
        parentRadiostation: 45
    },

    {
        name: "DFM Deep",
        id: 46,
        stream: {
            '96': 'https://dfm-dfmdeep.hostingradio.ru/dfmdeep96.aacp'
        },
        streamMassive: ['96'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['dance'],
        hostCountry: 'Russia',
        parentRadiostation: 46
    },

    {
        name: "Record Deep - Радио Рекорд",
        id: 47,
        stream: {
            '64': 'https://air.radiorecord.ru:805/deep_aac_64',
            '128': 'https://air.radiorecord.ru:805/deep_128',
            '320': 'https://air.radiorecord.ru:805/deep_320',
        },
        streamMassive: ['64','128','320'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['dance'],
        hostCountry: 'Russia',
        parentRadiostation: 47
    },

    {
        name: "Радио 3",
        id: 48,
        stream: {
            '128': 'https://radiokrug.ru/radio/radio3/icecast.audio'
        },
        streamMassive: ['128'],
        //smallLogo: 'https://top-radio.ru/assets/image/radio/180/relax-fm.png',
        jenre: ['pop', 'rock', 'retro'],
        hostCountry: 'Russia',
        parentRadiostation: 48
    },
]
module.exports = list;
