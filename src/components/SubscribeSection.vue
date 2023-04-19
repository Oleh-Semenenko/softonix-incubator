<template>
  <section class="section">
    <div class="container mx-auto px-4 ">
      <div class="subscribe-bg w-full flex flex-col items-center px-3 py-[50px] md:py-[75px] rounded-[30px]">
        <h2
          class="text-black font-semibold text-[32px] md:text-[40px] leading-none text-center"
        >
          Sign up to our newsletter
        </h2>
        <p
          class="text-[14px] md:text-[16px] leading-[1.6] text-gray-light inline-block max-w-[415px] text-center mt-4"
        >
          Receive latest news, update, and many other things every week.
        </p>
        <!-- eslint-disable-next-line max-len -->
        <form class="mt-10 pl-[26px] pr-3 py-[10px] h-[50px] md:h-[60px] md:w-[450px] flex items-center justify-between bg-white rounded-xl">
          <input type="text" placeholder="Enter Your email address">
          <button
            class="bg-orange w-9 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center hover:shadow-md"
            type="submit"
          >
            <svg class="w-4 h-[17px] inline-block fill-white">
              <use href="../media/symbol-defs.svg#icon-plane" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
