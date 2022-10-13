<template>
  <a-input id="input-1"
           placeholder="G110北京延庆路段工厂造价10000" />
</template>

<script>
export default {
  name: 'MyTopInput',
}
</script>

<style scoped>
#input-1 {
  width: 100%;
  height: 24px;
  font-size: 13px;
  border-radius: 0;
  background-color: #ffffff;
  /* margin-left: 5px; */
  /* border: 1px solid red; */
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>