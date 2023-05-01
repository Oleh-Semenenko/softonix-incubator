<template>
  <div class="flex flex-col gap-4 max-w-[30%]">
    <h2 class="font-bold text-xl">Job details</h2>
    <div>
      <h3 class="font-semibold text-base">Job title:</h3>
      {{ job?.title }}
    </div>
    <div>
      <h3 class="font-semibold text-base list-inside">Job departments:</h3>
      <ul class="list-inside">
        <li
          v-for="dep in job?.departments"
          :key="dep"
          class="ml-2 flex items-center
          before:content-[''] before:block before:w-2 before:h-[1px] before:bg-gray before:mr-2"
        >
          {{ dep }}
        </li>
      </ul>
    </div>
    <div>
      <h3 class="font-semibold text-base">Job description: </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est ullam eligendi porro, commodi animi
        eaque accusantium quidem exercitationem, praesentium cumque adipisci dolorem.
        Eveniet excepturi deserunt temporibus voluptates, tempora neque?
      </p>
    </div>
  </div>
  <AppButton
    class="h-11"
    @click="goBack"
  >
    <template #icon>
      <IconPlus class="w-5 h-5 rotate-45" />
    </template>
    Close details
  </AppButton>
</template>

<script lang="ts" setup>
const jobOpeningsStore = useJobOpeningsStore()
const { jobOpenings, openDetails } = storeToRefs(jobOpeningsStore)

const { $routeNames } = useGlobalProperties()

const route = useRoute()
const router = useRouter()

const job = computed(() => {
  if (jobOpenings.value) {
    return jobOpenings.value.find(({ id }) => (id === route.params.jobId))
  }
})

function goBack () {
  openDetails.value = false
  router.replace({ name: $routeNames.jobs })
}
</script>
