<!-- First method -->

<template>
  <div class="rounded-lg bg-white shadow relative flex flex-col">
    <div class="p-6 pb-2 flex-grow">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="editMode || isNewCard">
            <input
              ref="inputRef"
              v-model="localContact.name"
              type="text"
              class="block text-gray w-full border border-blue-500 rounded-lg px-2 py-1"
              placeholder="Enter your name"
            >
            <input
              v-model="localContact.description"
              type="text"
              class="block mt-1 text-gray w-full border border-blue-500 rounded-lg px-2 py-1"
              placeholder="Enter description"
            >
            <input
              v-model="localContact.image"
              type="text"
              class="block mt-1 text-gray w-full border border-blue-500 rounded-lg px-2 py-1"
              placeholder="Enter image url"
            >
          </template>

          <template v-else>
            <p class="font-medium">{{ contact.name }}</p>
            <p class="text-gray mt-1 truncate">
              {{ contact.description }}
            </p>
          </template>
        </div>
        <img
          v-if="!isNewCard"
          class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
          :src="contact.image" alt="contact-logo"
        >
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="editMode || isNewCard">
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="isNewCard ? cancelForm() : editMode = false"
          >Cancel</span>

          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            :class="{'opacity-60 cursor-not-allowed': isBtnDisabled }"
            @click="isNewCard ? createCard() : onSave()"
          >Save</span>
        </template>

        <template v-else>
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="triggerEditMode"
          >Edit</span>

          <span
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >Delete</span>
        </template>
      </div>
    </div>

    <div v-if="!isNewCard" class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, watchEffect, onMounted } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save', 'create', 'cancel'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()

  const { name, description } = localContact.value
  if (!name || !description) {
    isBtnDisabled.value = true
  }
}

function onSave () {
  createDefaultAvatar()
  if (!isBtnDisabled.value) {
    emit('save', localContact.value)
    editMode.value = false
  }
}

const isBtnDisabled = ref(false)

const isNewCard = ref(false)

function createCard () {
  createDefaultAvatar()
  if (!isBtnDisabled.value) {
    emit('create', localContact.value)
    editMode.value = false
    isNewCard.value = false
  }
}

function cancelForm () {
  emit('cancel')
}

function createDefaultAvatar () {
  if (!localContact.value.image) {
    localContact.value.image = 'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg'
  }
}

watchEffect(() => {
  isBtnDisabled.value = !localContact.value.name || !localContact.value.description
})

onMounted(() => {
  if (props.contact.id === 0) {
    isNewCard.value = true
  }
})

</script>

<!-- Second method -->

<!-- <template>
  <div class="rounded-lg bg-white shadow relative flex flex-col">
    <div class="p-6 pb-2 flex-grow">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="editMode || isNewCard">
            <input
              ref="inputRef"
              v-model="localContact.name"
              type="text"
              class="block text-gray w-full border border-blue-500 rounded-lg px-2 py-1"
              placeholder="Enter your name"
            >
            <input
              v-model="localContact.description"
              type="text"
              class="block mt-1 text-gray w-full border border-blue-500 rounded-lg px-2 py-1"
              placeholder="Enter description"
            >
            <input
              v-model="localContact.image"
              type="text"
              class="block mt-1 text-gray w-full border border-blue-500 rounded-lg px-2 py-1"
              placeholder="Enter image url"
            >
          </template>

          <template v-else>
            <p class="font-medium">{{ contact.name }}</p>
            <p class="text-gray mt-1 truncate">
              {{ contact.description }}
            </p>
          </template>
        </div>
        <img
          v-if="!isNewCard"
          class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
          :src="contact.image" alt="contact-logo"
        >
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="editMode || isNewCard">
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="isNewCard ? cancelForm() : editMode = false"
          >Cancel</span>

          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            :class="{'opacity-60 cursor-not-allowed': isBtnDisabled }"
            @click="isNewCard ? createCard() : onSave()"
          >Save</span>
        </template>

        <template v-else>
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="triggerEditMode"
          >Edit</span>

          <span
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >Delete</span>
        </template>
      </div>
    </div>

    <div v-if="!isNewCard" class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, watchEffect } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

const props = defineProps<{
  contact: IContact
  isNewCard?: boolean
}>()

const emit = defineEmits(['delete', 'save', 'create', 'cancel'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
  const { name, description } = localContact.value
  if (!name || !description) {
    isBtnDisabled.value = true
  }
}

function onSave () {
  createDefaultAvatar()
  if (!isBtnDisabled.value) {
    emit('save', localContact.value)
    editMode.value = false
  }
}

const isBtnDisabled = ref(false)

function createCard () {
  createDefaultAvatar()
  if (!isBtnDisabled.value) {
    emit('create', localContact.value)
    editMode.value = false
  }
}

function cancelForm () {
  emit('cancel')
}

function createDefaultAvatar () {
  if (!localContact.value.image) {
    localContact.value.image = 'https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg'
  }
}

watchEffect(() => {
  isBtnDisabled.value = !localContact.value.name || !localContact.value.description
})
</script> -->
