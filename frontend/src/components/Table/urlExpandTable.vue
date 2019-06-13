<template>
  <div>
  <el-table v-loading="listLoading" :data="data" border fit highlight-current-row style="width: 100%;">
    <el-table-column type="expand">
      <template slot-scope="scope">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item
              v-for="item in tableKey"
              v-if="item.type === 'expand'"
              :key = "item.key"
              :label="item.label">
            <span>{{ scope.row[item.name]}}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <!--el-table-column type="index" label="No." width="70px" align="center" /-->
     <el-table-column
           v-for="item in tableKey"
           v-if="item.type != 'expand'"
           :key="item.name"
           :label="item.label"
           :prop="item.prop"
           :width="item.width || '120px'"
           :align="item.align || 'center'"
           >
      <template slot-scope="scope">
        <div v-if="item.type === 'singleurl'">
          <div v-if="item.url === 'ghr'">
            <a :href="'https://ghr.nlm.nih.gov/gene/' + scope.row[item.name]" target="_blank" class="ex2">{{scope.row[item.name]}}</a>
          </div>
          <div v-else-if="item.url === 'omimgene'">
            <a :href="'https://www.omim.org/entry/' + scope.row[item.name]" target="_blank" class="ex2">{{scope.row[item.name]}}</a>
          </div>
        </div>
        <div v-else-if="item.type === 'multishow'" v-for="subshow in scope.row[item.name]" :key="subshow">
          <span class="link-type" @click="handleFetchItems(subshow)">{{ subshow }}</span>
        </div>
        <div v-else>
            <span>{{ scope.row[item.name] }}</span>
        </div>
      </template>
    </el-table-column>

       <slot></slot>
  </el-table>
  <el-dialog :visible.sync="dialogPvVisible" title="表型详情" customClass="customWidth">
    <expand-table :data="tableList" :tableKey="tableConfig">
    </expand-table>
  </el-dialog>
</div>

</template>
<script type="text/javascript">
import { gdetailsPhenotypeMIMnum } from '@/api/geneticknowledges/gene'
import expandTable from '@/components/Table/expandTable'
export default {
  components: { expandTable },
  name: 'UrlExpandTable',
  props: ['data', 'tableKey', 'listLoading'],
  data() {
    return {
      tableList: {},
      dialogPvVisible: false,
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
          prop: 'phenotypeMIMnum_id'
        },
        {
          name: 'paternal_disease_frequency',
          label: '表型总携带率',
          prop: 'paternal_disease_frequency'
        },
        {
          name: 'phenotype_key',
          label: '表型key值',
          prop: 'phenotype_key'
        },
        {
          name: 'relate_gene_id',
          label: '相关基因',
          prop: 'relate_gene_id'
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
        }]
    }
  },
  methods: {
    async handleFetchItems(name) {
      const info = await gdetailsPhenotypeMIMnum(name)
      this.dialogPvVisible = true
      this.tableList = info.data.result.phenotype
    }
  }
}
</script>

 <style >
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    white-space: pre-wrap;
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
  a {color:blue;}   /* 默认的颜色 */
  a.ex2:hover,a.ex2:active {font-size:150%;color:red;} /* 正在被点击的链接 */
  <style>
  .customWidth {
    width: 60%;
  }
 </style>
