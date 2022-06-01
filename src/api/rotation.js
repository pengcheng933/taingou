import request from '../utils/request'
import API from './constants'
export const getRotations = () => request({
    url:API.Rotation_API,
    method: 'GET',
})
export const getLists = (skip,num) => request({
    url:API.List_API,
    method:'GET',
    params:{
        skip,
        num,
    },
})
export const getShop = (id) => request({
    url: API.Find_Shop,
    method:'GET',
    params:{
        id,
    },
})