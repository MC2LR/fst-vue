<template>
  <div class="container">

      <div class="title">
          <p>現在お呼びしている番号</p>
      </div>
       <div class="table">
          <div style="font-size:2rem;padding-left:1rem;height:3rem">
              <p>{{callingNum}}</p>
          </div>
          <div style="font-size:0.3rem;float:right;margin-right:0.6rem;padding-top:0rem;">
              <p>番のお客様は中へお入りください</p>
          </div>
      </div>
  </div>
</template>

<script>
name:'A3';
export default {
    props:{
        callingNum:{
            type:String,
            default:''
        }
    }
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
        background-color: green;
        text-align: center;
        color: white;
        font-size: 0.35rem;

    }
    .table{
        padding: 0.5rem 0 0 0;
        position: relative;
        z-index: -1;
        width: 100%;
        height: 80%;
        background-color: rgb(206, 226, 206);
        margin-left: 0.03rem;
    }
    .table .van-col{
        text-align: center;
        line-height: 0.5rem;
        width: 25%;
        height: 0.5rem;
        border: 0.01rem black solid;
        margin: 0 -0.01rem -0.01rem 0;
    }
</style>
