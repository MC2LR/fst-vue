<template>
    <div class="container">
      <div style="float: left;width: 80%" >
        <component :is="rightName" :waitNumber="waitNumber" :windowName="windowName" :callingNum="callingNum"></component>
      </div>
      <div style="float: left;width: 20%;">
        <component :is="leftName" :num="num" :waitPeople="waitPeople"></component>
      </div>
    </div>
</template>

<script>
  import rightOne from '../areaPatternTwo/A1'
  import rightTwo from '../areaPatternTwo/A2'
  import rightThree from '../areaPatternTwo/A3'
  import leftOne from '../areaPatternTwo/B1'
  import leftTwo from '../areaPatternTwo/B2'
  import leftThree from '../areaPatternTwo/B3'
  import axios from 'axios'
    export default {
      name: "layoutTwo",
      components:{rightOne,rightTwo,rightThree,leftOne,leftTwo,leftThree},
      data(){
        return{
          rightName:'',
          leftName:'',
          num:0,

          waitNumber:[    //抽号的显示数组
          ],  
          waitPeople:[    //”まもなくお呼びします“的数据
          ],
          windowName:'',
          callingNum:''
        }
      },
      created(){
          let self=this;
          let terminalKey = localStorage.getItem("terminalKey")
          // console.log(terminalKey);
          axios.post(window._CONFIG['monitorLayoutURL']+'/monitorLayout/mmonitorAreaDefinition/monitorLayout?terminalKey=' + terminalKey).then(
            function (res) {
              console.log(res);
              self.rightName=res.data.result[2].monitorPatternCode;
              self.leftName=res.data.result[5].monitorPatternCode;
            }
          )
      },
      mounted(){
          //初始化websocket
          this.initWebSocket();
          this.load();
          // let self=this;
          // let terminalKey = localStorage.getItem("terminalKey")
          // // console.log(terminalKey);
          // axios.get('http://10.167.20.2:8080/jeecg-boot/monitorLayout/mmonitorAreaDefinition/monitorLayout?terminalKey=' + terminalKey).then(
          //   function (res) {
          //     self.rightName=res.data.result[2].monitorPatternCode;
          //     self.leftName=res.data.result[5].monitorPatternCode;
          //   }
          // )
        },
        destroyed: function(){
          this.webSocketclose();
        },
        methods: {
        //数组删除元素
        
        load(){
          this.num = localStorage.getItem("total");
          // this.waitNumber = (localStorage.getItem("waitNumber")).slice(0);
          // console.log(this.waitNumber+"load加载的");
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

                }else if(data.cmd == "user"){
                   //TODO 用户消息
                  var total = 0;
                  console.log(data);
                  // let waitNumber=data.msgTxt.queueNum;
                  if(data.msgTxt.queueNum instanceof Array&&data.msgId=="8001"&&data.msgTxt.windowName!=null){ 
                    // let newWaitNumber=data.msgTxt.queueNum.slice(0);
                    // this.waitNumber=newWaitNumber.concat(this.waitNumber);
                    this.waitNumber=this.waitNumber.concat(data.msgTxt.queueNum.slice(0));
                  }
                  if(data.msgId=="8002"&&data.msgTxt.windowName!=null){
                    let array=[];
                      for(var i=0;i<this.waitNumber.length;i++){
                        if(this.waitNumber[i]==data.msgTxt.queueNum[0]){
                          this.waitNumber=this.waitNumber.splice(i,1);
                        }
                      }
                  }
                  // console.log(this.waitNumber);
                  if(data.msgTxt.window){
                    data.msgTxt.window.forEach(element => {
                      total+=element.windowWaitPeoplrNum
                    });
                  }
                  if(data.msgTxt.windowName){
                      this.windowName=data.msgTxt.windowName;
                  }
                  localStorage.setItem("total",total);
                  // localStorage.setItem("waitNumber",waitNumber);
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
    width: 100%;
    height: 4.85rem;
    border: black 0.01rem solid;
  }
</style>
