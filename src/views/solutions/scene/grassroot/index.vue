<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.grassroot')"
    img="/images/grassroot/title_img.png"
  />
  <BlockLayout
    :title="$t('page.solutions.scene.questions')"
    padding="md:pt-[105px] md:pb-[101px] pt-16 pb-8"
  >
    <div class="grid gap-6 md:grid-cols-2 grid-cols-1 md:px-23">
      <CardItem
        v-for="item of questionCardItems"
        :key="item.title"
        :item="item"
        align="items-center"
        class="md:p-10 dark:bg-gray-08 bg-gray-03"
      />
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.solutions')"
    :block-desc="pageText.solutions.description"
    padding="py-[72px]"
    class="overflow-hidden dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <img class="mb-6" src="/images/grassroot/solutions.png" alt="" />
    <TabSwitch>
      <TabPane :label="pageText.tab.building">
        <GrassrootBuilding />
      </TabPane>
      <TabPane :label="pageText.tab.government_operation">
        <GrassrootOperation />
      </TabPane>
      <TabPane :label="pageText.tab.government_governance">
        <GrassrootGovernance />
      </TabPane>
      <TabPane :label="pageText.tab.resident_autonomy">
        <GrassrootAutonomy />
      </TabPane>
      <TabPane :label="pageText.tab.rule_by_law">
        <GrassrootRuleByLaw />
      </TabPane>
    </TabSwitch>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.project_value')"
    :block-desc="pageText.project_value.description"
    padding="py-[72px]"
    class="dark:bg-gray-08 bg-gray-03"
  >
    <div class="flex md:flex-row flex-col gap-6">
      <CardItem
        v-for="item of cardItems"
        :key="item.title"
        :item="item"
        class="flex-1 md:p-24 p-9 dark:bg-gray-10 bg-white"
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
    padding="py-[72px] md:mb-[150px]"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <div
      class="flex md:flex-row flex-col rounded-lg shadow-2xl overflow-hidden"
    >
      <div class="flex-1 flex items-center linear-image-item-bg">
        <img src="/images/grassroot/success_cases.webp" alt="" />
      </div>
      <div class="flex-1">
        <div class="md:p-16 p-6 dark:bg-black bg-white">
          <h5>
            {{ pageText.success_cases.cases_name }}
          </h5>
          <div v-for="item of successCaseDescItems" :key="item.title">
            <div class="text-[20px] font-semibold mb-2 mt-6">
              {{ item.title }}
            </div>
            <div class="text-gray-60">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup>
import { get } from 'lodash-es'

import { TabSwitch, TabPane } from '@/components'
import { SolutionTitle, CardItem, BlockLayout } from '@/views/components'

import GrassrootBuilding from './_building.vue'
import GrassrootGovernance from './_governemnt-governance.vue'
import GrassrootOperation from './_government-operation.vue'
import GrassrootAutonomy from './_resident-autonomy.vue'
import GrassrootRuleByLaw from './_rule-by-law.vue'

