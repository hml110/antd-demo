<template>
  <div class="page_content_file">
    <a-row v-for="mess in messages"
           :key="mess.id"
           class="page_content_file_col"
           type="flex"
           justify="space-between"
           align="middle">
      <a-col v-for="me in mess"
             :key="me.id"
             class="page_content_file_col_block">
        <a-card @click="showDrawer(me)">
          <a-row>
            <a-col :span="
                11"
                   style="padding-left:5px"
                   align="left"><span class="text_01">{{me.msg1}}</span><span class="text_02">.{{me.msg2}}<span v-show="me.id !== 16">万元</span><span v-show="me.id === 16">小时</span></span>
            </a-col>
            <a-col :span="12"
                   align=right
                   style="padding:5px">
              <span :class="{icon_color1:[1,5,9,13].includes(me.id),icon_color2:[2,6,10,14].includes(me.id),icon_color3:[3,7,11,15].includes(me.id),icon_color4:[4,8,12,16].includes(me.id)}">
                <svg-icon iconname="icon-daibangongdan">
                </svg-icon>
              </span>
            </a-col>
            <a-col :span="11"
                   style="padding:10px 0 0 5px"
                   align=left>{{me.msg3}}张</a-col>
            <a-col :span="12"
                   style="padding:5px"
                   align=right>{{me.msg4}}</a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <Drawer></Drawer>
  </div>
</template>

<script>
import Drawer from './MyDrawer.vue'
export default {
  name: 'MyFileOneCard',
  data() {
    return {
      messages: {
        obj1: [
          {
            id: 1,
            msg1: '2,560',
            msg2: '00',
            msg3: 3,
            msg4: '应收合同',
          },
          {
            id: 2,
            msg1: '3,499',
            msg2: '39',
            msg3: 30,
            msg4: '收入确认',
          },
          {
            id: 3,
            msg1: '2,835',
            msg2: '72',
            msg3: 23,
            msg4: '发票',
          },
          {
            id: 4,
            msg1: '1,770',
            msg2: '20',
            msg3: 15,
            msg4: '开票申请',
          },
        ],
        obj2: [
          {
            id: 5,
            msg1: '142',
            msg2: '50',
            msg3: 1,
            msg4: '应付合同',
          },
          {
            id: 6,
            msg1: '35',
            msg2: '35',
            msg3: 10,
            msg4: '应付单',
          },
          {
            id: 7,
            msg1: '2',
            msg2: '83',
            msg3: 18,
            msg4: '报销单',
          },
          {
            id: 8,
            msg1: '0',
            msg2: '00',
            msg3: 0,
            msg4: '对公报销单',
          },
        ],
        obj3: [
          {
            id: 9,
            msg1: '1,403',
            msg2: '50',
            msg3: 24,
            msg4: '收款单',
          },
          {
            id: 10,
            msg1: '11',
            msg2: '00',
            msg3: 5,
            msg4: '其他收款',
          },
          {
            id: 11,
            msg1: '27',
            msg2: '75',
            msg3: 11,
            msg4: '付款单',
          },
          {
            id: 12,
            msg1: '28',
            msg2: '18',
            msg3: 16,
            msg4: '其他付款',
          },
        ],
        obj4: [
          {
            id: 13,
            msg1: '21',
            msg2: '00',
            msg3: 8,
            msg4: '其他应收',
          },
          {
            id: 14,
            msg1: '2',
            msg2: '00',
            msg3: 1,
            msg4: '其他应付单',
          },
          {
            id: 15,
            msg1: '0',
            msg2: '01',
            msg3: 1,
            msg4: '费用分摊',
          },
          {
            id: 16,
            msg1: '76',
            msg2: '00',
            msg3: 8,
            msg4: '工时记录单',
          },
        ],
      },
    }
  },
  components: {
    Drawer,
  },
  methods: {
    showDrawer(value) {
      //触发自定义事件
      console.log('我是MyFileOneCard,我发送了消息', value)
      this.$bus.$emit('test', true, value)
    },
    //修改原数据
    demo(value) {
      // console.log(' demo()执行了！！！')
      if (value.id <= 4) {
        this.messages.obj1.forEach((obj) => {
          if (value.id == obj.id) {
            const priceArr = value.price.split('.')
            obj.msg1 = priceArr[0]
            obj.msg2 = priceArr[1]
            obj.msg3 = value.number
            obj.msg4 = value.description
          }
        })
      } else if (value.id > 4 && value.id <= 8) {
        this.messages.obj2.forEach((obj) => {
          if (value.id == obj.id) {
            const priceArr = value.price.split('.')
            obj.msg1 = priceArr[0]
            obj.msg2 = priceArr[1]
            obj.msg3 = value.number
            obj.msg4 = value.description
          }
        })
      } else if (value.id > 8 && value.id <= 12) {
        this.messages.obj3.forEach((obj) => {
          if (value.id == obj.id) {
            const priceArr = value.price.split('.')
            obj.msg1 = priceArr[0]
            obj.msg2 = priceArr[1]
            obj.msg3 = value.number
            obj.msg4 = value.description
          }
        })
      } else if (value.id > 12 && value.id <= 16) {
        this.messages.obj4.forEach((obj) => {
          if (value.id == obj.id) {
            const priceArr = value.price.split('.')
            obj.msg1 = priceArr[0]
            obj.msg2 = priceArr[1]
            obj.msg3 = value.number
            obj.msg4 = value.description
          }
        })
      }
    },
  },

  mounted() {
    this.$bus.$on('modify', (value) => {
      this.demo(value)
    })
  },

  beforeDestroy() {
    this.$bus.$off('test')
  },
}
</script>

<style scoped>
.page_content_file {
  width: 100%;
  height: 60%;
  font-size: 12px;
  /* border: 1px solid red; */
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page_content_file_col {
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
}
.page_content_file_col_block {
  /* border: 1px solid red; */

  width: 24.5%;
}

.icon_color1 {
  color: #8694fc;
  border: 1px solid #ffffff;
  border-radius: 50%;
}

.icon_color2 {
  color: #6dd5e5;
  border: 1px solid #ffffff;
  border-radius: 50%;
}

.icon_color3 {
  color: #ba89fb;
  border: 1px solid #ffffff;
  border-radius: 50%;
}

.icon_color4 {
  color: #58bdfe;
  border: 1px solid #ffffff;
  border-radius: 50%;
}
.svg-icon {
  font-size: 30px;
}

.text_01 {
  font-weight: bolder;
  font-size: 16px;
}
.text_02 {
  font-size: 12px;
}
</style>
