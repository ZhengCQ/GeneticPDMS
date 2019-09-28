import request from '@/utils/request'

export function glistIndicate(query) {
  return request({
    url: '/geneticDiseases/list_indicate',
    method: 'get',
    params: query
  })
}

export function paddGeneticDiseases(results) {
  return request({
    url: '/geneticDiseases/add_geneticDiseases2',
    method: 'post',
    params: { results }
  })
}

export function peditGeneticDiseases(results) {
  return request({
    url: '/geneticDiseases/edit_geneticDiseases2',
    method: 'post',
    params: { results }
  })
}
export function gdeleteGeneticDiseases(id) {
  return request({
    url: '/geneticDiseases/delete_geneticDiseases',
    method: 'get',
    params: id
  })
}

export function gallDiseaseIndicateClass(secondary_name) {
  return request({
    url: '/geneticDiseases/all_disease_indicate_class',
    method: 'get',
    params: { secondary_name }
  })
}

export function gallDisease(secondary_name) {
  return request({
    url: '/geneticDiseases/all_disease',
    method: 'get',
    params: { secondary_name }
  })
}
