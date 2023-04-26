<template>
  <select
    :name="name"
    class="rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm p-2 block w-full"
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option
      value=""
      disabled
    >
      {{ defaultOption }}
    </option>
    <option
      v-for="option in options"
      :key="option"
      :value="option"
      placeholder="Select a role"
    >
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts" setup>
defineProps<{
  name: string
  options: string[]
  modelValue: string
  defaultOption: string
}>()

defineEmits(['update:modelValue'])
</script>
