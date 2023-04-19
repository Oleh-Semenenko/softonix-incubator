<template>
  <header class="py-5 lg:py-6">
    <HeaderPart />
  </header>
  <main>
    <HeroSection />
    <CategoriesSection />
    <ExperienceSection />
    <PopularDestinationsSection />
    <TopDestinationsSection />
    <ReviewsSection />
    <SubscribeSection />
  </main>
  <footer class="py-10 md:py-14 lg:py-20">
    <FooterPart />
  </footer>
</template>

<script lang="ts" setup>
import HeaderPart from '@/components/HeaderPart.vue'
import HeroSection from '@/components/HeroSection.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import PopularDestinationsSection from '@/components/PopularDestinationsSection.vue'
import TopDestinationsSection from '@/components/TopDestinationsSection.vue'
import ReviewsSection from '@/components/ReviewsSection.vue'
import SubscribeSection from '@/components/SubscribeSection.vue'
import FooterPart from '@/components/FooterPart.vue'
</script>

<style lang="scss">
.section {
  padding: 35px 0;
  @media screen and (min-width: 768px ) {
    padding: 50px 0;
  }
  @media screen and (min-width: 1024px ) {
    padding: 70px 0;
  }
}

button:hover {
  .arrow-icon {
    stroke: white;
    fill: transparent
  }
}

.subscribe-bg {
  background-color: #FFD482;
  background-image: url('./media/waves.png');
}

a:hover {
  svg {
    fill: #F66F4D;
  }
}

.snap-container {
  @media screen and (max-width: 1535px) {
    padding: 16px;
    max-width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    margin-right: auto;
    margin-left: auto
  }
}
</style>
