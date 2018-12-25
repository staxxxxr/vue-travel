<template>
  <div class="login">
    <div class="block">

      <!-- 表单容器 -->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <!-- 1.账号名 -->
        <el-form-item  prop="loginname">
          <div class="input-container">
            <div class="iconfont">账号&nbsp;&#xe62c;&nbsp;</div>
            <el-input class="input" size="medium" v-model="ruleForm.loginname" autocomplete="off" placeholder="请输入账号" clearable></el-input>
          </div>
        </el-form-item>

        <!-- 2.密码 -->
        <el-form-item  prop="pass">
          <div class="input-container2">
            <div class="iconfont">密码&nbsp;&#xe62b;&nbsp;</div>
            <el-input class="input" type="password" size="medium" v-model="ruleForm.pass" placeholder="请输入密码" clearable></el-input>
          </div>
        </el-form-item>

        <!-- 自动登录勾选 -->
        <div class="checkbox">
          <el-checkbox v-model="checked">下次自动登录</el-checkbox>
        </div>

        <!-- 3.提交和重置按钮 -->
        <el-form-item>
          <div class="button-container">
            <el-button type="primary" size="medium" @click="submitForm('ruleForm')">登录</el-button>
            <el-button type="warning" size="medium" @click="resetForm('ruleForm')">重置</el-button>
          </div>
        </el-form-item>

      </el-form>

      <!-- 底部链接 -->
      <div class="bottom-container"><router-link to="/user"><span class="bottom">>立即注册</span></router-link></div>

    </div>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios'
  export default {
    name: 'Login',
    data() {
      // 1.1 账号验证规则
      var validateLoginname = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写账号！'));
        }
        if (value.length!=value.split(" ").join("").length) {
          callback(new Error('不许输入空格'));
        }
        else {
          callback();
        }
      };
      // 1.2 密码验证规则
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写密码！'));
        }
        if (value.length!=value.split(" ").join("").length) {
          callback(new Error('不许输入空格'));
        }
        else {
          callback();
        }
      };

      return {
        checked: false,
        islogin: false,
        // 2.表单各个数据
        ruleForm: {
          loginname: '',
          pass: ''
        },
        // 3.嵌入各个验证规则到rules
        rules: {
          loginname: [
            { validator: validateLoginname, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },

    methods: {
      // 4.1表单提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 发送 登陆用户信息查询请求
            axios.post('/userlogin', {
              loginname: this.ruleForm.loginname,
              pass: this.ruleForm.pass
            })
            .then(function (res) {
              console.log(res.data,res.data.data.length)
              // 当服务器返回res.data长度为1时证明账号信息正确
              if (res.data.data.length==1){
                // this.islogin=true
                location.href="/"
                alert('登陆成功!')
              }
              else {
                alert('账号密码错误!')
              }
            })
            .catch(function (error) {
              console.log(error);
              alert('服务器未响应!');
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 4.2重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="stylus" scoped>
.block
  width: 100%
  height: 100%
  font-weight: bold
  .input-container
    margin-top: 15%
    text-align: center
  .input-container2
    margin-top: 0.1rem
    text-align: center
  .input
    width: 60%
  .checkbox
    text-align: center
    padding-top: 0.2rem
  .iconfont
    color: #fa7d3c
  .button-container
    margin: 0.5rem auto
    text-align: center
  .bottom
    color: #002c99
    font-size: 0.36rem
  .bottom-container
    text-align: center
</style>