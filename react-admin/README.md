# 代码生成器
基于 [Ant Design Pro](http://github.com/ant-design/ant-design-pro/)。Ant Design Pro 用的 Less，不可理解。。。

## 目录结构
* `src/`
  * `common/menu.js` 路由和菜单。 设置 `hideInMenu: true` 让该路由不在菜单中显示。`authority` 来设置哪些权限可以看。
  * `common/router.js` 里面的 `routerConfig` 设置路径的处理函数
  * `routes` 页面
  * `layouts` 页面的布局模板。
  * `models` 和 `services` 管理数据流。 services 放 调用后端接口的代码。
* .webpackrc webpack 配置。以前的 `.roadhogrc`

## 说明
懒得改ESlint，先禁用了lint `DISABLE_ESLINT=true roadhog dev`。



## 文档
* [Ant Design 文档](http://pro.ant.design/docs)