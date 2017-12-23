<template>
  <div>
    <tool @getStaffList="getStaffList"/>
    <tablebox :tableData5="tableData5" @getStaffList="getStaffList"/>
  </div>
</template>
<script>
import tablebox from './components/TableBox'
import tool from './components/Tool'
export default {
  name: 'staff',
  components: {
    tablebox,
    tool
  },
  data () {
    return {
      tableData5: [],
      filters: {}
    }
  },
  created () {
    this.getStaffList({})
  },
  methods: {
    getStaffList ({page = 1, pageSize = 10, filters}) {
      this.filters = !filters ? this.filters : filters
      this.$http.get('/api/getStaffList', {
        params: {
          page: page - 1,
          pageSize,
          filters: this.filters
        }
      }).then((result) => {
        console.log(result)
        this.tableData5 = result
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>