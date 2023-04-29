<template>
  <div class="flex gap-4 pb-4">
    <RouterLink
      :to="{name: $routeNames.contacts}"
      class="hover:text-blue-500 "
    >
      Contacts
    </RouterLink>
    <RouterLink
      :to="{name: $routeNames.jobs}"
      class="hover:text-blue-500 "
    >
      Job openings
    </RouterLink>
  </div>
</template>
