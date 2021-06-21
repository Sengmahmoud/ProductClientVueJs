<template>
    <section>
        <h2>New Product</h2>
        <form @submit.prevent="addNewProduct">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="product.name" name="name" class="form-control" >
              
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" v-model="product.description"  name="description" class="form-control" >
            </div>
            <!-- <div class="form-group">
                <label for="imgName">Imge</label>
                <input type="text" v-model="product.imgName"  name="imgName" class="form-control">
            </div>
           -->
           <div>
            <textarea hidden rows="10" v-model="img64" name="img64"></textarea>
            <the-reader @load="img64 = $event"></the-reader>
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

import TheReader from "../TheReader.vue";
export default {
    data () {
        return {
            product:{
                name: '',
                description: '',
                imgName: '',
            } ,
            img64: ''
        }
    },
     components: {
    TheReader,
  },
    methods: {   
    addNewProduct() {
        console.log(this.product.name)
       this.$store.dispatch('prods/addNewProduct',{product:this.product,img64:this.img64});
    },
},
};
</script>