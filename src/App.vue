<template>
  <header class="py-6">
    <div class="app-container flex items-center">
      <a class="mr-[72px]" href="/">
        <svg class="w-[98px] h-[35px]">
          <use href="./media/symbol-defs.svg#icon-logo" />
        </svg>
      </a>
      <nav class="flex-auto font-nav text-[#2E476B]">
        <ul class="flex gap-9">
          <li
            class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
          >
            <a href="">Home</a>
          </li>
          <li
            class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
          >
            <a href="">About us</a>
          </li>
          <li
            class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
          >
            <a href="">Destinations</a>
          </li>
          <li
            class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
          >
            <a href="">Tours</a>
          </li>
          <li
            class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
          >
            <a href="">Blog</a>
          </li>
        </ul>
      </nav>
      <button class="font-medium leading-4 text-orange py-[18px] px-[34px] border border-orange rounded-[27px] ">
        Book Now
        <svg class="w-4 h-[15px] inline-block ml-1.5">
          <use href="./media/symbol-defs.svg#icon-plane" />
        </svg>
      </button>
    </div>
  </header>
  <main>Main</main>
  <footer>Footer</footer>
</template>

<script lang="ts" setup>
// YOUR CODE HERE
</script>

<style lang="scss">
.app-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 135px;
}
</style>
