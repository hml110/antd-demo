<template>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div id="main"
       style="width: 600px;height:600px;"></div>
</template>

<script>
export default {
  name: 'ECharts',
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById('main'))

    var data = []
    for (let i = 0; i < 5; ++i) {
      data.push(Math.round(Math.random() * 200))
    }

    var option = {
      xAxis: {
        max: 'dataMax',
      },
      yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 2, // only the largest 3 bars will be displayed
      },
      series: [
        {
          realtimeSort: true,
          name: 'X',
          type: 'bar',
          data: data,
          label: {
            show: true,
            position: 'right',
            valueAnimation: true,
          },
        },
      ],
      legend: {
        show: true,
      },
      animationDuration: 3000,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
    }

    function update() {
      var data = option.series[0].data
      for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000)
        } else {
          data[i] += Math.round(Math.random() * 200)
        }
      }
      myChart.setOption(option)
    }

    setInterval(function () {
      update()
    }, 3000)

    // 绘制图表
    myChart.setOption(option)
  },
}
</script>

<style>
</style>