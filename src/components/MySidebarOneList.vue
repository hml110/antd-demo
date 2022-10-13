<template>
  <div class="page_content_sidebar">
    <!-- 一个 -->
    <div class="page_content_sidebar_single">
      <a-card v-for="k in keys"
              :key="k.id">
        <div class="page_content_sidebar_single_one">
          <div class="page_content_sidebar_single_top">
            {{k.title}}
          </div>
          <div class="page_content_sidebar_single_bottom ">
            <div class="page_content_sidebar_single_bottom_one ">
              <div>状态：</div>
              <div>
                <svg-icon iconname="icon-shijian">
                </svg-icon>
                <span :class="{span_1: [1,2,3].includes(k.id),span_2: k.id === 4,span_3 :k.id===5}">
                  {{k.status}}</span>
              </div>
            </div>
            <div class="page_content_sidebar_single_bottom_one ">
              <div>计划：</div>
              <div>{{k.plan}}</div>
            </div>
            <div class="page_content_sidebar_single_bottom_one ">
              <div>执行：</div>
              <div>{{k.todo}}</div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>
<script>
export default {
  nam: 'MySidebarOneList',
  data() {
    return {
      keys: [
        {
          id: 1,
          title: '造价方案及付款',
          status: '距离开始190天',
          plan: '2020/12/03-2020/12/31',
          todo: '-',
        },
        {
          id: 2,
          title: '复审',
          status: '距离结束220天',
          plan: '2020/06/03-2021/07/31',
          todo: '2020/06/19',
        },
        {
          id: 3,
          title: '提交概算材料',
          status: '距离结束8天',
          plan: '2020/12/03-2020/12/31',
          todo: '2020/12/03-',
        },
        {
          id: 4,
          title: '确定施工方案',
          status: '按期完成',
          plan: '2020/5/18-2020/9/18',
          todo: '2020/5/18-2020/9/18',
        },
        {
          id: 5,
          title: '现场勘测',
          status: '延期222天',
          plan: '2019/12/08-2020/5/15',
          todo: '2020/12/08-',
        },
      ],
    }
  },
}
</script>

<style>
.ant-card-body {
  padding: 0 !important;
}
.ant-card {
  font-size: 12px !important;
  padding: 0px !important;
}

.page_content_sidebar {
  width: 100%;
  height: 100%;
  background-color: #f7f7f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  /* border: 1px solid red; */
  margin-bottom: 8px;
}

.page_content_sidebar_single {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.page_content_sidebar_single_one {
  width: 250px;
  height: 105px;
  /* border: 1px solid red; */
  /* padding: 4px; */
}

.page_content_sidebar_single_top {
  font-weight: bold;
  padding: 0 0 5px 5px;
  /* border: 1px solid red; */
}

.page_content_sidebar_single_bottom {
  padding: 0 0 5px 5px;
  /* border: 1px solid red; */
}

.page_content_sidebar_single_bottom_one {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}

.span_1 {
  color: #ffb25c;
  padding-left: 5px;
}

.span_2 {
  color: #9aa3f2;
  padding-left: 5px;
}

.span_3 {
  color: #f86b6b;
  padding-left: 5px;
}
</style>