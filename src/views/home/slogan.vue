<template>
  <div class="w-full">
    <div
      class="py-8 md:py-0 flex md:flex-row flex-col content-container md:gap-6 gap-0 items-center"
    >
      <!-- slogan container -->
      <div class="md:basis-0 md:grow-[5] lg:grow-[7] md:py-[72px] relative">
        <div
          class="radial-gradient absolute w-[606px] h-[606px] md:left-1/2 md:bottom-[247px] left-1/4 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 z-0"
        />
        <div class="flex flex-col md:items-start items-center relative z-10">
          <h1 class="text-brand-blue">
            {{ $t('page.home.build') }}
          </h1>
          <h1>{{ $t('page.home.as_you_wish') }}</h1>
          <p
            class="mt-4 mb-14 md:text-2xl md:leading-[34px] text-xl text-gray-80"
          >
            {{ $t('page.home.build.description') }}
          </p>
          <a
            href="mailto:hi@jet.work"
            target="_blank"
            class="px-[35px] py-4 text-brand-blue border-brand-blue border-solid border rounded-lg hover:bg-brand-blue hover:text-white active:bg-brand-blue active:text-white dark:text-white focus:bg-transparent text-lg leading-6 font-semibold"
          >
            {{ $t('page.home.contact_us') }}
          </a>
        </div>
      </div>
      <!-- image container -->
      <div class="md:basis-0 md:grow-[5]">
        <img :src="useThemeImgUrl('slogan_image.webp')" alt="slogan image" />
      </div>
    </div>
  </div>
</template>

<script>
import { useThemeImgUrl } from '@/hooks'

export default {
  name: 'SloganSection',
  inheritAttrs: false,
  setup() {
    return { useThemeImgUrl }
  },
}
</script>
