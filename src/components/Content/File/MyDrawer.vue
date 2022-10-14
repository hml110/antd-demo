<template>
  <div>
    <!--按钮 -->
    <!-- <a-button type="primary"
              style="margin:20px"
              @click="showDrawer">
      <a-icon type="plus" /> 修改
    </a-button> -->
    <!-- 抽屉 -->
    <a-drawer title="修改"
              :width="400"
              :visible="visible"
              :body-style="{ paddingBottom: '40px' }"
              @close="onClose"
              :destroyOnClose=true>
      <!-- 表单区域 -->
      <!-- :label-col 标签宽度-->
      <!-- :wrapper-col 输入框宽度-->
      <a-form :form="form"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
              @submit="handleSubmit">
        <!-- 表单项 -->
        <a-form-item label="Id"
                     v-show=false>
          <a-input style="width:200px"
                   :disabled='true'
                   v-decorator="['id',{ rules: [{ required: true, message: 'Please input your id!' }], initialValue: this.info.id, }]" />
        </a-form-item>
        <a-form-item label="单据金额">
          <a-input style="width:200px"
                   v-decorator="['price',{ rules: [{ required: true, message: 'Please input your Price!' }], initialValue: this.info.price, }]" />
        </a-form-item>
        <a-form-item label="单据数量">
          <a-input v-decorator="['number', { rules: [{ required: true, message: 'Please input your number!' }] ,initialValue: this.info.number,}]" />
        </a-form-item>
        <a-form-item label="单据名称">
          <a-input v-decorator="['description', { rules: [{ required: true, message: 'Please input your description!' }],initialValue: this.info.description, }]" />
        </a-form-item>
        <!-- <a-form-item label="Schedule">
          <a-input v-decorator="['schedule', { rules: [{ required: true, message: 'Please input your schedule!' }],initialValue: this.info.schedule }]" />
        </a-form-item> -->
        <a-form-item :wrapper-col="{ span: 24, offset: 2 }"
                     style="margin:0 0 0 150px;">
          <a-button type="danger"
                    @click="onClose">
            取消
          </a-button>
          <a-button type="primary"
                    html-type="submit"
                    style="margin-left:40px"
                    @click="onClose">
            确定
          </a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>
<script>
export default {
  name: 'MyDrawer',
  data() {
    return {
      info: {
        id: '',
        price: '',
        number: '',
        description: '',
        // schedule: '',
      },
      formLayout: 'horizontal',
      form: this.$form.createForm(this, {
        name: 'coordinated',
      }),
      visible: false,
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          //把数据传递给MyFileOneCard组件
          //   console.log(values)
          this.$bus.$emit('modify', values)
        }
      })
    },
    showInput(msg) {
      this.info.id = msg.id
      this.info.price = msg.msg1 + '.' + msg.msg2
      this.info.number = msg.msg3
      this.info.description = msg.msg4
    },
  },
  mounted() {
    // console.log('mounted()')
    // 设置表单项初始值
    // this.form.getFieldDecorator('price', {
    //   initialValue: this.info.price,
    //   preserve: true,
    // })
    this.$bus.$on('test', (data, msg) => {
      console.log('我是Drawer组件，收到了数据', data, msg)
      this.visible = data
      //调用处理方法
      this.showInput(msg)
    })
  },
  beforeDestroy() {
    this.$bus.$off('modify')
  },
}
</script>
