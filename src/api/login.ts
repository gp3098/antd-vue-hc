import request from '@/utils/request';
interface FormState {
  userName: string;
  password: string;
}
// 登录方法
export function login(data: FormState): Promise<unknown> {
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
