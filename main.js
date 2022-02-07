let data = [
    {
        title:"線上聊天室",
        img:"./images/chatroom/photo.png",
        content:"利用vue + firebase達到聊天室的效果",
        link:"https://yuting09120310.github.io/chatroom-realtime-database/"
    },
    {
        title:"英文小測驗",
        img:"./images/js_eng.test/eng.png",
        content:"js+jquery練習的小作品",
        link:"https://yuting09120310.github.io/JS_eng_test/"
    },
    {
        title:"ubike地圖",
        img:"./images/ubike_map/photo.png",
        content:"查詢ubike1.0 2.0站點位置",
        link:"https://yuting09120310.github.io/ubike_map/"
    }
]

let app = Vue.createApp({
    data(){
        let data2=[]
        return{
            data2 : data
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
})

app.mount('#wrapper');