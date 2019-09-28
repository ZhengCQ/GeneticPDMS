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
import { glistGene, paddGene, peditGene, gdeleteGene, gqueryPhenotypeMIMnum } from '@/api/geneticknowledges/gene'
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
          name: 'gene_name',
          label: '基因名称',
          prop: 'gene_name',
          type: 'singleurl',
          url: 'ghr'
        },
        {
          name: 'gene_MIM',
          label: '基因OMIM号',
          prop: 'gene_MIM',
          type: 'singleurl',
          url: 'omimid'
        },
        {
          name: 'relate_phenotypeMIMnum',
          label: '表型OMIM号',
          prop: 'relate_phenotypeMIMnum',
          type: 'multishow',
          width: '350px'
        },
        {
          name: 'chinese_auditor',
          label: '中文描述修订者',
          prop: 'chinese_auditor'
        },
        {
          name: 'audit_time',
          label: '修订时间',
          prop: 'audit_time'
        },
        {
          name: 'gene_chinese_desc',
          prop: 'gene_chinese_desc',
          label: '中文描述',
          type: 'expand'
        },
        {
          name: 'gene_english_desc',
          prop: 'gene_english_desc',
          label: '英文描述',
          type: 'expand'
        }],
      // 主表单需要收集的form数据
      formData: {
        audit_time: '',
        chinese_auditor: '',
        gene_MIM: '',
        gene_chinese_desc: '',
        gene_english_desc: '',
        gene_name: '',
        indicate_name: '',
        relate_phenotypeMIMnum: [],
        typical_symptoms: ''
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
            name: 'gene_MIM',
            label: '基因OMIM号',
            prop: 'gene_MIM',
            placeholder: '数字，如125671',
            fieldType: 'NumInput',
            cols: 16
          },
          {
            name: 'relate_phenotypeMIMnum',
            label: 'relate_phenotypeMIMnum',
            prop: '表型OMIM号',
            fieldType: 'multiSelectList',
            cols: 16,
            querySearch: 'gfindPheno'
          },
          {
            name: 'chinese_auditor',
            label: '中文描述修订者',
            prop: 'chinese_auditor',
            placeholder: '名字',
            fieldType: 'TextInput',
            cols: 16
          },
          {
            name: 'gene_english_desc',
            prop: 'gene_english_desc',
            label: '基因英文描述',
            placeholder: '基因英文描述',
            fieldType: 'multiTextInput'
          },
          {
            name: 'gene_chinese_desc',
            prop: 'gene_chinese_desc',
            label: '基因中文描述',
            placeholder: '基因中文描述',
            fieldType: 'multiTextInput'
          }
        ]
      }
    }
  }
}
</script>
