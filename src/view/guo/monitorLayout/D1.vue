<template>
  <div class="container">
    <div class="title">
      <p >まもなく</p>
    </div>
    <div class="table">
       <ul v-for="item in items">
         <li>{{item.id}}</li>
       </ul>
    </div>
  </div>
</template>

<script>
  name:'D1';
  export default {
    data(){
      return{
        items: [
          {id: 150},
          {id: 135},
          {id: 154},
          {id: 155},
          {id: 156},
          {id: 159},
        ]
      }
    }

  }
</script>

<style scoped>
  .table li{
    line-height: 0.7rem;
    font-size: 0.3rem;
    height: 0.71rem;
    text-align: center;
    border-bottom: black 0.01rem solid;

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
    height: 0.5rem;
    background-color: #022261;
    text-align: center;
    color: white;
    font-size: 0.35rem;
    z-index: -1;
  }
  .table{
    position: relative;
    z-index: -1;
    width: 99%;
    height: 4.3rem;
    background-color: #ededed;
    margin-left: 0.03rem;
  }

</style>
