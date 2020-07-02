<template>
  <maincontent
               :tableConfig="tableConfig"
               :fetchList="glistIndicateClass"
               :deleteRecord="gdeleteIndicateClass"
               :getIndicate="gallIndicateClass"
               :createDataForm="paddIndicateClass"
               :updateDataForm="peditIndicateClass"
               :formData="formData"
               :subConfig="subElConfig"
               />
</template>
<script>
import { glistIndicateClass, gdeleteIndicateClass, gallIndicateClass, paddIndicateClass, peditIndicateClass } from '@/api/indicateclass/personal'
import maincontent from '../Main'
export default {
  components: {
    maincontent
  },
  methods: {
    glistIndicateClass,
    gdeleteIndicateClass,
    gallIndicateClass,
    paddIndicateClass,
    peditIndicateClass
  },
  data() {
    return {
      tableConfig: [
        {
          name: 'primary_name',
          label: '一级分类',
          prop: 'secondary_name'
        },
        {
          name: 'indicate_class',
          label: '指标类',
          prop: 'indicate_class'
        },
        {
          name: 'introduction',
          prop: 'introduction',
          label: '特征概况',
          type: 'expand'
        },
        {
          name: 'suggest',
          prop: 'suggest',
          label: '建议',
          type: 'expand'
        }],
      // 主表单需要收集的form数据
      formData: {
        primary_name: '个性特征',
        secondary_name: '',
        indicate_name: '',
        knowledge_name: '',
        indicate_class: '',
        introduction: '',
        suggest: ''
      },
      subElConfig: {
        fieldsConfig: [
          {
            name: 'primary_name',
            label: '一级分类',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'getPrimary'
          },
          {
            name: 'secondary_name',
            label: '二级分类',
            prop: 'secondary_name',
            placeholder: '请输入二级分类',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'getSecondary'
          },
          {
            name: 'indicate_class',
            label: '指标类',
            prop: 'indicate_class',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'querySearchIndi',
            trigerFocus: false
          },
          {
            name: 'introduction',
            prop: 'introduction',
            label: '特征概况',
            placeholder: '特征概况',
            fieldType: 'multiTextInput'
          },
          {
            name: 'suggest',
            prop: 'suggest',
            label: '建议',
            placeholder: '建议',
            fieldType: 'multiTextInput'
          }
        ]
      }
    }
  }
}
</script>
