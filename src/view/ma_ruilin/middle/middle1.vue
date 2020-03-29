<template>
  <div class="middle1">
    <div class="bt">
      <van-switch :value="checkeds" @input="onInput" size="30px" />
    </div>
    <div style="width:100%;" class="sds">
      <div style="color:white;line-height:10px">呼出</div>
      <div @click="event_handle('20')">{{this.Data[0].name}}</div>
      <div @click="event_handle('21')">{{this.Data[1].name}}</div>
      <div @click="event_handle('22')">{{this.Data[2].name}}</div>
    </div>
    <div style="width:100%;" class="sds">
      <div @click="event_handle('23')" style="background: #9b9da3;">{{this.Data[3].name}}</div>
      <div @click="event_handle('24')">{{this.Data[4].name}}</div>
      <div @click="event_handle('25')">{{this.Data[5].name}}</div>
      <div @click="event_handle('26')">{{this.Data[6].name}}</div>
    </div>
    <div class="wrapers">
      <div style="width:49%;height:100%;">
        <p
          @click="event_handle('27')"
          style="width:100%;height:48%;background:#999BA1;margin-bottom:5px;font-size:.18rem;;text-align:center;line-height:.7rem"
        >{{this.Data[7].name}}</p>
        <p
          @click="event_handle('28')"
          style="width:100%;height:48%;background:#999BA1;font-size:.18rem;;text-align:center;line-height:.7rem"
        >{{this.Data[8].name}}</p>
      </div>
      <div
        style="width:49%;height:100%;background:#D9DCE2;font-size:.18rem;text-align:center;line-height:1.5rem"
        @click="event_handle('29')"
      >{{this.Data[9].name}}</div>
    </div>
    <!-- 菜单页面 -->
    <van-overlay :show="show1">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;background:#26282B;color:#D1D0CF;"
          >メニュー</p>
          <div class="menus">
            <div class="left_m">
              <p
                class="menused"
                :class="{'moveSty': moves == index}"
                @click="list(index)"
                v-for="(item,index) in menuData"
                :key="index"
              >{{item.name}}</p>
            </div>
            <div class="right_m">
              <p
                class="listBtn"
                @click="callEvent(index)"
                v-for="(item,index) in listData"
                :key="index"
              >{{item}}</p>
            </div>
          </div>
          <p class="sure" @click="show1 = false">戻る</p>
        </div>
      </div>
    </van-overlay>
    <!-- 连续呼出页面 -->
    <van-overlay :show="show2">
      <div class="wrapper">
        <div class="block" style="background:#000000">
          <div class="logins">LAUREL</div>
          <p class="pp" v-if="true">エラーメッセージ</p>
          <br />
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
    <!-- 保留呼出页面 -->
    <van-overlay :show="show22">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >保留呼出</p>
          <p class="pp" v-if="true">エラーメッセージ</p>
          <div class="aa">
            <div class="NUM">
              <P
                class="NUMS"
                :class="{'select-style':j==index}"
                @click="selectNum(index)"
                v-for="(item,index) in NumData"
                :key="index"
              >{{item.num}}</P>
            </div>
          </div>
          <div class="oks">
            <span @click="show22 = false">取消</span>
            <span @click="holdSure">確定</span>
          </div>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show3">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >事件四</p>
          <p class="sure" @click="show3= false">確認</p>
        </div>
      </div>
    </van-overlay>
    <!-- 番号指定 -->
    <van-overlay :show="show4">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >番号指定</p>
          <p class="pp" v-if="true">エラーメッセージ</p>
          <div class="aa">
            <div class="NUM">
              <P
                class="NUMS"
                :class="{'select-style':m==index}"
                @click="selectNumas(index)"
                v-for="(item,index) in NumDatas"
                :key="index"
              >{{item}}</P>
            </div>
          </div>
          <div class="oks">
            <span @click="show4=false">取消</span>
            <span @click="numto">確定</span>
          </div>
        </div>
      </div>
    </van-overlay>
    <!-- 後方処理 -->
    <van-overlay :show="show5">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >後方処理呼出</p>
          <p class="pp" v-if="true">エラーメッセージ</p>
          <div class="aa">
            <div class="NUM">
              <P
                class="NUMS"
                :class="{'select-style':k==index}"
                @click="selectNumeds(index)"
                v-for="(item,index) in NumDatasd"
                :key="index"
              >{{item}}</P>
            </div>
          </div>
          <div class="oks">
            <span @click="show5=false">取消</span>
            <span @click="backSure">確定</span>
          </div>
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
    <van-overlay :show="show7">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >事件七</p>
          <p class="sure" @click="show7 = false">確認</p>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show8">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >事件八</p>
          <p class="sure" @click="show8 = false">確認</p>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show10">
      <div class="wrapper">
        <div class="block">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >事件十</p>
          <p class="sure" @click="show10 = false">確認</p>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show11">
      <div class="wrapper">
        <div class="block" style="background:#000000">
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:#D1D0CF;"
          >まとめ呼出</p>
          <br />
          <p
            style="width:100%;height:.5rem;text-align:center;line-height:.5rem;font-size:.22rem;color:white;background:red;"
          >エラーメッセージ</p>
          <ul>
            <li v-for="(item,index) in tests" @click="addNum(index)" :key="index">{{item.num}}</li>
          </ul>
          <div class="oks">
            <span @click="cacleCall">取消</span>
            <span @click="sureCall">確定</span>
          </div>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="forwardShow">
      <div class="wrapper">
        <div class="block" style="background:#000000">
          <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.22rem;color:black;background-color:grey;font-weight:900"
          >フォワード</p>
          <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:white;background:red;"
          >エラーメッセージ</p>
        <van-row>
          <van-col span="12">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:black;background-color:grey;"
          >受付番号</p>
          </van-col>
          <van-col span="12">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:black;background-color:grey;"
          >業務分類名</p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="12">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:white;background-color:black;"
          >{{forwardList.num}}</p>
          </van-col>
          <van-col span="12">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:white;background-color:black;"
          >{{forwardList.typeName}}</p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="12">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:black;background-color:grey;"
          >フォワード先ID</p>
          </van-col>
          <van-col span="12">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:black;background-color:grey;"
          >業務分類名</p>
          </van-col>
        </van-row>
        <van-row  v-for="(item,index) in forwardList.list" :key="index" style="margin:1px 0;" 
          @click="selectForward(index)"
          class="forward"
          :class="{'select-style2':selectedForward==index}"
        >
          <van-col span="12">
            <p style="text-align:center;height:.3rem;font-size:.2rem;color:black;padding:1px">{{item.typeCode}}</p>
          </van-col>
          <van-col span="12">
            <p style="text-align:center;height:.3rem;font-size:.2rem;color:black;padding:1px">{{item.bname}}</p>
          </van-col>
        </van-row>
          <div class="oks">
            <span @click="forwardShow = false">取消</span>
            <span @click="forward()">確認</span>
          </div>
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="businessTransferShow">
      <div class="wrapper">
        <div class="block" style="background:#000000">
          <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.22rem;color:black;background-color:grey;font-weight:900"
          >業務振替</p>
          <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:white;background:red;"
          >エラーメッセージ</p>
        <van-row>
          <van-col span="12">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:black;background-color:grey;"
          >受付番号</p>
          </van-col>
          <van-col span="12">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:black;background-color:grey;"
          >業務分類名</p>
          </van-col>
        </van-row>
        <van-row >
          <van-col span="12">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:white;background-color:black;"
          >{{businessTransferList.num}}</p>
          </van-col>
          <van-col span="12" style="height:1.0rem;color:white">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:white;background-color:black;"
            >{{businessTransferList.typeName}}</p>
            <van-icon name="down" color="green" size=".35rem" style="width:100%;text-align:center;"/>
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:white;background-color:black;"
          >{{businessTransferList.list[selectedbusinessTransfer].bname}}</p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24">
            <p
            style="width:100%;height:.3rem;text-align:center;line-height:.3rem;font-size:.2rem;color:black;background-color:grey;"
          >業務分類名</p>
          </van-col>
        </van-row>
        <van-row  v-for="(item,index) in businessTransferList.list" :key="index" style="margin:1px 0;" 
          @click="selectbusinessTransfer(index)"
          class="businessTransfer"
          :class="{'select-style2':selectedbusinessTransfer==index}"
        >
          <van-col span="24">
            <p style="text-align:center;height:.3rem;font-size:.2rem;color:black;padding:1px;">{{item.bname}}</p>
          </van-col>
        </van-row>
          <div class="oks">
            <span @click="businessTransferShow = false">取消</span>
            <span @click="businessTransfer()">確認</span>
          </div>
        </div>
      </div>
    </van-overlay>
    <van-popup v-model="PopupIsShow" round style="width:100%">
      <van-cell-group title="呼叫列表" style="">
        <van-cell v-for="(sureItem, index) in sureList" :key="index" :title="'番号:' + sureItem.num" :value="'業務:' + sureItem.bname"  style="width:100%"/>
        <van-row>
          <van-col span="12">
            <van-button type="danger" block @click="closeListPopup()">閉じる</van-button>
          </van-col>
          <van-col span="12">
            <van-button type="primary" block @click="okListPopup()">OK</van-button>
          </van-col>
        </van-row>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import { Switch, Overlay } from "vant";
