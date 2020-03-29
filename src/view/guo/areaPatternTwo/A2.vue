<template>
  <div class="container">
      <div class="title">
          <p>現在お呼びしている番号</p>
      </div>

      <div class="table">
            <div v-for="(item,index) in waitNumber" class="window">
                    <van-row >
                        <van-col>{{index+1}}号窗口</van-col>
                    </van-row>
               
                    <van-icon  color="red" name="play" size="0.5rem" style="margin:0 auto;"/>
                
                    <van-row>
                        <van-col>{{item}}</van-col>
                    </van-row>
            </div>

      </div>


  </div>
</template>

<script>
name:'A2';
import axios from 'axios'
export default {
    props:{
        waitNumber:{
            type:Array,
            default:[]
        },
        windowName:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            screenWidth:document.window.clientWidth,
        }
    },
    created(){
        axios.post(window._CONFIG['monitorLayoutURL']+'/test/masterShopWindow/GetShopWindow').then(
            function (res) {
                console.log(res);
            }
        )
    },
    data() {
      return {
        screenWidth: document.body.clientWidth, // 屏幕尺寸
      }
    },
// 钩子函数
mounted () {
      const that = this;
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    }

}
</script>

<style scoped>
    .window{
        width: 20%;
        margin: 1rem  auto;
        float: left;      
    }
    .van-icon{
        transform: rotate(90deg); 
         padding: 0.5rem;
        
    }
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
        background-color: rgb(27, 27, 121);
        text-align: center;
        color: white;
        font-size: 0.35rem;
    }
    .table{
        width: 100%;
        height: 4.3rem;
        display: flex;
        justify-content: space-around;
 
    }
    .table .van-col{
        margin: 0 auto;
        text-align: center;
        line-height: 0.5rem;
        width: 100%;
        height: 0.5rem;
        border: 0.01rem black solid;
        background-color: rgb(214, 236, 240);
    }
</style>
