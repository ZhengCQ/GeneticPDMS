<template>
  <maincontent
               :tableConfig="tableConfig"
               :fetchList="glistIndicateClass"
               :deleteRecord="gdeleteDiseaseIndicateClass"
               :getPrimary="gallPrimary"
               :getSecondary="gallSecondary"
               :createDataForm="paddDrugClass"
               :updateDataForm="peditDrugClass"
               :formData="formData"
               :subConfig="subElConfig"
               />
</template>
<script>
import { glistIndicateClass, gdeleteDiseaseIndicateClass, gallPrimary, paddDrugClass, peditDrugClass } from '@/api/indicateclass/drug'
import { gallSecondary } from '@/api/query'
import maincontent from '../Main'
export default {
  components: {
    maincontent
  },
  methods: {
    glistIndicateClass,
    gdeleteDiseaseIndicateClass,
    gallPrimary,
    gallSecondary,
    peditDrugClass,
    paddDrugClass
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
          name: 'trademark',
          label: '商品名',
          prop: 'trademark'
        },
        {
          name: 'prescription',
          label: '处方药',
          prop: 'prescription'
        },
        {
          name: 'Indication',
          prop: 'Indication',
          label: '适应症',
          type: 'expand'
        },
        {
          name: 'explanation_test_results',
          prop: 'explanation_test_results',
          label: '结果解读',
          type: 'expand'
        },
        {
          name: 'related_knowledge',
          prop: 'related_knowledge',
          label: '相关知识',
          type: 'expand'
        }],
      // 主表单需要收集的form数据
      formData: {
        primary_name: '药物代谢',
        secondary_name: '',
        indicate_class: '',
        trademark: '',
        prescription: '',
        Indication: '',
        explanation_test_results: '',
        related_knowledge: ''
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
            name: 'trademark',
            label: '商品名',
            prop: 'trademark',
            fieldType: 'TextInput',
            cols: 16
          },
          {
            name: 'prescription',
            label: '处方药',
            prop: 'prescription',
            placeholder: '是/否',
            fieldType: 'SelectList',
            options: [
              { label: '是', value: '是' },
              { label: '否', value: '否' }
            ],
            cols: 16
          },
          {
            name: 'Indication',
            prop: 'Indication',
            label: '适应症',
            placeholder: '适应症',
            fieldType: 'multiTextInput'
          },
          {
            name: 'explanation_test_results',
            prop: 'explanation_test_results',
            label: '结果解读',
            placeholder: '结果解读',
            fieldType: 'multiTextInput'
          },
          {
            name: 'related_knowledge',
            prop: 'related_knowledge',
            label: '相互作用的影响',
            placeholder: '药物的相互作用对疗效和不良反应的影响',
            fieldType: 'multiTextInput'
          }
        ]
      }
    }
  }
}
</script>
