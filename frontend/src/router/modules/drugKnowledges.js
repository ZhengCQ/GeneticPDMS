import Layout from '@/views/layout/Layout'

const drugKnowledgesRouter = {
  path: '/drugknowledges',
  component: Layout,
  redirect: '/table/index',
  name: 'drugKnowledges',
  meta: { title: '药物素材库', icon: 'knowledges' },
  children: [
    {
      path: 'gene',
      component: () => import('@/views/drugknowledges/Gene/index'),
      name: 'Gene',
      meta: { title: '基因', icon: 'jibing', noCache: false }
    },
    {
      path: 'site',
      component: () => import('@/views/svg-icons/index'),
      name: 'Sites',
      meta: { title: '位点', icon: 'danjiyinyichuanbing', noCache: false }
    }
  ]
}

export default drugKnowledgesRouter
