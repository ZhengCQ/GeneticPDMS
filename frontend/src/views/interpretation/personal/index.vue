<template>
  <maincontent
               :fetchList="glistAllPsersonal"
               :deleteRecord="gdeleteIndicate"
               :getPrimary="gallPrimary"
               :getSecondary="gallSecondary"
               :getClass="gallClass"
               :getIndicate="gallPersonality"
               :createDataForm="paddPersonInterpretation"
               :updateDataForm="peditPersonInterpretation"
               :subConfig="subElConfig"
               :conclusionFormInfo="conclusionFormInfo"
               :conclusionConfig="conclusionConfig"
               :conclustionColumns="conclustionColumns"
               :formData="formData"
               :siteFormInfo="siteFormInfo"
               :siteEditColumns="siteEditColumns"
               :siteConfig="siteConfig"
               />
</template>
<script>
// 缺少新增、编辑表单及罗列知识库
// /personal/add_person_interpretation
// /personal/edit_person_interpretation
// /personal/indicate_2_knowlege
import { glistAllPsersonal, gdeleteIndicate, gallPrimary, gallSecondary, gallPersonality, paddPersonInterpretation, peditPersonInterpretation } from '@/api/interpretation/personal'
import { gallClass } from '@/api/query'
import maincontent from '../Main'
export default {
  components: {
    maincontent
  },
  methods: {
    glistAllPsersonal,
    gdeleteIndicate,
    gallClass,
    gallPrimary,
    gallSecondary,
    gallPersonality,
    paddPersonInterpretation,
    peditPersonInterpretation
  },
  data() {
    return {
      // 主表单需要收集的form数据
      formData: {
        primary_name: '个性特质',
        secondary_name: '',
        indicate_name: '',
        primary_code_for_class: 'PE',
        indicate_class: '',
        knowledge_name: ''
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
            prop: 'name',
            placeholder: '请输入二级分类',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'getSecondary'
          },
          {
            name: 'indicate_name',
            label: '指标名称',
            prop: 'name',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'querySearchIndi',
            trigerFocus: false
          },
          {
            name: 'primary_code_for_class',
            label: '类一级分类',
            fieldType: 'SelectList',
            options: [
              { label: '个性特质', value: 'PE' },
              { label: '药物代谢', value: 'DM' },
              { label: '常见疾病', value: 'CD' }
            ],
            cols: 12
          },
          {
            name: 'indicate_class',
            label: '指标类',
            prop: 'indicate_class',
            fieldType: 'autoComplete',
            cols: 16,
            querySearch: 'querySearchClass',
            trigerFocus: false
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
        conclusion: '',
        explanation: '',
        evaluation_indicator: '',
        interpretation_details: '',
        suggest: ''
      },
      // 结论表单动态生成配置文件
      conclusionConfig: {
        fieldsConfig: [
          {
            name: 'conclusion',
            label: '结论',
            placeholder: '结论信息',
            fieldType: 'TextInput',
            cols: 20
          },
          {
            name: 'interpretation',
            label: '解读详情',
            placeholder: '解读详情',
            fieldType: 'multiTextInput',
            cols: 16,
            autosize: { minRows: 4, maxRows: 8 }
          },
          {
            name: 'mark_down',
            label: '分值(下限)',
            placeholder: '结论对应分值(数字)',
            fieldType: 'NumInput'
          },
          {
            name: 'mark_up',
            label: '分值(上限)',
            placeholder: '结论对应分值(数字)',
            fieldType: 'NumInput'
          }
        ]
      },
      // 位点可编辑表格的动态配置
      conclustionColumns: [{
        label: '结论',
        key: 'conclusion'
      },
      {
        label: '解读详情',
        key: 'interpretation',
        width: '250px'
      },
      {
        label: '分值(下)',
        key: 'mark_down'
      },
      {
        label: '分值(上)',
        key: 'mark_up'
      }
      ],
      // 位点表单数据初始化
      siteFormInfo: {
        rs_name: '',
        gene: '',
        ref: '',
        alt_db: '',
        genotype: '',
        effect: '',
        mark: '',
        Freq: '',
        edit: false
      },
      // 位点表单动态配置
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
            label: '参考碱基',
            fieldType: 'TextInput',
            cols: 12
          },
          {
            name: 'alt_db',
            label: '数据库突变碱基',
            fieldType: 'TextInput',
            cols: 12
          },
          {
            name: 'genotype',
            label: '基因型',
            fieldType: 'TextInput',
            cols: 12
          },
          {
            name: 'effect',
            label: 'effect',
            placeholder: '基因型的影响，如较强、较弱等',
            fieldType: 'TextInput',
            cols: 12
          },
          {
            name: 'mark',
            label: 'mark',
            placeholder: '基因型对应分数, 如5',
            fieldType: 'TextInput',
            cols: 12
          },
          {
            name: 'Freq',
            label: '基因型频率',
            placeholder: '基因型频率,0~1',
            fieldType: 'TextInput',
            cols: 12
          }
        ]
      },
      // 位点可编辑表格配置
      siteEditColumns: [{
        label: '位点rs号',
        key: 'rs_name'
      },
      {
        label: '基因名称',
        key: 'gene'
      },
      {
        label: '参考碱基',
        key: 'ref'
      },
      {
        label: 'db突变碱基',
        key: 'alt_db'
      },
      {
        label: '基因型',
        key: 'genotype'
      },
      {
        label: 'Effect',
        key: 'effect'
      },
      {
        label: 'Mark',
        key: 'mark'
      },
      {
        label: '基因型频率',
        key: 'Freq'
      },
      {
        label: '文献',
        key: 'reference',
        width: '460px'
      }
      ]
    }
  }
}
</script>
