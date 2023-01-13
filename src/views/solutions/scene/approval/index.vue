<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.approval')"
    img="/images/approval/title_img.webp"
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
    padding="py-[72px]"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <BlockInLayout :title="pageText.solutions.flow.title" class="md:pt-0 pt-0">
      <img src="/images/approval/flow.webp" alt="" />
    </BlockInLayout>
    <TabSwitch>
      <TabPane :label="pageText.solutions.flow.tab.event_sorting">
        <ApprovalEventSorting />
      </TabPane>
      <TabPane :label="pageText.solutions.flow.tab.building">
        <ApprovalBuilding />
      </TabPane>
      <TabPane :label="pageText.solutions.flow.tab.mobile">
        <ApprovalMobile />
      </TabPane>
      <TabPane :label="pageText.solutions.flow.tab.synthesis">
        <ApprovalSynthesis />
      </TabPane>
      <TabPane :label="pageText.solutions.flow.tab.data_save">
        <ApprovalDataSave />
      </TabPane>
      <TabPane :label="pageText.solutions.flow.tab.visualized">
        <ApprovalVisualized />
      </TabPane>
    </TabSwitch>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.project_value')"
    padding="py-[72px]"
    class="dark:bg-gray-08 bg-gray-03"
  >
    <div class="flex md:flex-row flex-col gap-6 mb-[72px]">
      <CardItem
        v-for="item of projectValueCardItmes"
        :key="item.title"
        :item="item"
        class="flex-1 dark:bg-gray-10 bg-white"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.project_function')"
    padding="md:pt-[104px] md:pb-32 pt-16 pb-[88px]"
  >
    <SelectorList :items="selectorListItems" />
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.advantage')"
    :block-desc="pageText.advantage.description"
  >
    <img src="/images/approval/advantage_1.webp" alt="" />
    <img src="/images/approval/advantage_2.webp" alt="" />
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.project_advantages')"
    padding="md:pt-[104px] md:pb-32 pt-16 pb-[88px]"
  >
    <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <CardItem
        v-for="item of itemListItems"
        :key="item.title"
        :item="item"
        class="flex-1"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.success_cases')"
    :block-desc="pageText.success_cases.description"
    padding="py-[72px] md:mb-20"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <img src="/images/approval/success_cases.webp" alt="" />
  </BlockLayout>
</template>

<script setup>
import { get } from 'lodash-es'

import { TabSwitch, TabPane } from '@/components'
import {
  BlockInLayout,
  BlockLayout,
  CardItem,
  SolutionTitle,
  SelectorList,
} from '@/views/components'

import ApprovalBuilding from './_building.vue'
import ApprovalDataSave from './_data-save.vue'
import ApprovalEventSorting from './_event-sorting.vue'
import ApprovalMobile from './_mobile.vue'
import ApprovalSynthesis from './_synthesis.vue'
import ApprovalVisualized from './_visualized.vue'