import { Dialog } from "vant";
import axios from "axios";
import { Notify } from "vant";
import { Popup } from 'vant';
import Bus from '../../../bus'
export default {
  name: "middled",
  components: {
    [Dialog.Component.name]: Dialog.Component,
    Notify,
    Popup
  },
  data() {
    return {
      j:0,//保留
      m:0,//番号指定
      k:0,//後方処理
      numToData:[],//番号指定数据
      sureList:[],
      PopupIsShow: false,
      forwardShow:false,
      forwardList:{},
      selectedForward:0,
      businessTransferShow:false,
      businessTransferList:{
        list:[
          {bname:"企業振込"},
          {bname:"個人振込"},
          {bname:"個人儲金"},
          {bname:"企業儲金"},
        ],
        typeName:"企業",
        selectName:"個人儲金",
        num:"100"
      },
      selectedbusinessTransfer:0,
      checkeds: false, //呼出
      show1: false, //菜单
      show2: false, //连续呼出
      // show21: false, //连续呼出弹出页面
      show22: false, //保留呼出
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show10: false,
      show11: false,
      numsd: "", //叫号信息
      namds: "", //叫号名字
      tests: [],
      sumCallData: [],
      moves: 0, //列表编号
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
      num: [1, 2, 3, 4, 5, 6, 7, 8, 9, "全除去", 0, "一文字除去"],
      Nums: "", //受付番号数据绑定
      Data: [
        
      ],
      // 保留呼出数据
       NumData: [
       
      ],
      //保留呼出id
      holeId:[],
      // 番号制定数据
       NumDatas: [
   
      ],
      // 後方処理数据
      NumDatasd: [
  
      ],
      //後方処理返回数据
      backData:[],
      menuData: [
        {
          name: "呼出し機能",
          btn: ["連続呼出", "次の呼出", "保留呼出", "後方処理呼出"]
        },
        {
          name: "番号指定呼出",
          btn: ["番号指定"]
        },
        {
          name: "再呼出",
          btn: ["リコール"]
        },
        {
          name: "まとめ呼出",
          btn: ["まとめ呼出"]
        },
        {
          name: "完了機能",
          btn: ["キャンセル", "保留", "後方処理", "フォワード", "完了"]
        },
        {
          name: "業務振替",
          btn: ["業務振替"]
        }
      ],
      listData: ["登録呼出"],
    };
  },
  props: {
    datas: {
      type: Array
    },

  },
  created() {
    this.Data = this.datas;
  },
  watch: {
    checkeds() {
      this.$emit("btns");
    },
    infos() {
      console.log(this.infos);
    }
  },
  methods: {
    cacleCall() {
      var paramvo = new Object();
      paramvo.winId=localStorage.getItem("windowId");
      paramvo.list = this.tests;
     axios.post(
      "/api/operatDesk/cancleCall",
      {
          param: paramvo
        })
      .then((res) => {
        console.log(res)
          this.show11 = false;
      })
      this.show11=false;
    },
    sureCall() {
      console.log('enter the surecall');
      var message='';
      this.sumCallData.forEach(element => {
        message = message + element.num + " ";
      });
      if(!message==''){
      Dialog.confirm({
        title: "番号" + message + "呼出すかどうか"
      })
        .then(() => {
          // on confirm
          this.sureCall1(); //连续拨号
        })
        .catch(() => {
          // on cancel
        });
      }
      else{
        Dialog.confirm({
            title: "番号を選択しない"
          })
            .then(() => {
              this.show11=true;
            })
            .catch(() => {
              // on cancel
            });
      }
      
    },

    sureCall1() {
      var paramvo = new Object();
      paramvo.winId=localStorage.getItem("windowId");
      paramvo.list = this.sumCallData;

      axios.post(
        "/api/operatDesk/sureCall",
      {
          param: paramvo
        })
      .then((res) => {
        console.log('sureCall is success');
        console.log(res)
          this.show11 = false;
      })
    },
    addNum(index) {
      console.log(this.tests[index]);
      this.sumCallData.push(this.tests[index]);
      console.log(this.sumCallData);
    },
    list(index) {
      this.moves = index;
      console.log(this.moves);
      this.listData = this.menuData[index].btn;
    },
    //菜单列表事件
    callEvent(index) {
      console.log(this.menuData[this.moves].name);
      console.log(this.menuData[this.moves].btn[index]);
      if (this.menuData[this.moves].btn[index] == "まとめ呼出") {
        var _this = this;
        _this.tests = [];
        axios
            .get("/api/operatDesk/focusCallList?winId="+localStorage.getItem("windowId"))
          .then(function(res) {
            console.log(res);
            if (res.data.success) {
                  console.log(res.data.result.result)
              _this.tests = res.data.result.result;
              _this.show1 = false;
              _this.show11 = true;
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
      if (this.menuData[this.moves].btn[index] == "保留呼出") {
        console.log("haha");
        var _this = this;
        //保留呼出  参数测试
        axios
          .get(
            "/masterHold/mstHold/list?windowId="+localStorage.getItem("windowId")
          )
          .then(function(res) {
            console.log(res);
            if (res.data.success) {
              // _this.NumData = [...new Set(res.data.num)];
              _this.NumData = res.data.result;
              _this.holeId = res.data.result;
              console.log( _this.holeId);
              // res.data.result.forEach(item=>{
              //   console.log(item.num)
              //   if(item.num !== null){
              //     _this.NumData.push(item.num)
              //   }
              // });
              _this.show1 = false; //菜单页面隐藏
              _this.show22 = true; //保留呼出显示
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
      if (this.menuData[this.moves].btn[index] == "後方処理呼出") {
        console.log("haha");
        var _this = this;
        _this.NumDatasd = [];
        //後方処理呼出  参数测
        axios
          .get(
            "/backward/mstBackward/list?windowId="+localStorage.getItem("windowId")
          )
          .then(function(res) {
            console.log(res);
            if(res.data.success == true){
              _this.show5 = true;
              _this.backData = res.data.result;
            res.data.result.forEach(item=> {        
                 _this.NumDatasd.push(item.num);
              });
            }

          })
          .catch(function(err) {
            console.log(err);
          });
      }
      if (this.menuData[this.moves].btn[index] == "フォワード") {
        console.log("フォワード");

        var queueId = localStorage.getItem("numId");
        if (!queueId) {
          Notify({ type: 'danger', message: '番号を呼び出した後でこの操作を実行する。' });
          return;
        }
        //フォワード
        axios.post(
          "/numlog/sysNumLog/GetForwardBusiness",
          {
            queueId:queueId
          }
        )
        .then((res) => {
          this.forwardList.list = res.data.result.Transfers;
          this.forwardList.num = res.data.result.num;
          this.forwardList.typeName = res.data.result.typeName;
          this.forwardShow = true;
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
      }
      if (this.menuData[this.moves].btn[index] == "業務振替") {
        console.log("業務振替");
        var queueId = localStorage.getItem("numId");
        if (!queueId) {
          Notify({ type: 'danger', message: '番号を呼び出した後でこの操作を実行する。' });
          return;
        }
        var windowId = localStorage.getItem("windowId");
        //業務振替
        axios.post(
          "/numlog/sysNumLog/GetBusinessTransfer",
          {
            windowId:windowId,
            queueId:queueId
          }
        )
        .then((res) => {
          this.businessTransferList.num = res.data.result.num;
          this.businessTransferList.typeName = res.data.result.typeName;
          this.businessTransferList.list = res.data.result.Transfers;
          this.businessTransferShow = true;
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
      }
    },
    selectbusinessTransfer(selectedbusinessTransfer){
      this.selectedbusinessTransfer = selectedbusinessTransfer;
      console.log(this.selectedbusinessTransfer)
    },
    businessTransfer(){
      var numId = localStorage.getItem("numId");
      console.log(this.businessTransferList.list)
      console.log(this.selectedbusinessTransfer)
      console.log(this.businessTransferList.list[this.selectedbusinessTransfer])
      var newBusinId = this.businessTransferList.list[this.selectedbusinessTransfer].id;
      var newTypeId = this.businessTransferList.list[this.selectedbusinessTransfer].typeId;
      var queueNum = this.businessTransferList.num;


      if (!numId) {
        Notify({ type: 'danger', message: '番号を呼び出した後でこの操作を実行する。' });
        return;
      }
      //業務振替call
      axios.post(
        "/numlog/sysNumLog/BusinessTransfer",
        {
          numId:numId,
          newBusinId:newBusinId,
          queueNum:queueNum,
          newTypeId,newTypeId
        }
      )
      .then((res) => {
        if (res.data.result) {
          this.show1 = false;
          this.businessTransferShow = false;
          this.$parent.$children[0].bname = this.businessTransferList.list[this.selectedbusinessTransfer].bname;
          // localStorage.removeItem('numId');
          Notify({ type: 'success', message: '成功' });
        }else{   
          Notify({ type: 'danger', message: '失敗' });
        }
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    },
    selectForward(selectedForward){
      this.selectedForward = selectedForward;

      console.log(this.selectedForward)
    },
    forward(){
      var numId = localStorage.getItem("numId");


      console.log(this.forwardList.list)
      console.log(this.selectedForward)
      console.log(this.forwardList.list[this.selectedForward])
      var newBusinId = this.forwardList.list[this.selectedForward].id;
      var newTypeId = this.forwardList.list[this.selectedForward].typeId;
      var queueNum = this.forwardList.num;


      if (!numId) {
        Notify({ type: 'danger', message: '番号を呼び出した後でこの操作を実行する。' });
        return;
      }
      //フォワードcall
      axios.post(
        "/numlog/sysNumLog/Forward",
        {
          numId:numId,
          newBusinId:newBusinId,
          newTypeId:newTypeId,
          queueNum:queueNum,
        }
      )
      .then((res) => {
        if (res.data.result) {
          this.show1 = false;
          this.forwardShow = false;
          localStorage.removeItem('numId');
          Notify({ type: 'success', message: '成功' });
        }else{   
          Notify({ type: 'danger', message: '失敗' });
        }
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    },
    //后方呼出点击号码
    selectNumeds(index){
        this.k = index
    },
    //後方処理呼出確定
    backSure(){
      this.show5=false;
      this.show1= false;
      var _this = this;
      console.log(this.backData);
      console.log(this.k);
      console.log(this.backData[this.k]);
        axios
        .post("/numlog/sysNumLog/GetCallBuisnNum", {
          windowId:localStorage.getItem("windowId"),
          businId:_this.backData[this.k].businessId,
          queueNum:_this.backData[this.k].num,
          numId:_this.backData[this.k].queueId
        })
        .then(function(res) {
           console.log(res)
           if(res.data.success == true){ 
             Notify({ type: 'success', message: '成功' });
             console.log(_this.backData[_this.k].num);
             Bus.$emit("love",[_this.backData[_this.k].num,localStorage.getItem("name"),res.data.result.info.windowWaitPeoplrNum,res.data.result.info.waitPeoplrSumtime]);
           }else{
                Notify({
                type: "danger",
                message: "請求失敗"
              });
           }
        })
        .catch(function(err) {
          console.log(err);
        });
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
    //取消接口（参数测试）
    cancle() {
      // Dialog.confirm({
      //   title: "是否要取消"
      // })
      //   .then(() => {
      //     // on confirm
      //     var _this = this;
      //     axios
      //       .post(
      //         "/api/operatDesk/cancleCall",
      //         { numIds: "1234" }
      //       )
      //       .then(function(res) {
      //         console.log(res);
      //       })
      //       .catch(function(err) {
      //         console.log(err);
      //       });
      //     this.Nums = "";
      //     this.show2 = false;
      //   })
      //   .catch(() => {
      //     // on cancel
      //   });
      this.show2 = false;
    },
    sure() {
      
      this.fasts(); //连续拨号
      console.log(this.Nums);
    },
    //番号指定  参数测试
    mastTo() {
      var _this = this;
      _this.NumDatas = [];
      axios
        .get(
          "/masterHold/mstHold/queryBynum?windowId="+localStorage.getItem("windowId")
        )
        .then(function(res) {
          console.log(res);
          _this.numToData = res.data.result;
          res.data.result.forEach(item => {
            console.log(item.num)
            _this.NumDatas.push(item.num)
          })
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //番号指定
    selectNumas(index){
        this.m = index;
        
    },
    //番号指定確定
    numto(){
      this.show4 = false;
      console.log(this.numToData)
      if(this.numToData.length !== 0){
          var _this = this;
        axios
        .post("/numlog/sysNumLog/GetCallBuisnNum", {
          windowId:localStorage.getItem("windowId"),
          businId:_this.numToData[this.m].sysBusId,
          queueNum:_this.numToData[this.m].num,
          numId:_this.numToData[this.m].id
        })
        .then(function(res) {
           console.log(res)
           if(res.data.success == true){ 
             Notify({ type: 'success', message: '成功' });
           }else{
                Notify({
                type: "danger",
                message: "請求失敗"
              });
           }
        })
        .catch(function(err) {
          console.log(err);
        });
      }    
    },
    //保留呼出号码选择
    selectNum(index) {
      this.j = index;
        
    },
    //後方処理
    deal() {
      var _this = this;
      axios
        .post("/backward/mstBackward/add", {
          windowId: localStorage.getItem("windowId"),num:localStorage.getItem("fh"),businessId:localStorage.getItem("bsId"),queueId:localStorage.getItem("numId")
        })
        .then(function(res) {
          console.log(res);
          if (res.data.success) {
              Notify({ type: 'success', message: '成功' });
          } else {
            Notify({
              type: "danger",
              message: "後方処理は一度だけを処理する"
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //保留
    hold() {
      var _this = this;
     
      axios
        .post("/masterHold/mstHold/add", {
          windowId: localStorage.getItem("windowId"),num:localStorage.getItem("fh"),businessId:localStorage.getItem("bsId"),queueId:localStorage.getItem("numId")
        })
        .then(function(res) {
          console.log(res);
          if (res.data.success) {
             Notify({ type: 'success', message: '成功' });
            // _this.show3 = true;
          } else {
            Notify({
              type: "danger",
              message: "一度だけ保留する"
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //保留呼出確定
    holdSure() {
      this.show22 = false;
      var _this = this;
      console.log(_this.holeId)
      axios
        .post("/numlog/sysNumLog/GetCallBuisnNum", {
          windowId:localStorage.getItem("windowId"),
          businId:_this.holeId[_this.j].businessId,
          queueNum:_this.holeId[_this.j].num,
          numId:_this.holeId[_this.j].queueId
        })
        .then(function(res) {
          console.log(res)
           if(res.data.success == true){ 
             Notify({ type: 'success', message: '成功' });
             
            Bus.$emit("love",[_this.holeId[_this.j].num,localStorage.getItem("name"),res.data.result.info.windowWaitPeoplrNum,res.data.result.info.waitPeoplrSumtime]);
             }else{
               Notify({
                 type: "danger",
                message: "請求失敗"
              });
           }
        })
        .catch(function(err) {
          console.log(err);
        });
      axios
        .delete("/masterHold/mstHold/delete?id="+_this.holeId[_this.j].id)
        .then(function(res) {
          console.log(res);
          if(res.data.success){
             Notify({ type: 'success', message: '成功' });
          }else{
            Notify({
                type: "danger",
                message: "請求失敗"
              });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //连续呼出按钮
    fasts() {
      console.log("fasts");
      var _this = this;
      axios
        .get(
          "/api/operatDesk/continuousCall?num=" +
            this.Nums +
            "&winId="+localStorage.getItem("windowId")
        )
        .then((res) => {
          var result = res.data.result.result.list;

          this.sureList = result;
          if (result.length > 0) {
            this.PopupIsShow = true
          } else {
            Notify({ type: 'danger', message: 'コールできない,ユーザがありません。' });
          }
          console.log(result);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //完了按钮
    finish() {
      var finishIds = localStorage.getItem("numId");

      if (!finishIds) {
        Notify({ type: 'danger', message: '番号を呼び出した後で呼出す。' });
        return;
      }
      axios
        .post("/numlog/sysNumLog/CloseBuisnNum", {
          //参数需要写成活的
          finishIds: finishIds,
        })
        .then((res) => {
          console.log(res);
          try {
            if (res.data.success) {
              var result = res.data.result;
              if (result) {
                Notify({ type: "success", message: "完了しました。" });
                this.$parent.$children[0].num = "000";
                this.$parent.$children[0].bname = "業務名";
                this.$parent.$children[0].callWaitTime = "''00'00";
                localStorage.removeItem('numId');
              } else {
                Notify({
                  type: "danger",
                  message: "完了できません、再確認してください。"
                });
              }
            } else {
              Notify({
                type: "danger",
                message: "リクエストに失敗しました。技術者に連絡してください。"
              });
            }
          } catch (error) {
            Notify({
              type: "danger",
              message: "エラーが発生しました。技術者に連絡してください。"
            });
          }
          // this.show7 = true;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    onInput(checkeds) {
      if (checkeds) {
        this.helpCall(checkeds);
      } else {
        this.helpCancel(checkeds);
      }
    },
    helpCall(checkeds) {
      // var windowId = "321";
      // var terminalId = "321";
      var windowId = localStorage.getItem("windowId");
      var terminalId = localStorage.getItem("terminalId");
      console.log("helpCall with middle1");
      var _this = this;
      if (windowId == null || terminalId == null) {
        Notify({ type: "danger", message: "システムはあなたの窓口と端末を特定できません！！！" });
        return;
      }
      axios.post(
        "/test/tellerMachineBtn/helpCall",
        {
          windowId: windowId,
          terminalId: terminalId
        })
        .then(function(res) {
          console.log(res);
          try {
            if (res.data.success) {
              var result = res.data.result;
              if (result) {
                Notify({ type: "success", message: "呼出しました。" });
                _this.checkeds = checkeds;
              } else {
                Notify({
                  type: "danger",
                  message: "呼出できません、再確認してください。"
                });
              }
            } else {
              Notify({
                type: "danger",
                message: "リクエストに失敗しました。技術者に連絡してください。"
              });
            }
          } catch (error) {
            Notify({
              type: "danger",
              message: "エラーが発生しました。技術者に連絡してください。"
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    helpCancel(checkeds) {
      // var windowId = "321";
      // var terminalId = "321";
      var windowId = localStorage.getItem("windowId");
      var terminalId = localStorage.getItem("terminalId");
      console.log("helpCancel with middle1");
      var _this = this;
      axios.post(
        "/test/tellerMachineBtn/helpCancel",
        {
          windowId: windowId,
          terminalId: terminalId
        })
        .then(function(res) {
          console.log(res);
          try {
            if (res.data.success) {
              var result = res.data.result;
              if (result) {
                Notify({ type: "success", message: "呼出キャンセルしました。" });
                _this.checkeds = checkeds;
              } else {
                Notify({
                  type: "danger",
                  message: "呼出キャンセルできません、再確認してください。"
                });
              }
            } else {
              Notify({
                type: "danger",
                message: "リクエストに失敗しました。技術者に連絡してください。"
              });
              _this.checkeds = checkeds;
            }
          } catch (error) {
            Notify({
              type: "danger",
              message: "エラーが発生しました。技術者に連絡してください。"
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    closeListPopup() {
      console.log("closeListPopup with middle1");

      var paramvo = new Object();
      paramvo.list = this.sureList;

      axios.post(
        "/api/operatDesk/cancleCall",
      {
          param: paramvo
        })
      .then((res) => {
          console.log(res);
          try {
            if (res.data.success) {
              var result = res.data.result;
              if (result) {
              Notify({ type: 'success', message: '呼出キャンセルしました。' });
              } else {
              Notify({ type: 'danger', message: '呼出キャンセルできません、再確認してください。' });
              }
            } else {
            Notify({ type: 'danger', message: 'リクエストに失敗しました。技術者に連絡してください。' });
            }
          } catch (error) {
           Notify({ type: 'danger', message: 'エラーが発生しました。技術者に連絡してください。' });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
      console.log("关闭了弹出框")
      this.PopupIsShow = false;
    },
    okListPopup() {
      console.log("okListPopup with middle1");

      var paramvo = new Object();
      paramvo.winId = localStorage.getItem("windowId");;
      paramvo.list = this.sureList;

      axios.post(
      "/api/operatDesk/sureCall",
      {
        param: paramvo
      })
      .then((res) => {
          console.log(res);
          try {
            if (res.data.success) {
              var result = res.data.result.result;
              if (result) {
                console.log(result);
                var numIds = [];
                result.list.forEach(element => {
                  numIds.push(element.id)
                });
                localStorage.setItem("numId",numIds)
                var lastItem = result.list.pop();
                try {
                  this.$parent.$children[0].num = lastItem.num;
                  this.$parent.$children[0].bname = lastItem.bname;
                  this.$parent.$children[0].callWaitTime = lastItem.waitTime;
                  this.$parent.$children[0].awitPerson = result.waitPeople;
                  this.$parent.$children[0].awitPersons = result.waitTotalPeople;
                  this.$parent.$children[0].awitTime = result.waitTime;
                  this.$parent.$children[0].total = result.nextNum;
                } catch (error) {
                Notify({ type: 'danger', message: 'retrun data is can\'t format!' });
                console.log('retrun data is can\'t format!' );
                }
                this.show2 = false;
              Notify({ type: 'success', message: '呼出しました。' });
              } else {
              Notify({ type: 'danger', message: '呼出できません、再確認してください。' });
              }
            } else {
            Notify({ type: 'danger', message: 'リクエストに失敗しました。技術者に連絡してください。' });
            }
          } catch (error) {
           Notify({ type: 'danger', message: 'エラーが発生しました。技術者に連絡してください。' });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
      console.log("OK了弹出框")
      this.PopupIsShow = false;
    },
    // /numlog/sysNumLog/GetCallNumPpreview
    //叫号
    callNum() {
      var _this = this;
      axios
        .post("/numlog/sysNumLog/GetCallNumPpreview", {
          windowId: localStorage.getItem("windowId"),
        })
        .then(function(res) {
          console.log(res.data.result.isOk)
          console.log(res.data.result)
          if (res.data.success == true) {
            if (res.data.result.isOk == true) {
              _this.numsd = res.data.result.info.num;
              _this.namds = res.data.result.info.bname;
                 localStorage.setItem("fh",_this.numsd)
                 localStorage.setItem("name",_this.namds)
                 localStorage.setItem("bsId",res.data.result.info.sysBusintypeId)
                 localStorage.setItem("numId",res.data.result.info.id)
                  Dialog.confirm({
                    title: _this.numsd +" "+" "+ _this.namds
            })
              .then(() => {
                // on confirm
                //点击叫号確定
                _this.call(res.data.result.info);
              })
              .catch(() => {
                // on cancel
                //点击叫号取消
                _this.cancles(res.data.result.info);
              });
              }else{
                Notify({
                  type: "danger",
                message: "呼出す情報がありません"
              });
            }
            console.log(res);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //叫号確定
    call(mdl) {
      var _this = this;
      console.log(mdl)
    //  Bus.$emit("love",[mdl.num,mdl.bname]);
        axios
        .post("/numlog/sysNumLog/GetCallBuisnNum", {
          windowId:localStorage.getItem("windowId"),
          businId:mdl.sysBusintypeId,
          queueNum:mdl.num,
          numId:mdl.id
        })
        .then(function(res) {
          console.log(res)
           if(res.data.success == true){ 
             localStorage.setItem("witeTwoNum",res.data.result.info.windowWaitPeoplrNum);
             Notify({ type: 'success', message: '成功' });
            Bus.$emit("love",[mdl.num,mdl.bname,res.data.result.info.windowWaitPeoplrNum,res.data.result.info.waitPeoplrSumtime]);
             }else{
               Notify({
                 type: "danger",
                message: "請求失敗"
              });
           }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    // 叫号取消
    cancles(mdl) {
      axios
        .post("/numlog/sysNumLog/CancelBuisnNum", {
          numId: mdl.id
        })
        .then(function(res) {
           console.log(res)
          if (res.data.success == true) {
          } else {
            Notify({
              type: "danger",
              message: "請求失敗"
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //不同的事件根据后端不同的值执行不同的操作
    event_handle(val) {
      var button = this.Data.find(item => item.butid === val);
      console.log(button);
      switch (button.click) {
        case "click20":
          console.log("我是1");
          this.show1 = true; //this.event_1();
          this.moves = 0;
          this.listData = this.menuData[0].btn;

          break;
        case "click21":
          console.log("我是2"); //this.event_2();
          this.show2 = true;

          break;
        case "click22":
          this.hold();
          console.log("我是3"); //this.event_3();
          break;
        case "click23":
          console.log("我是4"); //this.event_4();
          this.show4 = true;
          this.mastTo();
          break;
        case "click24":
          console.log("我是5"); //this.event_5();
          this.deal();
          break;
        case "click25":
          console.log("我是6"); //this.event_6();
          this.show6 = true;
          break;
        case "click26":
          // console.log("我是7"); //this.event_7();
          this.finish();
          break;
        case "click27":
          console.log("我是8"); //this.event_7();
          this.show8 = true;
          break;
        case "click28":
          console.log("我是9"); //this.event_7();
          this.callNum();
          //
          break;
        case "click29":
          console.log("我是10"); //this.event_7();
          this.show10 = true;
          break;
      }
    }
  }
};
</script>

<style scoped>
.middle1 {
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
  height: 1.55rem;
  font-weight: 600;
}
.left_m {
  width: 40%;
  height: 100%;
}
.right_m {
  width: 60%;
  height: 100%;
}
.p {
  color: #e6e583;
  font-size: 0.35rem;
  margin-left: 0.1rem;
}
.menus {
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
.bt {
  position: absolute;
  top: 3.5rem;
  left: 0.18rem;
  z-index: 1;
}
[v-cloak] {
  display: none;
}
.sds div {
  width: 24%;
  height: 0.6rem;
  background: #9b9da3;
  border-radius: 3px;
  margin-bottom: 4px;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.16rem;
}
.sds div:nth-child(1) {
  background: #000000;
  width: 24%;
  height: 0.6rem;
  border-radius: 3px;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.16rem;
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
.oks3 {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.07rem;
}
.oks3 span:nth-child(1) {
  line-height: 0.6rem;
  width: 32%;
  text-align: center;
  font-size: 0.25rem;
  background: #cbced4;
}
.oks3 span:nth-child(2) {
  line-height: 0.6rem;
  width: 32%;
  text-align: center;
  font-size: 0.25rem;
  background: #cbced4;
}
.oks3 span:nth-child(3) {
  line-height: 0.6rem;
  width: 32%;
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
.aa {
  width: 100%;
  height: 75%;
  background: #6f7073;
  overflow-y: auto;
}
.menused {
  color: #838383;
  width: 100%;
  height: 0.55rem;
  text-align: center;
  border-bottom: 1px solid #2d2d2d;
  line-height: 0.55rem;
  font-size: 0.2rem;
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

.listBtn {
  width: 100%;
  height: 0.55rem;
  background: #a9acb1;
  border-radius: 3px;
  color: #1e1e20;
  font-size: 0.2rem;
  margin-bottom: 2px;
  text-align: center;
  line-height: 0.55rem;
}
.moveSty {
  color: red;
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
.info_ {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 0.25rem;
  background: #3d4046;
  color: #949697;
  line-height: 0.25rem;
}
.select-style {
  background: #ffffff;
}
.forward div p {
  background: #cbced4;
}
.businessTransfer div p {
  background: #cbced4;
}
.select-style2 div p {
  background: #ffffff;
}


.wrappersd {
  width: 100%;
  height: 71%;
  background: #5e5f61;
  overflow-y: auto;
}

.iif {
  width:100%;height:.4rem;display:flax;
  justify-content: space-around
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
.blockss {
  width: 90%;
  height: 50%;
  background-color: #61615e;
  position: relative;
}

.dd {
  position: absolute;
  bottom: 1px;
}
.df {
  width: 100%;
  text-align: center;
  color: white;
  font-size: .2rem;
}
/* .a >>> .van-switch{
    background: blue
} */
</style>