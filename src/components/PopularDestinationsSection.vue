<template>
  <section class="section">
    <div class="container mx-auto px-4 flex-col gap-6 relative">
      <h2
        class="text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.18]"
      >
        Find Popular <br> Destination
      </h2>
      <ArrowsBtns classes="hidden md:flex absolute top-0 right-[20px] gap-4" />

      <ul class="flex justify-between gap-[10px] md:gap-[20px] xl:gap-[30px]  mt-[35px] snap-container">
        <!-- eslint-disable-next-line max-len -->
        <li class="basis-[268px] md:basis-[386px] min-w-[232px] text-center space-y-[24px] rounded-2xl bg-beige p-3 border-2 border-white snap-center flex-shrink-0 truncate">
          <img
            class="w-[362px] h-[252px] bg-gray-light rounded-2xl" src="../media/dest1.jpg" alt="Mountain Hiking Tour"
          >
          <div class="text-start">
            <p
              class="text-[16px] md:text-[20px] lg:text-[24px] font-semibold leading-[1.15] truncate"
            >
              Mountain Hiking Tour
            </p>
            <p
              class="text-[12px] md:text-[14px] leading-[1.15] mt-[14px] text-gray-light truncate"
            >
              Mountain Hiking Tour
            </p>
            <div class="flex items-center justify-between mt-[27px]">
              <p class="text-[12px] md:text-[14px] lg:text-[16px] text-gray-light leading-5">
                <span
                  class="font-semibold text-black text-[16px] md:text-[20px] lg:text-[24px] leading-[0.83] "
                >$89</span>
                /Person
              </p>
              <!-- eslint-disable-next-line max-len -->
              <button class="text-[12px] md:text-[14px] leading-[1] hover:text-white hover:bg-black py-2 lg:py-3 px-3 lg:px-4 border border-black rounded-[46px]">
                Book Now
              </button>
            </div>
          </div>
        </li>
        <!-- eslint-disable-next-line max-len -->
        <li class="basis-[268px] md:basis-[386px] min-w-[232px] text-center space-y-[24px] rounded-2xl bg-beige p-3 border-2 border-white snap-center flex-shrink-0 truncate">
          <img
            class="w-[362px] h-[252px] bg-gray-light rounded-2xl" src="../media/dest2.jpg" alt="Machu Picchu, Peru"
          >
          <div class="text-start">
            <p
              class="text-[16px] md:text-[20px] lg:text-[24px] font-semibold leading-[1.15] truncate"
            >
              Machu Picchu, Peru
            </p>
            <p
              class="text-[12px] md:text-[14px] leading-[1.15] mt-[14px] text-gray-light truncate"
            >
              Machu Picchu, Peru
            </p>
            <div class="flex items-center justify-between mt-[27px]">
              <p class="text-[12px] md:text-[14px] lg:text-[16px] text-gray-light leading-5">
                <span
                  class="font-semibold text-black text-[16px] md:text-[20px] lg:text-[24px] leading-[0.83] "
                >$99</span>
                /Person
              </p>
              <!-- eslint-disable-next-line max-len -->
              <button class="text-[12px] md:text-[14px] leading-[1] hover:text-white hover:bg-black py-2 lg:py-3 px-3 lg:px-4 border border-black rounded-[46px]">
                Book Now
              </button>
            </div>
          </div>
        </li>
        <!-- eslint-disable-next-line max-len -->
        <li class="basis-[268px] md:basis-[386px] min-w-[232px] text-center space-y-[24px] rounded-2xl bg-beige p-3 border-2 border-white snap-center flex-shrink-0 truncate">
          <!-- eslint-disable-next-line max-len -->
          <img class="w-[362px] h-[252px] bg-gray-light rounded-2xl" src="../media/dest3.jpg" alt="The Grand Canyon, Arizona">
          <div class="text-start">
            <p
              class="text-[16px] md:text-[20px] lg:text-[24px] font-semibold leading-[1.15] truncate"
            >
              The Grand Canyon, Arizona
            </p>
            <p
              class="text-[12px] md:text-[14px] leading-[1.15] mt-[14px] text-gray-light truncate"
            >
              Mountain Hiking Tour
            </p>
            <div class="flex items-center justify-between mt-[27px]">
              <p class="text-[12px] md:text-[14px] lg:text-[16px] text-gray-light leading-5">
                <span
                  class="font-semibold text-black text-[16px] md:text-[20px] lg:text-[24px] leading-[0.83] "
                >$70</span>
                /Person
              </p>
              <!-- eslint-disable-next-line max-len -->
              <button class="text-[12px] md:text-[14px] leading-[1] hover:text-white hover:bg-black py-2 lg:py-3 px-3 lg:px-4 border border-black rounded-[46px]">
                Book Now
              </button>
            </div>
          </div>
        </li>
        <!-- eslint-disable-next-line max-len -->
        <li class="basis-[268px] md:basis-[386px] min-w-[232px] text-center space-y-[24px] rounded-2xl bg-beige p-3 border-2 border-white snap-center flex-shrink-0 truncate">
          <img
            class="w-[362px] h-[252px] bg-gray-light rounded-2xl" src="../media/dest2.jpg" alt="Machu Picchu, Peru"
          >
          <div class="text-start">
            <p
              class="text-[16px] md:text-[20px] lg:text-[24px] font-semibold leading-[1.15] truncate"
            >
              Machu Picchu, Peru
            </p>
            <p
              class="text-[12px] md:text-[14px] leading-[1.15] mt-[14px] text-gray-light truncate"
            >
              Machu Picchu, Peru
            </p>
            <div class="flex items-center justify-between mt-[27px]">
              <p class="text-[12px] md:text-[14px] lg:text-[16px] text-gray-light leading-5">
                <span
                  class="font-semibold text-black text-[16px] md:text-[20px] lg:text-[24px] leading-[0.83] "
                >$99</span>
                /Person
              </p>
              <!-- eslint-disable-next-line max-len -->
              <button class="text-[12px] md:text-[14px] leading-[1] hover:text-white hover:bg-black py-2 lg:py-3 px-3 lg:px-4 border border-black rounded-[46px]">
                Book Now
              </button>
            </div>
          </div>
        </li>
        <!-- eslint-disable-next-line max-len -->
        <li class="basis-[268px] md:basis-[386px] min-w-[232px] text-center space-y-[24px] rounded-2xl bg-beige p-3 border-2 border-white snap-center flex-shrink-0 truncate">
          <img
            class="lg:w-[362px] h-[252px] bg-gray-light rounded-2xl" src="../media/dest2.jpg" alt="Machu Picchu, Peru"
          >
          <div class="text-start">
            <p
              class="text-[16px] md:text-[20px] lg:text-[24px] font-semibold leading-[1.15] truncate"
            >
              Machu Picchu, Peru
            </p>
            <p
              class="text-[12px] md:text-[14px] leading-[1.15] mt-[14px] text-gray-light truncate"
            >
              Machu Picchu, Peru
            </p>
            <div class="flex items-center justify-between mt-[27px]">
              <p class="text-[12px] md:text-[14px] lg:text-[16px] text-gray-light leading-5">
                <span
                  class="font-semibold text-black text-[16px] md:text-[20px] lg:text-[24px] leading-[0.83] "
                >$99</span>
                /Person
              </p>
              <!-- eslint-disable-next-line max-len -->
              <button class="text-[12px] md:text-[14px] leading-[1] hover:text-white hover:bg-black py-2 lg:py-3 px-3 lg:px-4 border border-black rounded-[46px]">
                Book Now
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ArrowsBtns from '@/components/ArrowsBtns.vue'
</script>
