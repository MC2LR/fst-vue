<template>
  <div class="lobby-container">
      <div class="top-title">
            業務情報表示
      </div>
      <div class="middle-title">
          業務名/待ち人数/待ち時間
      </div>
      <div class="middle-cell-content" style="overflow:scroll" v-for="item in items">
            <div class="cell" style="color:white;text-align: center">
                <p >{{item.name}} {{item.nameNext}} {{item.name}} {{item.nameNext}}</p>
                <span style="color: grey">待ち人数{{item.waitingPeople}} 待ち時間{{item.waitingTime}}</span>
            </div>
            <div class="cell" style="color:white;text-align: center;background: #3D4046">
                <p>{{item.name}} {{item.nameNext}} {{item.name}} {{item.nameNext}}</p>
                <span style="color: grey">待ち人数{{item.waitingPeople}}待ち時間{{item.waitingTime}}</span>
            </div>
            
            
      </div>
      <div>
            <van-button type="default" color="#acadad" size="0.1rem"><p style="color:black">確認</p></van-button>
      </div> 

  </div>
</template>


<script>
import { Button } from 'vant';
name:"lobby"
export default {
  data(){
    return{
      //数据源
      items:[
          {name:'業務名業5',nameNext:'務名業務0',waitingPeople:'99',waitingTime:'99'},

      ]

    }


  }
}
</script>




<style scoped>
.lobby-container{
  background-color: black;
  width: 100%;
  height: 100%
}

.top-title {
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;   /* 垂直变化 */
    color: white;
    background-color: #3D4046;
    font-size: 0.25rem;
}
.middle-title {
    text-align: center;
    color: grey;
    background-color:#656666;

}
.van-button  {
  margin-top: 0.35rem;
  height: 0.55rem;
  width: 97%;
  margin-left: 1.5%;
  color: #acadad;
}


.middle-cell-content{
  margin: 0 auto;
  height: 5rem;
  width: 100%
  
}


</style>