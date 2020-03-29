<template>
  <div class="container" >
      <div class="title">
          <p>下記番号の方は窓口までお越しください</p>
      </div>
      <div class="table">
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"></van-col>
      </div>
        <van-col v-for="(item,index) in waitNumber" :key="index" span="6" class="cell">{{item}}</van-col>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
name:'A1';
export default {
          props:{
            waitNumber:{
              type:Array,
              default:[],
            },
    },
}
</script>

<style scoped>
    .cell{
        float: left;
        text-align: center;
        font-size: 0.5rem;
        margin-top: 0.05rem;
        padding-left: 0.1rem;
        padding-top: 0.3rem;
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
        position: fixed;
    }
    .table .van-col{
        position: relative;
        z-index: -1;
        text-align: center;
        line-height: 0.5rem;
        width: 24.7%;
        height: 1.09rem;
        border: 0.01rem black solid;
        margin: 0 -0.01rem -0.01rem 0;
    }
</style>
