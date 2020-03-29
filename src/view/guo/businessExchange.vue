<template>
    <div class="callScreen-container">
        <div class="callScreen-topOne">
            <p style="font-size: 0.3rem;color:white">業務振替</p>
        </div>
        <div class="callScreen-topTwo">  
            <p >メッセージ</p>
        </div>
        <div class="title" style="color:white" >
            <van-col span="12">受付番号</van-col>
            <van-col span="12">業務名</van-col>
        </div>
        <div class="show" style="color:white;font-size:0.45rem">
            <van-row v-for="item in items" style="font-size:0.3rem">
                <van-col span="8">{{item.id}}</van-col>
                <van-col span="16">{{item.name}}</van-col>
            </van-row>
            <div class="icon" style="width:100%;height:0.3rem;text-align:center"><van-icon color="green" name="down" /></div>
            <div style="width:100%;height:0.4rem;margin-top:0.2rem;">
            <van-row v-for="item in items" style="font-size:0.3rem">
                <van-col span="8">{{item.id}}</van-col>
                <van-col span="16">{{item.name}}</van-col>
            </van-row>
            </div>
        </div>
        <div style="width:100%;height:0.25rem">
            <van-col span="24" style=" background-color: rgb(117, 118, 121);text-align:center">振替先業務名</van-col>
        </div>
        
        <div class="selection">
            <van-row v-for="list in lists" >
                <van-button>{{list.name}}{{list.id}}</van-button>
            </van-row>
        </div>

        <!-- 底部按钮 -->
        <div class="operation">
            <van-row>
                <van-button tag="button" >取消</van-button>
                <van-button tag="button" >確認</van-button>
            </van-row>
        </div>
       
    </div>
</template>

<script>
// 业务振替画面
import { Row, Col, Toast } from 'vant';
import { Button } from 'vant';
name:'businessExchange' 
export default {
    
    data(){
        return{
            isshow:'true',
            value:'',
            items:[
                
                {id:'999',name:'業務名',newName:'456'},
                
                ],
            lists:[
                {name:'选择业务',id:'5'},
            ],
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
.selection .van-button {
    background-color: rgb(216, 219, 226);
    font-size: 0.3rem;
    border: black 0.04rem solid;
    width: 100%;
    height: 0.58rem;
    /* background-color: rgb(158, 157, 157); */
}
.selection {
    width: 100%;
    height: 48%;
    overflow: scroll;
    color: white;
    font-size: 0.25rem;
    text-align: center;
}
.show {
    width: 100%;
    height: 1.5rem;
}
.title .van-col{
    background-color: rgb(117, 118, 121)
    
}
.callScreen-container{
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
.top-btn {
    width: 100%;
    height: 0.5rem;
    margin-top: 0.1rem;
}

.operation {
    width: 100%;
    height: 11.5%;
}
.operation .van-button:nth-child(1) {
    border: black 0.01rem solid;
    margin-top: 0.2rem;
    height: 0.55rem;
    font-size: 0.25rem;
    width: 40%;
    margin-left: 0.04rem;
    background-color: rgb(216, 219, 226);
}
.operation .van-button:nth-child(2) {
    
    border: black 0.01rem solid;
    margin-top: 0.2rem;
    height: 0.55rem;
    font-size: 0.25rem;
    width: 57%;
    background-color: rgb(216, 219, 226);
}

</style>