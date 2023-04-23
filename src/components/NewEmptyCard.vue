<!-- <template>
  <div class="rounded-lg bg-white shadow flex flex-col p-6 pb-2">
    <form class="space-y-1">
      <div class="flex justify-between">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="newContactData.name"
          type="text"
          class="font-medium text-sm  border border-blue-500 rounded-lg px-1 py-1"
        >
      </div>
      <div class="flex justify-between">
        <label for="description">Description</label>
        <input
          id="description"
          v-model="newContactData.description"
          type="text"
          class="font-medium text-sm  border border-blue-500 rounded-lg px-1 py-1"
        >
      </div>
      <div class="flex justify-between">
        <label for="image">Image</label>
        <input
          id="image"
          v-model="newContactData.image"
          type="text"
          class="font-medium text-sm  border border-blue-500 rounded-lg px-1 py-1"
        >
      </div>
    </form>

    <div class="self-end space-x-2">
      <span
        class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
      >Cancel</span>

      <span
        class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
        @click="onContactCreate"
      >Save</span>
    </div>
  </div>
</template> -->

<template>
  <div class="p-6 pb-2">
    <form class="space-y-1">
      <div class="flex justify-between">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="newContactData.name"
          type="text"
          class="font-medium text-sm  border border-blue-500 rounded-lg px-1 py-1"
        >
      </div>
      <div class="flex justify-between">
        <label for="description">Description</label>
        <input
          id="description"
          v-model="newContactData.description"
          type="text"
          class="font-medium text-sm  border border-blue-500 rounded-lg px-1 py-1"
        >
      </div>
      <div class="flex justify-between">
        <label for="image">Image</label>
        <input
          id="image"
          v-model="newContactData.image"
          type="text"
          class="font-medium text-sm  border border-blue-500 rounded-lg px-1 py-1"
        >
      </div>
    </form>

    <div class="self-end space-x-2">
      <span
        class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
      >Cancel</span>

      <span
        class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
        @click="onContactCreate"
      >Save</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IContact } from '@/types'

const emit = defineEmits(['create'])

const newContactData = ref<IContact>({
  id: Date.now(),
  name: '',
  description: '',
  image: ''
})

function onContactCreate () {
  emit('create', newContactData.value)
}
</script>

    <!-- :class="{'opacity-60 cursor-not-allowed': isBtnDisabled }" -->
