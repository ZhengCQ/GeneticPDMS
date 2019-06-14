import request from '@/utils/request'

export function glistDiseaseIndicateClass(query) {
  return request({
    url: '/geneticDiseases/list_disease_indicate_class',
    method: 'get',
    params: query
  })
}

export function gdeleteGeneticDiseasesClass(query) {
  return request({
    url: '/geneticDiseases/delete_geneticDiseases_class',
    method: 'get',
    params: query
  })
}

export function gallSecondary(primary_name) {
  return request({
    url: '/query/all_secondary',
    method: 'get',
    params: { primary_name }
  })
}

export function gallDiseaseIndicateClass(secondary_name) {
  return request({
    url: '/geneticDiseases/all_disease_indicate_class',
    method: 'get',
    params: { secondary_name }
  })
}

export function paddGeneticDiseasesClass(results) {
  return request({
    url: '/geneticDiseases/add_geneticDiseases_class',
    method: 'post',
    params: { results }
  })
}

export function peditGeneticDiseasesClass(results) {
  return request({
    url: '/geneticDiseases/edit_geneticDiseases_class',
    method: 'post',
    params: { results }
  })
}
