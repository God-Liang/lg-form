export const basicComponents = [{
    type: 'title',
    name: '文字',
    icon: 'icon-wenzi',
    options: {
      title: '标题',
      alignment: 'center',
      fontSize: 16
    }
  },
  {
    type: 'input',
    name: '单行文本',
    icon: 'icon-input',
    options: {
      width: '100%',
      height: '32',
      defaultValue: '',
      required: false,
      dataType: 'string',
      pattern: '',
      placeholder: '',
      disabled: false,
      isChoose: 0
    }
  },
  {
    type: 'textarea',
    name: '多行文本',
    icon: 'icon-textarea',
    options: {
      width: '100%',
      height: '64',
      defaultValue: '',
      required: false,
      disabled: false,
      pattern: '',
      placeholder: '',
      isChoose: 0
    }
  },
  {
    type: 'number',
    name: '计数器',
    icon: 'icon-jishuqix',
    options: {
      width: '',
      required: false,
      defaultValue: 0,
      min: '',
      max: '',
      step: 1,
      disabled: false,
      controlsPosition: '',
      isChoose: 0
    }
  },
  {
    type: 'radio',
    name: '单选框组',
    icon: 'icon-radio',
    options: {
      inline: false,
      defaultValue: '',
      showLabel: false,
      options: [{
          value: '选项1',
          label: '选项1',
          event: '',
          score: 0,
          isAbnormal: false,
          introduce: ''
        },
        {
          value: '选项2',
          label: '选项2',
          event: '',
          score: 0,
          isAbnormal: false,
          introduce: ''
        },
        {
          value: '选项3',
          label: '选项3',
          event: '',
          score: 0,
          isAbnormal: false,
          introduce: ''
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,
      isChoose: 1
    }
  },
  {
    type: 'checkbox',
    name: '多选框组',
    icon: 'icon-check-box-outline',
    options: {
      inline: false,
      defaultValue: [],
      showLabel: false,
      options: [{
          value: '选项1',
          event: '',
          score: 0,
          isAbnormal: false,
          introduce: ''
        },
        {
          value: '选项2',
          event: '',
          score: 0,
          isAbnormal: false,
          introduce: ''
        },
        {
          value: '选项3',
          event: '',
          score: 0,
          isAbnormal: false,
          introduce: ''
        }
      ],
      required: false,
      width: '',
      remote: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      disabled: false,
      isChoose: 1
    }
  },
  {
    type: 'time',
    name: '时间选择器',
    icon: 'icon-time',
    options: {
      height: '32',
			defaultValue: '00:00',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      isRange: false,
      arrowControl: true,
      format: 'HH:mm',
      required: false,
      width: '',
      isChoose: 0
    }
  },
  {
    type: 'date',
    name: '日期选择器',
    icon: 'icon-date',
    options: {
      height: '32',
      defaultValue: '',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      type: 'date',
      format: 'yyyy-MM-dd',
      timestamp: false,
      required: false,
      width: '',
      isChoose: 0
    }
  },
  {
    type: 'rate',
    name: '评分',
    icon: 'icon-pingfen',
    options: {
      defaultValue: null,
      max: 5,
      disabled: false,
      allowHalf: false,
      required: false,
      isChoose: 0
    }
  },
  {
    type: 'color',
    name: '颜色选择器',
    icon: 'icon-color',
    options: {
      defaultValue: '',
      disabled: false,
      showAlpha: false,
      required: false,
      isChoose: 0
    }
  },
  {
    type: 'select',
    name: '下拉选择框',
    icon: 'icon-xialakuang',
    options: {
      defaultValue: '',
      height: '64',
      multiple: false,
      disabled: false,
      clearable: false,
      placeholder: '',
      required: false,
      showLabel: false,
      width: '',
      options: [{
          value: '选项1',
          event: '',
          score: 0,
            isAbnormal: false,
            introduce: ''
        },
        {
          value: '选项2',
          event: '',
          score: 0,
          isAbnormal: false,
          introduce: ''
        },
        {
          value: '选项3',
          event: '',
          score: 0,
          isAbnormal: false,
          introduce: ''
        }
      ],
      remote: false,
      filterable: false,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      remoteFunc: '',
      isChoose: 1
    }
  },
  {
    type: 'switch',
    name: '开关',
    icon: 'icon-Switch-',
    options: {
      height: '32',
      defaultValue: false,
      required: false,
      disabled: false,
      isChoose: 0
    }
  },
  {
    type: 'slider',
    name: '滑块',
    icon: 'icon-sliders',
    options: {
      height: '32',
      defaultValue: 0,
      disabled: false,
      required: false,
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      range: false,
      width: '',
      isChoose: 0
    }
  }
]

export const advanceComponents = [{
    type: 'blank',
    name: '自定义',
    icon: 'icon-zidingyiquyu',
    options: {
      defaultType: 'String',
      isChoose: 0
    }
  },
  {
    type: 'imgupload',
    name: '图片',
    icon: 'icon-image',
    options: {
      defaultValue: [],
      size: {
        width: 100,
        height: 100,
      },
      width: '',
      tokenFunc: 'funcGetToken',
      token: '',
      domain: 'http://pfp81ptt6.bkt.clouddn.com/',
      disabled: false,
      length: 8,
      multiple: false,
      isQiniu: false,
      isDelete: false,
      min: 0,
      isEdit: false,
      action: 'https://jsonplaceholder.typicode.com/photos/',
      isChoose: 0
    }
  },
  {
    type: 'cascader',
    name: '级联选择器',
    icon: 'icon-jilianxuanze',
    options: {
      defaultValue: [],
      width: '',
      placeholder: '',
      disabled: false,
      clearable: false,
      remote: true,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label',
        children: 'children'
      },
      remoteFunc: '',
      isChoose: 0
    }
  }
]

export const layoutComponents = [{
  type: 'grid',
  name: '栅格布局',
  icon: 'icon-zhage',
  columns: [{
      span: 12,
      list: []
    },
    {
      span: 12,
      list: []
    }
  ],
  options: {
    gutter: 0,
    justify: 'start',
    align: 'top',
    isChoose: 0
  }
}]