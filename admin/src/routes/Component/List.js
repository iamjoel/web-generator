import React, { Component } from 'react';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { Table, Button } from 'antd';
import { Link } from 'dva/router';

var list = [{
  id: 1,
  name: '轮播',
}]
var columns = [{
  title: '组件名',
  dataIndex: 'name',
},{
  title: '操作',
  dataIndex: 'id',
  render(val) {
    // this.props.history.push('/component/detail')
    return <Link to="/component/detail">详情</Link>
  }
},]

export default class List extends Component {
  render() {
    return (
      <PageHeaderLayout
      >
        <Table
          rowKey={record => record.id}
          dataSource={list}
          columns={columns}
          
        />
      </PageHeaderLayout>
    )
  }

}