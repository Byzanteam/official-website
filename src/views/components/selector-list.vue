<template>
  <div class="flex items-center gap-6 w-full">
    <div class="flex-1 flex flex-col gap-2">
      <div
        v-for="(item, index) of items"
        :key="item.title"
        class="rounded-lg w-full md:bg-transparent bg-gray-03 dark:bg-gray-08 overflow-hidden cursor-default"
        @click="() => choseBlock(index)"
      >
        <div
          class="flex items-start p-6 gap-3"
          :class="
            chosedIndex === index
              ? 'md:linear-chosed-item-bg md:text-brand-blue'
              : ''
          "
        >
          <SvgIcon :path="item.icon" />
          <div>
            <h5 class="mb-2">
              {{ item.title }}
            </h5>
            <div class="text-gray-60">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="md:flex-1 lg:flex-[2] md:block hidden">
      <img
        :src="items[chosedIndex].img"
        alt=""
        class="lg:block lg:-my-0 lg:mx-auto h-[375px] w-[572px] object-cover object-left"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { SvgIcon } from '@/components'

defineProps({
  items: { type: Object, required: true },
})

const chosedIndex = ref(0)
function choseBlock(index) {
  chosedIndex.value = index
}
</script>
