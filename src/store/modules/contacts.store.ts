import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IContact } from '@/types'

export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([
    {
      id: 1,
      name: 'Esther Howard',
      description: 'Forward Response Developer',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'developer'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'manager'
    },
    {
      id: 3,
      name: 'Cody Fisher',
      description: 'Product Directives Officer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'qa'
    }
  ])

  const roles = ref(['Developer', 'Manager', 'QA'])
  const sortingWays = ref(['default', 'ascending', 'descending'])
  const sortMode = ref('')
  const chosenRole = ref('')
  const searchValue = ref('')

  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }

  function normalizedQuery (query: string) {
    return query.trim().toLowerCase()
  }

  const filteredContacts = computed(() => {
    const query = normalizedQuery(searchValue.value)
    const norm = normalizedQuery(chosenRole.value)

    return contacts.value
      .filter(c => c.name.toLowerCase().includes(query) || c.description.toLowerCase().includes(query))
      .filter(c => c.role?.toLowerCase().includes(norm))
      .sort((a, b) => {
        if (sortMode.value === 'ascending') {
          return a.name.localeCompare(b.name)
        } else if (sortMode.value === 'descending') {
          return b.name.localeCompare(a.name)
        } else {
          return 0
        }
      })
  })

  return {
    contacts,
    roles,
    sortingWays,
    searchValue,
    sortMode,
    chosenRole,
    addContact,
    deleteContact,
    updateContact,
    filteredContacts
  }
})
