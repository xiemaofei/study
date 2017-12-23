<template>
   <div>
       内容{{count}}
   </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'display',
  computed: mapState({
    count: state => state.count
  })
}
</script>