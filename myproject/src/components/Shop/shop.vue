<template>
    <div class="shop">
        <header>
            <router-link tag="span" to="/"><i class="fa fa-angle-left"></i></router-link>购物车(66)</span><span>编辑</span>
        </header>
        <section>
            <div class="main">
                <h4>
                    <div class="toggle-checkbox toggle-warning">
                        <input type="checkbox" id="toggle-checkbox1" class="checked">
                        <label class="track" for="toggle-checkbox1">
                        <span class="icon"></span>
                    </label>

                    </div>
                    <div class="rightBox">
                        <span>
                        <i class="fa fa-bell"></i>
                        <small>youcci妙音陶瓷杯具</small>
                        <i class="fa fa-angle-right"></i>
                    </span>
                        <span style="font-size: 15px;">
                       |  <b class="btn" data-id="0">编辑</b>
                    </span>
                    </div>
                </h4>
                <dl>
                    <div class="toggle-checkbox toggle-warning">
                        <input type="checkbox" id="toggle-checkbox2">
                        <label class="track" for="toggle-checkbox2">
                        <span class="icon"></span>
                    </label>

                    </div>
                    <dt>
                        <img src="../../assets/images/imgs/beizi_03.jpg" alt="" />
                    </dt>
                    <dd class="editor">
                        <p>马克杯带盖勺水杯陶瓷大容量办公喝水牛奶创意星座情侣</p>
                        <p>酒红袋盖</p>
                        <p><span style="color: #ff5500;">￥<strong>11.9</strong> <b style="color: #999999;">￥46</b> </span>
                            <span
                                style="color: #999999;">x <b class="price">1</b></span>
                        </p>
                    </dd>
                    <dd class="hide editorTwo">
                        <div class="left">
                            <p><span class="jian"><i class="fa fa-minus"></i></span><span class="num">1</span><span class="add"><i class="fa fa-plus"></i></span></p>
                            <p>
                                <span>蒲公英袋盖不锈钢勺</span><span><i class="fa fa-angle-down"></i></span>
                            </p>
                        </div>
                        <div class="right del">
                            删除
                        </div>
                    </dd>
                </dl>
            </div>
        </section>
        <footer>
            <div class="wrap">
                <div class="toggle-checkbox toggle-warning">
                    <input type="checkbox" id="toggle-checkbox" class="sumInp">
                    <label class="track" for="toggle-checkbox">
                  <span class="icon"></span>
              </label>

                </div>
                <div class="span">
                    全选
                </div>
                <div class="box">
                    <span class="color">合计：￥<b class="orange sum">0</b></span>
                    <span>不含运费</span>
                </div>
                <div class="zong">
                    <span>结算(<a class="zongNum">0</a>)</span>
                </div>
            </div>          
        </footer>
    </div>
</template>
<script>
</script>
<style>
.shop{
  top: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}
header {
        height: 0.4rem;
        line-height: 0.4rem;
        background: #ff8100;
        display: -webkit-flex;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;
        color: #ffffff;
}
header span:nth-child(2) {
        font-size: 0.15rem;
    }

section {
        -webkit-flex: 1;
        overflow-y: scroll;
        background: #f4f4f4;
    }

section .main h4 {
        height: 0.4rem;
        padding: 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        background: #fff;
    }
section .main h4 .toggle-checkbox>input:checked+.track .icon {
        border-color: #fff;
    }
section .main h4 .toggle-checkbox>input:checked+.track {
        background-color: orange;
    }
section .main h4 .toggle-checkbox {
        display: inline-block;
        float: left;
        padding: 8px 0px 0;
        box-sizing: border-box;
    }

section .main h4 .toggle-checkbox input {
        display: none;
    }

section .main h4 .toggle-checkbox>input:checked+.track .icon {
        display: block;
    }

section .main h4 .track {
        width: 22px;
        height: 22px;
        border: 1px solid #ccc;
        border-radius: 50%;
        display: inline-block;
        position: relative;
    }

section .main h4 .track .icon {
        width: 13px;
        height: 7px;
        border-left: 2px solid #ddd;
        border-bottom: 2px solid #ddd;
        position: absolute;
        top: 5px;
        left: 4px;
        display: none;
        transform: rotate(-45deg);
    }

section .main h4 .rightBox {
        line-height: 39px;
        display: -webkit-flex;
        justify-content: space-between;
    }

section .main h4 .rightBox span:nth-child(1) {
        -webkit-flex: 1;
    }

section .main h4 .rightBox span:nth-child(1) .fa {
        padding: 0 10px;
        box-sizing: border-box;
    }

section .main dl {
        width: 100%;
        padding: 7px 10px;
        box-sizing: border-box;
        display: -webkit-flex;
        background: #fff;
        margin-bottom: 5px;
    }

