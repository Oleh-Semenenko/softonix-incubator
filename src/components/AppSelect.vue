<template>
  <div class="mb-1">
    <h3 class="text-sm font-medium text-gray mb-2">Departments:</h3>
    <!--Select-->
    <div
      ref="selectRef"
      v-click-outside="()=>(isSelectOpen = false)"
      class="relative border border-gray w-full min-h-[34px] cursor-text rounded flex gap-1 p-1 hover:border-blue-500"
      @click="isSelectOpen = true"
    >
      <!--Selected options-->
      <div
        v-for="(item, index) in filteredDepartments"
        :key="item"
        class="text-blue-500 bg-blue-100 rounded max-w-[80px] p-1 flex gap-1 items-center text-xs"
        @click.stop
      >
        <p class="truncate font-semibold">{{ item }}</p>
        <span
          class="text-gray-dark hover:text-blue-500 cursor-pointer self-start"
          @click="deleteOption(index)"
        >
          &#10006;
        </span>
      </div>

      <!--Select arrows -->
      <div class="absolute top-1/2 right-1 translate-y-[-12px] text-gray-medium">
        <span v-show="!isSelectOpen">&#9660;</span>
        <span v-show="isSelectOpen">&#9650;</span>
      </div>

      <!--Select options list -->
      <ul
        v-show="isSelectOpen"
        class="w-full absolute left-0 top-[40px] px-1 py-2 h-[350px] overflow-y-auto flex flex-col text-sm
        font-medium text-trueGray-500 bg-gray-light rounded-md border border-x-gray-medium"
        @click.stop
      >
        <li
          v-for="department in sortedList"
          :key="department"
          class="input-container block relative hover:bg-slate-200 select-none"
        >
          <input
            :id="department"
            v-model="filteredDepartments"
            type="checkbox"
            class="checkbox absolute opacity-0 w-0 h-0 peer"
            :value="department"
          >
          <label
            :for="department"
            class="label block w-full py-2 px-4 rounded peer-checked:bg-blue-100 peer-checked:text-black cursor-pointer"
          >{{ department }}</label>

          <span class="hidden absolute top-2 right-4 text-base peer-checked:block text-gray">&#10003;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ObjectDirective, DirectiveBinding } from 'vue'
import type { IJobOpening } from '@/_homework/job-openings'
const props = defineProps<{
  departmentList: {
    [key: string]: IJobOpening[]
  }
}>()

const sortedList = computed(() => {
  return Object.keys(props.departmentList)
    .sort((a, b) => a.localeCompare(b))
})

const selectRef = ref()
const isSelectOpen = ref(false)

const jobOpeningsStore = useJobOpeningsStore()
const { filteredDepartments } = storeToRefs(jobOpeningsStore)

const deleteOption = (i: number) => {
  filteredDepartments.value.splice(i, 1)
}

const vClickOutside: ObjectDirective = {
  beforeMount (el, binding: DirectiveBinding) {
    el.clickOutside = function (e: Event) {
      if (!(el === e.target || el.contains(e.target))) {
        binding.value(e)
      }
    }
    document.addEventListener('click', el.clickOutside)
  },
  unmounted (el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>
