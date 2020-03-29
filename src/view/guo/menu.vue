<template>
    <div class="menu-container">
        <div class="menu-top">
            <p style="font-size: 0.3rem;color:white">メニュー</p>
        </div>
        <div class="menu-middle">
            <van-row>
                <van-col  span="12">呼出し機能</van-col>
                <van-col tag="button" style="text-align: left" span="12" click="" >登录呼出</van-col>
            </van-row>
             <van-row>
                <van-col  span="12">番号指定呼出</van-col>
                <van-col tag="button" style="text-align: left" span="12" >任意番号呼出</van-col>
            </van-row>
             <van-row>
                <van-col  span="12" style="border:none">再呼出</van-col>
                <van-col tag="button" style="text-align: left" span="12">后方处理</van-col>
            </van-row>
             <van-row>
                <van-col  span="12" ></van-col>
                <van-col tag="button" style="text-align: left" span="12">スキップ</van-col>
            </van-row>
             <van-row>
                <van-col  span="12">まとめ呼出</van-col>
                <van-col tag="button" style="text-align: left" span="12">まとめ呼出</van-col>
            </van-row>
             <van-row>
                <van-col  span="12" style="border:none">完了機能</van-col>
                <van-col tag="button" style="text-align: left" span="12">后方处理</van-col>
            </van-row>
             <van-row>
                <van-col  span="12"></van-col>
                <van-col tag="button" style="text-align: left" span="12">キャンセル</van-col>
            </van-row>
             <van-row>
                <van-col  span="12">業務振替</van-col>
                <van-col tag="button" style="text-align: left" span="12">業務振替</van-col>
            </van-row>
             <van-row>
                <van-col  span="12">バーコード</van-col>
                <van-col tag="button" style="text-align: left" span="12">后方处理 再呼出</van-col>
            </van-row>
             <van-row>
                <van-col  span="12" >动作设定</van-col>
                <van-col tag="button" style="text-align: left" span="12">呼出对象業務ID变更</van-col>
            </van-row>
        </div>
        <div class="btn">
            <van-button type="default">戻る</van-button>
        </div>
    </div>
</template>

<script>
//メニュー
import { Row, Col } from 'vant';
import { Button } from 'vant';
name:'menu'
export default {

}
</script>

<style scoped>
.menu-container {
    height: 100%;
    background-color: black;

}
.menu-top{
    width: 100%;
    background-color: #3D4046;
    text-align: center;
    line-height: 0.7rem;
    height: 10%;
}
.menu-middle {
    width: 100%;
    height: 76%;
    
}

.van-col:nth-child(1) { 
    color: white;
    width: 40%;
    height: 0.52rem;
    border-bottom: #C7CAD0 0.02rem solid;
    text-align: center;
    font-size: 0.2rem;
    line-height: 0.5rem;
}
.van-col:nth-child(2){
    color: black;
    background: #C7CAD0;   
    width: 60%;
    height: 0.52rem;
    border-bottom: black 0.05rem solid;
    font-size: 0.2rem;
    line-height: 0.5rem;
    padding-left: 0.1rem;
}
.van-button {
    margin: 0.06rem 0 0 0.05rem;
    height: 0.68rem;
    width: 97%;
    background: #C7CAD0;
    font-size: 0.35rem;
    
    
}



</style>