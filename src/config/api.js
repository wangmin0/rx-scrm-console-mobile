import { http } from '../utils/request'
import request from '@/utils/requestNew'
const userServiceApi = '/user-service'
const wechatServiceApi = '/wechat-service'
const materialServiceApi = '/material-service'
const customerServiceApi = '/customer-service'

export const Getticket = (data) => {
        return http.get(`${userServiceApi}/m/user/getinticket`, data)
    } // url获取授权信息
export const GetCrop = () => {
        return http.get(`${userServiceApi}/Corp/getCrop`)
    } // 企业详情
export const UsersList = (data) => {
        return http.get(`${userServiceApi}/user/getlist/${data}`)
    } // 企业员工列表
export const UsersInfo = (data) => {
        return http.get(`${userServiceApi}/user/getUser/${data}/info`)
    } // 员工信息详情

export const OffiAccount = (data) => {
        return http.post(
            `${wechatServiceApi}/offi-account/user/${data.code}?corpId=${data.corpId}&userNo=${data.userNo}`
        )
    } // 添加公众号授权后获取的用户信息
export const GetSignature = (data) => {
        return http.get(`${wechatServiceApi}/offi-account/autograph?url=${data}`)
    } // 获取分享签名

// 素材模板
export const ArticleList = (data) => {
        return http.get(`${materialServiceApi}/article/list`, data)
    } // 获取文章列表
export const ArticleDetail = (data) => {
        return http.get(`${materialServiceApi}/article/${data}/detail`)
    } // 获取文章详情
export const AddArticle = (data) => {
        return http.post(`${materialServiceApi}/article`, data)
    } // 新增文章
export const ArticleFromReprint = (data) => {
        return http.get(`${materialServiceApi}/article/wechat_article`, data)
    } // 拉取微信公众号文章

export const SaleDocumentList = (data) => {
        return http.get(`${materialServiceApi}/sale_document/list`, data)
    } // 获取文件列表
export const SaleDocumentDetail = (data) => {
        return http.get(`${materialServiceApi}/sale_document/${data}/detail`)
    } // 获取文件详情
    // 获取海报详情
export const PosterDetail = (data) => {
    return request({
        url: materialServiceApi + `/sale-poster-entity/${data}/detail`,
        method: 'get',
        params: data,
    })
}

export const AddSaleDocument = (data) => {
        return http.post(`${materialServiceApi}/sale_document`, data)
    } // 新增文件

export const PosterList = (data) => {
        return http.get(`${materialServiceApi}/sale-poster-entity/list`, data)
    } // 获取海报列表
export const AddPoster = (data) => {
        return http.post(`${materialServiceApi}/sale-poster-entity`, data)
    } // 添加营销海报

export const MaterialOperation = (data) => {
        return http.post(
            `${materialServiceApi}/material_operation/${data.materialId}`,
            data.model
        )
    } // 上报浏览信息

//商机
export const OpportunitiesList = (data) => {
        return http.get(`${customerServiceApi}/business-opportunities/list/${data}`)
    } // 获取商机
export const AddOpportunities = (data) => {
        return http.post(`${customerServiceApi}/business-opportunities`, data)
    } // 新增商机
export const ModifyOpportunities = (data) => {
        return http.put(`${customerServiceApi}/business-opportunities`, data)
    } // 修改商机
export const DeleteOpportunities = (data) => {
        return http.delete(`${customerServiceApi}/business-opportunities/${data}`)
    } // 删除商机
export const ModifyOpportunitiesStatus = (data) => {
        return http.put(
            `${customerServiceApi}/business-opportunities/status/${data.id}?stageNo=${data.stageNo}&status=${data.status}`
        )
    } // 修改商机对应阶段
export const OpportunitiesStageList = (data) => {
        return http.get(
            `${customerServiceApi}/business-opportunities/stages/${data.corpId}?isEnd=${data.isEnd}`
        )
    } // 获取商机阶段概要信息
export const StageReasonList = (data) => {
        return http.get(
            `${customerServiceApi}/business-opportunities/stage-reason/${data}`
        )
    } // 获取阶段原因
export const ChargeUserInfoList = (data) => {
        return http.get(
            `${customerServiceApi}/business-opportunities/charge-user-info/${data}`
        )
    } // 获取可选商机负责人

export const SelectFollowMsgList = (data) => {
        return http.get(
            `${customerServiceApi}/clueCustomerFollowUser/selectFollowMsgList?clueCustomerNo=${data.clueCustomerNo}&punckStatus=${data.punckStatus}`
        )
    } // 当前客户跟进信息(商机动态)

// 协作人&消息通知
export const MessageNotificatio = (data) => {
        return http.post(
            `${customerServiceApi}/clueCustomerFollowUser/message-notificatio`,
            data
        )
    } // 添加消息通知
export const ReceiveUser = (data) => {
        return http.get(
            `${customerServiceApi}/clueCustomerFollowUser/receive-user?customerNo=${data.customerNo}&isPublic=${data.isPublic}&corpId=${data.corpId}&userName=${data.userName}`
        )
    } // 获取接收人信息
export const UserMessageReceive = (data) => {
        return http.get(
            `${customerServiceApi}/clueCustomerFollowUser/user-message-receive?clueCustomerNo=${data}`
        )
    } // 是否有新信息
    // 全部动态
export const ArticleLists = (data) => {
    return http.post(`${customerServiceApi}/my/queryFollowMsgPage`, data)
}
export const SaleDocumentLists = (data) => {
    return http.post(`${customerServiceApi}/my/queryFollowMsgPage`, data)
}
export const PosterLists = (data) => {
    return http.post(`${customerServiceApi}/my/queryFollowMsgPage`, data)
}

// 获取个人浏览记录
export const material_operation = (data) => {
        return request({
            url: materialServiceApi +
                `/material_operation/${data.materialId}/${data.materialType}/detail`,
            method: 'get',
            params: data,
        })
    }
    // 素材浏览详情
export const material_operation_info = (data) => {
        return request({
            url: materialServiceApi +
                `/material_operation/${data.materialId}/${data.materialType}/info`,
            method: 'get',
            params: data,
        })
    }
    // 复制素材
export const copy_material = (data) => {
    return request({
        url: materialServiceApi +
            `/material_operation/copy-material?materialId=${data.materialId}&materialType=${data.materialType}`,
        method: 'post',
        data: data,
    })
}