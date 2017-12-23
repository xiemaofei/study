<template>
  <div>
    <el-table :data="tableData5.data" style="width: 100%" size="mini">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="姓名" prop="name">
      </el-table-column>
      <el-table-column label="手机号" prop="phone">
      </el-table-column>
      <el-table-column label="员工状态" prop="status" :formatter="getStatusText">
      </el-table-column>
      <el-table-column label="部门" prop="team">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" 
          @click.native="removeStaff(scope.row, '2')">
          开除
          </el-button>
          <el-button type="text" size="small"
           @click.native="removeStaff(scope.row, '1')"
           >
            离职
          </el-button>
          <el-button type="text" size="small">
            修改密码
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData5.count">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      tableData5: {
        default: {}
      }
    },
    data () {
      return {
        msg: 'tab',
        pageSize: 10
      }
    },
    methods: {
      removeStaff (item, status) {
        this.$http.post('/api/removeStaff', {
          status,
          id: item.id
        }).then((data) => {
          item.status = status
        })
      },
      getStatusText (...reset) {
        let statusText = ['在职', '离职', '开除']
        return statusText[reset[2]]
      },
      handleSizeChange (val) {
        this.pageSize = val
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        this.$emit('getStaffList', {
          page: val,
          pageSize: this.pageSize
        })
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>
<style scoped lang="less">

</style>