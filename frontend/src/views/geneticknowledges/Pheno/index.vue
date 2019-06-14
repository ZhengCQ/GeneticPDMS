<template>
  <maincontent
               :tableConfig="tableConfig"
               :formData="formData"
               :subConfig="subElConfig"
               :fetchList="glistPhenotype"
               :gfindMaterial="gfindGene"
               :deleteRecord="geditPhenotypes"
               :createDataForm="paddPhenotypes"
               :updateDataForm="peditPhenotypes"
               />
</template>
<script>
import { glistPhenotype, paddPhenotypes, peditPhenotypes, geditPhenotypes } from '@/api/geneticknowledges/pheno'
import { gfindGene } from '@/api/query'
import maincontent from '../Main'
export default {
  components: {
    maincontent
  },
  methods: {
    glistPhenotype,
    paddPhenotypes,
    peditPhenotypes,
    gfindGene,
    geditPhenotypes
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
          name: 'chinese_phenotype_name',
          label: '表型中文名称',
          prop: 'chinese_phenotype_name'
        },
        {
          name: 'phenotype_name',
          label: '表型名称',
          prop: 'phenotype_name'
        },
        {
          name: 'phenotypeMIMnum_id',
          label: '表型OMIM号',
          prop: 'phenotypeMIMnum_id',
          type: 'singleurl',
          url: 'omimid'
        },
        {
          name: 'paternal_disease_frequency',
          label: '表型总携带率',
          prop: 'paternal_disease_frequency'
        },
        {
          name: 'genetic_model',
          label: '遗传模式',
          prop: 'genetic_model'
        },
        {
          name: 'phenotype_key',
          label: '表型key值',
          prop: 'phenotype_key'
        },
        {
          name: 'gene_name',
          label: '相关基因',
          prop: 'gene_name'
        },
        {
          name: 'relate_HPO_chinesse',
          prop: 'relate_HPO_chinesse',
          label: 'HPO中文',
          type: 'expand'
        },
        {
          name: 'relate_HPO_english',
          prop: 'relate_HPO_english',
          label: 'HPO英文',
          type: 'expand'
        },
        {
          name: 'synopsis_chinese_name',
          prop: 'synopsis_chinese_name',
          label: '特征中文',
          type: 'expand'
        },
        {
          name: 'synopsis_english_name',
          prop: 'synopsis_english_name',
          label: '特征英文',
          type: 'expand'
        }],
      // 主表单需要收集的form数据
      formData: {
        chinese_phenotype_name: '',
        phenotype_name: '',
        phenotypeMIMnum_id: '',
        genetic_model: '',
        paternal_disease_frequency: '',
        phenotype_key: '',
        gene_name: '',
        relate_HPO: '',
        relate_HPO_chinesse: '',
        relate_HPO_english: '',
        synopsis_chinese_name: '',
        synopsis_english_name: ''
      },
      subElConfig: {
        fieldsConfig: [
          {
            name: 'chinese_phenotype_name',
            label: '表型中文名称',
            fieldType: 'TextInput',
            placeholder: '请输入表型中文名称',
            cols: 16
          },
          {
            name: 'phenotype_name',
            label: '表型英文名称',
            prop: 'phenotype_name',
            placeholder: '请输入表型英文名称',
            cols: 16
          },
          {
            name: 'phenotypeMIMnum_id',
            label: '表型OMIM号',
            prop: 'phenotypeMIMnum_id',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'querySearchIndi',
            trigerFocus: false
          },
          {
            name: 'genetic_model',
            label: '遗传模式',
            prop: 'genetic_model',
            placeholder: '请选择遗传模式',
            cols: 16,
            fieldType: 'SelectList',
            options: [
              { label: 'AD', value: 'AD' },
              { label: 'AR', value: 'AR' },
              { label: 'XD', value: 'XD' },
              { label: 'XR', value: 'XR' }
            ]
          },
          {
            name: 'paternal_disease_frequency',
            label: '表型总携带率',
            prop: 'paternal_disease_frequency',
            fieldType: 'TextInput',
            cols: 16
          },
          {
            name: 'phenotype_key',
            prop: 'phenotype_key',
            label: '表型key值',
            fieldType: 'TextInput',
            cols: 16
          },
          {
            name: 'gene_name',
            prop: 'gene_name',
            label: '相关基因',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'gfindMaterial',
            trigerFocus: false
          },
          {
            name: 'relate_HPO',
            prop: 'relate_HPO',
            label: '相关HPO',
            fieldType: 'multiTextInput'
          },
          {
            name: 'relate_HPO_chinesse',
            prop: 'relate_HPO_chinesse',
            label: '相关HPO中文',
            fieldType: 'multiTextInput'
          },
          {
            name: 'relate_HPO_english',
            prop: 'relate_HPO_english',
            label: '相关HPO英文',
            fieldType: 'multiTextInput'
          },
          {
            name: 'synopsis_chinese_name',
            prop: 'synopsis_chinese_name',
            label: '特征中文',
            fieldType: 'multiTextInput'
          },
          {
            name: 'synopsis_english_name',
            prop: 'synopsis_english_name',
            label: '特征英文',
            fieldType: 'multiTextInput'
          }
        ]
      }
    }
  }
}
</script>