const pageText = {
  questions: {
    few_people: {
      title: '覆盖地域广｜服务对象多｜工作人员少',
      description:
        '街道和社区工作人员有限，服务对象包括居民、社会组织和企业等，通过不同的维度进行服务。',
      icon: '/images/tips.svg',
    },
    low_efficiency: {
      title: '基层负担重｜业务流转慢｜上报效率低',
      description:
        '基层政府对于日常工作的开展，例如网格化采集数据、街道办对于社区的管理、各个部门对于部门业务的开展更多是以纸质流转单、个人台账、微信和垂管系统等形式进行开展。',
      icon: '/images/tips.svg',
    },
    poor_business: {
      title: '协作能力弱｜沟通效率低｜业务联动差',
      description:
        '每个职能部门的业务的开展，都是独立形成闭环等形式进行。部门与部门之间缺乏高效沟通的协作机制与并行处理事件的平台支撑。',
      icon: '/images/tips.svg',
    },
    few_data: {
      title: '数化程度低｜数据留存少｜全局统揽弱',
      description:
        '当前各部门开展工作的数据分别留存在垂管系统、纸质文档、个人台账、微信等形式，没有一个统一的属于街道办内部自己的平台进行统一的留存和管理。',
      icon: '/images/tips.svg',
    },
  },
  solutions: {
    description:
      '街道和社区工作人员有限，服务对象包括居民、社会组织和企业等，通过不同的维度进行服务。',
    building: {
      title: '智慧党建（党建引领）',
      content: '党建宣传/交流互动/党员教育/党员服务/党务管理/党员督办',
    },
    government_operation: {
      title: '政府运行',
      content: '网络理政/目标督办/人事管理/议题管理/OA 管理',
    },
    government_governance: {
      title: '政府治理',
      content: '政务服务/综合网格治理/民生服务',
    },
    resident_autonomy: {
      title: '居民自治',
      content: '诉求一键通/群防群治/在线投票表决',
    },
    rule_of_law_by_virtue: {
      title: '德治法治',
      content: '德治宣扬/志愿者服务/微心愿',
    },
    population_library: '人口库',
    corporate_library: '法人库',
    position: '空间地理信息库',
    community: '社区小脑/街道中脑',
    visualization: '可视化',
    table: '一表通',
    inventory: '重点数据清单',
  },
  tab: {
    building: '党建引领',
    government_governance: '政府治理',
    government_operation: '政府运行',
    resident_autonomy: '居民自治',
    rule_by_law: '德治法治',
  },
  project_value: {
    description: '群众与工作人员的双赢方案',
    enterprise: {
      title: '群众 | 企业端',
      description:
        '审批业务线上化，群众企业办事更方便 实现一般事项“不见面”，复杂事项“只跑一次”，咨询、申报、预审、办理、反馈全流程网上办，改善基层业务庞杂带来的窘况。同时，审批流程透明，办事人员可第一时间获得业务办理的进展，方便辖区群众和企业，从而提高群众和企业的满意度- 基层治理线上化，共建共治全民同参与 通过互联网的手段将基层治理的能力全面线上化，全民参与基层治理工作，让群众更有参与感，共建共治然后共享，人人都有社会责任感和获得感- 民|企服务线上化，精准服务响应更及时 为群众和企业提供一个专属的交互通道，有诉求通过平台快速提交，街道工作人员可及时了解情况，并通过平台快速响应，提升政民（政企）服务的快速响应机制，让群众和企业可以也可以第一时间了解处理情况',
    },
    worker: {
      title: '工作人员｜管理者端',
      description:
        '内部业务线上化，业务开展更高效 通过对街道内部各业务科室的业务情况进行调研，以业务孪生的方式建设线上化的业务流程，为科室业务开展提供更加高效的服务支撑，同时保障街道的数据留存真实有效和实时高效的目的- 工作方式便捷化，业务协同更及时 以街道的微信公众号为主要访问入口，未来可集成更多的服务入口平台，利用高效的线上化处理能力，提供便捷的业务处理，让工作开展变得更加简单和高效，业务协同更加紧密和及时- 数据留存规范化，辅助决策更科学 通过业务线上化并对字段进行标准化的设定，让原来线下的数据全面留存线上，并通过字段标准的设定，实现留存的数据更准确和规范，为街道的业务辅助决策提供更加科学的数据支撑',
    },
  },
  project_advantages: {
    private: {
      title: '私有化部署',
      description:
        '系统可进行快速部署，在30分钟内即可完成基平台私有部署及搭建，满足不同客户的部署需求。',
      icon: '/images/grassroot/private.svg',
    },
    twin: {
      title: '业务孪生',
      description:
        '通过图形化搭积木的方式，可以在5分钟内完成一项业务流程搭建，适应用户复杂多变的应用场景，若客户的业务进行调整，平台可快速调整适应，可保障所有通过平台上线的业务完全符合客户业务开展逻辑，使得线上业务平滑开展。',
      icon: '/images/grassroot/twin.svg',
    },
    parallel: {
      title: '多端运行',
      description:
        '系统基于H5进行开发，可以无缝适应PC及移动端，无需对PC及移动端进行额外的开发适配，并支持电脑端/移动端同步运行，兼容IOS/安卓/Windows/Mac系统。',
      icon: '/images/grassroot/parallel.svg',
    },
    iteration: {
      title: '高效迭代',
      description:
        '微服务架构的设计，帮助系统可以快速的进行迭代，可实现系统底层功能的快速优化调整。',
      icon: '/images/grassroot/iteration.svg',
    },
  },
  success_cases: {
    cases_name: '成都高新区桂溪街道办事处',
    cases_detail: {
      public_service: {
        title: '公共服务类',
        description:
          '包括「政务审批」「诉求处理」「场馆预约」等200+项事项，为辖区居民/企业提供全面性的公共服务。',
      },
      social_governance: {
        title: '社会治理类',
        description:
          '包括「信访转派」「巡查巡检」「群防群治」等50+项事项，大幅度提升政府治理效率。',
      },
      internal: {
        title: '内部运转类',
        description:
          '包括「内部OA」「网络理政」「扶贫走访」等20+项事项，保障街办内部工作有序高效运转。',
      },
    },
  },
}

const questionCardItems = [
  'few_people',
  'low_efficiency',
  'poor_business',
  'few_data',
].map(key => ({
  icon: get(pageText, `questions.${key}.icon`),
  title: get(pageText, `questions.${key}.title`),
  desc: get(pageText, `questions.${key}.description`),
}))

const cardItems = ['enterprise', 'worker'].map(key => ({
  title: get(pageText, `project_value.${key}.title`),
  desc: get(pageText, `project_value.${key}.description`),
}))

const itemListItems = ['private', 'twin', 'parallel', 'iteration'].map(key => ({
  title: get(pageText, `project_advantages.${key}.title`),
  desc: get(pageText, `project_advantages.${key}.description`),
  icon: get(pageText, `project_advantages.${key}.icon`),
}))

const successCaseDescItems = [
  'public_service',
  'social_governance',
  'internal',
].map(key => ({
  title: get(pageText, `success_cases.cases_detail.${key}.title`),
  desc: get(pageText, `success_cases.cases_detail.${key}.description`),
}))
</script>
