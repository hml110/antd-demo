<template>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div id="main"
       style="width: 600px;height:400px;"></div>
</template>

<script>
export default {
  name: 'ECharts',
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById('main'), 'dark')
    // 绘制图表
    myChart.setOption({
      title: {
        //主标题文本，支持使用 \n 换行。
        text: 'ECharts 入门示例',
      },
      //提示框组件。
      tooltip: {
        show: true,
      },
      //直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
      xAxis: {
        //类目数据
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      //直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠。
      yAxis: {},
      //数据设置在 系列（series）中
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    })
  },
}
</script>

<style>
</style>