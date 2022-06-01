import request from '../utils/request'
import API from './constants'
export const getSearchs = (name) => request({
    url:API.Search_API,
    method: 'GET',
    params:{
        name,
    },
})
