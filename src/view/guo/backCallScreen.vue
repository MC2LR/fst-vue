<template>
    <div class="callScreen-container">
        <div class="callScreen-topOne">
            <p style="font-size: 0.3rem;color:white">後方処理呼出画面</p>
        </div>
        <div class="callScreen-topTwo">  
            <p >エラーメッセージ</p>
        </div>
        
        <div class="top-btn">  
                <!-- <van-button><van-icon name="success" /></van-button>
                <van-button>受付番号顺</van-button> -->
            <van-row>
                <van-col tag="button" span="12"><van-icon name="success"  />移顺</van-col>
                <van-col tag="button" span="12" >受付番号顺</van-col>
            </van-row>
        </div>
        <div class="number-field" v-for="item in items">
            <van-row>
                <van-col span="6">{{item.id}}</van-col>
            </van-row>
        </div>

        <div class="operation">
            <van-row>
                <van-button tag="button" >取消</van-button>
                <van-button tag="button" >確認</van-button>
            </van-row>
        </div>
       
    </div>
</template>

<script>
// 後方処理呼出画面
// import { NumberKeyboard } from 'vant';
import { Row, Col, Toast } from 'vant';
import { Button } from 'vant';
name:'backCallScreen' 
export default {
    
    data(){
        return{
            show:'true',
            value:'',
            items:[
                {id:999},
                ]
        }
    },
    methods:{   
        sumbit:function() {
        
        }
    }


}
</script>

<style scoped>

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

/* .top-btn .van-row {
   
    margin-left: 1%;
    width: 97%;
    height: 0.4rem;
    background-color: aliceblue;
    text-align: center;
    border-radius: 0.05rem;
} */
.top-btn .van-row .van-col:nth-child(1) {
    border-radius: 0.05rem 0 0 0.05rem;
    height: 0.4rem;
    float: left;
    margin-left: 0.02rem;
    width: 49%;

}
.top-btn .van-row .van-col:nth-child(2) {
    height: 0.4rem;
    float: right;
    width: 49%;
    margin-right: 0.04rem;
    border-radius: 0 0.05rem 0.05rem 0;
}
.number-field {
    width: 100%;
    height: 65%;
    overflow: scroll;
}
.number-field .van-col{
    
    width: 25%;
    height: 0.5rem;
    background-color: white;
    border-radius: 0.05rem;
    border: #3D4046 0.02rem solid;
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.3rem;
}
.operation {
    width: 100%;
    height: 11.5%;
}
.operation .van-button:nth-child(1) {
    border: black 0.01rem solid;
    background-color: rgb(233, 233, 236);
    margin-top: 0.15rem;
    height: 0.62rem;
    font-size: 0.35rem;
    width: 40%;
    margin-left: 0.04rem;
    float: left;
}
.operation .van-button:nth-child(2) {
    border: black 0.01rem solid;
    background-color: rgb(233, 233, 236);
    margin-top: 0.15rem;
    height: 0.62rem;
    font-size: 0.35rem;
    width: 58%;
    float: left;
}

</style>