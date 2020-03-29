<template>
  <div class="container">
      <div class="title">
          <p style="color:black">まもなく</p>
          <p style="color:black;font-size:0.2rem;padding-top:0.1rem;">お呼びします</p>
      </div>
      <div class="table">
          <van-row>
              <van-col></van-col>
          </van-row>
          <van-row>
              <van-col></van-col>
          </van-row>
          <van-row>
              <van-col></van-col>
          </van-row>
          <van-row>
              <van-col></van-col>
          </van-row>
          <van-row>
              <van-col></van-col>
          </van-row>
          <van-row>
              <van-col style="border-bottom:none"></van-col>
          </van-row>
        <!-- 数据区 -->
    </div>

         <van-row v-for="(item,index) in waitPeople" :key="index" class="cell">
            {{item}}
         </van-row>

      
  </div>
</template>

<script>
name:'B2';
export default {
    props:{
        waitPeople:{
            type:Array,
            default:[  
            ]
        }
    }
}
</script>

<style scoped>
    .cell{
        float: left;
        text-align: center;
        font-size: 0.45rem;
        padding-left: 0.55rem;
        line-height: 0.65rem;
    }

    .table .van-col{
        width: 100%;
        height: 0.64rem;
        border-bottom: 0.01rem black solid;
    }
    .container{
        width: 100%;
        height: 4.8rem;
        border: orange 0.03rem solid;
        border-radius: 0.4rem;
    }
    .title{
        position: relative;
        width: 101%;
        height: 1rem;
        background-color: rgb(223, 241, 171);
        text-align: center;
        color: white;
        font-size: 0.35rem;
        z-index: -1;
    }
    .table{
        position: fixed;
        width: 100%;
        height: 3.8rem;
        margin-left: 0.03rem;
    }

</style>
