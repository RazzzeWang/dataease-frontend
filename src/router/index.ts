import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

export const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    redirect: '/workbranch/index',
    component: () => import('@/layout/index.vue'),
    hidden: true,
    meta: {},
    children: [
      {
        path: 'workbranch',
        name: 'workbranch',
        hidden: true,
        component: () => import('@/views/workbranch/index.vue'),
        meta: { hidden: true }
      }
    ]
  },
  {
    path: '/copilot',
    name: 'copilot',
    component: () => import('@/layout/index.vue'),
    hidden: true,
    meta: {},
    children: [
      {
        path: 'index',
        name: 'cpt',
        hidden: true,
        component: () => import('@/views/copilot/index.vue'),
        meta: { hidden: true }
      }
    ]
  },
  {
    path: '/notSupport',
    name: 'notSupport',
    hidden: true,
    meta: {},
    component: () => import('@/views/mobile/panel/NotSupport.vue')
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    meta: {},
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/admin-login',
    name: 'admin-login',
    hidden: true,
    meta: {},
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/401',
    name: '401',
    hidden: true,
    meta: {},
    component: () => import('@/views/401/index.vue')
  },
  {
    path: '/dvCanvas',
    name: 'dvCanvas',
    hidden: true,
    meta: {},
    component: () => import('@/views/data-visualization/index.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    hidden: true,
    meta: {},
    component: () => import('@/views/dashboard/index.vue')
  },
  {
    path: '/dashboardPreview',
    name: 'dashboardPreview',
    hidden: true,
    meta: {},
    component: () => import('@/views/dashboard/DashboardPreviewShow.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    hidden: true,
    meta: {},
    component: () => import('@/views/chart/index.vue')
  },
  {
    path: '/previewShow',
    name: 'previewShow',
    hidden: true,
    meta: {},
    component: () => import('@/views/data-visualization/PreviewShow.vue')
  },
  {
    path: '/DeResourceTree',
    name: 'DeResourceTree',
    hidden: true,
    meta: {},
    component: () => import('@/views/common/DeResourceTree.vue')
  },
  {
    path: '/dataset-embedded',
    name: 'dataset-embedded',
    hidden: true,
    meta: {},
    component: () => import('@/views/visualized/data/dataset/index.vue')
  },
  {
    path: '/dataset-embedded-form',
    name: 'dataset-embedded-form',
    hidden: true,
    meta: {},
    component: () => import('@/views/visualized/data/dataset/form/index.vue')
  },
  {
    path: '/preview',
    name: 'preview',
    hidden: true,
    meta: {},
    component: () => import('@/views/data-visualization/PreviewCanvas.vue')
  },
  {
    path: '/de-link/:uuid',
    name: 'link',
    hidden: true,
    meta: {},
    component: () => import('@/views/data-visualization/LinkContainer.vue')
  },
  {
    path: '/rich-text',
    name: 'rich-text',
    hidden: true,
    meta: {},
    component: () => import('@/custom-component/rich-text/DeRichTextView.vue')
  },
  {
    path: '/modify-pwd',
    name: 'modify-pwd',
    hidden: true,
    meta: {},
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'index',
        name: 'mpi',
        hidden: true,
        component: () => import('@/views/system/modify-pwd/index.vue'),
        meta: { hidden: true }
      }
    ]
  },
  {
    path: '/chart-view',
    name: 'chart-view',
    hidden: true,
    meta: {},
    component: () => import('@/views/chart/ChartView.vue')
  }
]

export const staticRoutes: AppRouteRecordRaw[] = [
  {
    path: '/workbranch',
    component: 'workbranch',
    hidden: false,
    name: 'workbranch',
    inLayout: true,
    redirect: null,
    meta: {
      title: '工作台',
      icon: null
    },
    children: null,
    plugin: false
  },
  {
    path: '/panel',
    component: 'visualized/view/panel',
    hidden: false,
    name: 'panel',
    inLayout: true,
    redirect: null,
    meta: {
      title: '仪表板',
      icon: null
    },
    children: null,
    plugin: false
  },
  {
    path: '/screen',
    component: 'visualized/view/screen',
    hidden: false,
    name: 'screen',
    inLayout: true,
    redirect: null,
    meta: {
      title: '数据大屏',
      icon: null
    },
    children: null,
    plugin: false
  },
  {
    path: '/data',
    component: null,
    hidden: false,
    name: 'data',
    inLayout: true,
    redirect: null,
    meta: {
      title: '数据准备',
      icon: null
    },
    children: [
      {
        path: 'dataset',
        component: 'visualized/data/dataset',
        hidden: false,
        name: 'dataset',
        inLayout: true,
        redirect: null,
        meta: {
          title: '数据集',
          icon: null
        },
        children: null,
        plugin: false
      },
      {
        path: 'datasource',
        component: 'visualized/data/datasource',
        hidden: false,
        name: 'datasource',
        inLayout: true,
        redirect: null,
        meta: {
          title: '数据源',
          icon: null
        },
        children: null,
        plugin: false
      }
    ],
    plugin: false
  },
  {
    path: '/template-market',
    component: 'template-market',
    hidden: true,
    name: 'template-market',
    inLayout: true,
    redirect: null,
    meta: {
      title: '模板市场',
      icon: null
    },
    children: null,
    plugin: false
  },
  {
    path: '/sys-setting',
    component: null,
    hidden: true,
    name: 'sys-setting',
    inLayout: true,
    redirect: null,
    meta: {
      title: 'i18n_menu.sys-setting',
      icon: null
    },
    children: [
      {
        path: 'parameter',
        component: 'system/parameter',
        hidden: false,
        name: 'parameter',
        inLayout: true,
        redirect: null,
        meta: {
          title: '系统参数',
          icon: 'sys-parameter'
        },
        children: null,
        plugin: false
      },
      {
        path: 'font',
        component: 'system/font',
        hidden: false,
        name: 'font',
        inLayout: true,
        redirect: null,
        meta: {
          title: '字体管理',
          icon: 'icon_font'
        },
        children: null,
        plugin: false
      }
    ],
    plugin: false
  },
  {
    path: '/dataset-form',
    component: 'visualized/data/dataset/form',
    hidden: true,
    name: 'dataset-form',
    inLayout: false,
    redirect: null,
    meta: {
      title: 'i18n_menu.dataset-form',
      icon: null
    },
    children: null,
    plugin: false
  },
  {
    path: '/ds-form',
    component: 'visualized/data/datasource/form',
    hidden: true,
    name: 'datasource-form',
    inLayout: false,
    redirect: null,
    meta: {
      title: 'i18n_menu.datasource-form',
      icon: null
    },
    children: null,
    plugin: false
  },
  {
    path: '/toolbox',
    component: null,
    hidden: true,
    name: 'toolbox',
    inLayout: true,
    redirect: null,
    meta: {
      title: 'i18n_menu.toolbox',
      icon: 'icon_template'
    },
    children: [
      {
        path: 'template-setting',
        component: 'toolbox/template-setting',
        hidden: false,
        name: 'template-setting',
        inLayout: true,
        redirect: null,
        meta: {
          title: '模板管理',
          icon: 'icon_template'
        },
        children: null,
        plugin: false
      }
    ],
    plugin: false
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[]
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Login']
  router.getRoutes().forEach(route => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
