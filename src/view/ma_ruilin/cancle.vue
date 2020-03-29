<template>
  <div class="cancle">
    <div class="wrapper">
      <div class="block" style="background:#000000">
        <div class="logins">キャンセル</div>
        <p class="pp" v-if="true">エラーメッセージ</p>
        <br />
        <span style="color:#9A9A9A;margin-top:.1rem;margin-bottom:.1rem;text-indent:.4rem">受付番号</span>
        <input type="text" v-model="number" class="inps" />
        <div class="btns">
          <p class="sunBtn" @click="btnChange" :class="{'sty':ind == 1}">遷移順</p>
          <p class="sunBtn" @click="btnChange1" :class="{'sty':ind == 2}">受付番号順</p>
          <img src="../../assets/1.png" class="sd" :class="{'ds':hooks}" />
        </div>
        <div class="btn-wraper">
          <p
            class="btn-style"
            @click="btnEvent(index)"
            :class="{'styles':i==index}"
            v-for="(item,index) in btnData"
            :key="index"
          >{{item}}</p>
        </div>
        <div class="aa">
          <div class="NUM">
            <P class="NUMS" :class="{'select-style':j==index}" @click="selectNum(index)" v-for="(item,index) in NumData" :key="index">{{item}}</P>
          </div>
        </div>
        <div class="oks">
          <span>取消</span>
          <span>確認</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cnacle",
  data() {
    return {
      number: "1111",
      ind: 1, //样式设定
      hooks: false, //样式设定
      i: 0,
      j:0,
      btnData: ["採番待ち", "呼出し待ち", "処理中", "スキップ", "後方処理"],
      NumData: [
        "1111",
        "2222",
        "3333",
        "4444",
        "5555",
        "6666",
        "7777",
        "8888",
        "9999",
        "1112",
        "1113",
        "1114",
        "1115",
        "1116",
        "1117",
        '1118',
        '1119',
        '2220',
        '2224',
        '5567'
      ]
    };
  },
  methods: {
    btnChange() {
      this.ind = 1;
      this.hooks = false;
    },
    btnChange1() {
      this.ind = 2;
      this.hooks = true;
    },
    btnEvent(index) {
      this.i = index;
    },
    selectNum(index){
        this.j = index;
        this.number = this.NumData[index];
    }
  }
};
</script>

<style scoped>
.cancle {
  width: 100%;
  height: 100%;
  position: relative;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 100%;
  height: 100%;
  background-color: #61615e;
  position: relative;
}
.logins {
  width: 100%;
  height: 0.6rem;
  background: #26282B;
  color: #FBFCFC;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.3rem;
}
.pp {
  width: 100%;
  height: 0.3rem;
  background: #ff2800;
  text-align: center;
  line-height: 0.3rem;
  color: #efefef;
}
.oks {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 4px;
}
.oks span:nth-child(1) {
  line-height: 0.6rem;
  width: 32%;
  text-align: center;
  font-size: 0.25rem;
  background: #cbced4;
}
.oks span:nth-child(2) {
  line-height: 0.6rem;
  width: 66%;
  text-align: center;
  font-size: 0.25rem;
  background: #cbced4;
}
.inps {
  display: block;
  width: 70%;
  margin: 0 auto;
  background: #000000;
  border: 0;
  outline: none;
  height: 0.5rem;
  font-size: 0.5rem;
  text-align: center;
  color: #e8e8e8;
}
.btns {
  width: 100%;
  height: 0.5rem;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  position: relative;
}

.sunBtn {
  width: 45%;
  height: 100%;
  text-align: center;
  line-height: 0.5rem;
  color: #2c2d2e;
  background: #dbdee4;
  border-radius: 0 5px 5px 0;
}
.sunBtn:nth-child(1) {
  border-radius: 5px 0 0 5px;
}
.sty {
  background: #494949;
  color: #e7e7e7;
}
.sd {
  position: absolute;
  left: 0.4rem;
  top: 0.15rem;
}
.ds {
  position: absolute;
  left: 2rem;
  top: 0.15rem;
}
.btn-wraper {
  width: 100%;
  height: 0.4rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn-style {
  width: 19.5%;
  height: 100%;
  background: #d9dce2;
  border-radius: 5px;
  text-align: center;
  font-size: 0.14rem;
  line-height: 0.4rem;
}
.styles {
  color: #d0d0d0;
  background: #494949;
}
.NUM {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  
}
.NUMS {
  width: 23.3%;
  height: 0.6rem;
  background: #afb1b7;
  text-align: center;
  line-height: .6rem;
  margin-left: 5px;
  margin-bottom: 2px;
  margin-top: 3px;
  border-radius: 4px;
  font-size: .25rem;
}
.aa{
    width: 100%;
    height: 2.8rem;
    background: #6F7073;
    overflow-y: auto;
}
.select-style{
    background: #FFFFFF;
}
</style>