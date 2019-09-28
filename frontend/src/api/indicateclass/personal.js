import request from '@/utils/request'

export function glistIndicateClass(query) {
  return request({
    url: '/personal/list_indicate_class',
    method: 'get',
    params: query
  })
}

export function gallPrimary(name) {
  return request({
    url: '/disease/all_primary',
    method: 'get',
    params: { name }
  })
}

export function gallSecondary(primary_name) {
  return request({
    url: '/query/all_secondary',
    method: 'get',
    params: { primary_name }
  })
}

export function gallIndicateClass(secondary_name) {
  return request({
    url: '/disease/all_disease_indicate_class',
    method: 'get',
    params: { secondary_name }
  })
}

export function paddIndicateClass(results) {
  return request({
    url: '/personal/add_personal_class',
    method: 'post',
    params: { results }
  })
}

export function peditIndicateClass(results) {
  return request({
    url: '/personal/edit_personal_class',
    method: 'post',
    params: { results }
  })
}

export function gdeleteIndicateClass(id) {
  return request({
    url: '/disease/delete_disease_indicate_class',
    method: 'get',
    params: id
  })
}
