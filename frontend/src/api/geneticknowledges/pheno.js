import request from '@/utils/request'

export function glistPhenotype(query) {
  return request({
    url: '/geneticDiseases/list_phenotype',
    method: 'get',
    params: query
  })
}

export function paddPhenotypes(results) {
  return request({
    url: '/geneticDiseases/add_phenotypes',
    method: 'post',
    params: { results }
  })
}

export function peditPhenotypes(results) {
  return request({
    url: '/geneticDiseases/edit_phenotypes',
    method: 'post',
    params: { results }
  })
}

export function geditPhenotypes(id) {
  return request({
    url: '/geneticDiseases/delete_phenotype',
    method: 'get',
    params: id
  })
}
