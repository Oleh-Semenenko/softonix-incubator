<template>
  <section class="section">
    <div class="container mx-auto px-4 md:flex md:gap-[40px] lg:gap-[67px]">
      <div class="lg:mt-[74px]">
        <h1
          class="text-black font-sen font-bold text-[54px] md:text-[64px] lg:text-[84px] leading-[1.02]"
        >
          Discover the Best Lovely Places
        </h1>
        <p
          class="text-[16px] md:text-[18px] leading-[1.56] text-gray-light mt-5 md:mt-[26px]"
        >
          <!-- eslint-disable-next-line max-len -->
          Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.
        </p>
        <!-- eslint-disable-next-line max-len -->
        <div class="bg-white mt-7 md:mt-11 max-w-[500px] pt-3 md:pt-5 pr-3 md:pr-5 pb-3 md:pb-[18px] pl-4 md:pl-7 rounded-[38px] flex items-center justify-between divide-x">
          <div class="grow">
            <label for="location" class="text-gray-dark text-[18px] leading-[0.9]">Where</label>
            <div class="flex space-x-[16px] md:space-x-[23px] items-center w-[126px] md:w-[136px] mt-1 md:mt-2">
              <input
                id="location"
                class="text-[12px] placeholder:text-[12px] w-[87px] md:w-[105px] leading-none"
                type="text" placeholder="Cent er Point, Lo..."
              >
              <svg class="w-[9px] h-[13px]">
                <use href="../media/symbol-defs.svg#icon-geo" />
              </svg>
            </div>
          </div>

          <div class="pl-4 md:pl-7 lg:pl-[34px] grow">
            <label for="date" class=" text-gray-dark text-[18px] leading-[0.9]">Date</label>
            <div class="flex space-x-[16px] md:space-x-[26px] items-center w-[126px] md:w-[136px] mt-1 md:mt-2">
              <input
                id="date" class="text-[12px] placeholder:text-[12px] w-[79px] md:w-[97px] leading-none"
                type="text" placeholder="09th March,2021"
              >
              <svg class="w-[13px] h-[13px]">
                <use href="../media/symbol-defs.svg#icon-calendar" />
              </svg>
            </div>
          </div>

          <button
            class="bg-orange w-[44px] sm:w-[54px] h-[44px] sm:h-[54px] rounded-full hover:shadow-md"
            type="submit"
          >
            <svg class="w-7 h-7 inline-block">
              <use href="../media/symbol-defs.svg#icon-search" />
            </svg>
          </button>
        </div>
      </div>
      <img
        class="hidden lg:block lg:w-[488px] lg:h-[526px] xl:w-[534px] xl:h-[555px]"
        src="../media/hero_image.png"
        alt="Happy man"
        width="534"
        height="555"
      >
    </div>
  </section>
</template>
