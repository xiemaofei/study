<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input placeholder="搜索姓名，手机号" size="mini" prefix-icon="el-icon-search"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="filter.status" placeholder="员工状态" size="mini">
            <el-option label="全部" value=""></el-option>
            <el-option label="离职" value="1"></el-option>
            <el-option label="开除" value="2"></el-option>
            <el-option label="在职" value="0"></el-option>
          </el-select>
          </el-form-item>
         <el-form-item>
            <el-button type="primary" size="mini" @click="filterSelect">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-button type="primary" size="mini" @click="dialogFormVisible=true">添加员工</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-dialog title="添加员工" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="员工姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="选择部门" :label-width="formLabelWidth">
          <el-select v-model="form.team" placeholder="请选择工作部门">
            <el-option label="技术部" value="shanghai"></el-option>
            <el-option label="人事部" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择职位" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择工作部门" size="mini">
            <el-option label="前端" value="1"></el-option>
            <el-option label="PHP工程师" value="2"></el-option>
            <el-option label="JAVA工程师" value="3"></el-option>
            <el-option label="IOS工程师" value="4"></el-option>
            <el-option label="安卓工程师" value="5"></el-option>
            <el-option label="产品经理" value="6"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" auto-complete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="入职日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.startDate"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0"
             size="mini"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="入职薪资" :label-width="formLabelWidth">
          <el-input v-model="form.money" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addStaff">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialogFormVisible: false,
        formLabelWidth: '120px',
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() > Date.now()
          }
        },
        filter: {
          status: ''
        },
        msg: 'tab',
        form: {
          name: '',
          team: '',
          teamId: '',
          phone: '',
          type: '',
          startDate: '',
          money: ''
        }
      }
    },
    methods: {
      addStaff () {
        this.$http.post('/api/addStaff', this.form).then((data) => {
          console.log(data)
          this.dialogFormVisible = false
          this.$emit('getStaffList', {})
        })
      },
      filterSelect () {
        this.$emit('getStaffList', {
          filters: this.filter
        })
      }
    }
  }
</script>
<style scoped lang="less">
.demo-form-inline{
  float: left;
}
</style>