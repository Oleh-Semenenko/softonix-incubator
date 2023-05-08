class ContactsService {
  getContacts () {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  createContact ({ name, description }: IContact) {
    return useHttp.post<IContact>('rest/v1/contacts', { name, description })
  }

  deleteContact (contactId: number) {
    return useHttp.delete(`rest/v1/contacts?id=eq.${contactId}`)
  }

  updateContact ({ id, name, description }: IContact) {
    return useHttp.patch<IContact>(`rest/v1/contacts?id=eq.${id}`, { name, description })
  }
}

export const contactsService = new ContactsService()
