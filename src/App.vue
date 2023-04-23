<template>
  <div class="max-w-[1440px] p-6">
    <h3 class="font-medium m-0 inline-block">Contact list</h3>
    <button
      type="button"
      class="ml-5 hover:text-blue-500"
      @click="() => isEmptyForm = true"
    >
      Add contact
    </button>

    <div class="contact-list grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
      <ContactItem
        v-if="isEmptyForm"
        :is-new-card="true"
        :contact="{id: 0,
                   name: '',
                   description: '',
                   image: ''}"
        @create="createNewCard"
        @cancel="isEmptyForm = false"
      />
      <ContactItem
        v-for="(contact, index) in contacts"
        :key="contact.id"
        :contact="contact"
        @delete="deleteContact(index)"
        @save="onContactSave($event, index)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IContact } from '@/types'
import ContactItem from '@/components/ContactItem.vue'
// import NewEmptyCard from '@/components/NewEmptyCard.vue'

const contacts = ref<IContact[]>([
  {
    id: 1,
    name: 'Esther Howard',
    description: 'Forward Response Developer',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 2,
    name: 'Jane Cooper',
    description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 3,
    name: 'Cody Fisher',
    description: 'Product Directives Officer',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
])

function deleteContact (index: number) {
  contacts.value.splice(index, 1)
}

function onContactSave (contact: IContact, index: number) {
  contacts.value[index] = { ...contact }
}

const isEmptyForm = ref(false)

function createNewCard (newData: IContact) {
  contacts.value.unshift(newData)
  isEmptyForm.value = false
}
</script>
