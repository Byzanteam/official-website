<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.all_in_one_table')"
    img="/images/all_in_one_table/title_img.webp"
  />
  <BlockLayout
    :title="$t('page.solutions.scene.questions')"
    padding="md:pt-[105px] md:pb-[101px] pt-16 pb-8"
  >
    <div class="flex md:flex-row flex-col gap-6 md:px-23">
      <CardItem
        v-for="item of questionCardItems"
        :key="item.title"
        :item="item"
        align="items-center"
        class="flex-1 md:p-10 dark:bg-gray-08 bg-gray-03"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.solutions')"
    :block-desc="pageText.solutions.description"
    padding="py-[72px]"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <CardItem
        v-for="item of solutionValueItems"
        :key="item.desc"
        :item="item"
        class="flex-1 dark:bg-gray-08 bg-gray-03"
      />
    </div>
    <BlockInLayout :title="pageText.solutions.platform_build.title">
      <img src="/images/all_in_one_table/platform_build.png" alt="" />
    </BlockInLayout>
    <BlockInLayout
      :title="pageText.solutions.project_function.title"
      class="w-full"
    >
      <TabSwitch>
        <TabPane :label="pageText.solutions.project_function.tab.config">
          <AllInOneTableConfig />
        </TabPane>
        <TabPane :label="pageText.solutions.project_function.tab.input">
          <AllInOneTableInput />
        </TabPane>
        <TabPane :label="pageText.solutions.project_function.tab.management">
          <AllInOneTableManagement />
        </TabPane>
      </TabSwitch>
    </BlockInLayout>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.project_value')"
    :block-desc="pageText.project_value.description"
    padding="py-[72px]"
    class="dark:bg-gray-08 bg-gray-03"
  >
    <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <CardItem
        v-for="item of projectValueCardItmes"
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
    <div
      class="flex md:flex-row flex-col rounded-lg shadow-2xl overflow-hidden"
    >
      <div class="flex-1 flex items-center linear-image-item-bg">
        <img src="/images/all_in_one_table/success_cases.webp" alt="" />
      </div>
      <div class="flex-1">
        <div class="md:p-16 p-6 dark:bg-black bg-white">
          <h5 class="md:mb-12 mb-8">
            {{ pageText.success_cases.cases_name }}
          </h5>
          <div class="text-gray-60">
            {{ pageText.success_cases.cases_detail }}
          </div>
        </div>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup>
import { get } from 'lodash-es'

import { TabSwitch, TabPane } from '@/components'
import {
  SolutionTitle,
  BlockInLayout,
  BlockLayout,
  CardItem,
} from '@/views/components'

import AllInOneTableConfig from './_config.vue'
import AllInOneTableInput from './_input.vue'
import AllInOneTableManagement from './_management.vue'

