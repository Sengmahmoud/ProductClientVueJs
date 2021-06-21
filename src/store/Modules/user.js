export default{
    namespaced:true,
state(){
    return{
        isAuthontucated:false,
        user:JSON.parse(localStorage.getItem('user'))
    }
},

mutations:{
    login(state,payload){
        debugger;
        fetch("https://localhost:44324/api/User/authenticate",{
          method:'post',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(payload)
        }).then((response)=>{
          if(response.ok)
         
          console.log(response)
          return response.json();
  }).then((user)=>{
        console.log("done")
        console.log(user)
       this.state.user=user;
          // login successful if there's a jwt token in the response
          if (user.token) {
            console.log(user.token)
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
          }
         
          

          
  })
  .catch((error)=>{
          this.error=error.message
        });
      },
       logout(){
           debugger;
        // remove user from local storage to log user out
        localStorage.removeItem('user');
       this.state.isAuthontucated=false
    }
    },
    actions:{
        login(context,payload){
            context.commit('login',payload)
            this.state.isAuthontucated=true
        },
        logout(context){
            context.commit('logout')
           this.state.user=null
           this.state.isAuthontucated=false
        }
    }
}
    


