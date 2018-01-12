<template>
<div class="main">
  <el-card :title="name">
    <el-carousel height="150px" :interval="config.interval">
      <el-carousel-item v-for="item in 4" :key="item">
        <img style="width: 100%;height: 100%;" src="http://via.placeholder.com/200x100" alt=""/>
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20" style="margin-top: 20px;">
        <el-col :md="12">
          <el-form ref="form" :model="config" label-width="80px">
            <el-form-item label="组件">
              <el-select v-model="config.type" placeholder="请选择">
                <el-option
                  label="element-ui"
                  value="element-ui">
                </el-option>
                <el-option
                  label="vant-ui"
                  value="vant-ui">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="自动切换的时间间隔">
              <el-input v-model.number="config.interval"></el-input>
            </el-form-item>
             <el-form-item label="远程数据">
              <el-switch on-text="是" off-text="否" v-model="config.isRemote"></el-switch>
              <el-input v-model="config.url" v-if="config.isRemote"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :md="12">
          <h3>代码</h3>
          <pre>
            <code>
              {{code}}
            </code>
          </pre>
        </el-col>

    </el-row>
  </el-card>
  
  <el-row type="flex" justify="center">
    <el-button @click="$router.go(-1)">返回</el-button>
  </el-row>
</div>
</template>

<script src="./detail.js"></script>

<style>

</style>
