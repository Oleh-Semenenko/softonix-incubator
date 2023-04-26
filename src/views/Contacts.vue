<template>
  <div class="inline-flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <AppButton @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </AppButton>
  </div>

  <div class="inline-flex gap-4 ml-6">
    <AppInput
      v-model="searchValue"
      placeholder="Search"
    />

    <AppSelect
      v-model="chosenRole"
      :options="roles"
      name="roles"
      class="w-[200px]"
    />
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in filteredContactsByRole"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useContactsStore } from '@/store'

import ContactItem from '@/components/ContactItem.vue'
import AppInput from '@/components/AppInput.vue'
import AppSelect from '@/components/AppSelect.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'

const router = useRouter()

const contactsStore = useContactsStore()
const { contacts, roles } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}

const searchValue = ref('')
const chosenRole = ref('')

// const filteredContacts = computed(() => {
//   const query = searchValue.value.trim().toLowerCase()
//   if (!query) {
//     return contacts.value
//   }

//   return contacts.value.filter(c => c.name.toLowerCase().includes(query) || c.description.toLowerCase().includes(query))
// })

const filteredContactsByRole = computed(() => {
  const query = chosenRole.value.trim().toLowerCase()
  // if (!query) {
  //   return contacts.value
  // }
  console.log(query)
  return contacts.value.filter(c => c.role?.toLowerCase().includes(query))
})
</script>
