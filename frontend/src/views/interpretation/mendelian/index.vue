<template>
  <maincontent
               :formData="formData"
               :subConfig="subElConfig"
               :geneinfoflag="true"

               :fetchList="glistIndicate"
               :createDataForm="paddGeneticDiseases"
               :updateDataForm="peditGeneticDiseases"
               :deleteRecord="gdeleteGeneticDiseases"

               :getGene="gfindGene"
               :getSecondary="gallSecondary"
               :getIndicate="gallDisease"
               :getClass="gallDiseaseIndicateClass"
               />
</template>
<script>
import { glistIndicate, peditGeneticDiseases, paddGeneticDiseases, gdeleteGeneticDiseases, gallDisease, gallDiseaseIndicateClass } from '@/api/interpretation/mendelian'
import { gallSecondary, gfindGene } from '@/api/query'
import maincontent from '../Main'
export default {
  components: {
    maincontent
  },
  methods: {
    gallSecondary,
    glistIndicate,
    paddGeneticDiseases,
    peditGeneticDiseases,
    gdeleteGeneticDiseases,
    gallDisease,
    gallDiseaseIndicateClass,
    gfindGene
  },
  data() {
    return {
      // 主表单需要收集的form数据
      formData: {
        primary_name: '遗传疾病',
        secondary_name: '',
        indicate_name: '',
        knowledge_name: '',
        indicate_class: '',
        gene_names: [],
        Knowledge: ''
      },
      // 主表单动态表单的配置文件
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
            querySearch: 'querySearchClass'
          },
          {
            name: 'indicate_name',
            label: '指标名称',
            prop: 'indicate_name',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'querySearchIndi',
            trigerFocus: false
          },
          {
            name: 'knowledge_name',
            label: '素材选择',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'getKnowledge'
          },
          {
            name: 'gene_names',
            label: '相关基因名称',
            prop: 'gene_names',
            fieldType: 'multiSelectList',
            cols: 16,
            querySearch: 'gfindGene'
          }
        ]
      }
    }
  }
}
</script>
