<template>
  <el-container class="fm2-container">
    <el-main class="fm2-main">
      <el-container>
        <el-aside width="250px">
          <div class="components-list">
            <div class="widget-cate">基础字段</div>
            <draggable
              tag="ul"
              :list="basicComponents"
              v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
              @end="handleMoveEnd"
              @start="handleMoveStart"
              :move="handleMove"
            >
              <li
                class="form-edit-widget-label"
                v-for="(item, index) in basicComponents"
                :key="index"
              >
                <a>
                  <i class="icon iconfont" :class="item.icon"></i>
                  <span>{{item.name}}</span>
                </a>
              </li>
            </draggable>
            <template v-if="seniorShow">
              <div class="widget-cate">高级字段</div>
              <draggable
                tag="ul"
                :list="advanceComponents"
                v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                @end="handleMoveEnd"
                @start="handleMoveStart"
                :move="handleMove"
              >
                <li
                  class="form-edit-widget-label"
                  v-for="(item, index) in advanceComponents"
                  :key="index"
                >
                  <a>
                    <i class="icon iconfont" :class="item.icon"></i>
                    <span>{{item.name}}</span>
                  </a>
                </li>
              </draggable>

              <div class="widget-cate">布局字段</div>
              <draggable
                tag="ul"
                :list="layoutComponents"
                v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                @end="handleMoveEnd"
                @start="handleMoveStart"
                :move="handleMove"
              >
                <li
                  class="form-edit-widget-label data-grid"
                  v-for="(item, index) in layoutComponents"
                  :key="index"
                >
                  <a>
                    <i class="icon iconfont" :class="item.icon"></i>
                    <span>{{item.name}}</span>
                  </a>
                </li>
              </draggable>
            </template>
          </div>
        </el-aside>
        <el-container class="center-container" direction="vertical">
          <el-header class="btn-bar" style="height: 45px;">
            <slot name="action"></slot>
            <el-button
              v-if="clearable"
              type="text"
              size="medium"
              icon="el-icon-delete"
              @click="handleClear"
            >清空</el-button>
            <el-button
              v-if="preview"
              type="text"
              size="medium"
              icon="el-icon-view"
              @click="handlePreview"
            >预览</el-button>
            <el-button
              v-if="generateJson"
              type="text"
              size="medium"
              icon="el-icon-tickets"
              @click="handleGenerateJson"
            >{{saveName}}</el-button>
            <el-button
              v-if="generateHTML"
              type="text"
              size="medium"
              icon="el-icon-document"
              @click="handleGenerateCode"
            >生成HTML</el-button>
          </el-header>
          <el-main :class="{'widget-empty': widgetForm.list.length == 0}">
            <widget-form
              v-if="!resetJson"
              ref="widgetForm"
              :data="widgetForm"
              :select.sync="widgetFormSelect"
            ></widget-form>
          </el-main>
        </el-container>

        <el-aside class="widget-config-container">
          <el-container>
            <el-header height="45px">
              <div
                class="config-tab"
                :class="{active: configTab=='widget'}"
                @click="handleConfigSelect('widget')"
              >字段属性</div>
              <div
                class="config-tab"
                :class="{active: configTab=='form'}"
                @click="handleConfigSelect('form')"
              >表单属性</div>
            </el-header>
            <el-main class="config-content">
              <widget-config
                v-show="configTab=='widget'"
                :data="widgetFormSelect"
                :eventData="eventData"
              ></widget-config>
              <form-config v-show="configTab=='form'" :data="widgetForm.config"></form-config>
            </el-main>
          </el-container>
        </el-aside>

        <cus-dialog
          :visible="previewVisible"
          @on-close="previewVisible = false"
          ref="widgetPreview"
          width="1000px"
          form
        >
          <generate-form
            insite="true"
            v-if="previewVisible"
            :data="widgetForm"
            :value="widgetModels"
            :remote="remoteFuncs"
            ref="generateForm"
          >
            <template v-slot:blank="scope">
              宽度：
              <el-input v-model="scope.model.blank.width" style="width: 100px"></el-input>高度：
              <el-input v-model="scope.model.blank.height" style="width: 100px"></el-input>
            </template>
          </generate-form>

          <template slot="action">
            <!-- <el-button type="primary" @click="handleTest">获取数据</el-button>
            <el-button @click="handleReset">重置</el-button>-->
            <span></span>
          </template>
        </cus-dialog>

        <cus-dialog
          :visible="codeVisible"
          @on-close="codeVisible = false"
          ref="codePreview"
          width="800px"
          form
          :action="false"
        >
          <div id="codeeditor" style="height: 500px; width: 100%;">{{htmlTemplate}}</div>
        </cus-dialog>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import Draggable from 'vuedraggable'
import WidgetConfig from './WidgetConfig'
import FormConfig from './FormConfig'
import WidgetForm from './WidgetForm'
import CusDialog from './CusDialog'
import GenerateForm from './GenerateForm'
import Clipboard from 'clipboard'
import { basicComponents, layoutComponents, advanceComponents } from './componentsConfig.js'
import { loadJs, loadCss } from '../util/index.js'
import request from '../util/request.js'
import generateCode from './generateCode.js'

