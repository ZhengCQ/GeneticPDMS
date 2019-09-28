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
export default {
  name: 'SubElForm',
  components: { FormGenerator },
  inject: ['InterpMainApp'], // 从Main.vue中获取数据
  data() {
    return {
      config: this.InterpMainApp.subConfig,
      indicateForm: this.InterpMainApp.subFormInfo,
      rules: this.InterpMainApp.rules,
      Material_name: '',
      itemDataList: []
    }
  },
  created() {
    this.querySearchType()
  },
  methods: {
    // Material 基因。name和querySearch要设定好
    async querySearchMaterial(queryString, callback) {
      var itemData = await this.InterpMainApp.gfindMaterial('GD', queryString)
      itemData = itemData.data.gene_name
      const list = transQueryList(queryString, itemData)
      callback(list)
    },
    // 表型,多项选择
    async querySearchPheno(queryString) {
      var itemData = await this.InterpMainApp.gfindPheno(queryString)
      itemData = itemData.data.phenotypeMIMnum
      const list = transQueryOptions(queryString, itemData)
      this.itemDataList = list
    },
    querySearchType() { // 函数一时没有找到方法直接转递，采用字符传递方式，再用方法替代。
      this.config.fieldsConfig.forEach((item, index) => {
        if (item.querySearch === 'gfindMaterial') {
          item.querySearch = this.querySearchMaterial
          this.Material_name = item.name
        } else if (item.querySearch === 'gfindPheno') {
          item.querySearch = this.querySearchPheno
          this.Material_name = item.name
        }
      })
    }
  }
}

</script>
