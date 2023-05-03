<template>
  <el-table :data="contacts" stripe style="width: 100%">
    <el-table-column prop="image" label="Image" width="180">
      <template #default="{ row }">
        <div
          class="flex items-center justify-center w-10 h-10 ml-2 rounded-full shrink-0 overflow-hidden
      border border-gray-medium bg-gray-ultra-light"
        >
          <span
            v-if="row.imageHasError || !row.image"
            class="font-medium uppercase"
          >{{ nameAbbrv }}
          </span>

          <el-avatar
            v-else
            :src="row.image"
            alt="contact-logo"
            @error="imageHasError = true"
            @load="imageHasError = false"
          />
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name" width="180">
      <template #default="{row}">
        <el-input
          v-if="editMode"
          v-model="localContact.name"
          type="text"
          placeholder="Enter name"
          :size="$elComponentSize.small"
        />

        <p v-else class="font-medium cursor-text">{{ row.name }}</p>
      </template>
    </el-table-column>
    <el-table-column prop="description" label="Description">
      <template #default="{row}">
        <el-input
          v-if="editMode"
          v-model="localContact.description"
          type="text"
          placeholder="Enter description"
          :size="$elComponentSize.small"
        />

        <p v-else class="text-gray cursor-text mt-1 truncate">
          {{ row.description }}
        </p>
      </template>
    </el-table-column>
    <el-table-column prop="actions" label="Actions">
      <template #default="{row}">
        <div class="flex justify-end mt-2 px-6 pb-5">
          <template v-if="editMode">
            <el-button
              text
              :type="$elComponentType.primary"
              :size="$elComponentSize.small"
              class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
              @click.stop="editMode = false"
            >
              Cancel
            </el-button>

            <el-button
              text
              :type="$elComponentType.primary"
              :size="$elComponentSize.small"

              class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
              @click.stop="onSave"
            >
              Save
            </el-button>
          </template>

          <template v-else>
            <el-button
              text
              :type="$elComponentType.primary"
              :size="$elComponentSize.small"
              class="hover:underline"
              @click.stop="editMode = true"
            >
              Edit
            </el-button>

            <el-button
              text
              :type="$elComponentType.danger"
              :size="$elComponentSize.small"
              class="hover:underline"
              @click.stop="$emit('delete', row)"
            >
              Delete
            </el-button>
          </template>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const emit = defineEmits(['delete', 'save'])

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)
const formRef = useElFormRef()

// const formRules = useElFormRules({
//   name: [useRequiredRule()],
//   description: [useRequiredRule()]
// })

const nameAbbrv = computed(() => {
  // return props.contact.name.split(' ').reduce((acc, cur) => {
  //   if (acc.length < 2) {
  //     acc = acc.concat(cur[0])
  //   }
  //   return acc
  // }, '')
})

// const isFormValid = computed(() => {
//   const { image, ...contact } = localContact
//   return Object.values(contact).every(c => !!c)
// })

function onSave () {
  formRef.value?.validate((isValid: boolean) => {
    if (isValid) {
      emit('save', localContact)
      editMode.value = false
    }
  })
}

const imageHasError = ref(false)
</script>
