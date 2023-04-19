<template>
  <div :class="wrapperClasses">
    <button
      class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center"
    >
      <svg class="arrow-icon w-[6px] h-[12px] stroke-gray-dark">
        <use href="../media/symbol-defs.svg#icon-arrow_left" />
      </svg>
    </button>
    <button
      class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center"
    >
      <svg class="arrow-icon w-[6px] h-[12px] stroke-gray-dark">
        <use href="../media/symbol-defs.svg#icon-arrow_right" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({
  classes: { type: String }
})

const wrapperClasses = ref(props.classes)
</script>
