<template>
  <div class="container">
      <div class="title">
          <p style="color:black">不在だった方</p>
          <p style="color:black;font-size:0.2rem;padding-top:0.1rem;">窓口までおしください</p>
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
          <van-row>
              <van-col></van-col>
          </van-row>


      </div>
  </div>
</template>

<script>
name:'B3';
export default {


}
</script>

<style scoped>
    .table .van-col{
        width: 100%;
        height: 0.41rem;
        border-bottom: 0.01rem black solid;
    }
    .container{
        width: 30%;
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

    }
    .table{
        width: 100%;
        height: 100%;
        margin-left: -0.01rem;
    }

</style>
