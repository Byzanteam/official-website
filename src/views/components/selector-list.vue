<template>
  <div class="flex items-center gap-6 w-full">
    <div class="flex-1">
      <div
        v-for="(item, index) of items"
        :key="item.title"
        class="flex items-start p-6 gap-3 rounded-lg md:w-[384px] w-full overflow-hidden cursor-pointer"
        :class="
          chosedIndex === index
            ? 'md:linear-chosed-item-bg md:text-brand-blue'
            : ''
        "
        @click="() => choseBlock(index)"
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

    <div class="md:flex-1 lg:flex-[2] md:block hidden">
      <img
        :src="items[chosedIndex].img"
        height="375"
        width="572"
        alt=""
        class="lg:block lg:-my-0 lg:mx-auto"
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