section .main dl .toggle-checkbox>input:checked+.track .icon {
        border-color: #fff;
    }

section .main dl .toggle-checkbox>input:checked+.track {
        background-color: orange;
    }

section .main dl .toggle-checkbox {
        display: inline-block;
        float: left;
        padding-top: 21px;
        box-sizing: border-box;
    }

section .main dl .toggle-checkbox input {
        display: none;
    }

section .main dl .toggle-checkbox>input:checked+.track .icon {
        display: block;
    }

section .main dl .track {
        width: 22px;
        height: 22px;
        border: 1px solid #ccc;
        border-radius: 50%;
        display: inline-block;
        position: relative;
    }

section .main dl .track .icon {
        width: 13px;
        height: 7px;
        border-left: 2px solid #ddd;
        border-bottom: 2px solid #ddd;
        position: absolute;
        top: 5px;
        left: 4px;
        display: none;
        transform: rotate(-45deg);
    }

section .main dl dt {
        padding: 0 10px;
        box-sizing: border-box;
    }

section .main dl dt img {
        width: 65px;
        height: 65px;
    }

section .main dl .hide {
        display: none;
    }

section .main dl dd {
        overflow: hidden;
        -webkit-flex: 1;
    }

section .main dl dd p {
        line-height: 21px;
    }

section .main dl dd p:nth-child(1) {
        color: #333333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

section .main dl dd p:nth-child(2) {
        color: #999999;
    }

section .main dl dd p:nth-child(3) {
        display: -webkit-flex;
        justify-content: space-between;
    }

section .main dl .editorTwo {
        display: -webkit-flex;
    }

section .main dl .editorTwo .left {
        -webkit-flex: 1;
    }

section .main dl .editorTwo .left p {
        display: -webkit-flex;
        justify-content: space-between;
        line-height: 28px;
        padding-right: 10px;
        box-sizing: border-box;
    }

section .main dl .editorTwo .left p .jian,
section .main dl .editorTwo .left p .add {
        color: #999999;
    }

section .main dl .editorTwo .left p .num {
        font-size: 0.15rem;
        color: #3d4245;
    }

section .main dl .editorTwo .right {
        width: 40px;
        line-height: 60px;
        background: #ff3b30;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }

footer {
        background: #ffffff;
        border-top: 1px solid #ccc;
    }

footer .wrap {
        height: 0.5rem;
        line-height: 0.5rem;
        display: -webkit-flex;
    }

footer .wrap .toggle-checkbox>input:checked+.track .icon {
        border-color: #fff;
    }

footer .wrap .toggle-checkbox>input:checked+.track {
        background-color: orange;
    }

footer .wrap .toggle-checkbox {
        display: inline-block;
        padding: 12px 10px;
        box-sizing: border-box;
    }

footer .wrap .toggle-checkbox input {
        display: none;
    }

footer .wrap .toggle-checkbox>input:checked+.track .icon {
        display: block;
    }

footer .wrap .track {
        width: 22px;
        height: 22px;
        border: 1px solid #ccc;
        border-radius: 50%;
        display: inline-block;
        position: relative;
    }

footer .wrap .track .icon {
        width: 13px;
        height: 7px;
        border-left: 2px solid #ddd;
        border-bottom: 2px solid #ddd;
        position: absolute;
        top: 5px;
        left: 4px;
        display: none;
        transform: rotate(-45deg);
    }

footer .wrap .span {
        color: #757575;
    }

footer .wrap .box {
        float: left;
        -webkit-flex: 1;
        text-align: right;
        padding-right: 10px;
        box-sizing: border-box;
    }

footer .wrap .box .color {
        color: #595959;
        font-size: 0.15rem;
    }

footer .wrap .box .color .orange {
        color: #ff5000;
    }

footer .wrap .box span {
        display: block;
        line-height: 25px;
    }

footer .wrap .zong {
        float: left;
        width: 70px;
        text-align: center;
        background: #ff6800;
    }

footer .wrap .zong span {
        color: #fff;
    }

footer .wrap .zong span a {
        text-decoration: none;
        color: #fff;
    }

footer ul {
        border-top: 1px solid #ccc;
        height: 0.4rem;
        display: -webkit-flex;
        text-align: center;
    }

footer ul li {
        display: -webkit-flex;
        flex-direction: column;
        width: 25%;
        color: #444444;
    }

footer ul li .fa {
        padding-top: 0.05rem;
        box-sizing: border-box;
        font-size: 0.17rem;
    }

footer ul .active {
        color: #ff6800;
    }
    /*# sourceMappingURL=style.css.map */
</style>