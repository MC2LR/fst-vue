<template>
  <div class="b">
      <div class="bt"> <van-switch :value="checkeds" @input="onInput" size="30px" /></div>
    <div style="width:100%;height:.8rem;margin-top:.3rem;" class="sds">
      <div style="color:white;line-height:10px">呼出</div>
      <div @click="event_handle('10')">{{this.datas[0].name}}</div>
      <div @click="event_handle('11')">{{this.datas[1].name}}</div>
      <div @click="event_handle('12')">{{this.datas[2].name}}</div>
    </div>

    <div class="wrapers">
      <div style="width:49%;height:100%;">
        <p
          @click="event_handle('13')"
          style="width:100%;height:48%;background:#999BA1;margin-bottom:5px;font-size:.18rem;;text-align:center;line-height:.7rem"
        >{{this.Data[3].name}}</p>
        <p
          @click="event_handle('14')"
          style="width:100%;height:48%;background:#999BA1;font-size:.18rem;;text-align:center;line-height:.7rem"
        >{{this.Data[4].name}}</p>
      </div>
      <div
        style="width:49%;height:100%;background:#D9DCE2;font-size:.18rem;text-align:center;line-height:1.5rem"
        @click="event_handle('15')"
      >{{this.Data[5].name}}</div>
    </div>
    <van-overlay :show="show1">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;background:#26282B;color:#D1D0CF;"
          >メニュー</p>
          <div class="menus">
            <div class="left_m">
              <p class="menused" :class="{'moveSty': moves == index}" @click="list(index)" v-for="(item,index) in menuData" :key="index">{{item.name}}</p>
            </div>
            <div class="right_m">
               <p class="listBtn" v-for="(item,index) in listData" :key="index">{{item}}</p>
            </div>
          </div>
          <p class="sure" @click="show1 = false">戻る</p>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show2">
      <div class="wrapper">
        <div class="block" style="background:#000000">
          <div class="logins">LAUREL</div>
          <p class="pp" v-if="true">エラーメッセージ</p><br>
          <span style="color:#9A9A9A;margin-top:.1rem;margin-bottom:.1rem;text-indent:.4rem">受付番号</span>
          <input type="text" v-model="Nums" class="inp" placeholder="请输入受付番号" />
          <ul>
            <li v-for="(item,index) in num" @click="nums(index)" :key="index">{{item}}</li>
          </ul>
          <div class="oks">
            <span @click="cancle">取消</span>
            <span @click="sure">確定</span>
          </div>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show3">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >事件三</p>
          <p class="sure" @click="show3= false">確認</p>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show4">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >事件四</p>
          <p class="sure" @click="show4 = false">確認</p>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show5">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >事件五</p>
          <p class="sure" @click="show5 = false">確認</p>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show6">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >事件六</p>
          <p class="sure" @click="show6 = false">確認</p>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Switch, Overlay } from "vant";
import { Dialog } from "vant";
import axios from "axios";
import { Notify } from 'vant';

