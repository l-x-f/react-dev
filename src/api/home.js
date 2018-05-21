import request from '../utils/request'
export default class HomeServer {
    // 获取城市列表https://api.yooqun.com/v1/pc_admin/groups/?page=1&perPage=20
    // https://api.yooqun.com/v1/pc_admin/events/?page=1&perPage=20
    // /v1/pc_admin/users/

    static getMenu(params) {
        return request({
            url: '/v2/index_entry',
            method: 'get',
            params: params
        })
    }


}