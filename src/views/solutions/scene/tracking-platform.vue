<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.tracking_platform')"
    img="/images/tracking_platform/title_img.webp"
  />
  <BlockLayout
    :title="$t('page.solutions.scene.questions')"
    padding="md:pt-[105px] md:pb-[101px] pt-16 pb-8"
  >
    <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:px-23">
      <CardItem
        v-for="item of questionCardItems"
        :key="item.title"
        :item="item"
        align="items-center"
        class="dark:bg-gray-08 bg-gray-03"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.solutions')"
    :block-desc="pageAssets.solutions.descriptions"
    padding="py-[72px]"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <BlockInLayout :title="pageAssets.solutions.architecture">
      <img
        class="md:my-14 my-6"
        src="/images/tracking_platform/architecture.webp"
        alt=""
      />
    </BlockInLayout>
    <BlockInLayout :title="pageAssets.solutions.flow.title">
      <img
        class="md:my-14 my-6"
        src="/images/tracking_platform/flow.webp"
        alt=""
      />
      <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <CardItem
          v-for="item of flowDescriptions"
          :key="item.title"
          :item="item"
          class="flex-1 dark:bg-gray-08 bg-gray-03"
        />
      </div>
    </BlockInLayout>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.project_value')"
    :block-desc="pageAssets.project_value.description"
    padding="py-[72px]"
    class="dark:bg-gray-08 bg-gray-03"
  >
    <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <CardItem
        v-for="item of projectValueDescriptions"
        :key="item.title"
        :item="item"
        class="flex-1 dark:bg-gray-10 bg-white"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.project_advantages')"
    padding="md:pt-[104px] md:pb-32 pt-16 pb-[88px]"
  >
    <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <CardItem v-for="item of itemListItems" :key="item.title" :item="item" />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.success_cases')"
    padding="py-[72px] md:mb-44"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <BlockInLayout
      :title="pageAssets.success_cases.cases_name"
      class="md:pt-0 pt-0"
    >
      <h5 class="text-center mb-6 mt-12">
        {{ pageAssets.success_cases.find }}
      </h5>
      <div class="flex md:flex-row flex-col gap-6">
        <div
          v-for="item of successCaseFindItems"
          :key="item"
          class="rounded-lg overflow-hidden linear-image-item-bg"
        >
          <img :src="item" alt="" />
        </div>
      </div>
      <h5 class="text-center mb-6 mt-12">
        {{ pageAssets.success_cases.use }}
      </h5>
      <div class="flex md:flex-row flex-col gap-6">
        <div
          v-for="item of successCaseUseItems"
          :key="item"
          class="rounded-lg overflow-hidden linear-image-item-bg"
        >
          <img :src="item" alt="" />
        </div>
      </div>
      <h5 class="text-center mb-6 mt-12">
        {{ pageAssets.success_cases.analysis }}
      </h5>
      <div class="flex flex-col gap-6">
        <div
          v-for="item of successCaseAnalysisItems"
          :key="item"
          class="rounded-lg overflow-hidden linear-image-item-bg"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </BlockInLayout>
  </BlockLayout>
</template>

<script setup>
import { get } from 'lodash-es'

import {
  BlockInLayout,
  BlockLayout,
  CardItem,
  SolutionTitle,
} from '@/views/components'

