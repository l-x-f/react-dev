import request from '../utils/request'
export default class HomeServer {
    // 获取城市列表https://api.yooqun.com/v1/pc_admin/groups/?page=1&perPage=20
    // https://api.yooqun.com/v1/pc_admin/events/?page=1&perPage=20
    // /v1/pc_admin/users/https://api.yooqun.com/v1/pc_admin/events/528/members/

    static getMenu(params) {
        return request({
            url: 'http://cangdu.org:8001/v2/index_entry',
            method: 'get',
            params: params
        })
    }

    static getList(params) {
        let baseUrl=`https://api.yooqun.com/v1/pc_admin`
        return request({
            url: baseUrl+'/events/337/members/',
            method: 'get',
            params: params
        })
    }


}