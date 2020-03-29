<template>
  <div class="admin">
    <div class="wrapper">
      <div class="blocks" style="background:#1C1C1C">

        <p class="info_">
          <span>業務名/待ち人数/待ち時間</span>
        </p>
        <div style="width:100%;height:79%;overflow-y: auto">
          <div class="awitInfo" v-for="(item,index) in btnData4" :key="index">
            <p
              style="width:100%;height:.4rem;line-height:.4rem;font-size:.2rem;color:#F4F4F4;text-align:center"
            >{{item.name}}</p>
            <div class="time">
              <p>
                待ち人数：
                <b style="font-size:.25rem;color:#FFFFFF">{{item.awitNum}}</b>
              </p>
              <p>
                待ち時間：
                <b style="font-size:.25rem;color:#FFFFFF">{{item.awitTime}}</b>
              </p>
            </div>
          </div>
        </div>
        <p class="sure" @click="can">キャンセル</p>
      </div>
    </div>
    <div class="fd">
      <van-icon name="question" @click="btns" class="p" :class="{'if_1':bot}" />
      <van-icon name="volume" @click="btns1" class="p" :class="{'if_2':ican_2}" />
      <van-icon name="warn-o" @click="btns2" class="p" :class="{'if_3':ican_3}" />
      <van-icon name="info" @click="btns3" class="p" />
      <van-icon name="play" @click="goBack" class="p" />
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
              <p>{{item.windowNum}}</p>
              <p>{{item.id}}</p>
            </div>
          </div>
          <p class="sure" @click="show = false">確認</p>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show1">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >オペレータ呼出し情報</p>
          <p class="info_">
            <span>端末id</span>
          </p>
          <div class="wrappersd">
            <div class="dats" v-for="(item,index) in btnData2" :key="index">
              <p>{{item.id}}</p>
            </div>
          </div>
          <p class="sure" @click="show1 = false">確認</p>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show2">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >受付端末エラー</p>
          <p class="info_">
            <span>端末id</span>
            <span>業務名称</span>
            <span>詳細</span>
          </p>
          <div class="wrappersd">
            <div class="dats" v-for="(item,index) in btnData3" :key="index">
              <p>{{item.id}}</p>
              <p>{{item.name}}</p>
              <p>{{item.detile}}</p>
            </div>
          </div>
          <p class="sure" @click="show2 = false">確認</p>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show3">
      <div class="wrapper">
        <div class="block" style="background:#1C1C1C">
          <p
            style="width:100%;background:#26282B;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >業務情報表示</p>
          <p class="info_">
            <span>業務名/待ち人数/待ち時間</span>
          </p>
          <div style="width:100%;height:79%;overflow-y: auto">
            <div class="awitInfo" v-for="(item,index) in btnData4" :key="index">
              <p
                style="width:100%;height:.4rem;line-height:.4rem;font-size:.2rem;color:#F4F4F4;text-align:center"
              >{{item.name}}</p>
              <div class="time">
                <p>
                  待ち人数：
                  <b style="font-size:.25rem;color:#FFFFFF">{{item.awitNum}}</b>
                </p>
                <p>
                  待ち時間：
                  <b style="font-size:.25rem;color:#FFFFFF">{{item.awitTime}}</b>
                </p>
              </div>
            </div>
          </div>

          <p class="sure" @click="show3 = false">確認</p>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Switch, Overlay } from "vant";
import axios from "axios";
export default {
  name: "admin",
  data() {
    return {
      //这两个按钮通过websock进行通信
      ican_2: true, //第二个按钮提示
      ican_3: true, //第三个按钮提示
      show: false, //四个弹窗
      show1: false, //
      show2: false, //
      show3: false, //
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
      btnData2: [
        {
          id: "01"
        },
        {
          id: "02"
        },
        {
          id: "03"
        },
        {
          id: "04"
        },
        {
          id: "05"
        }
      ],
      btnData3: [
        {
          id: "01",
          name: "業務1",
          detile: "999"
        },
        {
          id: "02",
          name: "業務2",
          detile: "999"
        },
        {
          id: "03",
          name: "業務3",
          detile: "999"
        },
        {
          id: "04",
          name: "業務4",
          detile: "999"
        }
      ],
      btnData4: [
        {
          name: "業務1業務1業務1業務1",
          awitNum: 1,
          awitTime: "99.99"
        },
        {
          name: "業務2業務2業務2業務2",
          awitNum: 2,
          awitTime: "99.99"
        },
        {
          name: "業務3業務3業務3業務3",
          awitNum: 3,
          awitTime: "99.99"
        },
        {
          name: "業務4業務4業務4業務4",
          awitNum: 4,
          awitTime: "99.99"
        },
        {
          name: "業務5業務5業務5業務5",
          awitNum: 5,
          awitTime: "99.99"
        }
      ]
    };
  },
  props: {
    bot: {
      type: Boolean
    }
  },
  methods: {
    goBack() {
      this.$router.push("/login");
    },
    btns() {
      if (this.bot == true) {
        this.show = true;
      }
    },
    btns1() {
      if (this.ican_2) {
        this.show1 = true;
      }
    },
    btns2() {
      if (this.ican_2) {
        this.show2 = true;
      }
    },
    btns3() {
      this.show3 = true;
    },
    can(){
        this.$router.push('/cancle')
    }
  }
};
</script>

<style scoped>
.admin {
  width: 100%;
  height: 100%;
  position: relative;
  background: #010101;
}
.fd {
  width: 100%;
  height: 0.5rem;
  position: absolute;
  bottom: 0;
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
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
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.awitInfo {
  width: 100%;
  height: 0.85rem;
}
.awitInfo:nth-child(2n-1) {
  background: #000000;
}
.wrapers {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 1.6rem;
  margin-top: 10px;
  font-weight: 600;
}
.time {
  width: 100%;
  height: 0.45rem;
  display: flex;
  justify-content: space-around;
}
.time p {
  color: #828282;
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
.wrappersd {
  width: 100%;
  height: 79%;
  background: #5e5f61;
  overflow-y: auto;
}
.p {
  color: #e7e7e7;
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
.if_1 {
  color: #e6e583;
}
.if_2 {
  color: #e6e583;
}
.if_3 {
  color: #e6e583;
}
.block {
  width: 90%;
  height: 90%;
  background-color: #61615e;
  position: relative;
}
.blocks {
  width: 100%;
  height: 90%;
  background-color: #61615e;
  position: absolute;
  top: 0;
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
/* .a >>> .van-switch{
    background: blue
} */
</style>