<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :key="prod.productId"
        :productId="prod.productId"
        :name="prod.name"
        :imgName="prod.imgName"
        :description="prod.description"
        
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  computed:{
    products(){
      return this.$store.state.products;
      
    },
       isAuthontucated(){
         return this.$store.state.isAuthontucated
     }
  }, 
  methods:{
    getAll(){
       this.$store.dispatch('prods/getAllProducts');
      
     
    }
   
  },
  mounted(){
    this.getAll()
  this.$forceUpdate();
  }

};
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
  }
</style>