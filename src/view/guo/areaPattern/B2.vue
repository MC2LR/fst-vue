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
name:'B2';
export default {
    data(){
        return{

        }
    }

}
</script>

<style scoped>
    .table .van-col{
        width: 100%;
        height: 0.39rem;
        border-bottom: 0.01rem black solid;
    }
    .container{
        width: 30%;
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
        width: 99%;
        height: 100%;
        margin-left: 0.03rem;
    }

</style>
