<template>
  <div class="relative w-full dark:mask-title-bg--dark mask-title-bg">
    <div
      class="flex md:flex-row flex-col items-center md:justify-between gap-6 md:h-80 md:pt-0 pt-[52px] pr-0 content-container overflow-hidden"
    >
      <div
        class="md:flex-grow-[6] flex-shrink-0 flex flex-col gap-2 md:items-start items-center z-10"
      >
        <div
          class="text-brand-blue bg-white rounded-full flex items-center justify-center px-4 py-1 w-max"
        >
          {{ solution }}
        </div>
        <h2 class="flex-auto text-center">
          {{ title }}
        </h2>
      </div>
      <div
        class="md:flex-grow-[7] md:self-end self-start flex justify-end z-10"
      >
        <img
          class="md:h-[328px] h-[276px] w-auto object-cover object-left"
          :src="img"
          alt=""
        />
      </div>
    </div>
    <img
      class="absolute md:left-0 left-[-15%] top-0"
      src="/images/solution_title_bg.webp"
      alt=""
    />
  </div>
</template>
<script setup>
defineProps({
  title: { type: String, required: true },
  solution: { type: String, required: true },
  img: { type: String, required: true },
})
</script>
