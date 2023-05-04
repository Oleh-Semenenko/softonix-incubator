<template>
  <el-card :body-style="{padding: 0, height: '100%', display: 'flex', flexDirection: 'column'}">
    <div class="flex flex-grow px-6 pt-5">
      <div class="flex-grow text-sm truncate" @click.stop>
        <el-form
          v-if="editMode"
          ref="formRef"
          :rules="formRules"
          :model="localContact"
        >
          <el-form-item
            :style="{marginBottom: '16px'}"
            prop="name"
          >
            <el-input
              ref="inputRef"
              v-model="localContact.name"
              autofocus
              type="text"
              placeholder="Enter name"
              :size="$elComponentSize.small"
            />
          </el-form-item>

          <el-form-item
            :style="{marginBottom: '16px'}"
            prop="description"
          >
            <el-input
              v-model="localContact.description"
              type="text"
              placeholder="Enter description"
              :size="$elComponentSize.small"
            />
          </el-form-item>
        </el-form>

        <template v-else>
          <p class="font-medium cursor-text">{{ contact.name }}</p>
          <p class="text-gray cursor-text mt-1 truncate">
            {{ contact.description }}
          </p>
        </template>
      </div>

      <div
        class="flex items-center justify-center w-10 h-10 ml-2 rounded-full shrink-0 overflow-hidden
      border border-gray-medium bg-gray-ultra-light"
      >
        <span
          v-if="imageHasError || !contact.image"
          class="font-medium uppercase"
        >{{ nameAbbrv }}
        </span>

        <el-avatar
          v-else
          :src="contact.image"
          alt="contact-logo"
          @error="imageHasError = true"
          @load="imageHasError = false"
        />
      </div>
    </div>

    <div class="flex flex-grow justify-end mt-2 px-6 pb-5">
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
          :disabled="!isFormValid"
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
          @click.stop="$emit('delete', contact)"
        >
          Delete
        </el-button>
      </template>
    </div>

    <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light" @click.stop>
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])
const inputRef = ref<HTMLInputElement>()

const localContact = useElFormModel({
  ...props.contact
})
const editMode = ref(false)
const formRef = useElFormRef()

const formRules = useElFormRules({
  name: [useRequiredRule()],
  description: [useRequiredRule()]
})

const nameAbbrv = computed(() => {
  return props.contact.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
})

const isFormValid = computed(() => {
  const { id, image, ...contact } = localContact
  return Object.values(contact).every(c => !!c)
})

function onSave () {
  formRef.value?.validate((isValid: boolean) => {
    if (isValid) {
      emit('save', localContact)
      editMode.value = false
    }
  })
}

watch(inputRef, async () => {
  await nextTick()
  if (inputRef.value) {
    inputRef.value.focus()
  }
})

const imageHasError = ref(false)
</script>
