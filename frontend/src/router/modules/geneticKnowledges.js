import Layout from '@/views/layout/Layout'

const geneticKnowledgesRouter = {
  path: '/geneticknowledges',
  component: Layout,
  redirect: '/table/index',
  name: 'geneticKnowledges',
  meta: { title: '遗传素材库', icon: 'knowledges' },
  children: [
    {
      path: 'gene',
      component: () => import('@/views/geneticknowledges/Gene/index'),
      name: 'Gene',
      meta: { title: '基因', icon: 'jibing', noCache: false }
    },
    {
      path: 'phenotype',
      component: () => import('@/views/geneticknowledges/Pheno/index'),
      name: 'Phenotype',
      meta: { title: '表型', icon: 'tezheng', noCache: false }
    },
    {
      path: 'site',
      component: () => import('@/views/svg-icons/index'),
      name: 'Sites',
      meta: { title: '位点', icon: 'danjiyinyichuanbing', noCache: false }
    }
  ]
}

export default geneticKnowledgesRouter
