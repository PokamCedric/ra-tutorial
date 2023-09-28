import stringify from 'query-string';
import { fetchUtils, DataProvider, GetListResult, GetOneResult, GetManyResult, GetManyReferenceResult } from 'ra-core';
import http from "../http-common";
import { UpdateResult } from 'mongodb';

/**
 * Maps react-admin queries to a json-server powered REST API
 *
 * @see https://github.com/typicode/json-server
 *
 * @example
 *
 * getList          => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * getOne           => GET http://my.api.url/posts/123
 * getManyReference => GET http://my.api.url/posts?author_id=345
 * getMany          => GET http://my.api.url/posts?id=123&id=456&id=789
 * create           => POST http://my.api.url/posts/123
 * update           => PUT http://my.api.url/posts/123
 * updateMany       => PUT http://my.api.url/posts/123, PUT http://my.api.url/posts/456, PUT http://my.api.url/posts/789
 * delete           => DELETE http://my.api.url/posts/123
 *
 * @example
 *
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 * import jsonServerProvider from 'ra-data-json-server';
 *
 * import { PostList } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}>
 *         <Resource name="posts" list={PostList} />
 *     </Admin>
 * );
 *
 * export default App;
 */
export default (apiUrl : String, httpClient = fetchUtils.fetchJson): DataProvider => ({
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            ...fetchUtils.flattenObject(params.filter),
            _sort: field,
            _order: order,
            _start: (page - 1) * perPage,
            _end: page * perPage,
        };
        // const url = `${apiUrl}/${resource}?${stringify(query)}`;
        
        return http.get(`/${resource}`).then((res) => {
          console.log("res.data", typeof(res.data));
            return <GetListResult>{
                data: res.data,
                total: Object.entries(res.data).length,
            };
        });
    },

    getOne: (resource, params) => {
        return http.get(`/${resource}/${params.id}`).then((res) => <GetOneResult>({ data: res.data }));
    },

    getMany: (resource, params) => {
        const query = {
            id: params.ids,
        };
        // const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return http.get(`/${resource}`)
        .then((res) => <GetManyResult>({ data: res.data }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            ...fetchUtils.flattenObject(params.filter),
            [params.target]: params.id,
            _sort: field,
            _order: order,
            _start: (page - 1) * perPage,
            _end: page * perPage,
        };
        // const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return http.get(`/${resource}`).then((res) => {
          return <GetManyReferenceResult>{
            data: res.data,
            total: Object.entries(res.data).length,
        };
      });
    },

    update: (resource, params) => http.put(`/${resource}/${params.id}`, params.data).then((res) => ({ data: res.data })),

    // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
    updateMany: (resource, params) =>
    Promise.all(
      params.ids.map(id =>
        http.put(`/${resource}/${id}`, params.data)
      )
  ).then(res => ({ data: res.map(({ data }) => data.id) })),

    create: (resource, params) => http.post(`/${resource}`, params.data)
    .then(({ data }) => ({
      data: { ...params.data, id: data.id } as any,
  })),

    delete: (resource, params) => http.delete(`/${resource}/${params.id}`).then(({ data }) => ({ data: data })),

    // json-server doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
    deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map(id =>
        http.delete(`/${resource}/${id}`)
      )
  ).then(res => ({ data: res.map(({ data }) => data.id) })),

});
