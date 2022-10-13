<template>
  <div>
    <!-- <a-button type="primary"
              @click="showModal"
              style="margin:50px">
      Open Modal
    </a-button> -->
    <a-modal v-model="visibleModal"
             title="计划完成情况"
             :width="500"
             @ok="handleSubmit"
             ok-text="确认"
             cancel-text="取消">
      <a-form :form="form"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 12 }"
              @submit="handleSubmit">
        <a-form-item label="任务数">
          <a-input v-decorator="['gross', { rules: [{ required: true, message: 'Please input your gross!' }] ,initialValue: this.info.gross}]" />
        </a-form-item>
        <a-form-item label="已完成">
          <a-input v-decorator="['accomplish', { rules: [{ required: true, message: 'Please input your accomplish!' }],initialValue: this.info.accomplish }]" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleModal: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      info: {
        //总量
        gross: '100',
        //已完成
        accomplish: '90',
      },
    }
  },

  methods: {
    showModal() {
      this.visibleModal = true
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.visibleModal = false
          //处理修改的数据
          //   console.log('Received values of form: ', values)
          this.$bus.$emit('echartsValue', values)
        }
      })
    },
    modalDemo(flag, value) {
      //   console.log('modalDemo()', flag, value)
      this.visibleModal = flag
      this.info.gross = value.allWorks
      this.info.accomplish = value.completeness
    },
  },
  mounted() {
    //绑定全局自定义事件
    this.$bus.$on('modalValue', this.modalDemo)
  },
}
</script>
