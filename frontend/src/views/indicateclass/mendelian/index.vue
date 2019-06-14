<template>
  <maincontent
               :tableConfig="tableConfig"
               :fetchList="glistDiseaseIndicateClass"
               :deleteRecord="gdeleteGeneticDiseasesClass"
               :getIndicate="gallDiseaseIndicateClass"
               :getSecondary="gallSecondary"
               :formData="formData"
               :subConfig="subElConfig"
               :createDataForm="paddGeneticDiseasesClass"
               :updateDataForm="peditGeneticDiseasesClass"
               />
</template>
<script>
import { glistDiseaseIndicateClass, gdeleteGeneticDiseasesClass, paddGeneticDiseasesClass, gallSecondary, peditGeneticDiseasesClass, gallDiseaseIndicateClass } from '@/api/indicateclass/mendelian'
import maincontent from '../Main'
export default {
  components: {
    maincontent
  },
  methods: {
    glistDiseaseIndicateClass,
    gdeleteGeneticDiseasesClass,
    paddGeneticDiseasesClass,
    peditGeneticDiseasesClass,
    gallDiseaseIndicateClass,
    gallSecondary
  },
  data() {
    return {
      tableConfig: [
        {
          name: 'id',
          label: '编号',
          prop: 'id'
        },
        {
          name: 'secondary_name',
          label: '二级分类',
          prop: 'secondary_name'
        },
        {
          name: 'indicate_class',
          label: '指标类',
          prop: 'indicate_class'
        },
        {
          name: 'man_carrying_rate',
          label: '携带率',
          prop: '1/500'
        },
        {
          name: 'woman_carrying_rate',
          label: '携带率',
          prop: '1/500'
        },
        {
          name: 'disease_overview',
          prop: 'disease_overview',
          label: '疾病概述',
          type: 'expand'
        },
        {
          name: 'typical_symptoms',
          prop: 'typical_symptoms',
          label: '经典症状',
          type: 'expand'
        },
        {
          name: 'cause_of_disease',
          prop: 'cause_of_disease',
          label: '发病原因',
          type: 'expand'
        },
        {
          name: 'precautionary_measures',
          prop: 'precautionary_measures',
          label: '预防建议',
          type: 'expand'
        }],
      // 主表单需要收集的form数据
      formData: {
        primary_name: '遗传疾病',
        secondary_name: '',
        indicate_class: '',
        man_carrying_rate: '',
        woman_carrying_rate: '',
        disease_overview: '',
        typical_symptoms: '',
        cause_of_disease: '',
        precautionary_measures: ''
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
            name: 'man_carrying_rate',
            label: '男性突变携带率',
            prop: 'man_carrying_rate',
            placeholder: '携带比例，如1/1000',
            fieldType: 'TextInput',
            cols: 16
          },
          {
            name: 'woman_carrying_rate',
            label: '女性突变携带率',
            prop: 'woman_carrying_rate',
            placeholder: '携带比例, 如1/1000',
            fieldType: 'TextInput',
            cols: 16
          },
          {
            name: 'disease_overview',
            prop: 'disease_overview',
            label: '疾病概述',
            placeholder: '疾病概述',
            fieldType: 'multiTextInput'
          },
          {
            name: 'cause_of_disease',
            prop: 'cause_of_disease',
            label: '发病原因',
            placeholder: '发病原因',
            fieldType: 'multiTextInput'
          },
          {
            name: 'typical_symptoms',
            prop: 'typical_symptoms',
            label: '经典症状',
            placeholder: '经典症状',
            fieldType: 'multiTextInput'
          },
          {
            name: 'precautionary_measures',
            prop: 'precautionary_measures',
            label: '预防建议',
            placeholder: '预防建议',
            fieldType: 'multiTextInput'
          }
        ]
      }
    }
  }
}
</script>
