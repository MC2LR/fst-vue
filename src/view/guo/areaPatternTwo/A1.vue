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
      </div>
       <van-col span="6" class="cell" v-for="(item,index) in waitNumber" :key="index">{{item}}</van-col> 
  </div>
</template>

<script>
name:'A1';
export default {
    props:{
        waitNumber:{
            type:Array,
            default:[
                
            ],
        },
    },
    

}
</script>

<style scoped>
    .container{
        width: 100%;
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
        position: fixed;
        width: 80%;
        height: 4.32rem;
        margin-left: 0.03rem;
    }
    .table .van-col{
        font-size: 0.7rem;
        text-align: center;
        line-height: 1.2rem;
        width: 33.3%;
        height: 1.46rem;
        border: 0.01rem rgb(102, 101, 101) solid;
        margin: -0.01rem -0.01rem -0.01rem -0.01rem;
        border-collapse: collapse;
    }
    .cell{
        width: 33.3%;
        float: left;
        font-size: 1rem;
        padding-top: 0.1rem;
        text-align: center;
    }
</style>
