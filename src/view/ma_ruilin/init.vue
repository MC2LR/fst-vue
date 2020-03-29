<template>
    <div class="init">
        <div class="inits">
            LAUREL
        </div>
        <p>
            エラーメッセージ
        </p>
        <div class="operate">
            INC-SV <br>
            <b>操作端末</b>
        </div>
        <div class="process">
            <van-loading size="50px" type="spinner" color="#D4D4D4" /><br>
            <span style="color:white;font-size:.3rem">启动中</span>
        </div>
    </div>
</template>

<script>
import { Loading } from 'vant';
export default {
    name:"init",
    data(){
        return{

        }
    },
    created(){
        this.shows = true;
            var _this = this;
            setTimeout(function (){
             _this.$router.push("/login");
},3000);
    },
}
</script>

<style scoped>
    .init{
        width: 100%;
        height: 100%;
        background: #000307;
    }
    .inits{
        width: 100%;
        height: .6rem;
        background: #A8A8A8;
        color: #004898;
        font-weight: 900;
        text-align: center;
        line-height: .6rem;
        font-size: .3rem;
    }
    p{
        width: 100%;
        height: .3rem;
        background: #FF2800;
        text-align: center;
        line-height: .3rem;
        color: #EFEFEF;
    }
    .operate{
        width: 100%;
        height: 1rem;
        text-align: center;
        color: aliceblue;
        margin-top: 1rem;
        font-size: .3rem;
    }
    .process{
        width: 100%;
        height: .7rem;
        text-align: center;
        margin-top:1rem; 
    }
</style>