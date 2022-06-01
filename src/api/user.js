import request from '../utils/request'
import API from './constants'
export const getUser = (info) => request({
    url:API.UserInfo,
    method: 'GET',
    headers:info.headers,
    params: {
        name:info.name,
    },
})
export const changAva = (info) => request({
    url:API.ChangAva,
    method: 'POST',
    headers:info.headers,
    data: {
        name:info.name,
        avatarUrl:info.avatarUrl,
        password:info.password,
    },
})
export const getCode = (email) => request({
    url: API.Code,
    method: 'GET',
    params: {
        email,
    },
})
export const getRegister = (info) => request({
    url: API.Register,
    method: 'POST',
    data: {
        username: info.username,
        password: info.password,
        code: info.code,
    },
})
export const postLogin = (info) => request({
    url: API.Login,
    method: 'POST',
    data: {
        username: info.username,
        password: info.password,
    },
})