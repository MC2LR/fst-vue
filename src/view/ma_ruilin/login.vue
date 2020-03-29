<template>
  <div class="login">
    <div class="logins">LAUREL</div>
    <p>エラーメッセージ</p>
    <span style="color:#9A9A9A;margin-top:.1rem;margin-bottom:.1rem;text-indent:.4rem">用户id</span>
    <input type="text" v-model="username" class="inp" @focus="focused" placeholder="请输入用户id" />
    <span style="color:#9A9A9A;margin-top:.1rem;margin-bottom:.1rem;text-indent:.4rem">密码</span>
    <input type="password" v-model="password" class="inp" @focus="focuedP" placeholder="请输入用户密码" />
    <ul>
      <li v-for="(item,index) in num" @click="nums(index)" :key="index">{{item}}</li>
    </ul>
    <div class="oks">
      <span @click="cancle">取消</span>
      <span @click="login">確定</span>
    </div>


    <!-- 弹出框 -->
    <van-dialog
      v-model="showLogin"
      title="端末選択"
      confirmButtonText="OK"
      @confirm="confirm"
      width="60%"
    >
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell :title="item.terminalInfo.terminalName" v-for="(item,key) in columns" :key="key"  clickable @click="radio = item">
            <van-radio slot="right-icon" :name="item" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-dialog>


  </div>
</template>

<script>
import { Dialog,Notify } from "vant";
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      showLogin:false,
      columns:[],
      radio:'',
      username:"",
      id: "",
      password: "",
      logins: true,
      num: [1, 2, 3, 4, 5, 6, 7, 8, 9, "全除去", 0, "一文字除去"]
    };
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },

  methods: {
    // 添加选择端末的功能
    judge() {
      var terminalKey = localStorage.getItem("terminalKey");
      if (terminalKey == null||terminalKey == "undefined") {
        // this.loadTerminal();
        this.showLogin = true;
      } else {
        // this.loadTerminal();
        var terminalInfos = JSON.parse(localStorage.getItem("terminalInfos"));
        console.log()
        var terminalId = localStorage.getItem("terminalId");
        terminalInfos.forEach(element => {
            if(element.terminalInfo.id == terminalId){
                localStorage.setItem("windowInfo",JSON.stringify(element.windowInfo));
                localStorage.setItem("listBusiness",JSON.stringify(element.listBusiness));
                localStorage.setItem("windowId",element.terminalInfo.sysWindowCode);
            }
        });
        this.username = "";
        this.password = "";
        this.$router.push("/Teller");
      }
    },
    loadTerminal() {
      axios.get("/terminal/terminalInfo/listByShopId?terminalSegment=2").then(res => {
        console.log(res);
        var data = res.data.result;
        this.columns = data;
        localStorage.setItem("terminalInfos",JSON.stringify(data));
        this.radio = data[0];
        this.judge();
      });
    },
    confirm() {
      console.log(this.radio);
      localStorage.setItem("terminalKey",this.radio.terminalInfo.terminalKey);
      localStorage.setItem("windowId",this.radio.terminalInfo.sysWindowCode);
      localStorage.setItem("terminalId",this.radio.terminalInfo.id);
      localStorage.setItem("windowInfo",JSON.stringify(this.radio.windowInfo));
      localStorage.setItem("listBusiness",JSON.stringify(this.radio.listBusiness));
      var terminalKey = localStorage.getItem("terminalKey");
      if (terminalKey == null||terminalKey == "undefined") {
       Toast("端末をご追加ください")
        }else{
          this.username = "";
          this.password = "";
          this.$router.push("/Teller");
      }
    },

    nums(index) {
      if (this.flag == 0) {
        if (index !== 9 && index !== 11) {
          this.id += this.num[index];
          console.log("haha");
        }
        if (index == 9) {
          this.id = "";
        }
        if (index == 11) {
          if (this.id != "") {
            this.id = this.id.substring(0, this.id.length - 1);
          }
        }
      }
      if (this.flag == 1) {
        if (index !== 9 && index !== 11) {
          this.password += this.num[index];
          console.log("haha");
        }
        if (index == 9) {
          this.password = "";
        }
        if (index == 11) {
          this.password = this.password.substring(0, this.password.length - 1);
        }
      }
    },
    focused() {
      this.flag = 0;
    },
    focuedP() {
      this.flag = 1;
    },
    cancle() {
      Dialog.confirm({
        title: "是否要取消"
      })
        .then(() => {
          // on confirm
          this.id = "";
          this.password = "";
        })
        .catch(() => {
          // on cancel
        });
    },
    login(terminalKey) {
      axios
        .post("/sys/tellerLogin", {
          username: this.username,
          password: this.password,
          flag: "1"
        })
        .then(res => {
          console.log(res.data.code);
          const userInfo = res.data.result.userInfo.id;
          const store = res.data.result.departs;
          if (res.data.code == "200") {
            if (store != null && store.length > 0) {
              localStorage.setItem("storeId", store[0].id);
            }
            localStorage.setItem("userInfo", userInfo);
            localStorage.setItem("X-Access-Token", res.data.result.token);
            this.loadTerminal();
          }
        })
        .catch(err => {
          // Toast.fail("パスワードが正しくないです");
          Dialog.alert({
            title: "エラー",
            message: "ユーザー名またはパスワードが間違えました",
            confirmButtonText: "確認"
          }).then(() => {
            // on close
          });
          return err;
            });
        }
    
    }
    
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: #000307;
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
p {
  width: 100%;
  height: 0.3rem;
  background: #ff2800;
  text-align: center;
  line-height: 0.3rem;
  color: #efefef;
}
.inp {
  width: 80%;
  height: 0.4rem;
  margin-left: 0.4rem;
  font-size: 0.2rem;
  text-indent: 0.15rem;
}
ul {
  width: 100%;
  height: 2.95rem;
  margin-top: 0.36rem;
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
</style>