import { contactsRoutesNames } from '@/views/contacts/contacts.routes'
import { authRoutesNames } from '@/views/auth/auth.routes'
import { imagesRoutesNames } from '@/views/images/images-loading.routes'

export const routeNames = {
  rootPage: 'rootPage',
  loadImages: 'loadImages',
  ...contactsRoutesNames,
  ...authRoutesNames,
  imagesRoutesNames
}
