<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 交友 -->
    <div>同城魔都脱单盲盒</div>
    <img class="w100" src="../../static/images/top.png" alt="" srcset="">
    
    <div>
      这是一种新颖的交友方式，欢迎尝鲜，缘分天注定
    </div>
    <div>
      目前，有“留一个”与“抽一个”功能两种，每次抽留仅需一元哦，并且抽取后别人将不会抽到你的那个他（她），请不要虚假投放哦，会封IP的哈~
      <!-- <img src="1" alt="" srcset=""> -->

      <div style="display:flex;text-align:center;">
        <div  style="flex:1;border:1px solid">
          <div class="padding01"><van-button @click="addUser" type="primary">放入一张男生纸条</van-button></div>
          <div class="padding01"><van-button type="primary">抽取一张男生纸条</van-button></div>
        </div>
        <div  style="flex:1;border:1px solid">
          <div class="padding01"><van-button @click="addUser"  type="warning">放入一张女生纸条</van-button></div>
          <div class="padding01"><van-button type="warning">抽取一张女生纸条</van-button></div>
        </div>
      </div>
    </div>
    <img src="../../static/images/wxPay.jpg" >
    <!-- <img src="../../static/images/zfbPay.jpg" > -->
    
    <div style="text-align:center">现有总数{{allCount}}条，包含男生{{manCount}}条、 <span>女生{{woManCount}}条</span></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { addUserOne, getUserOne, getFriends, payFindResult } from '@/api/data'
export default {
  name: 'Home',
  data() {
    return {
      allCount: 0,
      manCount: 0,
      woManCount: 0,
    }
  },
  mounted() {
    this.initCount()
  },
  methods: {
    setInterValFindOrder(orderId) {
      payFindResult({orderId: orderId}).then(res => {
         console.log(res);
       })
      // https://admin.zhanzhangfu.com/order/onlinePayFindResult
    },
    addUser(){
       addUserOne({}).then(res => {
        //  setInterval(()=>{
           console.log('res.data.data.orderId', res.data.data.orderId);
           this.setInterValFindOrder(res.data.data.orderId)
        //  }, 3000)
       })
      // 弹出性别弹框
    },
    getUser(){
      getUserOne({}).then(res => {
         console.log(res);
      })
      // 弹出性别弹框
    },
    initCount(){
       getFriends({}).then(res => {
         var data = res.data.data
         var [woManCount, manCount] = data
         // 男条数
         this.manCount = manCount.count
         // 女条数
         this.woManCount = woManCount.count
         // 总条数
         this.allCount = manCount.count + woManCount.count
       })
    }
  },
  components: {
  }
}
</script>
