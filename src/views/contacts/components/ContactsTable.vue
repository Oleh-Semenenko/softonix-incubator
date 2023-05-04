<template>
  <el-card>
    <el-table
      :data="data"
      stripe
      style="width: 100%"
      :row-class-name="rowClassName"
      @row-click="$emit('edit', $event.id)"
    >
      <el-table-column prop="image" label="Image" width="180">
        <template #default="{ row }">
          <div
            class="flex items-center justify-center w-10 h-10 ml-2 rounded-full shrink-0 overflow-hidden
      border border-gray-medium bg-gray-ultra-light cursor-pointer"
            @click.stop
          >
            <span
              v-if="row.imageHasError || !row.image"
              class="font-medium uppercase"
            >
              {{ nameAbbrv(row) }}
            </span>

            <el-avatar
              v-else
              :src="row.image"
              alt="contact-logo"
              @error="row.imageHasError = true"
              @load="row.imageHasError = false"
            />
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="name" label="Name" width="180">
        <template #default="{row}">
          <el-input
            v-if="row.editMode"
            ref="inputRef"
            v-model="row.name"
            type="text"
            placeholder="Enter name"
            :size="$elComponentSize.small"
            @click.stop
          />

          <p v-else class="font-medium cursor-text" @click.stop>{{ row.name }}</p>
        </template>
      </el-table-column>

      <el-table-column prop="description" label="Description">
        <template #default="{row}">
          <el-input
            v-if="row.editMode"
            v-model="row.description"
            type="text"
            placeholder="Enter description"
            :size="$elComponentSize.small"
            @click.stop
          />

          <p v-else class="text-gray cursor-text mt-1 truncate" @click.stop>
            {{ row.description }}
          </p>
        </template>
      </el-table-column>

      <el-table-column fixed="right" width="150" prop="actions" label="Actions">
        <template #default="{row}">
          <div @click.stop>
            <template v-if="row.editMode">
              <el-button
                text
                :type="$elComponentType.primary"
                :size="$elComponentSize.small"
                class="hover:underline"
                @click.stop="onCancel(row)"
              >
                Cancel
              </el-button>

              <el-button
                text
                :type="$elComponentType.primary"
                :size="$elComponentSize.small"
                class="hover:underline"
                @click.stop="onSave(row)"
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
                @click.stop="onEdit(row)"
              >
                Edit
              </el-button>

              <el-button
                text
                :type="$elComponentType.danger"
                :size="$elComponentSize.small"
                class="hover:underline"
                @click.stop="onDelete(row)"
              >
                Delete
              </el-button>
            </template>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
const emit = defineEmits(['delete', 'save', 'edit'])

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
console.log(contacts.value)

const inputRef = ref<HTMLInputElement>()

const data = computed(() => {
  return contacts.value.map((contact) => ({
    ...contact, editMode: false, imageHasError: false
  })) as ITableContact[]
})

function onEdit (contact: ITableContact) {
  contact.editMode = true
}

function onCancel (contact: ITableContact) {
  contact.editMode = false
}

function onSave (contact: ITableContact) {
  const { editMode, imageHasError, ...data } = contact
  emit('save', data)
  contact.editMode = false
}

function onDelete (contact: ITableContact) {
  const { editMode, imageHasError, ...data } = contact
  emit('delete', data)
  contact.editMode = false
}

function nameAbbrv (contact: ITableContact) {
  return contact.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
}

function rowClassName () {
  return 'tr'
}

watch(inputRef, async () => {
  await nextTick()
  console.log(inputRef)
  if (inputRef.value) {
    inputRef.value.focus()
  }
})
</script>

<style lang="scss">
.tr {
  cursor: pointer;
}
</style>
