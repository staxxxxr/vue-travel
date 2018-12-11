<template>
<div>
    <div class="header">
    登录 / 注册
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    </div>
    <div class="container">
    <dl class="padding">
        <dt class="border-bottom loginstate ">
            <span v-on:click="tab=true" v-bind:class="{'text-red':tab}">登录</span> |
            <span v-on:click="tab=false" v-bind:class="{'text-red':!tab}">注册</span> |
            <span v-on:click="tab=!tab">切换</span>
        </dt>
        <dd v-if="tab">
            <div v-if="isloginstate">
                <h2>登录</h2>
                <ul>
                    <li>
                        用户名：<input type="text" v-model="username">
                    </li>
                    <li>
                        密码：<input type="password" v-model="userpwd">{{userpwd}}
                    </li>
                    <li>
                        <button type="button" v-bind:disabled="islogin" v-on:click="loginfun()">登录</button>
                    </li>
                </ul>
            </div>
            <div v-if="!isloginstate">
                <h2>用户已经成功登录</h2>
                <div>
                    {{username}}
                </div>
                <div>
                    <img v-bind:src="userpic" alt="">
                </div>
            </div>
        </dd>
        <dd  v-if="!tab">
            <h2>注册</h2>
            <ul class="padding height-big">
                <li>
                    用户名：<input type="text" v-model="skname">
                    <span v-html="tip[0]"></span>
                </li>
                <li>
                    密码：<input type="password" v-model="skpwd">{{skpwd}}
                    <span v-html="tip[1]"></span>
                </li>
                <li>
                    重复密码：<input type="password" v-model="skpwd2">{{skpwd2}}
                    <span v-html="tip[2]"></span>
                </li>
                <li>
                    头像地址：<input type="text" v-model="skpic">
                    <span v-html="tip[3]"></span>
                </li>
                <li>
                    <button type="button" v-bind:disabled="resubmit" v-on:click="submitreg()">注册</button>
                </li>
            </ul>
        </dd>
    </dl>
    </div>
</div>
</template>

<script>
export default {
  name: 'UserHeader',
  data () {
    return {
      tab: false, // 切换卡
      // 注册框用户信息
      skname: '',
      skpwd: '',
      skpwd2: '',
      skpic: '',
      // 注册成功后的用户信息
      userlist: [],
      // resubmit:true,
      tip: [], // 注册提示
      // 登录框用户信息
      username: '',
      userpwd: '',
      userpic: '',
      isloginstate: true // 默认要登录
    }
  },
  // 预处理数据
  computed: {
    // 登录按钮函数
    islogin: function () {
      if (this.username && this.userpwd) {
        return false
      } else {
        return true
      }
    },
    // 注册主函数
    resubmit: function () {
      var chickname // 检测用户名
      if (this.skname.length >= 4 && this.skname.length <= 6) {
        chickname = true
        this.tip[0] = "<b class='text-green'>正确</b>"
      } else {
        chickname = false
        this.tip[0] = "<b class='text-red'>用户名（4-6）</b>"
      }

      var checkpwd // 检测密码
      if (this.skpwd.length >= 6 && this.skpwd.length <= 12) {
        checkpwd = true
        this.tip[1] = "<b class='text-green'>正确</b>"
      } else {
        checkpwd = false
        this.tip[1] = "<b class='text-red'>密码（6-12）</b>"
      }

      var checkpwd2 // 检测重复密码
      checkpwd2 = this.mycheckpwd2() // 通过事件来监听

      var checkpic // 检测头像地址
      if (this.skpic) {
        checkpic = true
        this.tip[3] = "<b class='text-green'>正确</b>"
      } else {
        checkpic = false
        this.tip[3] = "<b class='text-red'>不能为空</b>"
      }

      // 所有输入检测
      if (chickname && checkpwd && checkpwd2 && checkpic) {
        return false // 注册可用
      } else {
        return true // 注册不可用
      }
    }
  },
  // 函数（事件）
  methods: {
    mycheckpwd2: function () {
      if (this.skpwd2 === this.skpwd && this.skpwd2) {
        this.tip[2] = "<b class='text-green'>相同</b>"
        return true
      } else {
        this.tip[2] = "<b class='text-red'>不相同</b>"
        return false
      }
    },
    // 点击注册函数
    submitreg: function () {
      this.userlist.push({
        name: this.skname,
        pwd: this.skpwd,
        pic: this.skpic
      })
      this.skname = ''
      this.skpwd = ''
      this.skpwd2 = ''
      this.skpic = ''
      alert('用户注册成功，请进行登录')
      this.tab = true // 切换卡切换到登录状态
    },
    // 登录验证函数
    loginfun: function () {
      for (var i = 0; i < this.userlist.length; i++) {
        if (
          this.userlist[i].name === this.username &&
          this.userlist[i].pwd === this.userpwd
        ) {
          alert('用户成功登录')
          this.isloginstate = false
          this.userpic = this.userlist[i].pic
          break
        } else {
          alert('用户信息不对，请重新输入')
        }
      }
    }
  },
  // 数据监听 data computed
  watch: {
    // 新密码监听
    skpwd: function (newv, oldv) {
      if (newv.length >= 6 && newv.length <= 12) {
        this.tip[1] = "<b class='text-green'>正确</b>"
      } else {
        this.tip[1] = "<b class='text-red'>密码（6-12）</b>"
      }
    },
    // 再次输入密码监听
    skpwd2: function (newv, oldv) {
      this.mycheckpwd2() // 调用事件
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size: 0.32rem
  .header-back
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
    color: #fff

</style>
