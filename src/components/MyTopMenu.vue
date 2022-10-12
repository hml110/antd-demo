<template>
  <a-menu mode="horizontal"
          class="menu">
    <a-menu-item class="menu_1"
                 v-for="m in menus"
                 :key="m.id">
      <!-- 绑定样式 -->
      <span :class="{text_color:m.isActive}">
        {{m.title}}
      </span>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: 'MyTopMenu',
  data() {
    return {
      menus: [
        {
          id: '001',
          title: '概览',
          isActive: true,
        },
        {
          id: '002',
          title: '团队',
          isActive: false,
        },
        {
          id: '003',
          title: '合同',
          isActive: false,
        },
        {
          id: '004',
          title: '收入确认',
          isActive: false,
        },
        {
          id: '005',
          title: '发票',
          isActive: false,
        },
        {
          id: '006',
          title: '开票申请',
          isActive: false,
        },
        {
          id: '007',
          title: '其他应收',
          isActive: false,
        },
        {
          id: '008',
          title: '应付单',
          isActive: false,
        },
        {
          id: '009',
          title: '报销单',
          isActive: false,
        },
        {
          id: '010',
          title: '收款',
          isActive: false,
        },
        {
          id: '011',
          title: '付款',
          isActive: false,
        },
        {
          id: '012',
          title: '分摊单',
          isActive: false,
        },
        {
          id: '013',
          title: '工时',
          isActive: false,
        },
        {
          id: '014',
          title: '文档',
          isActive: false,
        },
        {
          id: '015',
          title: '统计',
          isActive: false,
        },
      ],
    }
  },
}
</script>

<style lang='less' scoped>
.ant-menu-item,
.ant-menu-submenu-title {
  padding: 0px 9px !important;
}
.menu {
  width: 100%;
  height: 30px !important;
  display: flex;
  justify-content: end;
  align-items: center;
}

.menu_1 {
  /* border: 1px solid red; */
  font-size: 12px;
}

.text_color {
  color: #6e7cec;
  border-bottom: 1px solid #6e7cec;
}
</style>