const pageText = {
  questions: {
    multi: {
      icon: '/images/tips.svg',
      title: '“多”“少”矛盾',
      description:
        '社区每周填报的表单「多」达近百张，耗费填表时间「多」，导致社工走访服务居民时间「少」。',
    },
    unified: {
      icon: '/images/tips.svg',
      title: '统”“分”矛盾',
      description:
        '填报系统分散在各业务条线，同一内容多头录入、重复填报现象严重。',
    },
    unilateral: {
      icon: '/images/tips.svg',
      title: '“点”“面”矛盾',
      description:
        '类数据分散在省市区不同层级业务系统，数据共享困难，“一表通”的创新，打破了网格、条线壁垒，「汇集整合」社区原有基础数据，依托平台化建设，实现辖区数据「本地化采集」「本地化融合&治理」「本地化应用」。',
    },
  },
  solutions: {
    description:
      '「一表通数据管理平台」是一套为基层政府量身打造的减负增效的信息化系统。一表通系统分为「数据抓取」「数据融合」「数据应用」三个部分。',
    description_detail: {
      grab: '「数据抓取」阶段它可以利用机器人自动从各类应用、各类采集系统、抓取数据形成工作人员的「线上台账系统」。',
      fusion:
        '「数据融合」阶段系统将以身份证号码、统一信用代码、标准地址作为唯一标识符，融合为人口一张表 、法人一张表 、地理空间一张表。',
      use: '「数据应用」阶段并可将融合后的数据既用于社区数据库建设，也可利用「自动填报机器人」实现跨系统填报、同时也能生成「自定义excel报表」支撑工作开展。',
    },
    platform_build: {
      title: '平台构建',
    },
    project_function: {
      title: '产品功能',
      tab: {
        config: '配置端',
        input: '填报端',
        management: '管理端',
      },
    },
  },
  project_value: {
    description:
      '以基层减负报表整治为契机，着眼“聚、通、用”，从数据采集源头找问题，系统通过梳理报表字段、制定数据标准、融合报表数据，建设数据基础库，精减整合基层报表，自动生成报表，并推进数据开放共享，深度挖掘数据价值，实现对内数据协同共享、对外数据开放复用。',
    once: {
      title: '一次采集',
      description: '减负降频，同一数据只采集一次。',
    },
    multi: {
      title: '多方共享',
      description: '根据业务需求多方复用政务数据。',
    },
    source: {
      title: '数据同源',
      description: '数据标准、数据确权。保障数据的合法性和有效性。',
    },
    check: {
      title: '多方校核',
      description: '多方应用校验数据的准确性。提升政务管理与基层治理的准确性。',
    },
  },
  project_advantages: {
    private: {
      title: '私有化部署',
      description:
        '系统可进行快速部署，在30分钟内即可完成基平台私有部署及搭建，满足不同客户的部署需求。',
      icon: '/images/all_in_one_table/private.svg',
    },
    twin: {
      title: '业务孪生',
      description:
        '完全根据客户的实际业务开展情况，进行配置及上线，让软件来适应业务，而非业务向软件妥协。',
      icon: '/images/all_in_one_table/twin.svg',
    },
    parallel: {
      title: '多端运行',
      description:
        '系统基于H5进行开发，可以无缝适应PC及移动端，无需对PC及移动端进行额外的开发适配，并支持电脑端/移动端同步运行，兼容IOS/安卓/Windows/Mac系统。',
      icon: '/images/all_in_one_table/parallel.svg',
    },
    iteration: {
      title: '高效迭代',
      description:
        '微服务架构的设计，帮助系统可以快速的进行迭代，可实现系统底层功能的快速优化调整。',
      icon: '/images/all_in_one_table/iteration.svg',
    },
  },
  success_cases: {
    cases_name: '成都某区级政府：疫情一表通系统',
    cases_detail:
      '「疫情一表通系统」融合市级回流数据，实现区级各社区疫情数据的融合管理。系统将各社区日常填报的以人为中心关于疫情的基础数据、轨迹数据、疫苗接种数据、核酸检验数据共计53个字段以身份证号码作为唯一识别码汇集成为基层防疫数据一张表。通过数据融通和大数据处理，社区工作人员输入人员身份证号码，自动同步其他52个字段数据，大幅度降低了社区工作人员查询数据时间，同时区、街道层面相关人员可进行多维查询、全量导出、统计汇报，为更精准的防疫做好数据基础。',
  },
}

const questionCardItems = ['multi', 'unified', 'unilateral'].map(key => ({
  icon: get(pageText, `questions.${key}.icon`),
  title: get(pageText, `questions.${key}.title`),
  desc: get(pageText, `questions.${key}.description`),
}))

const solutionValueItems = ['grab', 'fusion', 'use'].map(key => ({
  desc: get(pageText, `solutions.description_detail.${key}`),
}))

const projectValueCardItmes = ['once', 'multi', 'source', 'check'].map(key => ({
  title: get(pageText, `project_value.${key}.title`),
  desc: get(pageText, `project_value.${key}.description`),
}))

const itemListItems = ['private', 'twin', 'parallel', 'iteration'].map(key => ({
  title: get(pageText, `project_advantages.${key}.title`),
  desc: get(pageText, `project_advantages.${key}.description`),
  icon: get(pageText, `project_advantages.${key}.icon`),
}))
</script>
