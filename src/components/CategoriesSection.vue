<template>
  <section class="section">
    <div class="container mx-auto px-4 flex-col gap-6 relative">
      <h2 class="text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[1]">Categories</h2>
      <p
        class="text-gray-light max-w-[370px] mt-6"
      >
        Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
      </p>
      <ArrowsBtns classes="hidden md:flex absolute top-0 right-[20px] gap-4" />

      <ul class="mt-[44px] md:mt-[52px] lg:mt-[60px] flex lg:flex-wrap justify-between gap-3 snap-container">
        <li class="text-center space-y-[18px] snap-center">
          <img
            class="max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]"
            src="../media/category1.png"
            alt="Beach"
          >
          <p class="text-[20px] md:text-[26px] font-medium leading-[26px]">Beach</p>
        </li>
        <li class="text-center space-y-[18px] snap-center">
          <img
            class="max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]"
            src="../media/category2.png"
            alt="Desert"
          >
          <p class="text-[20px] md:text-[26px] font-medium leading-[26px]">Desert</p>
        </li>
        <li class="text-center space-y-[18px] snap-center">
          <img
            class="max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]"
            src="../media/category3.png"
            alt="Mountain"
          >
          <p class="text-[20px] md:text-[26px] font-medium leading-[26px]">Mountain</p>
        </li>
        <li class="text-center space-y-[18px] snap-center">
          <img
            class="max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]"
            src="../media/category4.png"
            alt="Temple"
          >
          <p class="text-[20px] md:text-[26px] font-medium leading-[26px]">Temple</p>
        </li>
        <li class="text-center space-y-[18px] snap-center">
          <img
            class="max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]"
            src="../media/category5.png"
            alt="Tower"
          >
          <p class="text-[20px] md:text-[26px] font-medium leading-[26px]">Tower</p>
        </li>
        <li class="text-center space-y-[18px] snap-center">
          <img
            class="max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]"
            src="../media/category6.png"
            alt="Pyramid"
          >
          <p class="text-[20px] md:text-[26px] font-medium leading-[26px]">Pyramid</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ArrowsBtns from '@/components/ArrowsBtns.vue'
</script>
