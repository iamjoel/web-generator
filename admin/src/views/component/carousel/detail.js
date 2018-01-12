export default {
  data () {
    return {
      name: '轮播',
      config: {
        type: 'element-ui',
        interval: 2000,
        isRemote: false,
        url: 'http://'
      },
    }
  },
  computed: {
    code() {
      var html = `
<template>
  <el-carousel height="150px" :interval="${this.config.interval}">
    <el-carousel-item v-for="item in list" :key="item.id">
      <img class="slide-item" :src="item.id | img" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  ${this.config.isRemote ? this.getListCode() : ''}
</script>
<style scoped>
.slide-item {
  width: 100%;
  height: 100px;
}
</style>
`
      return html
    },
  },
  methods: {
    getListCode() {
      return `
  this.$http.get('${this.config.url}').then(({data}) => {
    this.list = data.data
  })
`
    }
  }

}
