import { AxiosResponse } from 'axios'
import axiosService from 'src/services/axios.service'

const test = true
const axiosUser = axiosService(test ? 'http://localhost:8080/users' : 'apps/users')

interface DataParams {
  q: string
  role: string
  status: string
  currentPlan: string
}
function getUsers(params: DataParams) {
  return axiosUser.getMany(test ? '' : 'list', params)
}

function addUser(data: { [key: string]: number | string }) {
  return axiosUser.create(test ? '' : 'add-user', data)
}

function updateUser(payload: { id: number | string; data: { [key: string]: number | string } }) {
  const { id, data } = payload
  return axiosUser.update('', { id: id, data: data })
}

function deleteUser(id: number | string) {
  return axiosUser.delete(test ? '' : 'delete', id)
}

export default {
  getUsers,
  addUser,
  updateUser,
  deleteUser
}
