<template>
  <div class="registe">
    <div class="block">

      <!-- 表单容器 -->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <!-- 1.账号名 -->
        <el-form-item  prop="loginname">
          <div class="input-container">
            <span class="iconfont">账号&nbsp;&#xe62c;&nbsp;</span>
              <el-input class="input" size="small" placeholder="请输入账号(登录使用)" v-model="ruleForm.loginname" autocomplete="off"></el-input>
          </div>
        </el-form-item>

        <!-- 2.密码 -->
        <el-form-item  prop="pass">
          <div class="input-container2">
            <span class="iconfont">密码&nbsp;&#xe62b;&nbsp;</span>
              <el-input class="input" size="small" placeholder="请输入密码" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </div>
        </el-form-item>

        <!-- 3.再次输入密码 -->
        <el-form-item  prop="checkPass">
          <div class="input-container2">
            <span class="iconfont">密码&nbsp;&#xe69e;&nbsp;</span>
              <el-input class="input" size="small" placeholder="再次输入密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </div>
        </el-form-item>

        <!-- 4.昵称 -->
        <el-form-item  prop="username">
          <div class="input-container2">
            <span class="iconfont">昵称&nbsp;&#xe62e;&nbsp;</span>
              <el-input class="input" size="small" placeholder="请输入昵称(用户名)" v-model="ruleForm.username" autocomplete="off"></el-input>
          </div>
        </el-form-item>

        <!-- 5.QQ&微信 -->
        <el-form-item  prop="qq">
          <div class="input-container2">
            <span class="iconfont">QQ&微信&nbsp;&#xe60f;&nbsp;</span>
              <el-input class="input qq-input" size="small" placeholder="请输入QQ或微信" v-model="ruleForm.qq" autocomplete="off"></el-input>
          </div>
        </el-form-item>

        <!-- 6.性别 -->
        <el-form-item  prop="label">
          <span class="iconfont">性别&nbsp;&#xe7f8;&nbsp;&nbsp;</span>
          <el-radio-group v-model="ruleForm.label">
            <el-radio  label="男" border size="mini">男</el-radio>
            <el-radio  label="女" border size="mini">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- 7.年龄 -->
        <el-form-item  prop="age">
          <div class="age">
            <span class="iconfont">年龄&nbsp;&#xe7ba;&nbsp;&nbsp;</span>
            <el-input-number v-model="ruleForm.age" size="mini" :min="0" :max="120" label="描述文字"></el-input-number>
          </div>
        </el-form-item>

        <!-- 8.提交和重置按钮 -->
        <el-form-item>
          <div class="button-container">
            <el-button type="success" size="medium" @click="submitForm('ruleForm')">注册</el-button>
            <el-button type="warning" size="medium" @click="resetForm('ruleForm')">重置</el-button>
          </div>
        </el-form-item>

      </el-form>

      <!-- 立即登录链接 -->
      <div class="bottom-container"><router-link to="/login"><span class="bottom">>立即登录</span></router-link></div>
    </div>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios'

  export default {
    name: 'Registe',
    data() {
      // 1.1 账号验证规则
      var validateLoginname = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('账号不能为空'));
        }
        if (value.length<6 || value.length>15) {
          callback(new Error('请输入6~15位账号'));
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
          callback(new Error('密码不能为空'));
        }
        if (value.length<6 || value.length>15) {
          callback(new Error('请输入6~15位密码'));
        }
        if (value.length!=value.split(" ").join("").length) {
          callback(new Error('不许输入空格'));
        }
        else if (value == this.ruleForm.loginname || value == this.ruleForm.username) {
          callback(new Error('不能与账号名或昵称相同'));
        }
        else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      // 1.3 再次输入密码验证规则
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      // 1.4 昵称验证规则
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('昵称不能为空'));
        }
        if (value.length<2 || value.length>15) {
          callback(new Error('请输入2~15位昵称'));
        }
        if (value.length!=value.split(" ").join("").length) {
          callback(new Error('不许输入空格'));
        }
        else {
          callback();
        }
      };
      // 1.5 QQ验证规则
      var validateQQ = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('QQ&微信不能为空'));
        }
        if (value.length>20) {
          callback(new Error('请输入正确的号码'));
        }
        if (value.length!=value.split(" ").join("").length) {
          callback(new Error('不许输入空格'));
        }
        else {
          callback();
        }
      };
      // 1.6 label性别验证规则
      var validateLabel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择性别'));
        } else {
          callback();
        }
      };
      // 1.7年龄验证规则
      var validateAge = (rule, value, callback) => {
        if (value === 0) {
          callback(new Error('请输入年龄'));
        } else {
          callback();
        }
      };

      return {
        // 2.表单各个数据
        ruleForm: {
          loginname: '',
          pass: '',
          checkPass: '',
          username: '',
          qq: '',
          label: '',
          age: 0
        },
        // 3.嵌入各个验证规则到rules
        rules: {
          loginname: [
            { validator: validateLoginname, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          qq: [
            { validator: validateQQ, trigger: 'blur' }
          ],
          label: [
            { validator: validateLabel, trigger: 'blur' }
          ],
          age: [
            { validator: validateAge, trigger: 'blur' }
          ]
        }
      };
    },

    methods: {
      // handleChange(num) {
      //   console.log(num);
      // },
      // 4.1表单提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 发送 POST 请求
            axios({
              method: 'post',
              url: '/useradd',
              data: {
                loginname: this.ruleForm.loginname,
                pass: this.ruleForm.pass,
                username: this.ruleForm.username,
                qq: this.ruleForm.qq,
                label: this.ruleForm.label,
                age: this.ruleForm.age
              }
            });
            alert('用户注册成功!');
            location.href="/";
          } else {
            // console.log('error submit');
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
  margin-bottom: 1.48rem
  font-weight: bold
  .input-container
    margin-top: 6%
    text-align: center
  .input-container2
    text-align: center
  .input
    width: 60%
    position: relative
  .qq-input
    width: 50%
  .iconfont
    color: #fa7d3c
  .button-container
    text-align: center
  .bottom
    color: #002c99
    font-size: 0.36rem
  .bottom-container
    margin-top: 8%
    text-align: center
</style>
