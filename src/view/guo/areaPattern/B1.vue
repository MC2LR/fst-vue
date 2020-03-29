<template>
  <div class="container">
      <div class="title">
          <p>ただいまの待ち人数</p>
      </div>
      <div class="table">
          <p>{{msg}}人</p>
      </div>
  </div>
</template>

<script>
name:'B1';
import axios from 'axios';
export default {
    props:{
       msg:{
           type:Number,
           default:0
       }
    },
    


}
</script>

<style scoped>
    .container{
        width: 30%;
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
        font-size: 0.35rem;

    }
    .table{
        width: 100%;
        height: 1rem;
        margin-left: 0.03rem;

    }

</style>