export default {
  name: "middle",
    components: {
    [Dialog.Component.name]: Dialog.Component,
    Notify
  },
  data() {
    return {
      checkeds: false, //呼出
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      moves:0,
      num: [1, 2, 3, 4, 5, 6, 7, 8, 9, "全除去", 0, "一文字除去"],
      Nums: "", //受付番号数据绑定
      Data: [
        {
          id: 10,
          name: "メニュー",
          click: "click10",
     
        },
        {
          id: 11,
          name: "番号指定",
          click: "click11",
     
        },
       
        {
          id: 12,
          name: "完了",
          click: "click12",
        
        },
        {
          id: 13,
          name: "リコール",
          click: "click13",
        },
        {
          id: 14,
          name: "保留",
          click: "click14",
      
        },
        {
          id: 15,
          name: "メニュー",
          click: "click15",
  
        }
      ],
      menuData:[
        {
          name:"呼出し機能",
          btn:['登録呼出']
        },
        {
          name:"完了機能",
          btn:['キャンセル']
        },
        {
          name:"業務振替",
          btn:['業務振替']
        },
        {
          name:"動作設定",
          btn:['窓口番号変更','呼出対象業務ID変更']
        }
      ],
      listData:['登録呼出'],
    };
  },
  props:{
    datas:{
      type:Array
    }
  },
  created(){
     this.Data = this.datas; //将父组件取到的值进行传递
    console.log(this.Data);
    
      
  },
  watch: {
    checkeds() {
      this.$emit("btn");
    }
  },
  methods: {
    list(index){
      this.moves = index;
      this.listData = this.menuData[index].btn;
    },
    nums(index) {
      if (index !== 9 && index !== 11) {
        this.Nums += this.num[index];
        console.log("haha");
      }
      if (index == 9) {
        this.Nums = "";
      }
      if (index == 11) {
        if (this.Nums != "") {
          this.Nums = this.Nums.substring(0, this.Nums.length - 1);
        }
      }
    },
    cancle(){
        Dialog.confirm({
              title: "取消するかどうか"
            })
              .then(() => {
                // on confirm
                this.Nums = '';
                this.show2 = false;
              })
              .catch(() => {
                // on cancel
              });
    },
    sure() {
        if(this.id !==''&& this.password!==''){
            Dialog.confirm({
              title: "登録するかどうか"
            })
              .then(() => {
                // on confirm
                this.Nums = '';
                this.show2 = false;
              })
              .catch(() => {
                // on cancel
              });
        }
    },
    //不同的事件根据后端不同的值执行不同的操作
    event_handle(val) {
      console.log(this.Data)
      var button = this.Data.find(item => item.butid === val);
      console.log(button)
      switch (button.click) {
        case "click10":
          console.log("我是1");
          this.show1 = true; //this.event_1();
           this.moves = 0;
          this.listData = this.menuData[0].btn;

          break;
        case "click11":
          console.log("我是2"); //this.event_2();
          this.show2 = true;
          break;
        case "click12":
          // this.show3 = true;
          console.log("我是3"); //this.event_3();
          this.finish();
          break;
        case "click13":
          console.log("我是4"); //this.event_4();
          this.show4 = true;
          break;
        case "click14":
          console.log("我是5"); //this.event_5();
          this.show5 = true;
          break;
        case "click15":
          console.log("我是6"); //this.event_6();
          this.show6 = true;
          break;
      }
    },
    onInput(checkeds) {
      if (checkeds) {
        this.helpCall(checkeds);
      }else{
        this.helpCancel(checkeds);
      }
    },
    helpCall(checkeds){
      // var windowId = "123";
      // var terminalId = "123";
      var windowId = localStorage.getItem("windowId");
      var terminalId = localStorage.getItem("terminalId");


      console.log("helpCall with middle");
      var _this=this;
      axios.post("/test/tellerMachineBtn/helpCall",
        {
          windowId: windowId,
          terminalId: terminalId
       }
      )
      .then(function(res) {
        console.log(res);
        try {
          if (res.data.success) {
            var result = res.data.result;
            if (result) {
              Notify({ type: 'success', message: '呼出しました。' });
              _this.checkeds = checkeds;
            } else {
              Notify({ type: 'danger', message: '呼出できません、再確認してください。' });
            }
          }else{
            Notify({ type: 'danger', message: 'リクエストに失敗しました。技術者に連絡してください。' });
          }
        } catch (error) {
           Notify({ type: 'danger', message: 'エラーが発生しました。技術者に連絡してください。' });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
    },
    helpCancel(checkeds){
      // var windowId = "123";
      // var terminalId = "123";

      var windowId = localStorage.getItem("windowId");
      var terminalId = localStorage.getItem("terminalId");
      console.log("helpCancel with middle");
      var _this=this;
      axios.post("/test/tellerMachineBtn/helpCancel",
        {
          windowId: windowId,
          terminalId: terminalId
       }
      )
      .then(function(res) {
        console.log(res);
        try {
          if (res.data.success) {
            var result = res.data.result;
            if (result) {
              Notify({ type: 'success', message: '呼出キャンセルしました。' });
              _this.checkeds = checkeds;
            } else {
              Notify({ type: 'danger', message: '呼出キャンセルできません、再確認してください。' });
            }
          }else{
            Notify({ type: 'danger', message: 'リクエストに失敗しました。技術者に連絡してください。' });
              _this.checkeds = checkeds;
          }
        } catch (error) {
           Notify({ type: 'danger', message: 'エラーが発生しました。技術者に連絡してください。' });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
    },
    //完了按钮
    finish(){
      var queueNum = "123";
      var businId = "123";
      
      var _this=this;
      axios.post("/numlog/sysNumLog/CloseBuisnNum",
        {
          //参数需要写成活的
          queueNum: queueNum,
          businId: businId
       }
      )
      .then(function(res) {
        console.log(res);
        try {
          if (res.data.success) {
            var result = res.data.result;
            if (result) {
              Notify({ type: 'success', message: '完了しました。' });
            } else {
              Notify({ type: 'danger', message: '完了できません、再確認してください。' });
            }
          }else{
            Notify({ type: 'danger', message: 'リクエストに失敗しました。技術者に連絡してください。' });
          }
        } catch (error) {
           Notify({ type: 'danger', message: 'エラーが発生しました。技術者に連絡してください。' });
        }
        // this.show7 = true;
      })
      .catch(function(err) {
        console.log(err);
      });
    },
  }
};
</script>

<style scoped>
.b {
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
.inp {
  width: 80%;
  height: 0.4rem;
  margin-left: 0.4rem;
  font-size: 0.2rem;
  text-indent: 0.15rem;
}
.wrapers {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 1.6rem;
  margin-top: 10px;
  font-weight: 600;
}
.left_m{
  width: 40%;
  height: 100%;
}
.right_m{
  width: 60%;
  height: 100%;

}
.p {
  color: #e6e583;
  font-size: 0.35rem;
  margin-left: 0.1rem;
}
.menus{
  width: 100%;
  height: 84.5%;
  display: flex;
    background: #000000;
}
.logins {
  width: 100%;
  height: 0.6rem;
  background: #a8a8a8;
  color: #004898;
  font-weight: 900;
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
.sds {
  display: flex;
  justify-content: space-around;
  position: relative;
}
.bt{
  position: absolute;
  top:3.9rem;
  left:.18rem;
  z-index: 1;
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
  font-size: 0.16rem;
}
.sds div:nth-child(1){
  background: #000000;

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
.oks {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.07rem;
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
.menused{
  color: #838383;
  width: 100%;
  height: .55rem;
  text-align: center;
  border-bottom: 1px solid #2D2D2D;
  line-height: .55rem;
  font-size: .2rem;
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
ul {
  width: 100%;
  height: 3rem;
  margin-top: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
ul li {
  width: 32%;
  height: 0.7rem;
  background: #a5a7ad;
  text-align: center;
  line-height: 0.7rem;
  font-size: 0.4rem;
}
ul li:last-child {
  font-size: 0.2rem;
}
ul li:nth-child(10) {
  font-size: 0.2rem;
}

.listBtn{
  width:100%;
  height: .55rem;
  background: #A9ACB1;
  border-radius:3px;
  color: #1E1E20;
  font-size: .2rem;
  margin-bottom: 2px;
  text-align: center;
  line-height: .55rem;
  }
  .moveSty{
    color: red;
  }
/* .a >>> .van-switch{
    background: blue
} */
</style>