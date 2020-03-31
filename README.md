# lgForm

#### 介绍

基于 Vue,ElementUI 开发的一款表单设计器

#### 下载

npm i lg-form

#### 使用表单，查看表单

```
import FormMaking from 'lg-form'
import 'lg-form/dist/FormMaking.css'
Vue.use(FormMaking)
```
```
<fm-generate-form
  insite="true"
  :data="widgetForm"
  :value="widgetModels"
  :remote="remoteFuncs"
  ref="generateForm"
></fm-generate-form>
```
```
data() {
  return {
    widgetForm: {
      list: [],
      config: {
        labelWidth: 100,
        labelPosition: 'right',
        size: 'small'
      }
    },
    // 表单赋值
    widgetModels: {},
    remoteFuncs: {}
  }
}
```

#### 设计表单
```
<fm-making-form
  ref="makingForm"
  preview
  generate-json
  generateHTML
  clearable
  @handleGenerateJson="handleGenerateJson"
  @handleGenerateCode="handleGenerateCode">
  <template slot="action"></template>
</fm-making-form>
```
```
methods: {
  handleGenerateJson(val) {
    console.log(val)
  },
  handleGenerateCode(val) {
    console.log(val)
  }
}
```
```
preview: 预览
generate-json: 属性
generateHTML: HTML
clearable: 清除
```


借鉴：http://tools.xiaoyaoji.cn/
### 完善功能
新增单选框、多选框、下拉框数据API接口请求<br/>
新增表单评分、分数分析