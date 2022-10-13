<template>
  <a-row class="page_content_overview">
    <a-col class="page_content_overview_row">
      <a-descriptions :column=4
                      v-for="data in datas"
                      :key="data.id">
        <a-descriptions-item v-for="da in data"
                             :key="da.id"
                             :span=1
                             layout="vertical"
                             :label='da.title'>
          <span :class="{text_color:da.isColor}"
                class="text_span">
            {{da.info}}
          </span>
          <div v-if="da.id===13">
            <svg-icon iconname="icon-gouxuankuangyidagou"> </svg-icon>
          </div>
        </a-descriptions-item>
      </a-descriptions>
    </a-col>
  </a-row>
</template>
<script>
export default {
  name: 'MyOverviewOneList',
  data() {
    return {
      datas: {
        obj1: [
          {
            id: 1,
            title: '项目编码',
            info: '010000000001',
            isColor: false,
          },
          {
            id: 2,
            title: '项目名称',
            info: 'G110北京延庆路段工...',
            isColor: false,
          },
          {
            id: 3,
            title: '业务类型',
            info: '项目',
            isColor: false,
          },
          {
            id: 4,
            title: '单据类型',
            info: '项目',
            isColor: false,
          },
        ],
        obj2: [
          {
            id: 5,
            title: '项目分类',
            info: '工程造价',
            isColor: false,
          },
          {
            id: 6,
            title: '项目属性',
            info: '其他',
            isColor: false,
          },
          {
            id: 7,
            title: '项目分组',
            info: '房产建筑项目',
            isColor: true,
          },
          {
            id: 8,
            title: '客户',
            info: '中铁十四局集团有限公司',
            isColor: true,
          },
        ],
        obj3: [
          {
            id: 9,
            title: '负责部门',
            info: '项目部',
            isColor: true,
          },
          {
            id: 10,
            title: '负责人',
            info: ' 崔明超',
            isColor: true,
          },
          {
            id: '11',
            title: ' 计划开始',
            info: ' 2020-05-01',
            isColor: false,
          },
          {
            id: 12,
            title: '计划结束',
            info: '2021-12-31',
            isColor: false,
          },
        ],
        obj4: [
          {
            id: 13,
            title: '启动管理阶段',
            info: '',
            isColor: false,
          },
          {
            id: 14,
            title: '阶段组',
            info: '造价阶段组',
            isColor: true,
          },
          {
            id: 15,
            title: '变更日期',
            info: '2020-12-01',
            isColor: false,
          },
          {
            id: 16,
            title: '变更原因',
            info: '',
            isColor: false,
          },
        ],
        obj5: [
          {
            id: 17,
            title: '项目总人数',
            info: '8',
            isColor: false,
          },
          {
            id: 18,
            title: '自有人数',
            info: '8',
            isColor: false,
          },
          {
            id: 19,
            title: '说明',
            info: '',
            isColor: false,
          },
          {
            id: 20,
            title: '',
            info: '',
            isColor: false,
          },
        ],
        obj6: [
          {
            id: 21,
            title: '项目材料预算',
            info: '1,000,000,00',
            isColor: false,
          },
          {
            id: 22,
            title: '主项目',
            info: '',
            isColor: false,
          },
          {
            id: 23,
            title: '',
            info: '',
            isColor: false,
          },
          {
            id: 24,
            title: '',
            info: '',
            isColor: false,
          },
        ],
      },
    }
  },
}
</script>

<style lang="less" scoped>
/* 自定义样式 */
/deep/ .ant-descriptions-row > td {
  padding-bottom: 2px;
}

.page_content_overview {
  width: 100%;
  height: 30%;
  //   border: 1px solid red;
  background-color: #ffffff;
  font-size: 12px;
}

.page_content_overview_row {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  //   border: 1px solid red;
}

.text_color {
  color: #6e7cec;
  text-decoration: 1.5px underline #6e7cec;
}
</style>
