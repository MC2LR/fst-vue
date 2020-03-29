<template>
  <div class="container">
      <div class="title">
          <p style="color:black;font-size: 0.2rem">不在だった方</p>
          <p style="color:black;font-size:0.15rem">窓口までおしください</p>
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
              <van-col></van-col>
          </van-row>
          <van-row>
              <van-col></van-col>
          </van-row>

        <van-row v-for="(item,index) in items" :key="index" class="cell">
              <van-col></van-col>
          </van-row>


      </div>
  </div>
</template>

<script>
name:'B3';
export default {
    data(){
        return{
            items:[
                15,45,45,45,84,45,5
            ]
        }
    }

}
</script>

<style scoped>
    .cell{
        
    }
    .table .van-col{
        width: 100%;
        height: 0.41rem;
        border-bottom: 0.01rem black solid;
    }
    .container{
        width: 100%;
        height: 4.8rem;
        border: orange 0.03rem solid;
        border-radius: 0.4rem;
    }
    .title{
        margin-top: -0.03rem;
        position: relative;
        z-index: -1;
        width: 100%;
        height: 1rem;
        background-color: rgb(231, 199, 17);
        text-align: center;
        color: white;
        font-size: 0.35rem;
        line-height: 0.5rem;
    }
    .table{
        position: fixed;
        width: 100%;
        height: 100%;
        margin-left: -0.01rem;
    }

</style>
