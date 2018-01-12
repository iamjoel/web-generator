import Mock from 'mockjs'
import {urls} from '@/setting'
import componentList from '../components.js'
var currUrl = urls.component


var Random = Mock.Random
Mock.mock(new RegExp(currUrl.list), ({ url, body }) => {
  return {
    data: {
      list: componentList,
    },
    pager: {
      total: componentList.length,
    }
  }
})


