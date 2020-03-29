<template>
  <div class="container" style="border: grey 0.01rem solid">
    <component :is="comName" :callingNum="callingNum" :waitNumber="waitNumber"></component>
</div>
</template>

<script>
import axios from 'axios'
import one from '../areaPattern/A1'
import two from '../areaPattern/A2'
import three from '../areaPattern/A3'

export default {
  name: "layoutOne",
  components:{one,two,three},
    data(){
        return {
          comName:'',
          waitNumber:[],
          callingNum:'',
          windowName:''
        }
    },
     
    created(){
        let self=this;
        axios.get(window._CONFIG['monitorLayoutURL']+"/monitorLayout/mmonitorAreaDefinition/monitorLayout").then(
          function (res) {
            // console.log(res);
            self.comName=res.data.result[2].monitorPatternCode;
          }
        )
    },
    mounted(){
          //初始化websocket
          this.initWebSocket();
          this.load();
        },
        destroyed: function(){
          this.webSocketclose();
        },
        
        
        methods:{
          load(){
           this.callingNum=localStorage.getItem("callingNum");
            },
            initWebSocket: function () {
                let terminalKey = localStorage.getItem("terminalKey");
                // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
                // var userId = store.getters.userInfo.id;
                console.log(window._CONFIG['domianURL'])
                var url = window._CONFIG['domianURL'].replace("https://","ws://").replace("http://","ws://")+"/websocket/"+terminalKey;
                this.websock = new WebSocket(url);
                this.websock.onopen = this.websocketonopen;
                this.websock.onerror = this.websocketonerror;
                this.websock.onmessage = this.websocketonmessage;
                this.websock.onclose = this.websocketclose;
              },
              websocketonopen: function () {
                console.log("WebSocket连接成功");
              },
              websocketonerror: function (e) {
                console.log("WebSocket连接发生错误");
              },
              //业务响应
              websocketonmessage: function (e) {
                var data = eval("(" + e.data + ")"); 
                 //处理订阅信息
                if(data.cmd == "topic"){
                   //TODO 系统通知
                  console.log(data);
                  this.items=data.msgId;
                  this.msg=data.msgId;
                }else if(data.cmd == "user"){
                   //TODO 用户消息
                  if(data.msgTxt.queueNum){
                    let newWaitNumber=data.msgTxt.queueNum.slice(0);
                    this.waitNumber=newWaitNumber.concat(this.waitNumber);
                  }

                  console.log(data);
                  // callingNum=data.msgTxt.queueNu
                  localStorage.setItem("callingNum",callingNum)
                  this.load();
                } 
              },
              websocketclose: function (e) {
                console.log("connection closed (" + e.code + ")");
              }
      
        }
    
}
</script>

<style scoped>
.container{
  width: 99%;

}
</style>
