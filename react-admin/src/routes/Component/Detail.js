import React, { Component } from 'react';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import {
  Form, Input, DatePicker, Select, Button, Card, InputNumber, Radio, Icon, Tooltip,
} from 'antd';

const FormItem = Form.Item;

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'jQuery',
      url: ''
    }
  }

  render() {
    return (
      <PageHeaderLayout
      >
        <h2>配置项</h2>
        <Form
            onSubmit={this.handleSubmit}
            hideRequiredMark
            style={{ marginTop: 8 }}
          >
          <FormItem
            label="框架"
          >
            <Select
                placeholder=""
                value={this.state.type}
                onChange={(val)=> this.setState({type: val})}
              >
                <Select.Option value="jQuery">jQuery</Select.Option>
                <Select.Option value="Vue">Vue</Select.Option>
                <Select.Option value="React">React</Select.Option>
              </Select>
            
          </FormItem>
          <FormItem
            label="数据来源"
          >
            <Input value={this.state.url} 
             onChange={(val)=> this.setState({url: val})} />
          </FormItem>

        </Form>
        <h2>输出代码</h2>
        <div>
          {this.state.type}代码 <br/>
          axios.get({this.state.url}).then()
        </div>
      </PageHeaderLayout>
    )
  }
}