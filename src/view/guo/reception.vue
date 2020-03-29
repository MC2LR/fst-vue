<template>
    <div class="callScreen-container">
        <div class="callScreen-topOne">
            <p style="font-size: 0.25rem;color:white">受付状態変更（業務ID）</p>
        </div>
        <div class="callScreen-topTwo">  
            <p >メッセージメッセージメッセージ</p>
        </div>
        <div class="title" style="color:white;background:#3D4046">
            <van-col span="12">業務ID</van-col>
            <van-col span="12">業務名</van-col>
        </div>
        <!-- 业务id和业务名的详细内容 -->
        <div class="content">
            <van-row v-for="item in items" :key="item">
                <van-col span="4">{{item.id}}</van-col>
                <van-col span="20">{{item.name}}</van-col>
            </van-row>
        </div>
   
        <!-- 底部按钮 -->
        <div class="operation">
                <van-button style="height:0.55rem" >取消</van-button>
        </div>
       
    </div>
</template>

<script>
// 受付状態変更画面
import { Row, Col, Toast } from 'vant';
import { Button } from 'vant';
name:'reception' 
export default {
    
    data(){
        return{
            isshow:'true',
            value:'',
            items:[
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                {id:'99',name:'業務名業務名業務名業務名'},
                
                
                ]
        }
    },
    methods:{   
        changeColor() {
            this
        },
        number(index){
            if(index==1){
                this
            }
        }
    }


}
</script>

<style scoped>
.operation {
    background-color: black;
    width: 100%;
    height: 0.6rem;
}
.operation .van-button {
    background-color: rgb(184, 179, 179);
    font-size: 0.25rem;
    margin: 0.08rem 0 0 0.03rem;
    width: 98%;
}
.content .van-row {
    text-align: center;
    padding-left: 0.02rem;
    padding-right: 0.02rem;
    border: black 0.02rem solid;
}
.content .van-col {
    color: black;
    font-size: 0.25rem;
    background-color: rgb(184, 179, 179);
    
}
.content {
    width: 100%;
    height: 72%;
    overflow: scroll;
}
.title {
    width: 97%;
    height: 0.25rem;
    padding-left: 0.1rem;
}

.callScreen-container{
    height: 100%;
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




</style>