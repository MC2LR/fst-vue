<template>
  <div class="container">
      <div class="title">
          <p>現在お呼びしている番号</p>
      </div>
      <div class="table">
            <div v-for="(item,index) in waitNumber" class="window">
                  <van-row >
                        <van-col span="3">{{windowName}}</van-col>
                  </van-row>
                <van-row>
                    <van-icon  color="red" name="play" size="0.5rem" style="margin-left:0.8rem;" />
                </van-row>
                <van-row>
                        <van-col>{{item}}</van-col>
                </van-row>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
  import { Image } from 'vant';
  import axios from 'axios';
name:'A2';
export default {
   props:{
        waitNumber:{
            type:Array,
            default:[
            ]
        },
        windowName:{
            type:String,
            default:''
        }
    }
}
</script>

<style scoped>
    .window{
        width: 30%;
        margin: 1rem auto ;
        float: left;
        padding-left: 0.2rem;
    }

    .van-icon{
      transform: rotate(90deg);
    }
    .container{
        width: 99.5%;
        height: 4.8rem;
        border: orange 0.03rem solid;
        border-radius: 0.6rem;
    }
    .title{
        position: relative;
        z-index: -1;
        width: 100%;
        height: 0.5rem;
        background-color: rgb(27, 27, 121);
        text-align: center;
        color: white;
        font-size: 0.35rem;
    }
    .table{
        width: 100%;
        height: 4.3rem;
        display: flex;
        justify-content: center;
    }
    .table .van-col{
        border-collapse: collapse;
        margin: 0 auto;
        text-align: center;
        line-height: 0.5rem;
        width: 70%;
        height: 0.5rem;
        border: 0.01rem black solid;
        margin-left: 0.25rem;
        background-color: rgb(214, 236, 240);
    }
    .table .van-row:nth-child(2) .van-col{
        background-color:white;
        margin-bottom: -0.01rem;
        border: none;
    }
</style>
