<template>
  <a-row class="page_head_icon"
         type='flex'
         justify='start'
         align="middle">
    <a-col :span="10"
           class="page_head_icon_left">
      <div>
        <svg-icon iconname="icon-gouxuankuangyidagou">
        </svg-icon>
        {{msg}}
      </div>
    </a-col>
    <a-col :span="14"
           class="page_head_icon_right">
      <div>
        <svg-icon iconname="icon-shuaxin">
        </svg-icon>
      </div>
      <div>
        <svg-icon iconname="icon-share">
        </svg-icon>
        <svg-icon iconname="icon-sanjiao1">
        </svg-icon>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'MyTopIcon',
  data() {
    return {
      msg: '含未生效单据',
    }
  },
}
</script>

<style scoped>
.page_head_icon {
  width: 100%;
  height: 30px;
  /* border: 1px solid red; */
  background-color: #ffffff;
}

.page_head_icon_left {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}

.svg-icon {
  font-size: 16px;
}
.page_head_icon_right {
  display: flex;
  justify-content: start;
  align-items: center;
  /* border: 1px solid red; */
}

.page_head_icon_right div {
  padding-left: 10px;
}
</style>