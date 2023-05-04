<template>
  <el-header class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>

    <el-button
      class="!ml-0"
      :type="$elComponentType.danger"
      @click="$router.replace({ name: $routeNames.login })"
    >
      Logout
    </el-button>
  </el-header>

  <div>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="Card view" name="card">
        <el-main class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
          <ContactItem
            v-for="contact in contacts"
            :key="contact.id"
            :mode="activeName"
            class="cursor-pointer"
            :contact="contact"
            @click="editContact(contact.id)"
            @delete="deleteContact"
            @save="updateContact"
          />
        </el-main>
      </el-tab-pane>

      <el-tab-pane label="Table view" name="table">
        <el-main class="my-5">
          <ContactsTable
            @save="updateContact"
            @delete="deleteContact"
            @edit="editContact"
          />
        </el-main>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}

const activeName = ref(localStorage.getItem('activeTab') || 'card')

watchEffect(() => {
  localStorage.setItem('activeTab', activeName.value)
})
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 16px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
