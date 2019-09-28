<template>
  <el-form label-position="left" :rules="rules" :model="indicateForm" label-width="100px" style="width: 500px; margin-left:50px;">
    <el-row>
    <form-generator
                   :config="config"
                   :itemData = "itemDataList"
                   :value="indicateForm"/>
    </el-row>
  </el-form>
</template>
<script type="text/javascript">
import FormGenerator from '@/components/Form/FormGenerator'
import transQueryList from '@/utils/utils'
import { transQueryOptions } from '@/utils/utils'
import { glistKnowlege } from '@/api/interpretation/common'
export default {
  name: 'SubElForm',
  components: { FormGenerator },
  inject: ['InterpMainApp'], // 从Main.vue中获取数据
  data() {
    return {
      config: this.InterpMainApp.subConfig,
      indicateForm: this.InterpMainApp.subFormInfo,
      rules: this.InterpMainApp.rules,
      itemDataList: []
    }
  },
  created() {
    this.querySearchType()
  },
  methods: {
    // 一级分类
    async querySearchPri(queryString, callback) {
      var itemData = await this.InterpMainApp.getPrimary('name')
      itemData = itemData.data.result
      const list = transQueryList(queryString, itemData)
      callback(list)
    },
    // 二级分类
    async querySearchSec(queryString, callback) {
      const name = this.indicateForm.primary_name
      var itemData = await this.InterpMainApp.getSecondary(name)
      itemData = itemData.data.secondary
      const list = transQueryList(queryString, itemData)
      callback(list)
    },
    // 指标类
    async querySearchClass(queryString, callback) {
      const name = this.indicateForm.primary_code
      var itemData = await this.InterpMainApp.getClass(name)
      itemData = itemData.data.indicate
      console.log(itemData)
      const list = transQueryList(queryString, itemData)
      callback(list)
    },
    // 指标
    async querySearchIndi(queryString, callback) {
      const name = this.indicateForm.secondary_name
      var itemData = await this.InterpMainApp.getIndicate(name)
      itemData = itemData.data.indicate
      var itemDataLst = []
      for (const i of itemData) {
        itemDataLst.push(i.indicate_name)
      }
      const list = transQueryList(queryString, itemDataLst)
      callback(list)
    },
    // 知识库
    async querySearchKlg(queryString, callback) {
      const primary_name = this.indicateForm.primary_name
      const knowledge_name = this.indicateForm.knowledge_name
      // 需要一级分类和知识素材名称
      var itemData = await glistKnowlege(primary_name, knowledge_name)
      itemData = itemData.data.result
      const list = transQueryList(queryString, itemData)
      callback(list)
    },
    // rs
    async querySearchRs(queryString, callback) {
      const name = this.siteForm.rs_name
      var itemData = await this.InterpMainApp.gfindRsName(name)
      itemData = itemData.data.rs_name
      const list = transQueryList(queryString, itemData)
      callback(list)
    },
    // 基因,多项选择
    async querySearchGene(queryString) {
      var itemData = await this.InterpMainApp.getGene('GD', queryString)
      console.log(itemData)
      itemData = itemData.data.gene_name
      const list = transQueryOptions(queryString, itemData)
      this.itemDataList = list
    },
    querySearchType() { // 函数一时没有找到方法直接转递，采用字符传递方式，再用方法替代。
      console.log(this.rules)
      this.config.fieldsConfig.forEach((item, index) => {
        if (item.querySearch === 'getPrimary') {
          item.querySearch = this.querySearchPri
        } else if (item.querySearch === 'getSecondary') {
          item.querySearch = this.querySearchSec
        } else if (item.querySearch === 'querySearchClass') {
          item.querySearch = this.querySearchClass
        } else if (item.querySearch === 'querySearchIndi') {
          item.querySearch = this.querySearchIndi
        } else if (item.querySearch === 'getKnowledge') {
          item.querySearch = this.querySearchKlg
        } else if (item.querySearch === 'gfindGene') {
          item.querySearch = this.querySearchGene
        }
      })
    }
  }
}

</script>
