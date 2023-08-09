<template>
  <div class="card-container" >
  <div v-for="product in products" v-bind:key="product.id">
    <div class="containercon ">
      <div class="card-title">
        {{product.id}}.
        {{product.name}}
      </div>
      <div class="card-body">
        <form>
          <div class="row ">
              <div class="cell">
                <label>Product Of:</label>
              </div>
              <div class="cell">
                <em>{{product.description}}</em>
              </div>
          </div>
          <div class="row">
            <div class="cell">
              <button>View</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import ProductReview from '../router/ProductReview'

export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      ProductReview.getProducts().then((response) => {
        this.products = response.data
      })
    }
  },
  created () {
    this.getProducts()
  }
}

</script>
