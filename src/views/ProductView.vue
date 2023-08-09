<template>
  <Product />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ProductView',
  components: {
    Product,
    Footer
  }
}
</script>
