import request from '@/utils/requestNew'
let BASE_CUSTOMER_SERVICE = 'customer-service'
export function cluecustomer_getClueCustomerByid(id) { //客户详情
    return request({
        url: BASE_CUSTOMER_SERVICE + '/m/cluecustomer/getClueCustomerByid?id=' + id,
        method: 'get'
    })
}
export function clueCustomerFollowUser_selectFollowMsgList(data,loading = false) { // 当前客户跟进信息
    return request({
        url: BASE_CUSTOMER_SERVICE + '/clueCustomerFollowUser/selectFollowMsgList',
        method: 'get',
        headers: {
            noLoading: loading
        },
        params: data
    })
}
export function clueCustomerFollowUser_message(id) { // 是否有新消息
    return request({
        url: BASE_CUSTOMER_SERVICE + '/clueCustomerFollowUser/user-message-receive?clueCustomerNo=' + id,
        method: 'get',
        headers: {
            noLoading: true
        }
    })
}
export function group_getMobileCustomerGroupPage(data) { // 获取客户群列表
    return request({
        url: BASE_CUSTOMER_SERVICE + '/group/getMobileCustomerGroupPage',
        method: 'get',
        params: data
    })
}
export function group_getMobileGroupUserlist(id) { // 获取群群员列表
    return request({
        url: BASE_CUSTOMER_SERVICE + '/group/getMobileGroupUserlist?chatId=' + id,
        method: 'get'
    })
}
export function clueCustomerFollowUser_addCommentInfo(data) { // 添加评论回复
    return request({
        url: BASE_CUSTOMER_SERVICE + '/clueCustomerFollowUser/addCommentInfo',
        method: 'post',
        data
    })
}
export function clueCustomerFollowUser_queryCommentInfoList(data) { // 查询评论回复
    return request({
        url: BASE_CUSTOMER_SERVICE + '/clueCustomerFollowUser/queryCommentInfoList',
        method: 'get',
        headers: {
            noLoading: true
        },
        params: data
    })
}
export function clueCustomerFollowUser_giveTheThumbsUp(data) { // 点赞
    return request({
        url: BASE_CUSTOMER_SERVICE + '/clueCustomerFollowUser/giveTheThumbsUp',
        method: 'post',
        headers: {
            noLoading: true
        },
        params: data
    })
}
export function cluecustomeraccessory_getList(id) { // 获取附件列表
    return request({
        url: BASE_CUSTOMER_SERVICE + '/cluecustomeraccessory/getList?clueCustomerNo=' + id,
        method: 'get'
    })
}
export function cluecustomeraccessory_delupload(data) { // 删除附件
    return request({
        url: BASE_CUSTOMER_SERVICE + '/cluecustomeraccessory/delupload',
        method: 'get',
        params: data
    })
}
export function cluecustomer_toupdate(id){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/cluecustomer/toupdate?clueCustomerNo=' + id,
        method: 'get',
    })
}
export function cluecustomer_gettag(id){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/cluecustomer/gettag?clueCustomerNo=' + id,
        method: 'get',
    })
}
export function cluecustomer_update(data){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/cluecustomer/update',
        method: 'get',
        params: data
    })
}
export function cluecustomer_addtag(data){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/cluecustomer/addtag',
        method: 'post',
        data
    })
}
export function cluecustomer_updPertag(data){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/cluecustomer/updPertag',
        method: 'post',
        data
    })
}
export function cluecustomer_deltag(data){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/cluecustomer/deltag',
        method: 'post',
        data
    })
}
export function cluecustomer_updCorptag(id,data){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/cluecustomer/updCorptag/' + id,
        method: 'post',
        data
    })
}
export function group_getGroupDetail(id){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/group/getGroupDetail?chatId=' + id,
        method: 'get',
    })
}
export function group_getGroupUserPage(data){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/group/getGroupUserPage',
        method: 'get',
        params: data
    })
}
export function grouptag_list(){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/grouptag/list',
        method: 'get',
    })
}
export function groupUserTag_list(id){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/groupUserTag/list?chatId=' + id,
        method: 'get',
    })
}
export function groupUserTag_addGroupTag(data){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/groupUserTag/addGroupTag',
        method: 'get',
        params: data
    })
}
export function group_getGroupTodayDetail(id){
    return request({
        url: BASE_CUSTOMER_SERVICE + '/group/getGroupTodayDetail?chatId=' + id,
        method: 'get'
    })
}