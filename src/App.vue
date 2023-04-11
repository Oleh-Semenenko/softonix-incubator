<!-- eslint-disable max-len -->
<template>
  <header class="py-6">
    <div class="app-container items-center">
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
      <button class="font-nav font-medium leading-4 text-orange py-[18px] px-[34px] border border-orange rounded-[27px] ">
        Book Now
        <svg class="w-4 h-[15px] inline-block ml-1.5">
          <use href="./media/symbol-defs.svg#icon-plane" />
        </svg>
      </button>
    </div>
  </header>
  <main>
    ь
    <!-- Hero -->
    <section class="section">
      <div class="app-container gap-[67px]">
        <div class="mt-[74px]">
          <h1 class="font-sen font-bold text-[84px] leading-[86px]">Discover the Best Lovely Places</h1>
          <p class="text-[18px] leading-[1.56] text-gray-light mt-[26px]">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
          <div class="location-date-input mt-11 max-w-[500px] pt-5 pr-5 pb-[18px] pl-7 rounded-[38px] justify-between">
            <label class="w-[136px] divide-y">Where
              <input class="w-full border-0 border-transparent" type="text" placeholder="Cent er Point, Lo...">
            </label>
            <label class="w-[136px]">Date
              <input class="w-full border-0 border-transparent" type="text" placeholder="09th March,2021">
            </label>
            <button class="bg-orange w-[54px] h-[54px] rounded-full" type="submit">
              <svg class="w-7 h-7 inline-block">
                <use href="./media/symbol-defs.svg#icon-search" />
              </svg>
            </button>
          </div>
        </div>
        <img class="block" src="./media/hero_image.png" alt="" width="534" height="555">
      </div>
    </section>
    <!-- Categories -->
    <section class="section">
      <div class="app-container flex-col gap-6 relative">
        <h2 class="text-[56px] font-semibold leading-[56px]">Categories</h2>
        <p class="text-gray-light w-[370px]">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</p>
        <div class="absolute top-0 right-[20px] flex gap-4">
          <button class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center hover:fill-transparent">
            <svg class="w-[6px] h-[12px] fill-gray-dark ">
              <use href="./media/symbol-defs.svg#icon-arrow_left" />
            </svg>
          </button>
          <button class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center">
            <svg class="w-[6px] h-[12px] fill-gray-dark hover:fill-transparent">
              <use href="./media/symbol-defs.svg#icon-arrow_right" />
            </svg>
          </button>
        </div>

        <ul class="flex space-x-[30px] grow">
          <li class="text-center space-y-[18px]">
            <img class="w-[170px] h-[230px] bg-gray-light rounded-[85px]" src="./media/category1.png" alt="Beach">
            <p class="text-[26px] font-medium leading-[26px]">Beach</p>
          </li>
          <li class="text-center space-y-[18px]">
            <img class="w-[170px] h-[230px] bg-gray-light rounded-[85px]" src="./media/category2.png" alt="Desert">
            <p class="text-[26px] font-medium leading-[26px]">Desert</p>
          </li>
          <li class="text-center space-y-[18px]">
            <img class="w-[170px] h-[230px] bg-gray-light rounded-[85px]" src="./media/category3.png" alt="Mountain">
            <p class="text-[26px] font-medium leading-[26px]">Mountain</p>
          </li>
          <li class="text-center space-y-[18px]">
            <img class="w-[170px] h-[230px] bg-gray-light rounded-[85px]" src="./media/category4.png" alt="Temple">
            <p class="text-[26px] font-medium leading-[26px]">Temple</p>
          </li>
          <li class="text-center space-y-[18px]">
            <img class="w-[170px] h-[230px] bg-gray-light rounded-[85px]" src="./media/category5.png" alt="Tower">
            <p class="text-[26px] font-medium leading-[26px]">Tower</p>
          </li>
          <li class="text-center space-y-[18px]">
            <img class="w-[170px] h-[230px] bg-gray-light rounded-[85px]" src="./media/category6.png" alt="Pyramid">
            <p class="text-[26px] font-medium leading-[26px]">Pyramid</p>
          </li>
        </ul>
      </div>
    </section>
    <!-- Experience -->
    <section class="section">
      <div class="app-container gap-[156px]">
        <img class="block" src="./media/experience.png" alt="" width="541" height="582">
        <div class="mt-[60px] space-y-5">
          <h2 class="font-semibold text-[20px] text-orange leading-[20px]">Our Experience</h2>
          <p class="font-semibold text-[56px] leading-[66px]">Our Stories Have Adventures</p>
          <p class="text-[18px] leading-[1.56] text-gray-light">We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!</p>
          <ul class="flex gap-5">
            <li class="w-[166px] h-[178px] px-[30px] bg-white rounded-[14px] flex flex-col items-center justify-center gap-[18px]">
              <span class="text-orange font-semibold text-[46px] self-start">12K+</span>
              <p class="text-[21px] text-gray-ultra-light">Succes Journey</p>
            </li>
            <li class="w-[166px] h-[178px] px-[30px] bg-white rounded-[14px] flex flex-col items-center justify-center gap-[18px]">
              <span class="text-orange font-semibold text-[46px] self-start">16+</span>
              <p class="text-[21px] text-gray-ultra-light">Awards Winning</p>
            </li>
            <li class="w-[166px] h-[178px] px-[30px] bg-white rounded-[14px] flex flex-col items-center justify-center gap-[18px]">
              <span class="text-orange font-semibold text-[46px] self-start">20+</span>
              <p class="text-[21px] text-gray-ultra-light">Years Of Experience</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Popular destinations -->
    <section class="section">
      <div class="app-container flex-col gap-6 relative">
        <h2 class="text-[56px] font-semibold leading-[1.18]">Find Popular <br> Destination</h2>
        <div class="absolute top-0 right-[20px] flex gap-4">
          <button class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center hover:fill-transparent">
            <svg class="w-[6px] h-[12px] fill-gray-dark ">
              <use href="./media/symbol-defs.svg#icon-arrow_left" />
            </svg>
          </button>
          <button class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center">
            <svg class="w-[6px] h-[12px] fill-gray-dark hover:fill-transparent">
              <use href="./media/symbol-defs.svg#icon-arrow_right" />
            </svg>
          </button>
        </div>

        <ul class="flex space-x-[30px] grow">
          <li class="text-center space-y-[18px] rounded-2xl bg-beige p-3 border-2 border-white">
            <img class="w-[362px] h-[252px] bg-gray-light rounded-2xl" src="./media/dest1.jpg" alt="Mountain Hiking Tour">
            <div class="text-start space-y-[14px]">
              <p class="text-[24px] font-semibold leading-[24px]">Mountain Hiking Tour</p>
              <p class="text-[14px] leading-[14px] text-gray-light">Mountain Hiking Tour</p>
              <div class="flex items-center justify-between">
                <p class="text-gray-light leading-5">
                  <span class="font-semibold text-black text-[24px] leading-[0.83] ">$89</span>
                  /Person
                </p>
                <button class="text-[14px] leading-[14px] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]">Book Now</button>
              </div>
            </div>
          </li>
          <li class="text-center space-y-[18px] rounded-2xl bg-beige p-3 border-2 border-white">
            <img class="w-[362px] h-[252px] bg-gray-light rounded-2xl" src="./media/dest2.jpg" alt="Mountain Hiking Tour">
            <div class="text-start space-y-[14px]">
              <p class="text-[24px] font-semibold leading-[24px]">Mountain Hiking Tour</p>
              <p class="text-[14px] leading-[14px] text-gray-light">Mountain Hiking Tour</p>
              <div class="flex items-center justify-between">
                <p class="text-gray-light leading-5">
                  <span class="font-semibold text-black text-[24px] leading-[0.83] ">$99</span>
                  /Person
                </p>
                <button class="text-[14px] leading-[14px] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]">Book Now</button>
              </div>
            </div>
          </li>
          <li class="text-center space-y-[18px] rounded-2xl bg-beige p-3 border-2 border-white">
            <img class="w-[362px] h-[252px] bg-gray-light rounded-2xl" src="./media/dest3.jpg" alt="Mountain Hiking Tour">
            <div class="text-start space-y-[14px]">
              <p class="text-[24px] font-semibold leading-[24px]">Mountain Hiking Tour</p>
              <p class="text-[14px] leading-[14px] text-gray-light">Mountain Hiking Tour</p>
              <div class="flex items-center justify-between">
                <p class="text-gray-light leading-5">
                  <span class="font-semibold text-black text-[24px] leading-[0.83] ">$70</span>
                  /Person
                </p>
                <button class="text-[14px] leading-[14px] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]">Book Now</button>
              </div>
            </div>
          </li>
          <!-- <li class="text-center space-y-[18px]">
            <img class="w-[362px] h-[252px] bg-gray-light rounded-[85px]" src="./media/dest1.jpg" alt="Mountain Hiking Tour">
            <div>
              <p class="text-[26px] font-medium leading-[26px]">Mountain Hiking Tour</p>
              <p class="text-[26px] font-medium leading-[26px]">Mountain Hiking Tour</p>
              <div class="flex items-center justify-between">
                <span>$89 /Person</span>
                <button>Book Now</button>
              </div>
            </div>
          </li> -->
        </ul>
      </div>
    </section>
  </main>
  <footer>
    <div class="app-container">
      Footer
    </div>
  </footer>
</template>

<script lang="ts" setup>
// YOUR CODE HERE
</script>

<style lang="scss">
.app-container {
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
}

.section {
  padding: 70px 0;
}

.location-date-input {
  display: flex;
  align-items: center;
  background-color: #fff;
}

/* .location-date-input label {
  margin-right: 10px;
} */

.location-date-input input {
  /* padding: 10px; */
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}
</style>
