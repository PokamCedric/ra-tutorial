import http from "../http-common";
import IPost from "../interfaces/post.interface";

const getAll = () => {
  return http.get<Array<IPost>>("/posts");
};

const get = (id: any) => {
  return http.get<IPost>(`/posts/${id}`);
};

const create = (data: IPost) => {
  return http.post<IPost>("/posts", data);
};

const update = (id: any, data: IPost) => {
  return http.put<any>(`/posts/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/posts/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/posts`);
};

const findByTitle = (title: string) => {
  return http.get<Array<IPost>>(`/posts?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;