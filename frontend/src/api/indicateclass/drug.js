import request from '@/utils/request'

export function glistIndicateClass(query) {
  return request({
    url: '/drug/list_indicate_class',
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

export function paddDrugClass(results) {
  return request({
    url: '/drug/add_drug_class',
    method: 'post',
    params: { results }
  })
}

export function peditDrugClass(results) {
  return request({
    url: '/drug/edit_drug_class',
    method: 'post',
    params: { results }
  })
}

export function gdeleteDiseaseIndicateClass(id) {
  return request({
    url: '/drug/delete_drug_indicate_class',
    method: 'get',
    params: id
  })
}
