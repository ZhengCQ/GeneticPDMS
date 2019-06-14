import request from '@/utils/request'

export function glistGene(query) {
  return request({
    url: '/geneticDiseases/list_gene',
    method: 'get',
    params: query
  })
}

export function paddGene(results) {
  return request({
    url: '/geneticDiseases/add_gene',
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

export function gdeleteGene(gene_name) {
  return request({
    url: '/geneticDiseases/delete_gene',
    method: 'get',
    params: gene_name
  })
}

export function gdetailsPhenotypeMIMnum(phenotypeMIMnum) {
  return request({
    url: '/geneticDiseases/details_phenotypeMIMnum',
    method: 'get',
    params: { phenotypeMIMnum }
  })
}
