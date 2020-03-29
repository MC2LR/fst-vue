<template>
  <div class="container">
      <div class="title">
          <p>現在お呼びしている番号</p>
      </div>
      <div class="table">
          <div style="margin:1rem 0 0 0;">
                <van-row>
                    <van-col span="3"  >1番窓口</van-col>
                    <van-col span="3"  >2番窓口</van-col>
                    <van-col span="3"  >3番窓口</van-col>
                    <van-col span="3"  >4番窓口</van-col>
                </van-row>
               <van-row>
                   <van-icon style="margin-left:0.9rem;" color="red" name="arrow-down" size="0.5rem" />
                   <van-icon style="margin-left:1.5rem;" color="red" name="arrow-down" size="0.5rem" />
                   <van-icon style="margin-left:1.5rem;" color="red" name="arrow-down" size="0.5rem" />
                   <van-icon style="margin-left:1.5rem;" color="red" name="arrow-down" size="0.5rem" />
               </van-row>
                <van-row>
                    <van-col></van-col>
                    <van-col></van-col>
                    <van-col></van-col>
                    <van-col></van-col>
                </van-row>
          </div>


      </div>
  </div>
</template>

<script>
name:'A2';
export default {
    data(){
        return{
            items:[
                {id:654},
                {id:654},
                {id:654},
                {id:654},
            ]
        }
    }

}
</script>

<style scoped>
    .container{
        width: 100%;
        height: 4rem;
        border: orange 0.03rem solid;
        border-radius: 0.6rem;

    }
    .title{
        position: relative;
        z-index: -1;
        width: 100%;
        height: 0.5rem;
        background-color: rgb(27, 27, 121);
        text-align: center;
        color: white;
        font-size: 0.35rem;

    }
    .table{
        width: 100%;
        margin-left: 0.4rem;

    }
    .table .van-col{
        margin: 0 auto;
        text-align: center;
        line-height: 0.5rem;
        width: 18%;
        height: 0.5rem;
        border: 0.01rem black solid;
        margin-left: 0.25rem;
        background-color: rgb(214, 236, 240);
    }
</style>
