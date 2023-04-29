<template>
  <div class="mb-1">
    <h3 class="text-sm font-medium text-gray">Departments:</h3>
    <!--Select-->
    <div
      ref="multiSelectRef"
      v-click-outside="()=>(isSelectOpen = false)"
      class="relative border border-gray w-full min-h-[30px] cursor-text rounded flex gap-1"
      @click="isSelectOpen = true"
    >
      <!--Selected options-->
      <div
        v-for="(item, index) in selectedOptions"
        :key="item"
        class="first:w-[18%] w-[10%] p-1 flex gap-[2px] flex-grow-0 items-center text-xs
        font-semibold text-blue-500 bg-blue-100 rounded"
        @click.stop
      >
        <p class="truncate p-0 m-0">{{ item }}</p>
        <span
          class="relative bottom-1 text-[20px] text-blue-800 hover:text-red-500 cursor-pointer"
          @click="handleDelete(index)"
        >
          &times;
        </span>
      </div>

      <!--Select arrows -->
      <div class="absolute top-1/2 right-1 translate-y-[-12px] text-gray-medium">
        <span v-show="!isSelectOpen" class="rotate-45">&#9660;</span>
        <span v-show="isSelectOpen" class="-rotate-45">&#9650;</span>
      </div>

      <!--Select options list -->
      <ul
        v-show="isSelectOpen"
        class="w-full absolute left-0 top-[40px] px-1 py-2 h-[350px] overflow-y-auto flex flex-col text-sm
        font-medium text-trueGray-500 bg-gray-light rounded-md border border-x-gray-medium"
        @click.stop
      >
        <li
          v-for="department in departments"
          :key="department.value"
          class="input-container block relative hover:bg-slate-200 select-none"
          @click.stop="handleCheckbox"
        >
          <input
            :id="department.name"
            v-model="selectedOptions"
            type="checkbox"
            class="checkbox absolute opacity-0 w-0 h-0 peer"
            :value="department.name"
          >
          <label
            :for="department.name"
            class="label block w-full py-2 px-4 rounded peer-checked:bg-blue-100 peer-checked:text-black cursor-pointer"
          >{{ department.name }}</label>

          <span class="hidden absolute top-2 right-4 text-base peer-checked:block text-gray">&#10003;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ObjectDirective, DirectiveBinding } from 'vue'

const multiSelectRef = ref()
const isSelectOpen = ref(false)
const topPosition = ref('30px')

const jobOpeningsStore = useJobOpeningsStore()
const { departments } = storeToRefs(jobOpeningsStore)

const selectedOptions = ref([])

const fixTopPosition = () => {
  topPosition.value = multiSelectRef.value.clientHeight + 4 + 'px'
}

const handleCheckbox = () => {
  setTimeout(fixTopPosition, 100)
}

const handleDelete = (i: number) => {
  selectedOptions.value.splice(i, 1)
  setTimeout(fixTopPosition, 100)
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
