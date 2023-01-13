<template>
  <div class="md:relative group py-1 cursor-default">
    <div class="flex items-center justify-end" @click="changeMenuState">
      <div class="md:block" :class="{ hidden: isShowMenu }">
        {{ $t('page.solutions') }}
      </div>
      <SvgIcon
        class="md:hidden"
        :class="{ hidden: !isShowMenu }"
        path="/images/close.svg"
      />
    </div>
    <div
      class="md:group-hover:flex hidden absolute right-0 top-full w-auto p-4 gap-4 dark:bg-gray-850 bg-white rounded-lg shadow-2xl"
    >
      <div v-for="(menuItem, name) in menu" :key="name" class="w-64">
        <div class="text-[13px] leading-5 text-gray-50 py-2 px-[10px]">
          {{ $t(name) }}
        </div>
        <RouterLink
          v-for="value of menuItem"
          :key="value.label"
          :to="value.link"
        >
          <div
            class="text-[14px] leading-5 py-2 px-2 md:hover:bg-gray-03 dark:md:hover:bg-gray-08 rounded-md"
          >
            {{ value.label }}
          </div>
        </RouterLink>
      </div>
    </div>
    <div
      class="md:hidden absolute top-full left-0 w-full h-screen pt-4 px-1 dark:bg-black bg-white"
      :class="{ hidden: !isShowMenu }"
    >
      <div v-for="(menuItem, name) in menu" :key="name" class="mb-4">
        <div class="text-[13px] leading-5 text-gray-50 py-2 px-[14px]">
          {{ $t(name) }}
        </div>
        <RouterLink
          v-for="value of menuItem"
          :key="value.label"
          :to="value.link"
        >
          <div
            class="text-[14px] leading-5 py-[10px] px-4"
            @click="changeMenuState"
          >
            {{ value.label }}
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SvgIcon } from '@/components'
import { translate } from '@/locale'

const props = defineProps({ isShowMenu: { type: Boolean, requeired: true } })
const emit = defineEmits(['update:isShowMenu'])

const menu = {
  'page.solutions.platform': [
    {
      label: translate('page.solutions.platform.flow_engine'),
      link: '/flow_engine',
    },
    {
      label: translate('page.solutions.platform.form_engine'),
      link: '/form_engine',
    },
    {
      label: translate('page.solutions.platform.message_manager'),
      link: '/message_manager',
    },
    { label: translate('page.solutions.platform.cms'), link: '/cms' },
    { label: translate('page.solutions.platform.data_hub'), link: '/data_hub' },
  ],
  'page.solutions.scene': [
    {
      label: translate('page.solutions.scene.grassroot'),
      link: '/grassroot',
    },
    {
      label: translate('page.solutions.scene.tracking_platform'),
      link: '/tracking_platform',
    },
    {
      label: translate('page.solutions.scene.approval'),
      link: '/approval',
    },
    {
      label: translate('page.solutions.scene.all_in_one_table'),
      link: '/all_in_one_table',
    },
    {
      label: translate('page.solutions.scene.grid_admin'),
      link: '/grid_admin',
    },
    {
      label: translate('page.solutions.scene.supervision'),
      link: '/supervision',
    },
  ],
}

function changeMenuState() {
  emit('update:isShowMenu', !props.isShowMenu)
}
</script>
