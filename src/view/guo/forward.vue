<template>
    <div class="forward-container">
        <div class="callScreen-topOne">
            <p style="font-size: 0.3rem;color:white">フォウード</p>
        </div>
        <div class="callScreen-topTwo">  
            <p >エラーメッセージ</p>
        </div>
        <div style="background:#3D4046">  
            <van-row>
                <van-col span="12"><p style="color:white">受付番号</p></van-col>
                <van-col span="12"><p style="color:white">業務名</p></van-col>
            </van-row>
        </div>
        <div class="field">
            <div v-model="id">
                {{id}}
            </div>
            <van-row >
                <van-col  span="4" v-model="id">45id</van-col>
                <van-col  span="20" v-model="name">{{name}}</van-col>
            </van-row>
        </div>
        <div style="background:#3D4046">  
            <van-row>
                <van-col span="12"><p style="color:white">フォウード先ID</p></van-col>
                <van-col span="12"><p style="color:white">業務名</p></van-col>
            </van-row>
        </div>
        <!-- 按键区 -->
        <div class="btn">
            <ul>
                <li 
                v-for="(item,index) in items"  
                v-bind:class="{'isActive':cal==index}"
                @click ="isChoose(index,item)" 
                :key="index"
                ref="se">{{item.id}}{{item.name}}</li>
            </ul>
        </div>
        <!-- 底层按键 -->
        <div class="buttom-btn">
            
                <van-button  span="8"><p style="color:black">取消</p></van-button>
                <van-button  span="8"><p style="color:black">自動</p></van-button>
                <van-button  span="8"><p style="color:black">確認</p></van-button>
            
        </div>
    </div>
</template>

<script>

name:'forward'
export default {
    data(){
        return{
            items:[
                {id:9,name:'業務名業務名業'},
                {id:1,name:'業務名業務名業'},
                {id:2,name:'業務名業務名業'},
                {id:3,name:'業務名業務名業'},
            ],
            cal:'',
            id:'',
            name:'',
            show:false,
        }
    },
    methods:{
        isChoose(index,item){
            let t=this;
            this.cal=index;
            let id=this.items[index].id;
            let name=this.items[index].name;
            console.log(id+name);
        },

    }
}
</script>

<style scoped>
.isActive {
    color: white;
    color: blue;
    background-color: brown;
}
.forward-container{
    height: 100%;
    background-color: black;
}
.callScreen-topOne {
width: 100%;
    background-color: #3D4046;
    text-align: center;
    line-height: 0.7rem;
    height: 10%;
}
.callScreen-topTwo {
width: 100%;
    background-color: red;
    text-align: center;
    line-height: 0.3rem;
    height: 4%;
}
.field {  
    height: 0.8rem;
    
}
.field .van-row {
    padding-left: 0.2rem;
    text-align: left;
    color: white;
    font-size: .3rem;
    
}
.btn {
    width: 100%;
    height: 55%;
    overflow: scroll;
}
.btn li {
    border-top:0.05rem black solid;
    line-height: 0.5rem;
    padding-left: 0.06rem;
    margin-left: 0.04rem;
    width: 96%;
    height: 0.5rem;
    font-size: 0.3rem;
    text-align: left;
    background-color: rgb(227, 230, 233);
}

.buttom-btn {
    width: 100%;
    height: 12%;
}
.buttom-btn .van-button {
    margin-left: 0.035rem;
    float: left;
    width: 1.2rem;
    margin-top: 0.03rem; 
    border: #3D4046 0.01rem solid;
    height: 0.8rem;
    font-size: 0.3rem;
    background-color: rgb(227, 230, 233);
}
</style>