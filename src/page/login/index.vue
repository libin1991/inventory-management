<template>
  <div class="login-page">
    <div class="layer bg" id="login"></div>
    <div class="layer flex-center">
      <!-- 表单部分 -->
      <div class="form-group">
        <el-card>
          <el-form ref="loginForm" label-position="top" :rules="rules" :model="formLogin">
            <el-form-item  prop="username">
              <el-input type="text" v-model="formLogin.username" placeholder="用户名">
                <span slot="prepend">账号</span>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="formLogin.password" placeholder="密码">
                <span slot="prepend">密码</span>
              </el-input>
            </el-form-item>
            <el-button @click="submit" type="primary" class="button-login">登陆</el-button>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
require('particles.js')
// 配置地址
// https://vincentgarreau.com/particles.js/#default
import config from './config/default'
import Cookies from 'js-cookie'
import md5 from 'md5'
export default {
  data () {
    return {
      formLogin: {
        username: '1',
        password: '1'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    // 初始化例子插件
    particlesJS('login', config)
  },
  methods: {
    // 提交登陆信息
    submit () {
      const md5Valid = () => {
        // console.log(md5(this.formLogin.username + this.formLogin.password))
        const val = '6512bd43d9caa6e02c990b0a82652dca'
        return new Promise((resolve, reject) => {
          if (md5(this.formLogin.username + this.formLogin.password) === val) {
            resolve(val)
          } else {
            reject()
          }
        })
      }
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          md5Valid()
            .then(val => {
              const setting = {
                expires: 1
              }
              Cookies.set('login', val, setting)
              this.$router.push({
                name: 'index'
              })
            })
            .catch(() => {
              this.$message.error('账号或者密码不正确')
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import './style.scss';
</style>

