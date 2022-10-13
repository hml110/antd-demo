<template>
  <a-row class="member">
    <a-col :span="2"
           class="member-title">
      <a-row class="member-title_info">
        <a-col>项目成员</a-col>
      </a-row>
    </a-col>
    <a-col :span="22">
      <a-row>
        <a-col :span='18'
               class="member_content">
          <MyMemberOne />
        </a-col>
        <a-col :span='4'
               style="padding-left:1px">
          <Echarts6 />
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script>
import MyMemberOne from './MyMemberOne.vue'
import Echarts6 from './Echarts/Echarts6.vue'
export default {
  name: 'Member',
  components: {
    MyMemberOne,
    Echarts6,
  },
}
</script>


<style scoped>
.member {
  width: 100%;
  height: 18%;
  margin: 4px 0;
  /* border: 1px solid red; */
  font-size: 12px;
  background-color: #f7f7f9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.member-title {
  height: 90%;
  /* border: 1px solid red; */
}

.member_content {
  height: 80px;
}
.member-title_info {
  height: 80px;
  width: 100%;
  /* border: 1px solid red; */
  font-weight: bolder;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ant-col-22 {
  height: 90%;
  /* border: 1px solid red; */
  background: #ffffff;
}
</style>