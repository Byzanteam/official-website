<template>
  <div>
    <div class="h-60 bg-gray-10 rounded-2xl flex items-center justify-center">
      <img :src="useThemeImgUrl(image)" alt="benefit-image" />
    </div>
    <div class="px-5 pt-4 md:pb-0.5 lg:pb-[30px]">
      <h4 class="mb-2 md:mb-3 text-xl md:text-2xl md:leading-[34px]">
        {{ label }}
      </h4>
      <p class="text-gray-50 text-sm md:text-base md:leading-7">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitsItem',
}
</script>

<script setup>
import { useThemeImgUrl } from '@/hooks'
defineProps({
  image: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