export default {
  name: 'fm-making-form',
  components: {
    Draggable,
    WidgetConfig,
    FormConfig,
    WidgetForm,
    CusDialog,
    GenerateForm
  },
  props: {
    preview: {
      type: Boolean,
      default: false
    },
    generateHTML: {
      type: Boolean,
      default: false
    },
    generateJson: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    saveName: {
      type: String,
      default: '保存表单'
    },
    eventData: {
      type: Array,
      default: function () {
        return [{
          label: '事件1',
          value: 1
        },
        {
          label: '事件2',
          value: 2
        }]
      }
    },
    seniorShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      basicComponents,
      layoutComponents,
      advanceComponents,
      resetJson: false,
      widgetForm: {
        list: [],
        config: {
          labelWidth: 100,
          labelPosition: 'right',
          size: 'small'
        },
      },
      configTab: 'widget',
      widgetFormSelect: null,
      previewVisible: false,
      jsonVisible: false,
      codeVisible: false,
      uploadVisible: false,
      remoteFuncs: {
        func_test(resolve) {
          setTimeout(() => {
            const options = [
              { id: '1', name: '1111' },
              { id: '2', name: '2222' },
              { id: '3', name: '3333' }
            ]

            resolve(options)
          }, 2000)
        },
        funcGetToken(resolve) {
          request.get('http://tools-server.xiaoyaoji.cn/api/uptoken').then(res => {
            resolve(res.uptoken)
          })
        },
        upload_callback(response, file, fileList) {
          console.log('callback', response, file, fileList)
        }
      },
      widgetModels: {},
      blank: '',
      htmlTemplate: '',
      jsonTemplate: '',
      uploadEditor: null,
      jsonCopyValue: '',
      jsonClipboard: null,
      jsonEg: `{
        "list": [
          {
            "type": "input",
            "name": "单行文本",
            "icon": "icon-input",
            "options": {
              "width": "100%",
              "defaultValue": "",
              "required": false,
              "dataType": "string",
              "pattern": "",
              "placeholder": "",
              "remoteFunc": "func_1540908864000_94322"
            },
            "key": "1540908864000_94322",
            "model": "input_1540908864000_94322",
            "rules": [
              {
                "type": "string",
                "message": "单行文本格式不正确"
              }
            ]
          },
          {
            "type": "textarea",
            "name": "多行文本",
            "icon": "icon-diy-com-textarea",
            "options": {
              "width": "100%",
              "defaultValue": "",
              "required": false,
              "pattern": "",
              "placeholder": "",
              "remoteFunc": "func_1540908876000_19435"
            },
            "key": "1540908876000_19435",
            "model": "textarea_1540908876000_19435",
            "rules": []
          }
        ],
        "config": {
          "labelWidth": 100,
          "labelPosition": "top",
          "size": "small"
        }
      }`
    }
  },
  methods: {
    handleGoGithub() {
      window.location.href = 'https://github.com/GavinZhuLei/vue-form-making'
    },
    handleConfigSelect(value) {
      this.configTab = value
    },
    handleMoveEnd(evt) {
      // console.log('end', evt)
    },
    handleMoveStart({ oldIndex }) {
      // console.log('start', oldIndex, this.basicComponents)
    },
    handleMove() {
      return true
    },
    handlePreview() {
      this.previewVisible = true
    },
    // 获取结果
    handleTest() {
      this.$refs.generateForm.getData().then(data => {
        this.$alert(data, '').catch(e => { })
        this.$refs.widgetPreview.end()
      }).catch(e => {
        this.$refs.widgetPreview.end()
      })
    },
    // 重置表单
    handleReset() {
      this.$refs.generateForm.reset()
    },
    // 保存表单
    handleGenerateJson() {
      let remoteTage = true
      // 校验远程是否成功
      this.widgetForm.list.forEach(v => {
        if (v.options.remote && !v.options.remoteResult) {
          remoteTage = false
        }
      })
      if (!remoteTage) {
        this.$message.error('表单中存在未请求成功的远程api，无法保存')
        return false
      }
      this.$emit('handleGenerateJson', this.widgetForm)
    },
    handleGenerateCode() {
      this.htmlTemplate = generateCode(JSON.stringify(this.widgetForm))
      this.$emit('handleGenerateCode', this.htmlTemplate)
    },
    handleClear() {
      this.widgetForm = {
        list: [],
        config: {
          labelWidth: 100,
          labelPosition: 'right',
          size: 'small',
          customClass: ''
        },
      }

      this.widgetFormSelect = {}
    },
    getJSON() {
      return this.widgetForm
    },
    getHtml() {
      return generateCode(JSON.stringify(this.widgetForm))
    },
    setJSON(json) {
      this.widgetForm = json
      if (json.list.length > 0) {
        this.widgetFormSelect = json.list[0]
      }
    },
    handleInput(val) {
      this.blank = val
    }
  }
}
</script>

<style lang="scss">
.widget-empty {
  background: url("../assets/form_empty.png") no-repeat;
  background-position: 50%;
}
</style>
