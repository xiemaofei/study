<template>
  <div>
    {{msg}}
    <Footers></Footers>
  </div>
</template>
<script>
import Footers from '../../components/Footer'
export default {
  name: 'discovery',
  data () {
    return {
      msg: '发现'
    }
  },
  components: {
    Footers
  }
}
</script>

