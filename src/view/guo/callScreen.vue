<template>
    <div class="callScreen-container">
        <div class="callScreen-topOne">
            <p style="font-size: 0.3rem;color:white">任意番号呼出</p>
        </div>
        <div class="callScreen-topTwo">  
            <p >エラーメッセージ</p>
        </div>
        <div >  
            <p style="color:white">受付番号</p>
        </div>
        <!-- 键盘及显示区 -->
        <div class="field">
           <van-row>
                <van-col  span="24" class="input-box" v-model="showNum">{{showNum}}</van-col>
            </van-row>
        </div>
        <div class="keyboard" > 
            <van-row class="key-row">
                <van-button  @click="clickNum(1)" >1</van-button>
                <van-button  @click="clickNum(2)" >2</van-button>
                <van-button  @click="clickNum(3)" >3</van-button>
            </van-row>
            <van-row class="key-row">
                <van-button  @click="clickNum(4)" >4</van-button>
                <van-button  @click="clickNum(5)" >5</van-button>
                <van-button  @click="clickNum(6)" >6</van-button>
            </van-row>
            <van-row class="key-row">
                <van-button  @click="clickNum(7)" >7</van-button>
                <van-button  @click="clickNum(8)" >8</van-button>
                <van-button  @click="clickNum(9)" >9</van-button>
            </van-row>
            <van-row class="key-row">
                <van-button  class='key-cell' @click="cancelAll()" ><p style="font-size: 0.28rem">全消去</p></van-button>
                <van-button  @click="clickNum(0)"  name='0' >0</van-button>
                <van-button  class='key-cell' @click="cancelOne()" ><p style="font-size: 0.28rem;line-height:.3rem">一文字消去</p></van-button>
            </van-row>
            
        </div>
        <div>
            <van-row class="operation">
                <van-button   span="8"><p style="font-size: 0.4rem">取消</p></van-button>
                <van-button class="key-confirm" data-num='S' span="16"><p style="font-size: 0.4rem">確認</p></van-button>
                
            </van-row>
        </div>
    </div>
</template>

<script>
// 任意番号呼出画面
// import { NumberKeyboard } from 'vant';
import { Row, Col, Toast } from 'vant';
import { Button } from 'vant';
name:'callScreen' 
export default {
    
    data(){
        return{
            showNum:'',
            
        }
    },
    methods:{   
        
        clickNum(num){
            this.showNum=this.showNum+num;
        },
        cancelAll(){
            this.showNum='';
        },
        cancelOne(){
            this.showNum=this.showNum.substring(0,this.showNum.length-1);
        }

    }
}
</script>

<style scoped>


.input-box {
    color: white;

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

.keyboard .van-button {
    border: 0.01rem black solid;
    border-top: black 0.04rem solid;
    height: 0.75rem;
    width: 32%;
    background-color: #C7CAD0;
    font-size: 0.4rem;
    margin-left: 0.04rem;
    float: left;
}
.field .van-col {
    text-align: center;
    color: white;
    font-size: .8rem;
}

.field {
    height: 1.5rem;
}
.keyboard {
    width: 100%;
    height: 45%;
}
.operation {
    margin-top: 0.09rem;
}
.operation .van-button:nth-child(1) {
    border: 0.03rem black solid;
    height: 0.9rem;
    width: 33%;
    background-color: #C7CAD0;
    margin-left: 0.02rem;
    float: left;
}
.operation .van-button:nth-child(2) {
    background-color: #C7CAD0;
    border: 0.03rem black solid;
    height: 0.9rem;
    width: 66%;
    float: left;
}
</style>