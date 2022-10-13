<template>
  <div class="page">
    <div class="page_head">
      <my-top></my-top>
    </div>
    <div class="page_content">
      <div class="page_content_left">
        <my-overview></my-overview>
        <my-member></my-member>
        <my-file></my-file>
      </div>
      <div class="page_content_right">
        <my-sidebar></my-sidebar>
      </div>
    </div>
  </div>
</template>
<script>
import MyTop from './MyTop.vue'
import MyOverview from './MyOverview.vue'
import MyMember from './MyMember.vue'
import MyFile from './MyFile.vue'
import MySidebar from './MySidebar.vue'
export default {
  components: { MyTop, MyOverview, MyMember, MyFile, MySidebar },
  name: 'Layout',
}
</script>

<style>
.page {
  margin: 0;
  padding: 0;
  width: 100%vw;
  height: 100%vh;
  background-color: #f7f7f9;
  list-style: none;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  /* border: 1px solid red; */
}

.page_head {
  width: 100%;
  height: 7%;

  /* border: 1px solid red; */
}

.page_content {
  width: 100%;
  height: 90%;
  /* margin-top: 2px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}
.page_content_left {
  width: 80%;
  height: 100%;
  /* border: 1px solid red; */
}
.page_content_right {
  margin-left: 6px;
  width: 20%;
  height: 100%;
  /* border: 1px solid red; */
}
</style>
