<template>
  <div
    class="w-full h-full"
  >
    <el-skeleton :loading="isLoading" class="w-[300px] h-full" animated>
      <template #template>
        <el-skeleton-item style="width: 100%; height: 100%" variant="image" />
      </template>
      <template v-if="imageError" #default>
        <img
          :src="placeholder"
        >
      </template>
    </el-skeleton>

    <img
      v-scroll
      class="object-cover"
      :data-src="src"
      :alt="imageError ? '' : props.alt"
      @load="onImageLoad"
      @error="onImageError"
    >
  </div>
</template>

<script lang="ts" setup>
import placeholder from '@/assets/images/placeholder.png'
const props = defineProps<{
  src: string
  alt: string
}>()
const emit = defineEmits(['error', 'load'])
const isLoading = ref(true)
const imageError = ref(false)

const src = computed(() => imageError.value ? placeholder : props.src)

const onImageLoad = () => {
  isLoading.value = false

  emit('load')
}

const onImageError = () => {
  imageError.value = true
  isLoading.value = false

  emit('error')
}

const vScroll = {
  mounted: (el: HTMLImageElement) => {
    function loadImage () {
      if (el) {
        el.src = el.dataset.src
      }
    }

    function createObserver () {
      const options = {
        root: null,
        rootMargin: '300px',
        threshold: 0
      }
      const observer = new IntersectionObserver(entries => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            loadImage()
            observer.unobserve(entry.target)
          }
        })
      }, options)
      observer.observe(el)
    }
    if (!window.IntersectionObserver) {
      loadImage()
    } else {
      createObserver()
    }
  }
}
</script>
