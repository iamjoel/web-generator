<template>
<div class="main">
  <j-search-condition @search="search">
    <j-edit-item
    label="组件名">
      <el-input v-model="searchConditions.name"></el-input>
    </j-edit-item>
  </j-search-condition>

  
  <j-grid-box :is-show-add-btn="false" :add-url="addPagePath" :pager="pager" @pageChange="handleCurrentChange">
    <el-table
      :data="tableData"
      border
      stripe>
      <el-table-column
        type="index"
        label="序列"
        align="center"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="组件名"
        >
      </el-table-column>
      <el-table-column
        prop="alias"
        label="别名"
        >
      </el-table-column>
      <el-table-column
        prop="op"
        label="操作"
        width="180"
        fixed="right"
        >
        <template slot-scope="scope">
          <el-button type="info" size="small" @click="$router.push('/component/' + scope.row.id)" v-if="isShow('edit')">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </j-grid-box>


</div>
</template>

<script src="./list.js"></script>

