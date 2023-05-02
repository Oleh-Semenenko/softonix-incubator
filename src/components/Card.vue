<template>
  <el-card>
    <slot name="title">
      <h3 v-if="title" class="font-semibold pb-4">{{ title }}</h3>
    </slot>

    <div
      class="flex-grow"
      :class="[
        { 'pt-6': !title && !$slots.title},
        !!$slots.footer ? 'pb-2' : 'pb-6'
      ]"
    >
      <slot />
    </div>

    <div class="shrink-0">
      <slot name="footer" />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>
