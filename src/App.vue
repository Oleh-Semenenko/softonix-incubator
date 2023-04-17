<!-- eslint-disable max-len -->
<template>
  <!-- <header class="py-6">
    <div class="container mx-auto px-4 flex items-center">
      <a class="mr-[40px] md:mr-[60px] lg:mr-[72px]" href="/">
        <svg class="w-[98px] h-[35px] fill-gray-dark">
          <use href="./media/symbol-defs.svg#icon-logo" />
        </svg>
      </a>
      <nav class="flex-auto font-nav text-[#2E476B]">
        <ul class="hidden md:flex md:gap-6 lg:gap-9">
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
      <button class="inline-block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <button class="hidden md:block font-nav font-medium leading-4 text-orange py-[14px] px-[24px] lg:py-[18px] lg:px-[34px] border border-orange rounded-[27px] hover:shadow-md">
        Book Now
        <svg class="w-4 h-[15px] inline-block ml-1.5 fill-orange">
          <use href="./media/symbol-defs.svg#icon-plane" />
        </svg>
      </button>
    </div>
  </header> -->
  <main>
    <!-- Hero -->
    <!-- <section class="section">
      <div class="container mx-auto px-4 md:flex md:gap-[50px] lg:gap-[67px]">
        <div class="mt-[74px]">
          <h1 class="font-sen font-bold text-[54px] md:text-[64px] lg:text-[84px] leading-[1.02]">Discover the Best Lovely Places</h1>
          <p class="text-[16px] md:text-[18px] leading-[1.56] text-gray-light mt-5 md:mt-[26px]">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
          <div class="bg-white mt-7 md:mt-11 max-w-[500px] pt-5 pr-5 pb-[18px] pl-7 rounded-[38px] flex items-center justify-between divide-x">
            <div class="grow">
              <label for="location" class=" text-gray-dark text-[18px] leading-[17px]">Where</label>
              <div class="flex space-x-[23px] w-[136px]">
                <input id="location" class="w-[105px] text-[12px] leading-none" type="text" placeholder="Cent er Point, Lo...">
                <svg class="w-[9px] h-[13px]">
                  <use href="./media/symbol-defs.svg#icon-geo" />
                </svg>
              </div>
            </div>

            <div class="pl-5 md:pl-7 lg:pl-[34px] grow">
              <label for="date" class=" text-gray-dark text-[18px] leading-[17px]">Date</label>
              <div class="flex space-x-[26px] w-[136px] m-0">
                <input id="date" class="w-[97px] text-[12px] leading-none" type="text" placeholder="09th March,2021">
                <svg class="w-[13px] h-[13px]">
                  <use href="./media/symbol-defs.svg#icon-calendar" />
                </svg>
              </div>
            </div>

            <button class="bg-orange w-[54px] h-[54px] rounded-full hover:shadow-md" type="submit">
              <svg class="w-7 h-7 inline-block">
                <use href="./media/symbol-defs.svg#icon-search" />
              </svg>
            </button>
          </div>
        </div>
        <img class="hidden lg:block lg:w-[508px] lg:h-[526px] xl:w-[534px] xl:h-[555px]" src="./media/hero_image.png" alt="" width="534" height="555">
      </div>
    </section> -->
    <!-- Categories -->
    <!-- <section class="section">
      <div class="container mx-auto px-4 flex-col gap-6 relative">
        <h2 class="text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[1]">Categories</h2>
        <p class="text-gray-light max-w-[370px] mt-6">Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.</p>
        <div class="absolute top-0 right-[20px] flex gap-4">
          <button class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center ">
            <svg class="arrow-icon w-[6px] h-[12px] stroke-gray-dark">
              <use href="./media/symbol-defs.svg#icon-arrow_left" />
            </svg>
          </button>
          <button class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center">
            <svg class="arrow-icon w-[6px] h-[12px] stroke-gray-dark">
              <use href="./media/symbol-defs.svg#icon-arrow_right" />
            </svg>
          </button>
        </div>

        <ul class="mt-[44px] md:mt-[52px] lg:mt-[60px] flex justify-between">
          <li class="text-center space-y-[18px]">
            <img class="md:max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]" src="./media/category1.png" alt="Beach">
            <p class="text-[26px] font-medium leading-[26px]">Beach</p>
          </li>
          <li class="text-center space-y-[18px]">
            <img class="md:max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]" src="./media/category2.png" alt="Desert">
            <p class="text-[26px] font-medium leading-[26px]">Desert</p>
          </li>
          <li class="text-center space-y-[18px]">
            <img class="md:max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]" src="./media/category3.png" alt="Mountain">
            <p class="text-[26px] font-medium leading-[26px]">Mountain</p>
          </li>
          <li class="text-center space-y-[18px]">
            <img class="md:max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]" src="./media/category4.png" alt="Temple">
            <p class="text-[26px] font-medium leading-[26px]">Temple</p>
          </li>
          <li class="text-center space-y-[18px]">
            <img class="md:max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]" src="./media/category5.png" alt="Tower">
            <p class="text-[26px] font-medium leading-[26px]">Tower</p>
          </li>
          <li class="text-center space-y-[18px]">
            <img class="md:max-w-[130px] xl:max-w-[170px]  xl:h-[230px] bg-gray-light rounded-[85px]" src="./media/category6.png" alt="Pyramid">
            <p class="text-[26px] font-medium leading-[26px]">Pyramid</p>
          </li>
        </ul>
      </div>
    </section> -->
    <!-- Experience -->
    <!-- <section class="section">
      <div class="container mx-auto px-4 lg:flex gap-[50px] xl:gap-[156px]">
        <img class="hidden lg:block w-[470px] h-[552px] xl:w-[500px] xl:h-[582px]" src="./media/experience.png" alt="" width="500" height="582">
        <div class="lg:mt-[60px] space-y-5">
          <h2 class="font-semibold text-[20px] text-orange leading-[1]">Our Experience</h2>
          <p class="font-semibold text-[40px] md:text-[48px] lg:text-[56px] leading-[1.18]">Our Stories Have Adventures</p>
          <p class="text-[18px] leading-[1.56] text-gray-light">We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!</p>
          <ul class="grid grid-cols-3 gap-5">
            <li class="px-[20px] py-2 bg-white rounded-[14px] flex flex-col items-center justify-center gap-[18px] min-w-[110px] max-w-[166px]">
              <span class="text-orange font-semibold text-[32px] md:text-[46px] self-start">12K+</span>
              <p class="text-[16px] md:text-[21px] text-gray-ultra-light">Succes Journey</p>
            </li>
            <li class="px-[20px] py-2 bg-white rounded-[14px] flex flex-col items-center justify-center gap-[18px] min-w-[110px] max-w-[166px]">
              <span class="text-orange font-semibold text-[32px] md:text-[46px] self-start">16+</span>
              <p class="text-[16px] md:text-[21px] text-gray-ultra-light">Awards Winning</p>
            </li>
            <li class="px-[20px] py-2 bg-white rounded-[14px] flex flex-col items-center justify-center gap-[18px] min-w-[110px] max-w-[166px]">
              <span class="text-orange font-semibold text-[32px] md:text-[46px] self-start">20+</span>
              <p class="text-[16px] md:text-[21px] text-gray-ultra-light">Years Of Experience</p>
            </li>
          </ul>
        </div>
      </div>
    </section> -->
    <!-- Popular destinations -->
    <!-- <section class="section">
      <div class="container mx-auto px-4 flex-col gap-6 relative">
        <h2 class="text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.18]">Find Popular <br> Destination</h2>
        <div class="absolute top-0 right-[20px] flex gap-4">
          <button class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center">
            <svg class="arrow-icon w-[6px] h-[12px] stroke-gray-dark">
              <use href="./media/symbol-defs.svg#icon-arrow_left" />
            </svg>
          </button>
          <button class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center">
            <svg class="arrow-icon w-[6px] h-[12px] stroke-gray-dark">
              <use href="./media/symbol-defs.svg#icon-arrow_right" />
            </svg>
          </button>
        </div>

        <ul class="flex space-x-[30px] grow mt-[35px]">
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
        </ul>
      </div>
    </section> -->
    <!-- Top destinations -->
    <!-- <section class="hidden md:block section">
      <div class="container mx-auto px-4 flex flex-col items-center">
        <h2 class="text-[40px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.18] mb-[16px]">Top destinations</h2>
        <p class="text-[14px] md:text-[16px] text-gray-light leading-4 mb-7">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
        <ul class="flex flex-wrap justify-center gap-[10px] md:gap-[14px]">
          <li><button class="text-[14px] leading-[14px] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]" type="button">London</button></li>
          <li><button class="text-[14px] leading-[14px] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]" type="button">Bangkok</button></li>
          <li><button class="text-[14px] leading-[14px] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]" type="button">England</button></li>
          <li><button class="text-[14px] leading-[14px] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]" type="button">Singapore</button></li>
          <li><button class="text-[14px] leading-[14px] hover:text-white hover:bg-black py-3 px-4 border border-black rounded-[46px]" type="button">Italy</button></li>
        </ul>

        <ul class="grid auto-rows-min md:gap-x-[20px] lg:gap-x-[30px] gap-y-[13px] mt-[51px]">
          <li class="col-start-1 col-end-2 row-start-1 row-end-2 relative">
            <img class="w-[270px] h-[250px] rounded-[20px]" src="./media/card1.jpg" alt="House">
            <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-white text-[14px] leading-[14px] rounded-xl">3.5</span>
            <div class="absolute bottom-6 left-6 flex flex-col">
              <span class="text-white text-[20px] leading-5">Vietnam</span>
              <span class="text-white text-[14px] leading-[14px]">Worefall</span>
            </div>
          </li>
          <li class="col-start-1 col-end-2 row-start-2 row-end-3 relative">
            <img class="w-[270px] h-[250px] rounded-[20px] mt-[13px]" src="./media/card2.jpg" alt="Building">
            <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-white text-[14px] leading-[14px] rounded-xl">3.5</span>
            <div class="absolute bottom-6 left-6 flex flex-col gap-[10px]">
              <span class="text-white text-[20px] leading-5">Vietnam</span>
              <span class="text-white text-[14px] leading-[14px]">Worefall</span>
            </div>
          </li>
          <li class="col-start-2 col-end-3 row-start-1 row-end-3 relative">
            <img class="w-[370px] h-[526px] rounded-[20px]" src="./media/card3.jpg" alt="Corner of the street">
            <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-black text-white text-[14px] leading-[14px] rounded-xl">3.5</span>
            <div class="absolute bottom-6 left-6 flex flex-col gap-[10px]">
              <span class="text-white text-[20px] leading-5">Vietnam</span>
              <span class="text-white text-[14px] leading-[14px]">Worefall</span>
            </div>
          </li>
          <li class="col-start-3 col-end-5 row-start-1 row-end-2 relative">
            <img class="w-[470px] h-[250px] rounded-[20px]" src="./media/card4.jpg" alt="Bridge">
            <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-black text-white text-[14px] leading-[14px] rounded-xl">3.5</span>
            <div class="absolute bottom-6 left-6 flex flex-col gap-[10px]">
              <span class="text-white text-[20px] leading-5">Vietnam</span>
              <span class="text-white text-[14px] leading-[14px]">Worefall</span>
            </div>
          </li>
          <li class="col-start-3 col-end-4 row-start-2 row-end-3 relative">
            <img class="w-[170px] h-[263px] rounded-[20px]" src="./media/card5.jpg" alt="Cathedral">
            <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-black text-white text-[14px] leading-[14px] rounded-xl">3.5</span>
            <div class="absolute bottom-6 left-6 flex flex-col gap-[10px]">
              <span class="text-white text-[20px] leading-5">Vietnam</span>
              <span class="text-white text-[14px] leading-[14px]">Worefall</span>
            </div>
          </li>
          <li class="col-start-4 col-end-5 row-start-2 row-end-3 relative">
            <img class="w-[270px] h-[263px] rounded-[20px]" src="./media/card6.jpg" alt="Big Ben">
            <span class="absolute top-6 left-6 flex items-center justify-center w-[42px] h-6 bg-black text-white text-[14px] leading-[14px] rounded-xl">3.5</span>
            <div class="absolute bottom-6 left-6 flex flex-col gap-[10px]">
              <span class="text-white text-[20px] leading-5">Vietnam</span>
              <span class="text-white text-[14px] leading-[14px]">Worefall</span>
            </div>
          </li>
        </ul>
      </div>
    </section> -->
    <!-- Reviews -->
    <!-- <section class="section">
      <div class="container mx-auto px-4 lg:flex gap-[175px]">
        <img class="hidden lg:block" src="./media/review.png" alt="" width="390" height="539">
        <div class="mt-[60px] space-y-5 before:content-[''] before:block before:h-2 before:w-[67px] before:bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 before:rounded before:shadow-[0px 2px 6px rgba(229, 137, 24, 0.15)]">
          <p class="font-semibold text-[40px] md:text-[48px] lg:text-[56px] leading-[1.18] mt-3 capitalize">A customer said about us:</p>
          <div class="mt-[26px] space-y-[27px] bg-white p-[30px] rounded-[14px]">
            <p class="text-[14px] md:text-[18px] leading-[30px] text-gray-light">
              Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.
            </p>
            <div class="flex justify-between items-end">
              <div>
                <svg class="w-[107px] h-[17px] inline-block">
                  <use href="./media/symbol-defs.svg#icon-stars" />
                </svg>
                <p class="mt-[17px] text-[20px] text-black leading-none font-medium">Andrew Sarma</p>
                <p class="mt-2 text-[12px] leading-none text-gray-light">Enterpreneur</p>
              </div>
              <div class="flex gap-4">
                <button class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center">
                  <svg class="arrow-icon w-[6px] h-[12px] stroke-gray-dark">
                    <use href="./media/symbol-defs.svg#icon-arrow_left" />
                  </svg>
                </button>
                <button class="w-[54px] h-[54px] border border-gray-dark rounded-full hover:bg-gray-dark flex justify-center items-center">
                  <svg class="arrow-icon w-[6px] h-[12px] stroke-gray-dark">
                    <use href="./media/symbol-defs.svg#icon-arrow_right" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Subscribe -->
    <!-- <section class="section">
      <div class="container mx-auto px-4 ">
        <div class="subscribe-bg w-full flex flex-col items-center px-3 py-[50px] md:py-[75px] rounded-[30px]">
          <h2 class="text-black font-semibold text-[32px] md:text-[40px] leading-none text-center">Sign up to our newsletter</h2>
          <p class="text-[14px] md:text-[16px] leading-[1.6] text-gray-light inline-block max-w-[415px] text-center mt-4">Receive latest news, update, and many other things every week.</p>
          <form class="mt-5 md:mt-10 pl-[26px] pr-3 py-[10px] h-[50px] md:h-[60px] md:w-[450px] flex items-center justify-between bg-white rounded-xl">
            <input type="text" placeholder="Enter Your email address">
            <button class="bg-orange w-9 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center hover:shadow-md" type="submit">
              <svg class="w-4 h-[17px] inline-block fill-white">
                <use href="./media/symbol-defs.svg#icon-plane" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section> -->
  </main>
  <footer class="py-20">
    <div class="container mx-auto px-4 flex flex-col-reverse lg:flex-row justify-between ">
      <div class="flex justify-between items-center md:block">
        <a class="mr-[72px]" href="/">
          <svg class="w-[98px] h-[35px] fill-black">
            <use href="./media/symbol-defs.svg#icon-logo" />
          </svg>
        </a>
        <p class="text-gray-light leading-[1.62] md:mt-5">Enjoy the touring <br> with Salty</p>
        <ul class="flex gap-[14px] md:mt-10">
          <li>
            <a href="" class="inline-flex items-center justify-center w-8 h-8 border border-gray-light hover:border-orange  rounded-[50%]">
              <svg class="soc-icon w-[6px] h-3 fill-gray-light">
                <use href="./media/symbol-defs.svg#icon-facebook" />
              </svg>
            </a>
          </li>
          <li>
            <a href="" class="inline-flex items-center justify-center w-8 h-8 border border-gray-light hover:border-orange rounded-[50%]">
              <svg class="soc-icon w-3 h-3  fill-gray-light stroke-white">
                <use href="./media/symbol-defs.svg#icon-insta" />
              </svg>
            </a>
          </li>
          <li>
            <a href="" class="inline-flex items-center justify-center w-8 h-8 border border-gray-light hover:border-orange rounded-[50%]">
              <svg class="soc-icon w-[15px] h-3  fill-gray-light">
                <use href="./media/symbol-defs.svg#icon-twitter" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <ul class="flex flex-col lg:flex-row gap-[70px] lg:gap-[113px]">
        <li class="md:space-y-[22px]">
          <h3 class="text-[18px] text-black leading-none font-medium ">Resources</h3>
          <ul class="flex gap-3 flex-wrap md:block">
            <li class="text-gray-for-footer  hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Download</a>
            </li>
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Help Center</a>
            </li>
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Guide Book</a>
            </li>
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">App Directory</a>
            </li>
          </ul>
        </li>
        <li class="md:space-y-[22px]">
          <h3 class="text-[18px] text-black leading-none font-medium ">Travellers</h3>
          <ul class="flex gap-3 flex-wrap md:block">
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Why Travellers</a>
            </li>
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Enterprice</a>
            </li>
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Customer Stories</a>
            </li>
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Instagram post</a>
            </li>
          </ul>
        </li>
        <li class="md:space-y-[22px]">
          <h3 class="text-[18px] text-black leading-none font-medium ">Company</h3>
          <ul class="flex gap-3 flex-wrap md:block">
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Travelling</a>
            </li>
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">About Locato</a>
            </li>
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Success</a>
            </li>
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Information</a>
            </li>
          </ul>
        </li>
        <li class="md:space-y-[22px]">
          <h3 class="text-[18px] text-black leading-none font-medium ">Get App</h3>
          <ul class="flex gap-3 flex-wrap md:block">
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">App Store</a>
            </li>
            <li class="text-gray-for-footer hover:text-orange text-[14px] leading-[2.43]">
              <a href="/">Google Play Store</a>
            </li>
          </ul>
        </li>
      </ul>
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

/* .location-date-input input {
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
} */

button:hover {
  .arrow-icon {
    stroke: white;
    fill: transparent
  }
}

/* .box1 {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.box2 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.box3 {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}

.box4 {
  grid-column: 3 / 5;
  grid-row: 1 / 2;
}

.box5 {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}

.box6 {
  grid-column: 4 / 5;
  grid-row: 2 / 3;
} */

.subscribe-bg {
  background-color: #FFD482;
  background-image: url('./media/waves.png');
}

a:hover {
  .soc-icon {
    fill: #F66F4D;
  }
}
</style>
