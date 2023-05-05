class ContactsService {
  // rest/v1/contacts
  getContacts () {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  createContact (payload: IContactPayload) {
    return useHttp.post<IContact>('rest/v1/contacts', payload)
  }

  deleteContact (contactId: number) {
    return useHttp.delete(`rest/v1/contacts?id=eq.${contactId}`)
  }

  updateContact ({ id, name, description }: IContact) {
    return useHttp.patch<IContact>(`rest/v1/contacts?id=eq.${id}`, { name, description })
  }
}

export const contactsService = new ContactsService()
