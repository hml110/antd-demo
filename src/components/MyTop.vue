<template>
  <a-row type="flex"
         justify="space-between"
         align="middle"
         id="page_head">
    <a-col :span="4">
      <MyTopInput />
    </a-col>
    <a-col :span="5">
      <MyTopIcon />
    </a-col>
    <a-col :span="14">
      <MyTopMenu></MyTopMenu>
    </a-col>
  </a-row>
</template>

<script>
import MyTopMenu from './MyTopMenu.vue'
import MyTopInput from './MyTopInput.vue'
import MyTopIcon from './MyTopIcon.vue'
export default {
  name: 'MyTop',
  components: {
    MyTopMenu,
    MyTopInput,
    MyTopIcon,
  },
}
</script>

<style scoped>
#page_head {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  background-color: #ffffff;
  font-size: 12px;
}
</style>