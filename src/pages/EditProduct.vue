<template>
    <section>
        <h2>New Product</h2>
        <input hidden type="text" v-model="product.productId" name="productId" class="form-control" >
        <form @submit.prevent="updateProduct">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="product.name" name="name" class="form-control" >
              
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" v-model="product.description"  name="description" class="form-control" >
            </div>
            <div class="form-group">
                <label for="imgName">Imge</label>
                <input type="text" v-model="product.imgName"  name="imgName" class="form-control">
            </div>
          
            <div class="form-group">
                <button class="btn btn-primary" >save</button>
                <!-- <img v-show="status.add" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /> -->
                <router-link to="/" class="btn btn-link">Cancel</router-link>
            </div>
        </form>
    </section>
</template>

<script>


export default {
    data(){
        return{
            id:''
        }
    },
   computed:{
   product(){
      return this.$store.state.product;
    }
  }, 
  methods:{
      getProduct(){
     this.$store.dispatch('prods/getProduct',{productId:this.id});
          

      },
      updateProduct(){
         this.$store.dispatch('prods/updateProduct',{product:this.product,productId:this.id});  
           this.$router.push('/')
             this.$forceUpdate();
      }
    },
 created() {
              this.id = this.$route.params.id;
           this.getProduct()
        
        }
 
};
</script>
<style>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
 text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
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
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>