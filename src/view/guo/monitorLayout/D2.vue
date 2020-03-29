<template>
  <div class="container">
    <div class="title">
      <p style="color:black">まもなく</p>
    </div>
    <div class="table">

    </div>
  </div>
</template>

<script>
  name:'D1';
  export default {
    data(){
      return{

      }
    }

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
    width: 101%;
    height: 0.5rem;
    background-color: blue;
    text-align: center;
    color: white;
    font-size: 0.35rem;
    z-index: -1;
  }
  .table{
    width: 99%;
    height: 4.3rem;
    background-color: #ededed;
    margin-left: 0.3rem;
  }

</style>
