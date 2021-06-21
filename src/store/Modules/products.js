import { authHeader } from '../helpers/authHeader.js';
export default{
    namespaced:true,
    state(){
       return{
            products: [],
            product:'',
            img64:''
          
    }
    },
    mutations:{
    getAllProducts(){
        fetch("https://localhost:44324/api/Products",{
          headers:authHeader()
        }).then((response)=>{
    if(response.ok)
    return response.json();
  }).then((data)=>{
   let resulttemp=[];
   for(let id in data){
     resulttemp.push({productId:data[id].productId,name:data[id].name,description:data[id].description,imgName:data[id].imgName});
    this.state.products=resulttemp
 
   }
  }).catch((error)=>{
      console.log(error);
         this.error="Try Again";
  })
      },
      addNewProduct(state,product) {
        debugger;
      fetch("https://localhost:44324/api/Products",{
        method:'post',
        headers:{ ...authHeader(),
          'Content-type':'application/json'
        },
        body:JSON.stringify(product)
  
      }).then((response)=>{
        if(response.ok)
        {
          console.log("done")
        }
        else{
          throw new Error('Couldnt save dara');
        }
      }).catch((error)=>{
        this.error=error.message
      });
    },
    deleteProduct(state,payload) {
      debugger;
     const id=payload.productId
    fetch(`https://localhost:44324/api/Products/${id}`,{
      method:'DELETE',
      headers:{
        ...authHeader(),
        'Content-type':'application/json'
      },
    

    }).then((response)=>{
      if(response.ok)
      {
        console.log("done")
      }
      else{
        throw new Error('Couldnt save dara');
      }
    }).catch((error)=>{
      this.error=error.message
    });
  },
  getProductById(state,payload) {
      debugger;
     const id=payload.productId
     debugger;
     fetch(`https://localhost:44324/api/Products/${id}`,{
     headers:authHeader()}).then((response)=>{
      if(response.ok)
      return response.json();
    }).then((data)=>{
     
      this.state.product=data.product
   console.log(this.state.product)
    }).catch((error)=>{
        console.log(error);
           this.error="Try Again";
    })
  },
  updateProduct(state,payload) {
    const id=payload.product.productId
    debugger;
  fetch(`https://localhost:44324/api/Products/${id}`,{
    method:'put',
    headers:{
      ...authHeader(),
      'Content-type':'application/json'
    },
    body:JSON.stringify(payload.product)

  }).then((response)=>{
    if(response.ok)
    {
      console.log("done")
    }
    else{
      throw new Error('Couldnt save dara');
    }
  }).catch((error)=>{
    this.error=error.message
  });
}
  },
    actions:{
      getAllProducts(context){
        context.commit('getAllProducts')
      },
      addNewProduct(context,payload){
        context.commit('addNewProduct',payload)
      },
      deleteProduct(context,id){
        context.commit('deleteProduct',id)
      },
      getProduct(context,id){
        context.commit('getProductById',id)
      },
      updateProduct(context,payload){
        context.commit('updateProduct',payload)
      },
    },
  //   getters:{
  //       products(state){
  //         fetch("https://localhost:44324/api/Products").then((response)=>{
  //   if(response.ok)
  //   return response.json();
  // }).then((data)=>{
  //  let resulttemp=[];
  //  for(let id in data){
  //    resulttemp.push({productId:id,name:data[id].name,description:data[id].description});
  //   state.products=resulttemp
  //   ///console.log(state.products)
  //  }
  // }).catch((error)=>{
  //     console.log(error);
  //        this.error="Try Again";
  // })
  //       }
  //   }

}