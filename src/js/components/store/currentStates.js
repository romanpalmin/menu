export default {
    settings:{
        server:'http://tab01:01@10.10.250.63/',
        ip: '10.10.250.63',
        userName: 'tab01',
        password:'01',
       /* server:'http://10.10.182.11/',*/
        urlSmallImage:'img/',
        urlBigImage:'images/',
        urlBackImage: 'images',
        images:{
            logo: 'beer-zha.png',
            close: 'close.png'
        },
        testMode:false,
        isTablet: true,
        showButtons: true,
        updateStatePeriod: 1000*60*5,  // время обновления меню секунда * кол-во секунд * кол-во минут
        updateOrderFrequency: 1000*15 // время обновления состояния корзины
    },
    appState:{
        MenuPoints:[],
        Category:{
            "332020":{
                name: 'Бургеры',
                currentState:[]
            },
            "342020":{
                name: 'СОСИДЖ ФЭКТОРИ',
                currentState:[]
            },
            "352020":{
                name: 'BBQ',
                currentState:[]
            },
            "392020":{
                name: 'БЭЙКС ЭНД СНЭКС',
                currentState:[]
            },
            "412020":{
                name: '4STARTS',
                currentState:[]
            },
            "422020":{
                name: 'АЙСИ-СПАЙСИ',
                currentState:[]
            },
            "432020":{
                name: 'НАПИТКИ',
                currentState:[]
            },
            "462020":{
                name: 'ПИВО',
                currentState:[]
            },
            "472020":{
                name:"ЗАВТРАКИ",
                currentState:[]
            },
            "482020":{
                name:"БИЗНЕС ЛАНЧ",
                currentState:[]
            }

        },
        show: {
            name: 'Развлечения',
            currentState:[]
        },
        orders:{
            name: 'Корзина',
            currentState:[]
        }
    }
}
