import request from '@/utils/request'

export function glistGene(query) {
  return request({
    url: '/drug/list_gene_relation',
    method: 'get',
    params: query
  })
}

export function paddGene(results) {
  return request({
    url: '/drug/add_gene',
    method: 'post',
    params: { results }
  })
}

export function peditGene(results) {
  return request({
    url: '/geneticDiseases/edit_gene',
    method: 'post',
    params: { results }
  })
}

export function gdeleteGene(id) {
  return request({
    url: '/drug/delete_gene',
    method: 'get',
    params: id
  })
}

export function gdetailsPhenotypeMIMnum(phenotypeMIMnum) {
  return request({
    url: '/geneticDiseases/details_phenotypeMIMnum',
    method: 'get',
    params: { phenotypeMIMnum }
  })
}

export function gqueryPhenotypeMIMnum(phenotypeMIMnum) {
  return request({
    url: '/geneticDiseases/query_phenotypeMIMnum',
    method: 'get',
    params: { phenotypeMIMnum }
  })
}
