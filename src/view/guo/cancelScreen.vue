<template>
    <div class="callScreen-container">
        <div class="callScreen-topOne">
            <p style="font-size: 0.3rem;color:white">キャンセル</p>
        </div>
        <div class="callScreen-topTwo">  
            <p >エラーメッセージ</p>
        </div>
        <div class="title" style="color:white">
            <p>受付番号</p>
        </div>
        <div class="show" style="color:white;font-size:0.45rem;">
            125415
        </div>
        <div class="top-btn">  
                <!-- <van-button><van-icon name="success" /></van-button>
                <van-button>受付番号顺</van-button> -->
            <van-row>
                <van-col tag="button" span="12"><van-icon name="success"  />移顺</van-col>
                <van-col tag="button" span="12" >受付番号顺</van-col>
            </van-row>
        </div>
        <!-- 中部显示 -->
        <div class="middle">
            <!-- <div class="options">
                <div click="isshow=!isshow">採番待ち</div>
                <div click="number(2)">呼出待ち</div>
                <div click="number(3)">处理中</div>
                <div click="number(4)">スキップ</div>
                <div click="number(5)">后方処理</div>
            </div> -->
            <div class="van-row">
                <van-row>
                    <van-col span="5">採番待ち</van-col>
                    <van-col span="5">呼出待ち</van-col>
                    <van-col span="5">处理中</van-col>
                    <van-col span="5">スキップ</van-col>
                    <van-col span="5">后方処理</van-col>
                </van-row>
            </div>
            <div class="content">  
                <van-button v-for="item in items" click="changeColor" :key="item">{{item.number}}</van-button>
            </div>
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
// 取消页面
// import { NumberKeyboard } from 'vant';
import { Row, Col, Toast } from 'vant';
import { Button } from 'vant';
name:'cancelScreen' 
export default {
    
    data(){
        return{
            isshow:'true',
            value:'',
            items:[
                {number:'545'},
                {number:'999'},
                {number:'999'},
                {number:'9991'},
                {number:'9992'},
                {number:'9992'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'545'},
                {number:'999'},
                {number:'999'},
                {number:'9991'},
                {number:'9992'},
                {number:'9992'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                 {number:'545'},
                {number:'999'},
                {number:'999'},
                {number:'9991'},
                {number:'9992'},
                {number:'9992'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'545'},
                {number:'999'},
                {number:'999'},
                {number:'9991'},
                {number:'9992'},
                {number:'9992'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                {number:'999'},
                
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
.content {
    margin-top: 1%;
    overflow: scroll;
   
}
.white {
    background-color: red;
}
.grey {
    background-color: yellow;
}
.content .van-button {
    float: left;
    width: 25%;
    border: 0.015rem grey solid;
    background-color: white;
    font-size: 0.3rem;
    color: black;
}
.middle {
    width: 100%;
    height: 55%;
    background-color: grey;
    overflow: scroll;
}
/* .options {
    width: 100%;
    height: 20%;
} */
.middle .van-row {
    width: 100%;
    height: 0.4rem;
}
.middle .van-col {
    background-color: grey;
    height: 0.4rem;
    width: 20%;
    float: left;
    border: black 0.01rem solid;
    font-size: 0.02rem;
    padding: 0 0 0 0.04rem;
    border-top-right-radius: 0.08rem;
    border-top-left-radius: 0.08rem;
    color: white;
}
.show {
    width: 100%;
    height: 0.5rem;
    text-align: center;
    line-height: 0.2rem;

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
    margin-left: 0.02rem;
}
.operation .van-button:nth-child(2) {
    border: black 0.01rem solid;
    margin-top: 0.2rem;
    height: 0.55rem;
    font-size: 0.25rem;
    width: 58%;
}

</style>