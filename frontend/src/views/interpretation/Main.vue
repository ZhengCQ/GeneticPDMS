<template>
  <div class="app-container">
    <div class="filter-container">
      <!--搜索-->
      <el-input :placeholder="$t('table.indicate_name')" v-model="listQuery.indicate_name" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>
      <!--新增-->
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('table.add') }}</el-button>
    </div>
    <!--数据列表上方 结束-->
    <!--数据列表表单 开始-->
    <el-table v-loading="listLoading" :data="tableList"  border fit highlight-current-row style="width: 100%;" @sort-change="sortChange">
      <el-table-column type="index" label="No." width="70px" align="center" />
      <el-table-column :label="$t('table.disease_code')" prop="product_class" align="center" width="120px" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.indicate_name')" prop="indicate_name" align="center" width="120px" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.indicate_name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.indicate_class')" prop="indicate_class" align="center" width="120px" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.indicate_class }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.secondary_name')" prop="secondary_name" align="center" width="120px" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.secondary_name }}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="primaryCode === 'DM'" label="解读模式" prop="interpretation_model" align="center" width="120px" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.interpretation_model }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.conclustion_detail')" align="center" width="150px" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-if="scope.row.interpretation_model === null || scope.row.interpretation_model === 2" type="warning" disabled size="small" >无
          </el-button>
          <el-button  v-else type="primary" size="small" @click="handleUpdateConclustion(scope.row)">查看/编辑
          </el-button>
        </template>
      </el-table-column>
      <el-table-column v-if="siteEditColumns" :label="$t('table.site_detail')" align="center" width="150px" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleUpdateSites(scope.row)">查看/编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column  v-if="geneinfoflag" label="基因名称" prop="gene_names" align="center" width="200px" sortable>
        <template v-if="scope.row.gene_names" slot-scope="scope">
          <span>{{ scope.row.gene_names.join(',') }}</span>
        </template>
      </el-table-column>
      <el-table-column  v-if="geneinfoflag" label="基因详情" align="center" width="150px" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleDetailGenes(scope.row)">查看/编辑</el-button>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.actions')" align="center" width="200px" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">{{ $t('table.edit') }}</el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleDelete(scope.row)">{{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--数据列表表单 结束-->

    <!--页码 开始-->
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.page_size" @pagination="getList" />
    <!--页码 结束-->
    <!--新增编辑表单 开始-->
    <conclu-edit
           ref="concluEdit"
           :title="diaTitle"
           :conclustionEditForm="conclustionEditForm"
           :dialogFormVisible="dialogConclusionVisible"
           @getlist="getList()"
           @cancel="resetDialog()"
           >
    </conclu-edit>
    <site-edit
           ref="siteEdit"
           :title="diaTitle"
           :siteEditForm="siteEditForm"
           :dialogFormVisible="dialogSiteVisible"
           @getlist="getList()"
           @cancel="resetDialog()"
           >
    </site-edit>
    <addEditForm
           ref="addEditForm"
           :dialogStatus="dialogStatus"
           :siteEditForm="siteEditForm"
           :conclustionEditForm="conclustionEditForm"
           :dialogFormVisible="dialogVisible"
           @getlist="getList()"
           @cancel="resetDialog()"
           >
    </addEditForm>
    <!--新增编辑表单 结束-->
  </div>
</template>
<script>
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import addEditForm from './Form/Form'
import ConcluEdit from './Form/dialogConluEdit'
import SiteEdit from './Form/dialogSiteEdit'
import DialogTable from './dialogTable'
import UploadExcelComponent from '@/components/UploadExcel/index.vue'

export default {
  name: 'InterpMainTable',
  components: { addEditForm, Pagination, UploadExcelComponent, DialogTable, ConcluEdit, SiteEdit },
  props: {
    primaryCode: {
      type: String,
      default: null
    },
    fetchList: {
      type: Function,
      default: null
    },
    deleteRecord: {
      type: Function,
      default: null
    },
    getPrimary: {
      type: Function,
      default: null
    },
    getSecondary: {
      type: Function,
      default: null
    },
    getClass: {
      type: Function,
      default: null
    },
    getGene: {
      type: Function,
      default: null
    },
    getIndicate: {
      type: Function,
      default: null
    },
    createDataForm: {
      type: Function,
      default: null
    },
    updateDataForm: {
      type: Function,
      default: null
    },
    siteEditColumns: {
      type: Array
    },
    conclustionColumns: {
      type: Array
    },
    subConfig: {
      type: Object
    },
    formData: {
      type: Object
    },
    siteConfig: {
      type: Object
    },
    siteFormInfo: {
      type: Object
    },
    conclusionFormInfo: {
      type: Object
    },
    conclusionConfig: {
      type: Object
    },
    geneinfoflag: {
      type: Boolean
    },
    rules: {
      type: Object
    }
  },
  provide() {
    return {
      InterpMainApp: this
    }
  },
  data() {
    return {
      diaTableKey: [],
      diaTableData: [],
      dialogTableVisible: false,
      diaTitle: '',
      tableList: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        page_size: 10,
        indicate_name: undefined,
        sort: '+id'
      },
      modelOptions: [1, 2, 3, 4],
      deleted: {
        id: null
      },
      subFormInfo: this.formData,
      dialogVisible: false,
      dialogConclusionVisible: false,
      dialogSiteVisible: false,
      dialogStatus: '',
      siteEditForm: [],
      conclustionEditForm: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      this.fetchList(this.listQuery).then(response => {
        this.tableList = response.data.results
        console.log(this.tableList)

        for (const i of this.tableList) {
          i.id = (Array(4).join('0') + i.id).slice(-4) // 得到特定长度
          // i.disease_code = i.primary_code + i.disease_code // 更替disase_code
        }
        if (this.tableList.gene_names) {
          this.tableList.gene_names = this.tableList.gene_names.join(',')
        }
        this.total = response.data.total
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    async handleDelete(row) {
      if (confirm('确定要删除吗？')) {
        this.deleted.id = row.id
        const info = await this.deleteRecord(this.deleted)
        if (info.status === 200) {
          this.$message('指标项:' + ';删除' + '成功')
        }
        this.getList(1)
      }
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    showConclustionDetail(row) {
      this.dialogFormInfo = Object.assign({}, row) // copy obj
      this.diaTitle = this.dialogFormInfo.indicate_name + '结论评估详情'
      this.dialogTableVisible = true
      this.diaTableData = JSON.parse(this.dialogFormInfo.conclusion_result)
      this.diaTableData.forEach((item, index) => {
        if (!item.image_path.match(this.COMMON.webUrl)) {
          this.diaTableData[index].image_path = this.diaTableData[index].image_path = this.COMMON.webUrl + '/' + item.image_path
        }
      })
      this.diaTableKey = this.conclustionColumns
    },
    showSiteDetail(row) {
      this.dialogFormInfo = Object.assign({}, row) // copy obj
      this.diaTitle = this.dialogFormInfo.indicate_name + '位点详情'
      this.dialogTableVisible = true
      this.diaTableData = JSON.parse(this.dialogFormInfo.site_result)
      this.diaTableKey = this.siteEditColumns
    },
    resetDialogTable() {
      this.dialogTableVisible = false
      this.diaTableData = []
    },
    resetDialog() {
      this.dialogVisible = false // dialog关闭
      this.dialogConclusionVisible = false
      this.dialogSiteVisible = false
      // this.$refs.addEditForm.resetTable() // 调用Form中的重置数据 ，重置table可编辑表单
      // this.subFormInfo = this.formData // 调用index传递过来的formData 重置表单
      // this.getList()
    },
    handleCreate() {
      this.dialogStatus = 'create'
      this.$refs.addEditForm.resetTable() // 调用Form中的重置数据 ，重置table可编辑表单
      for (var name in this.subFormInfo) {
        if (typeof this.subFormInfo[name] === 'object') {
          this.subFormInfo[name] = []
        } else if (name !== 'primary_name' && name !== 'primary_code') {
          this.subFormInfo[name] = '' // 重置数据
        }
      }
      this.dialogVisible = true
    },
    handleUpdate(row) {
      this.dialogFormInfo = Object.assign({}, row) // copy obj
      for (var name in this.subFormInfo) {
        this.subFormInfo[name] = this.dialogFormInfo[name]
      }
      console.log(this.dialogFormInfo)
      this.subFormInfo.id = this.dialogFormInfo.id
      this.conclustionEditForm = []
      this.siteEditForm = []
      if (this.dialogFormInfo.site_result) {
        this.siteEditForm = JSON.parse(this.dialogFormInfo.site_result)
      }
      if (this.dialogFormInfo.conclusion_result) {
        this.conclustionEditForm = JSON.parse(this.dialogFormInfo.conclusion_result)
      }
      this.dialogStatus = 'update'
      this.dialogVisible = true
    },
    handleUpdateConclustion(row) {
      console.log(row)
      this.dialogFormInfo = Object.assign({}, row) // copy obj
      this.diaTitle = this.dialogFormInfo.indicate_name + '-结论详情'
      this.dialogConclusionVisible = true
      this.conclustionEditForm = []
      if (this.dialogFormInfo.conclusion_result) {
        this.conclustionEditForm = JSON.parse(this.dialogFormInfo.conclusion_result)
      }
      // console.log(this.conclustionEditForm)
    },
    handleUpdateSites(row) {
      console.log(row)
      this.dialogFormInfo = Object.assign({}, row) // copy obj
      this.diaTitle = this.dialogFormInfo.indicate_name + '-位点详情'
      this.dialogSiteVisible = true
      this.siteEditForm = []
      if (this.dialogFormInfo.site_result) {
        this.siteEditForm = JSON.parse(this.dialogFormInfo.site_result)
      }
      console.log(this.siteEditForm)
    },
    handleDetailGenes(row) {
      this.$router.push({ name: 'Gene', query: { genename: row.gene_names.join(',') }})
    }
  }
}

</script>
