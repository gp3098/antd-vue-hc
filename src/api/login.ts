import request from '@/utils/request';
import Cookies from 'js-cookie';
import { AxiosResponse } from 'axios';
interface FormState {
  userName: string;
  password: string;
}
interface loginDataResponse {
  success: boolean;
  data: {
    token: string;
    userName: string;
  };
}
// 登录方法
export function login(data: FormState): Promise<AxiosResponse> {
  //   const data: FormState = { username, password, };
  return request({
    url: '/user/login',
    method: 'post',
    data: data,
  });
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get',
  });
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post',
  });
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    method: 'get',
  });
}
