<template>
  <maincontent
               :fetchList="glistDrug"
               :glistKnowlege="glistKnowlege"
               :deleteRecord="gdeleteDrug"
               :createDataForm="paddDrug"
               :updateDataForm="peditDrug"

               :getPrimary="gallPrimary"
               :getSecondary="gallSecondary"
               :getClass="gallClass"
               :getIndicate="gallDrug"

               :subConfig="subElConfig"
               :formData="formData"

               :conclusionFormInfo="conclusionFormInfo"
               :conclusionConfig="conclusionConfig"
               :conclustionColumns="conclustionColumns"

               :siteEditColumns="siteEditColumns"
               :siteFormInfo="siteFormInfo"
               :siteConfig="siteConfig"

               :primaryCode = 'primaryCode'
               />
</template>
<script>
// 新增 /drug/add_drug
// 编辑 /drug/edit_drug
// 罗列知识库 /drug/list_knowlege
import { glistDrug, gallPrimary, gallSecondary, gallClass, gallDrug, glistKnowlege, paddDrug, peditDrug, gdeleteDrug } from '@/api/interpretation/drug'
import maincontent from '../Main'
export default {
  components: {
    maincontent
  },
  methods: {
    glistDrug,
    gallPrimary,
    gallSecondary,
    gallClass,
    gallDrug,
    glistKnowlege,
    paddDrug,
    peditDrug,
    gdeleteDrug
  },
  data() {
    return {
      primaryCode: 'DM',
      siteEditColumns: [{
        label: '位点rs号',
        key: 'rs_name',
        width: '100px'
      },
      {
        label: 'Gene',
        key: 'gene'
      },
      {
        label: 'Ref',
        key: 'ref'
      },
      {
        label: 'Alt_db',
        key: 'alt_db'
      },
      {
        label: 'Alt',
        key: 'alt'
      },
      {
        label: 'phenotype',
        key: 'phenotype'
      },
      {
        label: 'priority',
        key: 'priority'
      },
      {
        label: 'medication_tips',
        key: 'medication_tips'
      },
      {
        label: 'medication_advice',
        key: 'medication_advice',
        width: '200px'
      },
      {
        label: 'interpretation_label',
        key: 'interpretation_label'
      },
      {
        label: '文献',
        key: 'reference',
        width: '460px'
      },
      {
        label: '操作',
        key: 'operation'
      }
      ],
      // 主表单需要收集的form数据
      formData: {
        primary_name: '药物代谢',
        secondary_name: '',
        indicate_name: '',
        knowledge_name: '',
        indicate_class: '',
        interpretation_model: ''
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
            name: 'interpretation_model',
            label: '解读模式',
            fieldType: 'SelectList',
            options: [
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' }
            ],
            cols: 12
          },
          {
            name: 'knowledge_name',
            label: '素材选择',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'getKnowledge'
          }
        ]
      },
      // 结论表单数据初始化
      conclusionFormInfo: {
        phenotype: '',
        priority: '',
        medication_tips: '',
        medication_advice: ''
      },
      // 结论表单动态生成配置文件
      conclusionConfig: {
        fieldsConfig: [
          {
            name: 'phenotype',
            label: '表型',
            fieldType: 'SelectList',
            options: [
              { label: '慢代谢型 PM', value: 'PM' },
              { label: '中间代谢型 IM', value: 'IM' },
              { label: '快代谢型 EM', value: 'EM' },
              { label: '超快代谢型 UM', value: 'UM' },
              { label: 'E2/E2', value: 'E2/E2' },
              { label: 'E2/E3', value: 'E2/E3' },
              { label: 'E2/E4', value: 'E2/E4' },
              { label: 'E3/E3', value: 'E3/E3' },
              { label: 'E3/E4', value: 'E3/E4' },
              { label: 'E4/E4', value: 'E4/E4' }
            ],
            cols: 12
          },
          {
            name: 'medication_tips',
            label: '用药结论',
            fieldType: 'SelectList',
            options: [
              { label: '常规使用', value: '常规使用' },
              { label: '降低疗效', value: '降低疗效' },
              { label: '提高疗效', value: '提高疗效' },
              { label: '谨慎使用', value: '谨慎使用' },
              { label: '换药', value: '换药' },
              { label: '增加剂量', value: '增加剂量' },
              { label: '降低剂量', value: '降低剂量' }
            ],
            cols: 12
          },
          {
            name: 'priority',
            label: '优先级',
            fieldType: 'SelectList',
            options: [
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: '5', value: '5' },
              { label: '6', value: '6' },
              { label: '7', value: '7' }
            ],
            cols: 12
          },
          {
            name: 'medication_advice',
            label: '用药建议',
            placeholder: '用药建议',
            fieldType: 'multiTextInput',
            cols: 16,
            autosize: { minRows: 4, maxRows: 8 }
          }
        ]
      },
      // 位点可编辑表格的动态配置
      conclustionColumns: [{
        label: '表型',
        key: 'phenotype'
      },
      {
        label: '优先级',
        key: 'priority'
      },
      {
        label: '用药结论',
        key: 'medication_tips'
      },
      {
        label: '用药建议',
        key: 'medication_advice'
      }],
      // 位点表单初始化
      siteFormInfo: {
        rs_name: '',
        ref: '',
        alt_db: '',
        alt: '',
        gene: '',
        phenotype: '',
        priority: '',
        medication_tips: '',
        interpretation_label: '',
        medication_advice: ''
      },
      siteConfig: {
        fieldsConfig: [
          {
            name: 'rs_name',
            label: '位点编号',
            fieldType: 'autoComplete',
            cols: 12,
            placeholder: '请选择或输入rs号',
            querySearch: 'gfindRsName'
          },
          {
            name: 'gene',
            label: '基因名称',
            prop: 'name',
            fieldType: 'TextInput',
            cols: 12
          },
          {
            name: 'ref',
            prop: 'ref',
            label: '参考碱基',
            placeholder: '碱基输入ATCG',
            fieldType: 'TextInput',
            cols: 12
          },
          {
            name: 'alt_db',
            prop: 'alt_db',
            label: 'db突变碱基',
            placeholder: '碱基输入ATCG',
            fieldType: 'TextInput',
            cols: 12
          },
          {
            name: 'alt',
            prop: 'alt',
            label: '突变碱基',
            placeholder: '请选择碱基',
            fieldType: 'SelectList',
            options: [
              { label: 'A', value: 'A' },
              { label: 'T', value: 'T' },
              { label: 'C', value: 'C' },
              { label: 'G', value: 'G' },
              { label: 'I', value: 'I' },
              { label: 'D', value: 'D' }
            ],
            cols: 12
          },
          {
            name: 'phenotype',
            label: 'phenotype',
            fieldType: 'SelectList',
            options: [
              { label: '野生型', value: '野生型' },
              { label: '杂合突变型', value: '突变型，杂合' },
              { label: '纯合突变型', value: '突变型，纯合' }
            ],
            cols: 12
          },
          {
            name: 'priority',
            label: 'priority',
            fieldType: 'SelectList',
            options: [
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: '5', value: '5' },
              { label: '6', value: '6' },
              { label: '7', value: '7' }
            ],
            cols: 12
          },
          {
            name: 'medication_tips',
            label: 'medication_tips',
            fieldType: 'SelectList',
            options: [
              { label: '常规使用', value: '常规使用' },
              { label: '降低疗效', value: '降低疗效' },
              { label: '提高疗效', value: '提高疗效' },
              { label: '谨慎使用', value: '谨慎使用' },
              { label: '换药', value: '换药' },
              { label: '增加剂量', value: '增加剂量' },
              { label: '降低剂量', value: '降低剂量' }
            ],
            cols: 12
          },
          {
            name: 'interpretation_label',
            label: 'interpretation_label',
            fieldType: 'SelectList',
            options: [
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' }
            ],
            cols: 12
          },
          {
            name: 'medication_advice',
            label: 'medication_advice',
            placeholder: '用药建议',
            fieldType: 'multiTextInput',
            cols: 16,
            autosize: { minRows: 4, maxRows: 8 }
          }
        ]
      }
    }
  }
}
</script>
