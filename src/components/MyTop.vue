<template>
  <a-row type="flex"
         justify="center"
         align="middle"
         id="page_head">
    <a-col :span="24"
           class="page_head_col">
      <a-col :span="4">
        <MyTopInput />
      </a-col>
      <a-col :span="5">
        <MyTopIcon />
      </a-col>
      <a-col :span="15">
        <MyTopMenu></MyTopMenu>
      </a-col>
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
  height: 9%;
  /* border: 1px solid red; */
  background-color: #f7f7f9;
  font-size: 12px;
  /* margin: 5px; */
}
.page_head_col {
  height: 25px;
  margin: 5px;
  background-color: #ffffff;
  /* border: 1px solid red; */
}
</style>