import request from '@/utils/request'
export function gallSecondary(primary_name) {
  return request({
    url: '/query/all_secondary',
    method: 'get',
    params: { primary_name }
  })
}

export function gfindGene(primary_code, gene_name) {
  return request({
    url: '/query/find_gene',
    method: 'get',
    params: { primary_code, gene_name }
  })
}
