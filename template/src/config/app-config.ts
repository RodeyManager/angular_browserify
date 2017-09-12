
import { API } from './api'

// env: local(默认)、dev、stg、prd
let ENV = 'local';
let protocolReg: RegExp = /^(https?:)?\/\//i;

export let App = {
    env: ENV,
    ServerHost: getServerHost(),
    method: 'POST',
    sendTime: ENV != 'prd' ? 10 : 60,
    debug: ENV != 'prd',
    apiSuffix: ENV == 'local' ? '.json' : '',
    webServiceUrls: API,

    // 根据接口名获取api地址
    getWebServiceUrl: function(name: string, host?: string): string {
        let APINAME = App.webServiceUrls[name];
        return protocolReg.test(APINAME) ? APINAME : App.getHosts((host || App.ServerHost) + APINAME + (App.apiSuffix || ''));
    },
    getHosts: function(page?: string): string{
        if(protocolReg.test(page) || /^\.+\//.test(page))  return page;
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + (page ? '/' + page : '');
    }
};

function getServerHost(){
    return  ENV === 'local' ? '../../src/mockData/' :
            ENV === 'dev'   ? getDevServerHost() :
            ENV === 'stg'   ? 'test-app/' :
            ENV === 'prd'   ? 'app/' : '';
}

function getDevServerHost(){
    return 'http://192.168.1.100:9002/app'; //(Rodey Luo)
}