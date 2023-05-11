import type { RouteRecordRaw } from 'vue-router'

const imagesRoutesNames = {
  loadImages: 'loadImages'
}

const imagesRoutes: Array<RouteRecordRaw> = [
  {
    path: '/lazy-load',
    name: imagesRoutesNames.loadImages,
    component: () => import('@/views/images/ImagesLoading.vue')
  }
]

export {
  imagesRoutesNames,
  imagesRoutes
}