const pageAssets = {
  questions: {
    few_people: {
      icon: '/images/tips.svg',
      title: '???????????????????????????????????????',
      description:
        '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 1:2000 ?????????',
    },
    tranditional: {
      icon: '/images/tips.svg',
      title: '????????????????????????',
      description:
        '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    },
    poor_business: {
      icon: '/images/tips.svg',
      title: '????????????????????????',
      description:
        '???????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    },
    share_hard: {
      icon: '/images/tips.svg',
      title: '????????????????????????',
      description:
        '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    },
    work_quality: {
      icon: '/images/tips.svg',
      title: '????????????????????????',
      description:
        '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    },
    work_efficiency: {
      icon: '/images/tips.svg',
      title: '????????????????????????',
      description:
        '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    },
    work_implement: {
      icon: '/images/tips.svg',
      title: '????????????????????????',
      description:
        '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    },
    only_experience: {
      icon: '/images/tips.svg',
      title: '????????????????????????',
      description:
        '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    },
  },
  solutions: {
    descriptions:
      '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????/????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    architecture: '?????????',
    flow: {
      title: '?????????',
      find: {
        title: '????????????',
        description:
          '???????????????????????????????????????????????????????????????????????????????????????????????????????????????',
      },
      use: {
        title: '????????????',
        description:
          '????????????????????????????????????????????????????????????????????????????????????????????????????????????',
      },
      how_use: {
        title: '????????????',
        description: '??????????????????????????????????????????????????????????????????????????????',
      },
      analysis: {
        title: '????????????',
        description:
          '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
      },
    },
  },
  project_value: {
    description:
      '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    stress: {
      title: '????????????????????????',
      description:
        '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????,????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????,??????????????????????????????????????????????????????',
    },
    flow: {
      title: '?????????????????????????????????',
      description:
        '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    },
    accurate: {
      title: '??????????????????',
      description:
        '???????????????????????????/??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????/?????????????????????????????????',
    },
    scientific: {
      title: '???????????????????????????',
      description:
        '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
    },
  },
  project_advantages: {
    efficient: {
      title: '?????????????????????????????????????????????????????????',
      description: '???????????????????????????????????????????????????????????????????????????????????????',
      icon: '/images/tracking_platform/efficient.svg',
    },
    modernization: {
      title: '??????????????????????????????????????????????????????',
      description: '????????????????????????????????????????????????????????????????????????',
      icon: '/images/tracking_platform/modernization.svg',
    },
    target: {
      title: '????????????????????????????????????????????????????????????',
      description:
        '???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????- ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
      icon: '/images/tracking_platform/target.svg',
    },
    practical: {
      title: '??????????????????????????????????????????????????????',
      description:
        '?????????????????????????????????????????????????????????????????????????????????????????????',
      icon: '/images/tracking_platform/practical.svg',
    },
  },
  success_cases: {
    cases_name: '?????????????????????????????????',
    cases_detail: '',
    find: '??????????????????????????????',
    use: '??????????????????????????? & ???????????????',
    analysis: '????????????',
  },
}

const questionCardItems = [
  'few_people',
  'tranditional',
  'poor_business',
  'share_hard',
  'work_quality',
  'work_efficiency',
  'work_implement',
  'only_experience',
].map(key => ({
  icon: get(pageAssets, `questions.${key}.icon`),
  title: get(pageAssets, `questions.${key}.title`),
  desc: get(pageAssets, `questions.${key}.description`),
}))

const flowDescriptions = ['find', 'use', 'how_use', 'analysis'].map(key => ({
  title: get(pageAssets, `solutions.flow.${key}.title`),
  desc: get(pageAssets, `solutions.flow.${key}.description`),
}))

const projectValueDescriptions = [
  'stress',
  'flow',
  'accurate',
  'scientific',
].map(key => ({
  title: get(pageAssets, `project_value.${key}.title`),
  desc: get(pageAssets, `project_value.${key}.description`),
}))

const itemListItems = ['efficient', 'modernization', 'target', 'practical'].map(
  key => ({
    title: get(pageAssets, `project_advantages.${key}.title`),
    desc: get(pageAssets, `project_advantages.${key}.description`),
    icon: get(pageAssets, `project_advantages.${key}.icon`),
  }),
)

const successCaseFindItems = [
  '/images/tracking_platform/find_1.webp',
  '/images/tracking_platform/find_2.webp',
  '/images/tracking_platform/find_3.webp',
]
const successCaseUseItems = [
  '/images/tracking_platform/use_1.webp',
  '/images/tracking_platform/use_2.webp',
  '/images/tracking_platform/use_3.webp',
]
const successCaseAnalysisItems = [
  '/images/tracking_platform/analysis_1.webp',
  '/images/tracking_platform/analysis_2.webp',
]
</script>
