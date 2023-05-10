<template>
  <!-- <div
    width="full"
    height="full"
  >
    <el-skeleton
      :animated="true"
      :loading="!isLoaded"
    >
      <template #template>
        <el-skeleton-item variant="image" />
      </template>
      <template #default>
        <img
          v-if="isLoaded"
          v-scroll
          :width="800"
          :height="400"
          :data-src="src"
          :alt="props.alt"
          @load="onLoad"
        >
      </template>
    </el-skeleton>
  </div> -->
  <div
    width="full"
    height="full"
  >
    <img
      v-scroll
      :width="800"
      :height="400"
      :data-src="src"
      :alt="props.alt"
      @load="onLoad"
    >
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  src: string
  alt: string
}>()

const emit = defineEmits(['load', 'error'])

const isLoaded = ref(false)

const placeholder = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'

const src = computed(() => props.src ? props.src : placeholder)

const onLoad = () => {
  isLoaded.value = true
  emit('load')
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
