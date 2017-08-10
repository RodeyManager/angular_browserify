
import {API} from './api'

// env: local、dev、stg、prd (当前环境)
let ENV = 'prd';
let host =  ENV == 'local' ? '../../src/mockData/'
            : ENV == 'dev' ? 'http://192.168.1.100:9002/app'
            : ENV == 'stg' ? 'app-test/'
            : ENV == 'prd' ? 'app/' : '';

let time = ENV != 'prd' ? 10 : 60;
let debug = ENV != 'prd';
let apiSuffix = ENV == 'local' ? '.json' : '';
let protocolReg = /^(https?:)?\/\//i;

export let App = {
    env: ENV,
    ServerHost: host,
    method: 'POST',
    sendTime: time,
    debug: debug,
    apiSuffix: apiSuffix,
    // 会员登陆验证
    webServiceUrls: API,
    // 更具key获取api地址
    getWebServiceUrl: function(name: string, host?: string): string {
        let APINAME = App.webServiceUrls[name];
        return protocolReg.test(APINAME) ? APINAME : App.getHosts((host || App.ServerHost) + APINAME + (App.apiSuffix || ''));
    },
    getHosts: function(page?: string): string{
        if(protocolReg.test(page) || /^\.+\//.test(page))  return page;
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + (page ? '/' + page : '');
    }
};

App['indexPage'] = 'index.html';