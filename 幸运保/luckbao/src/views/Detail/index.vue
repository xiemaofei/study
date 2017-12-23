<template>
  <div class="detail">
    <Popup :label="label" v-show="flage"  @closeMark="markHide">{{description}}</Popup>
    <div class="img">
      <img :src="product.cover" alt="">
    </div>
    <div class="content">
      <h5><span>{{product.title}}</span><img :src="company.logo" alt="" class="ren"></h5>
      <h5><span class="bian">￥ {{product.price}}</span><span>已售 <b class="bian">{{product.integral}}</b></span></h5>
      <ul>
        <li>{{genes[2].label}}:{{genes[2].value}}{{genes[1].label}}:{{genes[1].value}}</li>
      </ul>
      <div style="clear:both;"></div>
      <div class="cont">
        <ol>
          <li><span></span>{{product.features[0]}}</li>
          <li><span></span>{{product.features[1]}}</li>
          <li><span></span>{{product.features[2]}}</li>
        </ol>
      </div>
      <h6>右上角分享保障。即可获得一张按保险优惠劵</h6>
    </div>
    <div class="yiwai">
      <ol v-for="(item, index) in items" :key="index">
        <li @click="markShow(item.label,item.description)"><span>{{item.label}}</span><span>{{item.value}}</span></li>
      </ol>
    </div>
    <div class="footer">
      <ul>
        <li class="bg">
          联系客服
        </li>
        <li class="bg">
          价格￥<span>{{product.price}}</span>
        </li>
        <li class="ac" @click="toubaoShow">
          立即投保
        </li>
      </ul>
      <Genes 
       v-show="toubaoFlag"
       :all="all"
       @SetPrice="SetPrice"
       :options="all.options"
       ref="genes"
       ></Genes>
    </div>
  </div>
</template>
<script>
import Popup from '../../components/Popup'
import Genes from '../../components/Genes'
export default {
  name: 'detail',
  data () {
    return {
      id: '',
      product: '',
      company: '',
      genes: '',
      features: '',
      items: '',
      flage: false,
      list: '',
      index: '',
      label: '',
      description: '',
      toubaoFlag: false,
      all: '',
      options: ''
    }
  },
  components: {
    Popup,
    Genes
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    if (this.$refs.genes.healthShow) {
      this.$refs.genes.healthShow = false
      next(from.path)
    } else {
      next()
    }
  },
  created () {
    this.getDetail()
    // this.markShow()
    // this.closeMark()
  },
  methods: {
    SetPrice (price) {
      this.all.product.price = price
    },
    getDetail () {
      this.id = this.$route.params.id
      this.$store.dispatch('product/getDetail', { id: this.id }).then((res) => {
        this.product = res.product
        this.company = res.company
        this.genes = res.genes
        this.items = res.items
        this.options = res.options
        this.all = res
        // console.log(this.all)
      })
    },
    markShow (label, description) {
      this.list = this.items
      this.flage = true
      this.label = label
      this.description = description
      // console.log(this.description)
    },
    markHide () {
      this.flage = false
    },
    toubaoShow () {
      this.toubaoFlag = true
    }
  }
}
</script>
<style lang="less" scoped>
  .img img {
    width: 100%;
    height: auto;
  }
.box .boxCont{
  line-height: 30px;
  padding:  0 10px;
  box-sizing: border-box;
}
  .content {
    padding: 0 10px;
    box-sizing: border-box;
  }

  .content h5 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    font-size: 16px;
    padding: 8px 0;
  }

  .content h5 .ren {
    width: 30%;
    height: 100%;
  }

  .content h5 .bian {
    color: #fb5d8d;
    font-size: 16px;
  }

  .content ul li {
    float: left;
    list-style: none;
    color: #9d9d9d;
  }

  .content .cont ol li {
    float: left;
    box-sizing: border-box;
    color: #6b7a75;
  }

  .content .cont {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #fafafa;
  }

  .content .cont ol li span {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fe3265;
    margin-right: 3px;
  }

  .content h6 {
    background: #ffebf0;
    line-height: 40px;
    color: #bcb0b2;
  }

  .yiwai ol {
    width: 100%;
    border-top: 1px solid #ccc;
    padding: 0 10px;
    box-sizing: border-box;
    li {
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 10px 0;
    }
  }

  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    ul {
      line-height: 40px;
      display: flex;
      text-align: center;
      li {
        flex: 1;
        list-style: none;
        color: #fff;
      }
    }
  }

  .bg {
    background: #333333;
  }

  .ac {
    background: #fe4773;
  }
</style>
