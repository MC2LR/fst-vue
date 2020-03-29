<template>
  <div class="top">
    <p class="hea">
      <span>窓口状态</span>
      <span style="margin-left: .45rem;">窓口番号</span>
      <span style="margin-right:0">対象業務Id</span>
    </p>
    <div class="box">
      <div class="swich">
        <van-switch :value="checked" @input="onInput" size="30px" />
      </div>
      <div style="font-size:.36rem;color:#FFFFFF;margin-left:.3rem;" v-cloak>{{Tnum}}</div>
      <div class="box_o">
        <span>{{bgid}}</span>
      </div>
    </div>
    <p class="hea">
      <span>受付番号</span>
      <span>呼出待ち時間</span>
      <span>処理時間</span>
    </p>
    <span class="box">
      <div class="swich" style="margin-left:.1rem;">
        &nbsp;
        <span style="color:white;font-size:.3rem">{{ num }}</span> &nbsp;
        <van-icon class="d" name="eye" />
      </div>
      <div
        style="font-size:.3rem;margin-left:.26rem;color:white"
        :class="{'call_wait_time_error':callWaitTimeError}"
      >{{timeFormat}}</div>
      <span class="box_o" style="background:white;border-radius:4px">''99'99</span>
    </span>
    <p class="hea">
      <span>業務名</span>
    </p>
    <div
      style="width:100%;height:.3rem;color:#FFFFFF;text-align:center;font-size:.25rem;margin:.07rem 0;"
    >{{bname}}</div>
    <div style="width:100%;height:.8rem;" class="sd">
      <div>
        <span
          style="width:100%;height:.3rem;background:#3D4046;text-align:center;line-height:.3rem;"
        >待ち人数</span>
        <span style="text-align:center;font-size:.26rem;color:#FFFFFF">{{awitPerson}}</span>
      </div>
      <div>
        <span
          style="width:100%;height:.3rem;background:#3D4046;text-align:center;line-height:.3rem;"
        >総待ち人</span>
        <span style="text-align:center;font-size:.26rem;color:#FFFFFF">{{awitPersons}}</span>
      </div>
      <div>
        <span
          style="width:100%;height:.3rem;background:#3D4046;text-align:center;line-height:.3rem;"
        >待ち時間</span>
        <span style="text-align:center;font-size:.26rem;color:#FFFFFF">{{awitTime | timeFilter}}</span>
      </div>
      <div>
        <span
          style="width:100%;height:.3rem;background:#3D4046;text-align:center;line-height:.3rem;font-size:14px;"
        >次コール番号</span>
        <span style="text-align:center;font-size:.26rem;color:#FFFFFF">{{total}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Switch, Overlay } from "vant";
import axios from "axios";
import Bus from '../../../bus'
export default {
  name: "top",
  data() {
    return {
      callWaitTimeError: false,
      checked: false,
      show: false,
      awitPerson:0,//待ち人数
      awitPersons:0,//総待ち人
      awitTime:0,//待ち時間
      Tnum: 100,
      bname: "業務名", //業務名
      bgid: "999",
      total: "99",
      num: "000", //受付番号
      callWaitTime: "0" //呼出待ち時間
    };
  },
  methods: {
    onInput(checked) {
      this.checked = checked;
      console.log(checked);
      axios
        .get(
          "/test/masterShopWindow/windowSwitch?switchFlag=" +
            checked +
            "&windowId=" +
            localStorage.getItem("windowId")
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    timeFormat() {
      var theTime = parseInt(this.callWaitTime); // 需要转换的時間秒
      var theTime1 = 0; // 分
      var theTime2 = 0; // 小时
      var theTime3 = 0; // 天
      if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
          theTime2 = parseInt(theTime1 / 60);
          theTime1 = parseInt(theTime1 % 60);
          if (theTime2 > 24) {
            //大于24小时
            theTime3 = parseInt(theTime2 / 24);
            theTime2 = parseInt(theTime2 % 24);
          }
        }
      }
      var result = "";
      if (theTime > 0) {
        result = "" + parseInt(theTime) + "s";
      }
      if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + "m" + result;
      }
      if (theTime2 > 0) {
        console.log(theTime2);
        console.log(this.callWaitTimeError);
        this.callWaitTimeError = true;
        console.log(this.callWaitTimeError);
        return "''99'99";
        result = "" + parseInt(theTime2) + "h" + result;
      }
      if (theTime3 > 0) {
        result = "" + parseInt(theTime3) + "d" + result;
      }

      if (result == "") {
        result = "''99'99";
      }
      return result;
    }
  },
  props:{
     infos:{
       type:Object
     }
  },
    mounted(){
    //点击叫号时，番号指定和業務名的响应
      Bus.$on('love', (val) => {
        console.log(val);
          this.num = val[0];
          this.bname = val[1];
           this.awitPerson = val[2];
           this.awitTime= val[3];
      })
  },
  watch: {
    infos(){
      console.log(this.infos);
      this.awitPerson=this.infos.windowWaitPeoplrNum;
      this.awitTime=this.infos.waitPeoplrSumtime;
     
    }
  },
  　beforeDestroy() {
　　　　　Bus.$off();
　　},
  //定义私用局部过滤器。只能在当前 vue 对象中使用
  filters: {
    timeFilter(value) {
      var theTime = parseInt(value); // 需要转换的時間秒
      var theTime1 = 0; // 分
      var theTime2 = 0; // 小时
      var theTime3 = 0; // 天
      if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
          theTime2 = parseInt(theTime1 / 60);
          theTime1 = parseInt(theTime1 % 60);
          if (theTime2 > 24) {
            //大于24小时
            theTime3 = parseInt(theTime2 / 24);
            theTime2 = parseInt(theTime2 % 24);
          }
        }
      }
      var result = "";
      if (theTime > 0) {
        result = "" + parseInt(theTime);
      }
      if (theTime1 > 0) {
        result = '"' + parseInt(theTime1) + '"' + result;
      }
      return result;
    }
  },
  created() {
    var _this = this;
        axios
      .get(
        "/api/operatDesk/queryInfo?winId=" +
          localStorage.getItem("windowId")
      )
      .then(function(res) {
        console.log(res);
        if (res.data.success == true) {
          _this.awitPerson = res.data.result.waitPeople; //待ち人数
          _this.awitTime = res.data.result.waitTime; //待ち時間
          _this.awitPersons = res.data.result.waitTotalPeople; //总待ち人数
        }
      })
      .catch(function(err) {
        console.log(err);
      });
    this.callWaitTimeError = false;
    this.Tnum = JSON.parse(localStorage.getItem("windowInfo")).name;
    this.bgid = (function() {
      var bgid = "";
      var array = JSON.parse(localStorage.getItem("listBusiness"));
      //  array.forEach(element => {
      //    bgid += element.bname;
      //  });
      bgid = array[0].bname;
      return bgid;
    })();
  }
};
</script>

<style scoped>
.top {
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
  color: #e6e583;
  font-size: 0.35rem;
  margin-left: 0.1rem;
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
  width: 24%;
}

.call_wait_time_error {
  color: red;
}

/* .a >>> .van-switch{
    background: blue
} */
</style>