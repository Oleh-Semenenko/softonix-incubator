<template>
  <div>
    <el-button
      class="!ml-0 mb-5"
      :type="$elComponentType.primary"
      @click="onContacts"
    >
      Contacts list
    </el-button>
  </div>
  <div
    v-for="image in images"
    :key="image.src"
    class="w-[400px] h-[300px] mx-auto"
  >
    <LazyImg
      :src="image.src"
      :alt="image.alt"
    />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const LazyImg = defineAsyncComponent(() => import('@/components/LazyImg.vue'))
const images = [
  { src: 'https://images.pexels.com/photos/866496/pexels-photo-866496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'cat' },
  { src: 'https://images.pexels.com/photos/384555/pexels-photo-384555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'cat' },
  { src: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=75Cat0&dpr=1', alt: 'cat' },
  { src: 'https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?b=1&s=170667a&w=0&k=20&c=zpm6OIDKeFCzG83wDFDB-ocfZ_ucrjiHil0g0R-qDos=', alt: 'cat' },
  { src: 'https://media.istockphoto.com/id/1372142873/pl/zdj%C4%99cie/uroczy-kot-o-%C5%BC%C3%B3%C5%82tych-oczach-patrz%C4%85cy-na-kamer%C4%99-lekko-przechylaj%C4%85c%C4%85-si%C4%99-g%C5%82ow%C4%99.jpg?s=1024x1024&w=is&k=20&c=fI04NBujBjLIdHj89LhTN-XJdHuMqAoZqc9XBM9WMbw=', alt: 'cat' },
  { src: 'https://media.istockphoto.com/id/1361504222/pl/zdj%C4%99cie/dwa-p%C5%82owe-kolorowe-pr%C4%99gowane-rodze%C5%84stwo-kot%C3%B3w-stoj%C4%85ce-obok-siebie-portret.jpg?s=1024x1024&w=is&k=20&c=CTkC_88mVF6dV9f18zUzeu7yCMKaixzMrLQUyrrOCyk=', alt: 'cat' }
]

function onContacts () {
  router.push({ name: $routeNames.contacts })
}
</script>