const pageText = {
  questions: {
    live: {
      title: '现场填报难，材料准备难，办理结果查询难',
      description:
        '群众/企业前往大厅办理，需填写过多材料，并可能反复准备材料，并难以查询办理结果。',
      icon: '/images/tips.svg',
    },
    hard_use: {
      title: '窗口受理杂，二次录入烦，系统使用难',
      description:
        '工作人员在一个窗口会受理上百项事项，非常复杂，并且不同事项对应着不同的系统，还存在二次录入以及切换系统等麻烦操作。',
      icon: '/images/tips.svg',
    },
    disunity: {
      title: '数据不全面，不可得，不互通，不鲜活，不统一',
      description:
        '办理过程中，大量数据未被留存。垂管系统里的数据无法获取。跨系统数据无法互通，且二次录入导致数据不鲜活且不同系统标准不一导致数据标准不统一。&治理」「本地化应用」。',
      icon: '/images/tips.svg',
    },
  },
  solutions: {
    flow: {
      title: '业务流程',
      tab: {
        event_sorting: '事项梳理',
        building: '分站点建设',
        mobile: '掌上办',
        synthesis: '综窗系统',
        data_save: '数据流存',
        visualized: '可视化分析',
      },
    },
  },
  project_value: {
    enterprise: {
      title: '居民、企业端',
      description:
        '国家号召的“最多跑一次”的政务办理极大的提高了老百姓/企业的办事效率 。老百姓只需在家通过手机了解办事指南，上传办事材料，最后证件会通过快递或网格员送到老百姓的手中。',
    },
    worker: {
      title: '工作人员端',
      description:
        '传统的线下模式，工作人员手工录入垂直部门系统，工作量大，效率低。通过行政审批受办系统，工作人员只需要复制粘贴的形式进行系统的录入，减少人工识别纸质表单的难度，大大提高了内部工作人员的办理效率。',
    },
    admin: {
      title: '管理者端',
      description:
        '由于整个行政审批事宜全部线上化，所有的工作已经线上留痕，领导可以全局性的了解到整个系统的办件量，每个工作人员的办件量、办件效率等问题，从而可以辅助领导进行业务决策。',
    },
  },
  project_function: {
    authority: {
      image: '/images/approval/function_authority.png',
      icon: '/images/approval/authority.svg',
      title: '组织权限配置',
      description: '组织架构 Excel 一键导入，权限分配，实现数字孪生',
    },
    page: {
      image: '/images/approval/function_page.png',
      icon: '/images/approval/page.svg',
      title: '页面填报配置',
      description:
        '政务服务主要是以群众/企业进行发起，低代码平台通过快速搭建前端填报页面。根据业务特性，无需代码直接生成',
    },
    flow: {
      image: '/images/approval/function_flow.png',
      icon: '/images/approval/flow.svg',
      title: '流程节点配置',
      description:
        '群众/企业发起后，就需要工作人员进行审核、受理、制证等节点。低代码平台通过拖拽方式快速部署节点，生成审批流程。每个节点可单独配置属性，并设置单个或多个工作人员',
    },
  },
  advantage: {
    description:
      '低代码平台的优势即在于快速，可30分钟完成平台私有部署，5分钟就可上线一条事项流程让群众/企业和工作人员进行使用，并在数分钟内对所有节点或流程进行调整重新上线，且对于重复性流程可直接复用。即建设好一个村（社区）政务服务平台即可快速复制至其它村（社区）政务服务平台，大大节约开发时间和测试时间，直接上线投入使用。',
  },
  project_advantages: {
    population: {
      icon: '/images/approval/population.svg',
      title: '老百姓',
      description:
        '老百姓只需在公众号上进行事项发起和办事指南查询，无需反复前往办理大厅，打通“最后一公里”，提升居民幸福指数。',
    },
    worker: {
      icon: '/images/approval/worker.svg',
      title: '工作人员',
      description: '工作人员仅需要专注办件，无需跨系统反复录入数据，减负增效。',
    },
    data: {
      icon: '/images/approval/data.svg',
      title: '政务数据',
      description:
        '政务服务数据全留存，可即时分析理塘政务服务数据，辅助领导决策。',
    },
  },
  success_cases: {
    description:
      '桂溪街道、中和街道、西园街道、合作街道、石羊街道、郫都行政审批局',
  },
}

const questionCardItems = ['live', 'hard_use', 'disunity'].map(key => ({
  icon: get(pageText, `questions.${key}.icon`),
  title: get(pageText, `questions.${key}.title`),
  desc: get(pageText, `questions.${key}.description`),
}))

const projectValueCardItmes = ['enterprise', 'worker', 'admin'].map(key => ({
  title: get(pageText, `project_value.${key}.title`),
  desc: get(pageText, `project_value.${key}.description`),
}))

const selectorListItems = ['authority', 'page', 'flow'].map(key => ({
  title: get(pageText, `project_function.${key}.title`),
  desc: get(pageText, `project_function.${key}.description`),
  img: get(pageText, `project_function.${key}.image`),
  icon: get(pageText, `project_function.${key}.icon`),
}))

const itemListItems = ['population', 'worker', 'data'].map(key => ({
  title: get(pageText, `project_advantages.${key}.title`),
  desc: get(pageText, `project_advantages.${key}.description`),
  icon: get(pageText, `project_advantages.${key}.icon`),
}))
</script>
