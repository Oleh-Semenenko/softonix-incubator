<template>
  <div class="container mx-auto px-4 flex items-center justify-between">
    <a class="mr-[40px] md:mr-[60px] lg:mr-[72px] inline-block" href="/">
      <svg class="w-[98px] h-[35px] fill-gray-dark">
        <use href="../media/symbol-defs.svg#icon-logo" />
      </svg>
    </a>
    <nav class="hidden md:flex md:flex-auto font-nav text-[#2E476B]">
      <ul class="hidden md:flex md:gap-6 lg:gap-9">
        <li
          class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
        >
          <a href="/">Home</a>
        </li>
        <li
          class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
        >
          <a href="/">About us</a>
        </li>
        <li
          class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
        >
          <a href="/">Destinations</a>
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

    <transition mode="out-in" name="fade">
      <button v-if="!show" key="menu" class="inline-block md:hidden" @click="show = !show">
        <svg class="w-6 h-6 fill-black">
          <use href="../media/symbol-defs.svg#icon-menu" />
        </svg>
      </button>
      <button v-else key="close" class="inline-block md:hidden" @click="show = !show">
        <svg class="w-6 h-6 fill-black">
          <use href="../media/symbol-defs.svg#icon-cross" />
        </svg>
      </button>
    </transition>
    <!-- eslint-disable-next-line max-len -->
    <button class="hidden md:block font-nav font-medium leading-4 text-orange py-[14px] px-[24px] lg:py-[18px] lg:px-[34px] border border-orange rounded-[27px] hover:shadow-md">
      Book Now
      <svg class="w-4 h-[15px] inline-block ml-1.5 fill-orange">
        <use href="../media/symbol-defs.svg#icon-plane" />
      </svg>
    </button>
  </div>
  <div
    v-if="show"
    class="md:hidden w-full h-full fixed top-[75px] right-0 z-10 bg-slate-300 flex flex-col p-4 justify-start "
  >
    <transition name="fade">
      <nav v-if="show" class="self-center">
        <ul class="space-y-4 text-[24px] md:hidden ">
          <li
            class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
          >
            <a href="/">Home</a>
          </li>
          <li
            class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
          >
            <a href="/">About us</a>
          </li>
          <li
            class="after:content-[''] after:block after:h-0.5 after:w-3 hover:after:bg-orange"
          >
            <a href="/">Destinations</a>
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
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
</script>
