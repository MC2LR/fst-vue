<template>
  <div class="index">
    <div class="loading" v-if="loading">
      <van-loading size="50px" vertical>ローディング...</van-loading>
    </div>
    <div v-if="!loading">
      <top v-if="topIf" :infos="infos"/>
      <top1 v-else :infos="infos"/>
      <middle v-if="middleIf" @btn="btns" :datas="middle1Data" />
      <middle1 v-if="middleIf1" @btns="btnsd" :datas="middle1Data"/>
      <bottom v-if="bottomIf" :bot="btnTo" />
      <bottom1 v-else />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import top from "../ma_ruilin/top/top.vue";
import top1 from "../ma_ruilin/top/top1.vue";
import middle from "../ma_ruilin/middle/middle.vue";
import middle1 from "../ma_ruilin/middle/middle1.vue";
import bottom from "../ma_ruilin/bottom/bottom.vue";
import bottom1 from "../ma_ruilin/bottom/bottom1.vue";
export default {
  name: "Teller",
  data() {
    return {
      topIf: false, // true 是A1 false 是A2
      middleIf: false, //true 是B1  false 是B2
      bottomIf: false, //true 是C1  false 是C2;
      middleIf1: false,
      btnTo: false,
      loading: true,
      middle1Data: [],
      bot:false,
      websock:null,
      infos:{}
    };
  },
  components: {
    top,
    top1,
    middle,
    middle1,
    bottom,
    bottom1
  },
  methods: {
    btns() {
      this.btnTo = !this.btnTo;
    },
    btnsd() {
      // this.btnTo = !this.btnTo;
    },
    initWebSocket: function () {
      console.log("websocket with bottom");
      var terminalKey = localStorage.getItem("terminalKey");
      // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
      // var userId = localStorage.getItem("userId");
      // var userId = "c6d63838-bfcb-463e-85c9-1a7b666249ef"
      var url = window._CONFIG['domianURL'].replace("https://","ws://").replace("http://","ws://")+"/websocket/"+terminalKey;
      console.log(terminalKey)
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
    websocketonmessage: function (e) {
      console.log("websocket收到了服务器信息")
      var data = eval("(" + e.data + ")"); 
      console.log(data);

        //处理help信息
      if(data.msgTxt == "0"){
          console.log("收到help信息")

          console.log()
          this.$children[2].isHelp();
      }else if(data.msgId == "99999"){
          //TODO 用户消息
          console.log("收到用户消息")
          console.log(data.msgTxt.window);
             data.msgTxt.window.forEach(item => {
                 if(item.windowId == localStorage.getItem("windowId")){
                     this.infos = item;
                    console.log(item)
                 }
             });
                     console.log(this.infos);
      }
    },
    websocketclose: function (e) {
      console.log(e)
      console.log("connection closed (" + e + ")");
    },
  },
  mounted() { 
    //初始化websocket
    this.initWebSocket()
  },
  destroyed: function () { // 离开页面生命周期函数
      this.websocketclose();
  },
  created() {
    var _this = this;
    setTimeout(function (){
           _this.loading = false; 
   },1000);
   ///////////    layout接口
    axios
      .post(
        "/test/operatorAreaDefinition/PostManipulator",
        { 
          userId:localStorage.getItem("userInfo") }
        // 1225362869698965505
        // 1226357479944724481
      )
      .then(function(res) {
        console.log(res);
        if (res.data.result[0].area == "top") {
          if (res.data.result[0].paid == "pt001") {
            _this.topIf = true;
          } else {
            _this.topIf = false;
          }
        }
        if (res.data.result[1].area == "middle") {
          if (res.data.result[1].paid == "pm001") {
            _this.middleIf = true;
            _this.middleIf1 = false;
            _this.middle1Data = res.data.result[1].btn;
          } else {
            _this.middleIf1 = true;
            _this.middleIf = false;
            _this.middle1Data = res.data.result[1].btn;
          }
        }
        if (res.data.result[2].area == "bottom") {
          if (res.data.result[2].paid == "pb001") {
            _this.bottomIf = true;
          } else {
            _this.bottomIf = false;
          }
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
  position: relative;
  background: #000000;
}
.loading{
  position: absolute;
  top: 45%;
  left: 45%;
}
</style>