export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const getContacts = () => {
    if (contacts.value.length) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  async function addContact (contact: IContact) {
    try {
      await contactsService.createContact(contact)

      contacts.value.push(contact)
    } catch (error) {
      console.log(error)
    }
  }

  async function updateContact (contact: IContact) {
    try {
      await contactsService.updateContact(contact)

      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      contacts.value[currentIndex] = { ...contact }
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteContact (contact: IContact) {
    try {
      await contactsService.deleteContact(contact.id)

      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      contacts.value.splice(currentIndex, 1)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact
  }
})
