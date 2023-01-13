<template>
  <div class="relative w-full md:mb-12 mb-6 text-gray-60">
    <div class="flex lg:justify-around overflow-x-scroll">
      <div
        v-for="slot of labelAndComponents"
        :key="slot.label"
        class="flex-shrink-0 w-max py-3 md:mx-16 mx-9 cursor-default"
        :class="
          slot.label === currentLabel
            ? 'text-brand-blue border-b-2 border-b-brand-blue'
            : ''
        "
        @click="() => switchTo(slot.label)"
      >
        {{ slot.label }}
      </div>
    </div>
    <div class="relative bottom-[1px] left-0 w-full h-[1px] bg-gray-10" />
  </div>
  <component :is="() => CurrentComponent" />
</template>

<script>
export default {
  name: 'TabSwitch',
}
</script>
<script setup>
import { useSlots, computed, ref } from 'vue'

const slots = useSlots()

const children = slots.default()

const labelAndComponents = computed(() =>
  children.map(slot => ({
    label: slot.props.label,
    component: slot.children.default()[0],
  })),
)

const currentLabel = ref(children[0].props.label)
function switchTo(label) {
  currentLabel.value = label
}
const CurrentComponent = computed(() => {
  return labelAndComponents.value.find(
    item => item.label === currentLabel.value,
  ).component
})
</script>
