import axios from 'axios'
let request=axios.create({
    // baseURL:process.env.NODE_ENV === "production" ? "" : "/api",
    timeout:5000
})
request.interceptors.request.use(function(config){
    config.headers.Bearer =window.localStorage.getItem('token')
    return config
}

)
request.interceptors.response.use((response) => {

    return response.data;
  
  }, (err) => {
  
    console.log(err);
  
  });
let get=(url,parmas)=>request.get(url,parmas)
let post=(url,parmas)=>request.post(url,parmas||{})
export{
    get,post
}