<template>
  <section class="section">
    <div class="container mx-auto px-4 lg:flex gap-[175px]">
      <img class="hidden lg:block" src="../media/review.png" alt="Happy client with a camera" width="390" height="539">
      <!-- eslint-disable-next-line max-len -->
      <div class="mt-[60px] space-y-5 before:content-[''] before:block before:h-2 before:w-[67px] before:bg-gradient-to-br from-[#FFD482] via-orange-400 to-[#FFBE82] before:rounded before:shadow-[0px 2px 6px rgba(229, 137, 24, 0.15)]">
        <!-- eslint-disable-next-line max-len -->
        <p class="font-semibold text-[40px] md:text-[48px] lg:text-[56px] leading-[1.18] mt-3 capitalize">A customer said about us:</p>
        <div class="mt-[26px] space-y-[27px] bg-white p-[30px] rounded-[14px]">
          <p class="text-[14px] md:text-[18px] leading-[30px] text-gray-light">
            <!-- eslint-disable-next-line max-len -->
            Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.
          </p>
          <div class="flex justify-between items-end">
            <div>
              <svg class="w-[107px] h-[17px] inline-block">
                <use href="../media/symbol-defs.svg#icon-stars" />
              </svg>
              <p class="mt-[17px] text-[20px] text-black leading-none font-medium">Andrew Sarma</p>
              <p class="mt-2 text-[12px] leading-none text-gray-light">Enterpreneur</p>
            </div>
            <ArrowsBtns classes="flex gap-4" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ArrowsBtns from '@/components/ArrowsBtns.vue'
</script>
