<template>
  <maincontent
               :tableConfig="tableConfig"
               :formData="formData"
               :subConfig="subElConfig"
               :fetchList="glistGene"
               :deleteRecord="gdeleteGene"
               :gfindMaterial="gfindGene"
               :gfindPheno="gqueryPhenotypeMIMnum"
               :createDataForm="paddGene"
               :updateDataForm="peditGene"
               />
</template>
<script>
import { glistGene, paddGene, peditGene, gdeleteGene, gqueryPhenotypeMIMnum } from '@/api/drugknowledges/gene'
import { gfindGene } from '@/api/query'
import maincontent from '../Main'
export default {
  components: {
    maincontent
  },
  methods: {
    glistGene,
    gdeleteGene,
    paddGene,
    peditGene,
    gfindGene,
    gqueryPhenotypeMIMnum
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
          name: 'gene_name',
          label: '基因名称',
          prop: 'gene_name',
          type: 'singleurl',
          url: 'ghr'
        },
        {
          name: 'indicate_class',
          label: '药物类名',
          prop: 'indicate_class'
        },
        {
          name: 'drug_relation',
          label: '药物作用相关',
          prop: 'drug_relation'
        },
        {
          name: 'main_function',
          label: '主要功能',
          prop: 'main_function'
        },
        {
          name: 'interpretation',
          prop: 'interpretation',
          label: '解读',
          type: 'expand'
        }],
      // 主表单需要收集的form数据
      formData: {
        gene_name: '',
        indicate_class: '',
        drug_relation: '',
        main_function: '',
        interpretation: ''
      },
      subElConfig: {
        fieldsConfig: [
          {
            name: 'gene_name',
            label: '基因名称',
            prop: 'gene_name',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'gfindMaterial',
            trigerFocus: false
          },
          {
            name: 'indicate_class',
            label: '药物类名',
            prop: 'indicate_class',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'gfindMaterial',
            trigerFocus: false
          },
          {
            name: 'drug_relation',
            prop: 'drug_relation',
            label: '药物作用相关',
            placeholder: '药物作用相关',
            fieldType: 'multiTextInput'
          },
          {
            name: 'main_function',
            prop: 'main_function',
            label: '主要功能',
            placeholder: '主要功能',
            fieldType: 'multiTextInput'
          },
          {
            name: 'interpretation',
            prop: 'interpretation',
            label: '解读',
            placeholder: '解读',
            fieldType: 'multiTextInput'
          }
        ]
      }
    }
  }
}
</script>
