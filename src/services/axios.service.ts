// ** Axios Imports
import axios from 'axios'

export default (resource: string) => ({
  getList: async (path: string) => axios.get(`/${resource}/${path}`),

  getMany: (path: string, params: any) =>
    axios.get(`${resource}/${path}`, {
      params: params
    }),

  getOne: (path: string, params: any) => axios.get(`${resource}/${path}/${params.id}`),

  update: (path: string, params: any) => axios.put(`${resource}/${path}/${params.id}`, params.data),

  create: (path: string, params: any) => axios.post(`${resource}/${path}/`, params.data),

  delete: (path: string, params: any) => axios.delete(`${resource}/${path}/${params.id}`)
})
