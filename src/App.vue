<template>
  <header class="top-bar spread">
        <nav class="top-bar-nav">
          <router-link to="/" class="top-bar-link">
            <i class="uil uil-estate "></i>
            <span>Home</span>
          </router-link>
          <router-link to="/products" class="top-bar-link">
          <i class="uil uil-box"></i>
          <span>Products</span>
          </router-link>
          <router-link to="/login" class="top-bar-link">
          <i class="uil uil-signin"></i>
          <span>Login</span>
          </router-link>
        </nav>
        <div @click="toggleSidebar" class="top-bar-cart-link">
          <i class="uil uil-signin"></i>
          <span>Login/Register</span>
        </div>
  </header>

  <router-view  />
  <Sidebar
    v-if="showSidebar"
    :toggle="toggleSidebar"
  />
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  },
  data () {
    return {
      showSidebar: false,
      registerActive: false,
      emailLogin: '',
      passwordLogin: '',
      emailReg: '',
      passwordReg: '',
      confirmReg: '',
      View: false,
      emptyFields: false
    }
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    doLogin () {
      if (this.emailLogin === '' || this.passwordLogin === '') {
        this.emptyFields = true
      } else {
        alert('You are now logged in')
      }
    },

    doRegister () {
      if (this.emailReg === '' || this.passwordReg === '' || this.confirmReg === '') {
        this.emptyFields = true
      } else {
        alert('You are now registered')
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
