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

      successNotification('The contact has been added')
      contacts.value.push(contact)
    } catch (error) {
      errorNotification('Something goes wrong')
    }
  }

  async function updateContact (contact: IContact) {
    try {
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      await contactsService.updateContact(contact)

      successNotification('The contact has been updated')
      contacts.value[currentIndex] = { ...contact }
    } catch (error) {
      errorNotification('Something goes wrong')
    }
  }

  async function deleteContact (contact: IContact) {
    try {
      await contactsService.deleteContact(contact.id)

      successNotification('The contact has been deleted')
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      contacts.value.splice(currentIndex, 1)
    } catch (error) {
      errorNotification('Something goes wrong')
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
