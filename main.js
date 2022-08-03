let data = [
    {
        title:"記帳軟體",
        img:"./images/記帳圖/photo1.png",
        content:"用C# + Mysql 寫出記帳軟體~(含心得)",
        link:"./home_account.html"
    },
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
    },
    {
        title:"TodoList",
        img:"./images/todolist/photo.png",
        content:"利用基礎的vue+js 寫出一個Todolist",
        link:"https://yuting09120310.github.io/todolist/"
    }
]

let app = Vue.createApp({
    data(){
        let data2=[];
        let custEmail;
        let custContent;
        
        return{
            data2 : data,
            custEmail,
            custContent
        }
    },
    methods: {
        sendEmail(){
            axios.post("https://blogemail.herokuapp.com/",{"title": this.custEmail,"content": this.custContent})
            .then(res => {
                alert(res)
            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    mounted() {
        
    },
})

app.mount('#page-wrapper');