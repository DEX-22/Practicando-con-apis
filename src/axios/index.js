import axios from 'axios'


const axiosInstance = axios.create({
        // `url` is the server URL that will be used for the request
        // url: '/user',
      
        // `method` is the request method to be used when making the request
        method: 'get', // default
      
        // `baseURL` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
        // to methods of that instance.
        baseURL: "",
      
        // `transformRequest` allows changes to the request data before it is sent to the server
        // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
        // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
        // FormData or Stream
        // You may modify the headers object.
        transformRequest: [function (data, /* headers */) {
          // Do whatever you want to transform the data
      
          return data;
        }],
      
        // `transformResponse` allows changes to the response data to be made before
        // it is passed to then/catch
        transformResponse: [function (data) {
          // Do whatever you want to transform the data
      
          return data;
        }],
      
        // `headers` are custom headers to be sent
        // headers: {
        //   'X-Requested-With': 'XMLHttpRequest',
        //   'Access-Control-Allow-Origin': 'http://localhost:3001',
        //   'Access-Control-Allow-Methods': 'GET, POST'
        // },
        
      
      }
    
    
    )

    

export default axiosInstance;