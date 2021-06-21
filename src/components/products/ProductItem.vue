<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
            <img :src="path + '/wwwroot/products/'+ imgName" class="img-circle" :alt="img" />

        <!-- <img :src="imgName" :alt="title" /> -->
      </div>
      <div class="product__text">
        <h3>{{ name }}</h3>
        <!-- <base-badge mode="highlight" :no-margin-left="true">
          <h4>${{ price }}</h4>
        </base-badge> -->
        <p>{{ description }}</p>

      </div>
    </div>
    <!-- <div class="product__actions">
      <button @click="addToCart">Add to Cart</button>
    </div> -->
     <div class="product__actions"  v-if="isAuthontucated">
      <button @click="remove">Remove</button>
    </div>
       <div class="product__actions"  v-if="isAuthontucated">
      <router-link :to="editProduct">Edit</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ['productId', 'imgName', 'name','description'],
  data(){
    return{
      path:'https://localhost:44324/api'
    }
  },
  computed:{
editProduct(){
  //  return '/teams/' + this.id;
  return {name:'edit', params: { id :this.productId}}
    },
      isAuthontucated(){
         return this.$store.state.isAuthontucated
     }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addProductToCart',{
        id: this.productId,
        image: this.imgName,
        title: this.name,
       
      });
    },
      remove() {
     this.$store.dispatch('prods/deleteProduct',{productId:this.productId});
     this.$store.dispatch('prods/getAllProducts');
      this.$forceUpdate();
      //this.$router.go()
      },
     },
};
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>