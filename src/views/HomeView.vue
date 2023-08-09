<template>

<HelloWorld />
<Footer />

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Footer,
    HelloWorld
  }
}

</script>
