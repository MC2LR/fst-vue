<template>
  <div class="bottom1">
    <div class="fd">
      <van-icon name="question" @click="btns" class="p" :class="{'if_1':bot}" />
      <van-icon name="volume" class="p" />
      <van-icon name="warn-o" class="p" />
      <van-icon name="info" class="p" />
      <van-icon name="friends" class="p"/>
      <van-icon name="play" class="p" />
    </div>
    <van-overlay :show="show">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >ヘルプ情報</p>
          <p class="info_">
            <span>窓口番号</span>
            <span>端末id</span>
          </p>
          <div class="wrappersd">
            <div class="dats" v-for="(item,index) in btnData1" :key="index">
              <p>{{item.windowCode}}</p>
              <p>{{item.terminalCode}}</p>
              <!-- <p>{{item.callWindowNum}}</p>
              <p>{{item.terminalCode}}</p> -->
            </div>
          </div>
          <p class="sure" @click="show = false">確認</p>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Switch, Overlay } from "vant";
import axios from "axios";
import { Notify } from 'vant';

export default {
  name:"bottom1",
  data(){
    return{
      websock:null,
      bot:false,
      show: false, //四个弹窗
      btnData1: [
        {
          windowNum: "10",
          id: "10"
        },
        {
          windowNum: "11",
          id: "11"
        },
        {
          windowNum: "12",
          id: "12"
        },
        {
          windowNum: "13",
          id: "13"
        },
        {
          windowNum: "14",
          id: "14"
        }
      ],
    }
  },
  methods:{
    btns() {
      console.log(this.bot)
      if (this.bot == true) {
        this.loadHelpList();
        this.show = true;
      }
    },
    isHelp(){
      var windowId = localStorage.getItem("windowId");
      var terminalId = localStorage.getItem("terminalId");

      var _this=this;
      axios.post("/test/tellerMachineBtn/listHelp",
        {}
      )
      .then((res) =>  {
        console.log(res);
        try {
          if (res.data.success) {
            var result = res.data.result.data;
            if (result) {
              if (result.length > 1) {
                  console.log("存在别人发的")
                  this.bot = true;
              } else if(result.length == 0){
                  console.log("没有人需要帮助")
                  this.bot = false;
              } else {
                // Notify({ type: 'success', message: '呼出しました。' });
                result.forEach(element => {
                  if (element.windowId == windowId && element.terminalId == terminalId) {
                    console.log("仅有自己发的")
                    this.bot = false;
                    // this.bot = false;
                  }else{
                    console.log("仅有别人发的")
                    this.bot = true;
                    return;
                  }
                });
              }
            } else {
              this.bot = false;
            }
          }else{
            Notify({ type: 'danger', message: 'リクエストに失敗しました。技術者に連絡してください。' });
            this.bot = false;
          }
        } catch (error) {
           Notify({ type: 'danger', message: 'エラーが発生しました。技術者に連絡してください。' });
           this.bot = false;
        }
        return [];
      })
      .catch(function(err) {
        console.log(err);
      });
    },
    loadHelpList(){
      var _this=this;
      axios.post("/test/tellerMachineBtn/listHelp",
        {}
      )
      .then((res) =>   {
        console.log(res);
        try {
              console.log(result)
          if (res.data.success) {
            var result = res.data.result.data;
            if (result) {
              // Notify({ type: 'success', message: '呼出しました。' });
              console.log(result)
              this.btnData1 = result;
            } else {
              return [];
            }
          }else{
            Notify({ type: 'danger', message: 'リクエストに失敗しました。技術者に連絡してください。' });
            return [];
          }
        } catch (error) {
           Notify({ type: 'danger', message: 'エラーが発生しました。技術者に連絡してください。' });
              return [];
        }
        return [];
      })
      .catch(function(err) {
        console.log(err);
      });
    }
  },
}
</script>

<style scoped>
.bottom1{
    width: 100%;
}
.fd {
  width: 100%;
  height: 0.5rem;
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.wrapers {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 1.6rem;
  margin-top: 10px;
  font-weight: 600;
}
.p {
  color: #e7e7e7;
  font-size: 0.35rem;
  margin-left: 0.1rem;
  line-height: 45px;
}
.sds {
  display: flex;
  justify-content: space-around;
}
[v-cloak] {
  display: none;
}
.sds div {
  width: 24%;
  height: 0.8rem;
  background: #9b9da3;
  border-radius: 3px;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.2rem;
}
.block {
  width: 90%;
  height: 90%;
  background-color: #61615e;
  position: relative;
}
.sure {
  width: 100%;
  height: 0.5rem;
  background: #d3d0cd;
  position: absolute;
  bottom: 0;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.22rem;
}
.hea {
  width: 100%;
  display: flex;
  height: 0.35rem;
  background: #3d4046;
  color: #88898b;
  justify-content: space-around;
  align-items: center;
}
.box {
  width: 100%;
  margin: 0.05rem 0;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box_o {
  width: 1.2rem;
  display: flex;
  justify-content: space-around;
  font-size: 0.2rem;
  align-items: center;
  background: #9c9ea4;
  height: 0.4rem;
  margin-right: 0.05rem;
}
.box_o span {
  line-height: 0.4rem;
}
.swich {
  width: 0.85rem;
  height: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background: white; */
}
.d {
  font-size: 0.26rem;
  color: aliceblue;
}
.sd {
  display: flex;
  justify-content: space-around;
}
.sd div {
  color: #a9a9aa;
}

.sd div:nth-child(3) {
  margin: 0 0.2rem 0 0.2rem;
}
.sd div:nth-child(4) {
  width: 24%;
  background: #9b9da3;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.4rem;
  border-radius: 3px;
  /* margin-left: .25rem; */
  color: #000000;
}
.if_1 {
  color: #e6e583;
}
.info_ {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 0.25rem;
  background: #3d4046;
  color: #949697;
  line-height: 0.25rem;
}
.dats {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-around;
  font-size: 0.25rem;
  color: #eaebeb;
}
.dats:nth-child(2n-1) {
  background: #717275;
}
/* .a >>> .van-switch{
    background: blue
} */
</style>