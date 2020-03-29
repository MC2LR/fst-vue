<template>
  <div class="container">
      <div class="title">
          <p>ただいまの待ち人数</p>
      </div>
      <div class="table">
            <p style="font-size:0.5rem;padding-top:3rem;padding-left:0.7rem">{{num}}人</p>
      </div>
  </div>
</template>

<script>
name:'B1';
export default {
     props:{
       num:{
           type:String,
           default:'0'
       }
    },
}
</script>

<style scoped>
    .container{
        width: 100%;
        height: 4.8rem;
        border: orange 0.03rem solid;
        border-radius: 0.4rem;
    }
    .title{
        position: relative;
        z-index: -1;
        width: 100%;
        height: 0.5rem;
        background-color: rgb(27, 27, 121);
        text-align: center;
        color: white;
        font-size: 0.2rem;
        line-height: 0.5rem;
    }
    .table{
        width: 100%;
        height: 1rem;

    }

</style>
