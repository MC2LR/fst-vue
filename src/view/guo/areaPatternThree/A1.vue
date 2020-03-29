<template>
  <div class="container" >
      <div class="title">
          <p>下記番号の方は窓口までお越しください</p>
      </div>
      <div class="table">
        <van-row>
            <van-col span="6">458</van-col>
            <van-col span="6">458</van-col>
            <van-col span="6">458</van-col>
            <van-col span="6">458</van-col>
        </van-row>
        <van-row>
            <van-col span="6">458</van-col>
            <van-col span="6">458</van-col>
            <van-col span="6">458</van-col>
            <van-col span="6">458</van-col>
        </van-row>
        <van-row>
            <van-col span="6">458</van-col>
            <van-col span="6">458</van-col>
            <van-col span="6">458</van-col>
            <van-col span="6">458</van-col>
        </van-row>
        <van-row>
          <van-col span="6">458</van-col>
          <van-col span="6">458</van-col>
          <van-col span="6">458</van-col>
          <van-col span="6">458</van-col>
        </van-row>


      </div>
  </div>
</template>

<script>
name:'A1';
export default {
    data(){
        return {


        }
    },




}
</script>

<style scoped>
    .container{
        width: 100%;
        height: 4rem;
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
        height: 100%;
        margin-left: 0.03rem;
    }
    .table .van-col{
        text-align: center;
        line-height: 0.5rem;
        width: 25%;
        height: 0.89rem;
        border: 0.01rem black solid;
        margin: 0 -0.01rem -0.01rem 0;
    }
</style>
