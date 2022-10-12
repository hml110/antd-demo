<template>
  <div class="task">
    <div class="task_left">
      <div class="task_left_title">任务完成度</div>
      <div>任务总数：<span>{{infoWorks.allWorks}} 个</span></div>
      <div>已完成：<span>{{infoWorks.completeness}} 个</span></div>
    </div>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main"
         @click="showModal(infoWorks)">
    </div>
    <Modal></Modal>
  </div>
</template>

<script>
let a
import Modal from '../Modal.vue'
export default {
  name: 'ECharts',
  data() {
    return {
      infoWorks: {
        allWorks: 100,
        completeness: 80,
        process: 80,
      },
    }
  },
  components: {
    Modal,
  },
  methods: {
    showModal(info) {
      //   console.log('showModal')
      this.$bus.$emit('modalValue', true, info)
    },
    //修改数据
    echartsDemo(values) {
      //   console.log('echartsDemo()', values)
      this.infoWorks.allWorks = values.gross
      this.infoWorks.completeness = values.accomplish
      this.infoWorks.process =
        (this.infoWorks.completeness / this.infoWorks.allWorks) * 100
      //   console.log('this.infoWorks.process', this.infoWorks.process)
      //处理this.infoWorks.process
      this.infoWorks.process = this.infoWorks.process.toFixed(0)
      console.log(this.infoWorks.process)
      //获取ECharts对象
      var myChart = this.$echarts.init(document.getElementById('main'))
      //修改数据
      myChart.setOption({
        series: [
          {
            data: [
              {
                value: this.infoWorks.process,
              },
            ],
          },
        ],
      })
    },
    //图表数据返回函数
    getOptions() {
      return {
        animation: true,
        series: [
          {
            // 仪表盘图
            type: 'gauge',
            //仪表盘起始角度。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
            startAngle: 90,
            //仪表盘结束角度。
            endAngle: -270,
            //最小的数据值，映射到 minAngle。
            min: 0,
            //最大的数据值，映射到 maxAngle。
            max: 100,
            //仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
            radius: '95%',
            //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
            center: ['50%', '50%'],

            progress: {
              // 进度环
              roundCap: 'true',
              //是否显示进度条。
              show: true,
              //进度条宽度。
              width: 12,
              //是否在两端显示成圆形。
              roundCap: false,
              //进度条样式。
              itemStyle: {
                color: {
                  //// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      //进度环的渐变色
                      offset: 0,
                      color: '#FFFF00', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FFFF00', // 100% 处的颜色
                    },
                  ],
                },
              },
            },
            axisLine: {
              // 背景环
              roundCap: 'true',
              //仪表盘轴线样式。
              lineStyle: {
                width: 12,
                color: [
                  [0, '#CCEFDD'],
                  [1, '#CCEFDD'],
                ],
              },
            },
            //仪表盘指针。
            pointer: { show: false },
            //刻度样式。
            axisTick: { show: false },
            //分隔线样式。
            splitLine: { show: false },
            //刻度标签。
            axisLabel: { show: false },
            //仪表盘详情，用于显示数据。
            detail: {
              show: true,
              color: '#FBFCFF',
              fontSize: '18',
              //是否开启标签的数字动画。
              valueAnimation: true,
              //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              offsetCenter: ['0%', '0%'],
              //数值设置成百分比
              formatter: function (value) {
                return value.toFixed(0) + '%'
              },
            },
            data: [
              {
                //单个类目名称。
                value: this.infoWorks.process,
                // (this.infoWorks.completeness / this.infoWorks.allWorks) * 100, // 进度值，最高为100
              },
            ],
          },
        ],
      }
    },
  },
  mounted() {
    //绑定全局自定义事件
    this.$bus.$on('echartsValue', this.echartsDemo)
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById('main'))
    // 绘制图表
    myChart.setOption(this.getOptions())
  },
}
</script>

<style scoped>
.task {
  width: 310px;
  height: 85px;
  /* border: 1px solid red; */
  background-color: #7d8bf8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fbfcff;
}
.task_left {
  width: 150px;
  height: 85px;
  /* border: 1px solid red; */
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.task_left_title {
  font-size: 16px;
  padding-bottom: 10px;
}
.task_left div {
  /* border: 1px solid red; */
}

.task_left div span {
  font-weight: bolder;
}
#main {
  /* border: 1px solid red; */
  width: 150px;
  height: 85px;
}
</style>