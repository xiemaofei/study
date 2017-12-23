<template>
  <div class="heath">
    <h5>{{title}}</h5>
    <div class="content">
      <ul>
        <li v-for="(item, index) in questions" :key="index">
          <p>{{item.content}}</p>
          <aside v-if="item.answers.length >= 1">
            <span v-for="(item2, index2) in item.answers" :key="index2">
              <input
                type="radio"
                :id="item.question_id+'_'+item2.value"
                :name="item.key_code"
                :value="item2.value"
                v-model="item.control_value"
              />
              <label :for="item.question_id+'_'+item2.value">{{item2.name}}</label>
            </span>
          </aside>
        </li>
      </ul>
    </div>
    <button @click="submit">提交健康告知</button>
  </div>
</template>
<script>
export default {
  name: 'health',
  props: {
    healthState: {
      default: {}
    },
    genes: {
      default: {}
    }
  },
  data () {
    return {
      title: '健康告知',
      options: [],
      product_id: this.$route.params.id,
      questions: {}
    }
  },
  watch: {
    healthState (newVal) {
      this.title = this.healthState.health_title
      this.questions = this.healthState.questions
      this.healthState.genes = this.genes
      // console.log(newVal)
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('product/PostHealth', {
        product_id: parseInt(this.product_id),
        questions: this.questions,
        genes: this.genes,
        healthy_id: this.healthState.health_id
      }).then((data) => {
        console.log(data)
        this.$router.push('/Dates')
      })
    }
  }
}
</script>
<style lang="less" scoped>
.heath{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
}
h5{
  text-align: center;
  font-size: 15px;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
}
.content{
  padding: 0 10px;
  box-sizing: border-box;
}
.content ul li{
  line-height: 30px;
}
button{
   outline: none;
   border:none;
   width: 90%;
   margin-left: 5%;
   height: 30px;
   line-height: 30px;
   text-align: center;
   background: red;
   color: #fff;
   border-radius: 8px;
}
</style>
