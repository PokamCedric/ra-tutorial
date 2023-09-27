import http from "../http-common";
import IPost from "../interfaces/post.interface";
const resource = "posts";


const getAll = () => {
  return http.get<Array<IPost>>(`/${resource}`);
};

const get = (id: String) => {
  return http.get<IPost>(`/${resource}/${id}`);
};

const create = (data: IPost) => {
  return http.post<IPost>(`/${resource}`, data);
};

const update = (id: String, data: IPost) => {
  return http.put<any>(`/${resource}/${id}`, data);
};

const remove = (id: String) => {
  return http.delete<any>(`/${resource}/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/${resource}`);
};

const findByTitle = (title: string) => {
  return http.get<Array<IPost>>(`/${resource}?title=${title}`);
};

const PostAxiosService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default PostAxiosService;

