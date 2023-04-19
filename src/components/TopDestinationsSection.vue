<template>
  <section class="hidden md:block section">
    <div class="container mx-auto px-4 flex flex-col items-center">
      <h2 class="text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.18] mb-[16px]">Top destinations</h2>
      <p
        class="text-[14px] md:text-[16px] text-gray-light leading-4 mb-7"
      >
        Sost Brilliant reasons Entrada should be your one-stop-shop!
      </p>
      <ul class="flex flex-wrap justify-center gap-[10px] md:gap-[14px]">
        <li>
          <button
            class="text-[14px] leading-[1] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]"
            type="button"
          >
            London
          </button>
        </li>
        <li>
          <button
            class="text-[14px] leading-[1] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]"
            type="button"
          >
            Bangkok
          </button>
        </li>
        <li>
          <button
            class="text-[14px] leading-[1] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]"
            type="button"
          >
            England
          </button>
        </li>
        <li>
          <button
            class="text-[14px] leading-[1] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]"
            type="button"
          >
            Singapore
          </button>
        </li>
        <li>
          <button
            class="text-[14px] leading-[1] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]"
            type="button"
          >
            Italy
          </button>
        </li>
      </ul>

      <ul class="grid auto-rows-min md:gap-x-[20px] lg:gap-x-[30px] gap-y-[13px] mt-[51px]">
        <li class="col-start-1 col-end-2 row-start-1 row-end-2 relative">
          <img class="w-[270px] h-[250px] rounded-[20px]" src="../media/card1.jpg" alt="House">
          <!-- eslint-disable-next-line max-len -->
          <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-white text-[14px] leading-[1] rounded-xl">
            3.5
          </span>

          <div class="absolute bottom-6 left-6 flex flex-col">
            <span class="text-white text-[20px] leading-5">Vietnam</span>
            <span
              class="text-white text-[14px] leading-[14px]"
            >Worefall</span>
          </div>
        </li>
        <li class="col-start-1 col-end-2 row-start-2 row-end-3 relative">
          <img class="w-[270px] h-[250px] rounded-[20px] mt-[13px]" src="../media/card2.jpg" alt="Building">
          <!-- eslint-disable-next-line max-len -->
          <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-white text-[14px] leading-[1] rounded-xl">
            3.5
          </span>
          <div class="absolute bottom-6 left-6 flex flex-col gap-[10px]">
            <span class="text-white text-[20px] leading-5">Vietnam</span>
            <span class="text-white text-[14px] leading-[14px]">Worefall</span>
          </div>
        </li>
        <li class="col-start-2 col-end-3 row-start-1 row-end-3 relative">
          <img class="w-[370px] h-[526px] rounded-[20px]" src="../media/card3.jpg" alt="Corner of the street">
          <!-- eslint-disable-next-line max-len -->
          <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-black text-white text-[14px] leading-[1] rounded-xl">
            3.5
          </span>
          <div class="absolute bottom-6 left-6 flex flex-col gap-[10px]">
            <span class="text-white text-[20px] leading-5">Vietnam</span>
            <span class="text-white text-[14px] leading-[14px]">Worefall</span>
          </div>
        </li>
        <li class="col-start-3 col-end-5 row-start-1 row-end-2 relative">
          <img class="w-[470px] h-[250px] rounded-[20px]" src="../media/card4.jpg" alt="Bridge">
          <!-- eslint-disable-next-line max-len -->
          <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-black text-white text-[14px] leading-[1] rounded-xl">
            3.5
          </span>
          <div class="absolute bottom-6 left-6 flex flex-col gap-[10px]">
            <span class="text-white text-[20px] leading-5">Vietnam</span>
            <span class="text-white text-[14px] leading-[14px]">Worefall</span>
          </div>
        </li>
        <li class="col-start-3 col-end-4 row-start-2 row-end-3 relative">
          <img class="w-[170px] h-[263px] rounded-[20px]" src="../media/card5.jpg" alt="Cathedral">
          <!-- eslint-disable-next-line max-len -->
          <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-black text-white text-[14px] leading-[1] rounded-xl">
            3.5
          </span>
          <div class="absolute bottom-6 left-6 flex flex-col gap-[10px]">
            <span class="text-white text-[20px] leading-5">Vietnam</span>
            <span class="text-white text-[14px] leading-[14px]">Worefall</span>
          </div>
        </li>
        <li class="col-start-4 col-end-5 row-start-2 row-end-3 relative">
          <img class="w-[270px] h-[263px] rounded-[20px]" src="../media/card6.jpg" alt="Big Ben">
          <!-- eslint-disable-next-line max-len -->
          <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-black text-white text-[14px] leading-[1] rounded-xl">
            3.5
          </span>
          <div class="absolute bottom-6 left-6 flex flex-col gap-[10px]">
            <span class="text-white text-[20px] leading-5">Vietnam</span>
            <span class="text-white text-[14px] leading-[14px]">Worefall</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
