import request from '../utils/request'
export default class HomeServer {
    // 获取城市列表https://api.yooqun.com/v1/pc_admin/groups/?page=1&perPage=20
    // https://api.yooqun.com/v1/pc_admin/events/?page=1&perPage=20
    // /v1/pc_admin/users/https://api.yooqun.com/v1/pc_admin/events/528/members/
    //获取菜单
    static getMenu(params) {
        return request({
            url: '/v2/index_entry',
            method: 'get',
            params: params
        })
    }
    // 获取商铺列表
    static getShoppingList(params) {
        // 示例：
        // http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762
        return request({
            url: '/shopping/restaurants?latitude=31.22967&longitude=121.4762',
            method: 'get',
            params: params
        })
    }
    // 获取商铺详情    
    static getShoppingInfo(id) {
        // 示例：
        // http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762
        return request({
            url: `/shopping/restaurants/${id}`,
            method: 'get',

        })
    }


}