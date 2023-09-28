import http from "../http-common";

export default <Type>() => ({

   getAll : (resource : String, params : any) => {
    return http.get<Array<Type>>(`/${resource}`);
  },
  
   get : (resource : String, params : any) => {
    return http.get<Type>(`/${resource}/${params.id}`);
  },
  
   create : (resource : String, params : any) => {
    return http.post<Type>(`/${resource}`, params.data);
  },
  
   update : (resource : String, params : any) => {
    return http.put<any>(`/${resource}/${params.id}`, params.data);
  },
  
   remove : (resource : String, params : any) => {
    return http.delete<any>(`/${resource}/${params.id}`);
  },
  
   removeAll : (resource : String, params : any) => {
    return http.delete<any>(`/${resource}`);
  },
  
   findByTitle : (resource : String, params : any) => {
    return http.get<Array<Type>>(`/${resource}?params.title=${params.title}`);
  },

});


