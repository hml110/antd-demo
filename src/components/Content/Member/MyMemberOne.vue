<template>
  <div class="member-content">
    <!-- 一个头像 -->
    <a-row class="member-content-photo"
           v-for="na in names"
           :key="na.id">
      <a-col :span="20"
             class="member-content-photo-icon">
        <svg-icon iconname="icon-morentouxiang">
        </svg-icon>
      </a-col>
      <a-col :span="20">
        {{na.nama}}
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'MyMemberOne',
  data() {
    return {
      names: [
        {
          id: '001',
          nama: '崔明超',
        },
        {
          id: '002',
          nama: '藏伟华',
        },
        {
          id: '003',
          nama: '岳海全',
        },
        {
          id: '004',
          nama: '于红强',
        },
        {
          id: '005',
          nama: '李人庆',
        },
        {
          id: '006',
          nama: '薛小宁',
        },
        {
          id: '007',
          nama: '邵旭斌',
        },
        {
          id: '008',
          nama: '张小丽',
        },
        {
          id: '009',
          nama: '崔明超',
        },
      ],
    }
  },
}
</script>

<style scoped>
.member-content {
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.member-content-photo {
  height: 100%;
  text-align: center;
  /* border: 1px solid red; */
  background: #ffffff;
}

.member-content-photo-icon {
  height: 60%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: #7e7e81;
}
</style>