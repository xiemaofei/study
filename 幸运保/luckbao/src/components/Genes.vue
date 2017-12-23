<template>
  <div>
    <div class="toubaoMark" @click="toubaoShow">
          <div class="toubaoBox">
             <div class="content">
                <h5><span>{{data.product.title}}</span><img :src="data.company.logo" alt="" class="ren"></h5>
             </div>
              <div class="item-group">
                <p v-for="(item, index) in genes" :key=index>
                  <label>{{item.label}}:</label>
                  <span>
                    <template v-if="item.type == 'fixed'">
                      <output>{{item.value}}</output>
                    </template>
                    <template v-else-if="item.type == 'list'">
                      <SelectList 
                       v-if="JSON.parse(item.options).step"
                       :step="JSON.parse(item.options).step"
                        v-model="genesJSON[item.gene_key]" 
                       ></SelectList>
                       <RadioList 
                       v-else
                       :list="JSON.parse(item.options).list"
                       :name="item.gene_key"
                        v-model="genesJSON[item.gene_key]"
                       ></RadioList>
                    </template>
                     <template v-else-if="item.type == 'list.days'">
                      <output>{{item.value}}</output>
                    </template>
                    <template v-else-if="item.type == 'fixed.jobs'">
                      <output>{{item.value}}</output>
                    </template>
                  </span>
                </p>
              </div>
              <div class="footer">
                 <ul>
                   <li>价格￥<span>{{product.price}}</span></li>
                   <li class="active" @click="submit">立即投保</li>
                 </ul>
              </div>
                <Health 
                  v-show="healthShow"
                  :healthState="healthState"
                  :genes="genes"
                ></Health>
          </div>
    </div>
  </div>
</template>
<script>
import SelectList from './SelectList'
import RadioList from './RadioList'
import Health from './Health'
export default {
  name: 'genes',
  props: ['all'],
  data () {
    return {
      data: '',
      genes: '',
      genesJSON: {},
      healthShow: false,
      healthState: {}
    }
  },
  components: {
    SelectList,
    RadioList,
    Health
  },
  watch: {
    genesJSON (newVal) {
      console.log(this.genesJSON)
    }
  },
  created () {
    this.data = this.all
    this.genes = this.all.genes
    this.product = this.all.product
    this.options = this.data.options
    console.log(this.options)
    this.genes.forEach(item => {
      this.$set(this.genesJSON, item.gene_key, item.value)
      if (item.type === 'list') {
        console.log(item.value)
        this.$watch(() => {
          return this.genesJSON[item.gene_key]
        }, () => {
          this.GetPrice()
        })
      }
    })
  },
  methods: {
    toubaoShow () {
      this.$emit('toubaoShow')
    },
    GetPrice () {
      this.$store.dispatch('product/GetPrice', {
        product_id: this.product.product_id,
        genes: this.genesJSON
      }).then((data) => {
        this.$emit('SetPrice', data.price)
      })
    },
    submit () {
      if (this.options.need_health === 0) {
        alert('000')
      } else {
        this.$store.dispatch('product/getHealth', {
          product_id: this.product.product_id
        }).then((data) => {
          this.healthState = data
          this.healthShow = true
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.toubaoMark{
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100%;
  z-index: 999;
}
.toubaoBox{
  width: 100%;
  height: 50%;
  background: #fff;
  position: absolute;
  bottom: 0;
  animation: toubaoBox .5s linear forwards;
}
@keyframes toubaoBox{
  0% { bottom: -100px}
  50% {bottom: -50px}
  100% {bottom: 0px}
}
.content h5 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    font-size: 16px;
    padding: 8px 0;
    border-bottom:1px solid #ccc;
    span {
      line-height: 20px;
      padding-top: 10px;
      padding-left: 5px;
    }
}
.content h5 .ren {
  width: 30%;
  height: 100%;
}
.item-group{
  p{
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
}
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
  ul{
    display: flex;
    text-align: center;
    line-height: 30px;
    li{
      flex: 1;
      list-style: none;
      padding: 5px 0;
      box-sizing: border-box;
      &:nth-child(1){
        color: #ff4774;
      }
    }
    .active{
      background: #ff4774;
      color: #fff;
    }
  }
}
</style>
