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
        class="md:p-10 dark:bg-gray-08 bg-gray-03"
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
      title: '面积大｜对象杂｜工作人员少',
      description:
        '现在的基层政府一般服务的面积区域都比较大，面临到的对象包括居民、企业、社会组织、外国人等，通过不同的维度进行服务，且网格员数量比较少，一般在 1:2000 左右。',
    },
    tranditional: {
      icon: '/images/tips.svg',
      title: '运转方式较为传统',
      description:
        '基层政府对于日常工作的开展，例如网格化采集数据、街道办对于社区的管理、各个部门对于职能业务的开展更多是以纸质流转单、个人台账、微信、垂管系统等形式进行开展。',
    },
    poor_business: {
      icon: '/images/tips.svg',
      title: '部门之间缺乏协作',
      description:
        '业务的开展，都是独立自行闭环等形式进行。部门与部门之间缺乏沟通协作与并行。',
    },
    share_hard: {
      icon: '/images/tips.svg',
      title: '业务信息难以共享',
      description:
        '各部门信息化系统独立建设、独立运行、数据存储不统一、处置策略不一致，存在重复建设情况，且缺乏整合，存在信息资源独立，无法及时共享，处置协调不畅，现场处置时容易出现混乱的情况。',
    },
    work_quality: {
      icon: '/images/tips.svg',
      title: '工作质量有待提高',
      description:
        '由于几十万的人口都由几百个网格员在进行管理服务与覆盖，致使每个网格员服务的对象众多，网格员每日的工作只能针对紧急重要的工作开展完成，无法系统全面深入的完成服务管理工作。',
    },
    work_efficiency: {
      icon: '/images/tips.svg',
      title: '工作效率有待加强',
      description:
        '基层政务的工作方式更多的采用的是线下形式开展，例如纸质、微信、个人台账形式进行，从而致使网格员对于基层数据的采集、职能口工作人员对于工作的开展等都相对效率较低。',
    },
    work_implement: {
      icon: '/images/tips.svg',
      title: '工作执行难以突破',
      description:
        '每个部门的工作都是独立自行闭环进行运转，每个同事的工作都是循规蹈矩的进行开展，无法利用其他部门的数据进行协作工作，致使每个部门的工作只能按部就班的完成，无法具有突破性的工作创新。',
    },
    only_experience: {
      icon: '/images/tips.svg',
      title: '管理决策全靠经验',
      description:
        '由于基层政府现在的数据都留存在垂管系统、纸质表单、工作台账等形式上，故无一套统一的平台进行留存，从而无法将数据做统一的统计、分析和挖掘，致使领导层面上的很多决策更多靠的是自己的经验，无法真正做到用数据做支撑的决策。',
    },
  },
  solutions: {
    descriptions:
      '统调平台围绕“高效处置一件事”，以智能和协同为宗旨，借助数字化管理手段，通过数据支撑和分析、理顺处理流程、驱动线上线下协同，实现精准的智能派单，实时指挥调度，能够有效降低事件处置时长，真正做到机器换人力，智能增效能，助推“一网统管”，提升城市治理能力。/统调平台是将城市运行中一件又一件“事”的处置过程进一步拆解，分为了四大能力中心：发现中心、调度中心、处置中心、分析中心。',
    architecture: '架构图',
    flow: {
      title: '流程图',
      find: {
        title: '发现中心',
        description:
          '所有事件的来源，包含上级指派、主动发现、第三方系统、智能感知设备四类来源。',
      },
      use: {
        title: '调度中心',
        description:
          '通过事项梳理形成权责清单和事项清单，对发现中心中的所有事件进行智能分派。',
      },
      how_use: {
        title: '处置中心',
        description: '工作人员收到来自调度中心的事件分派后进行处理和反馈。',
      },
      analysis: {
        title: '分析中心',
        description:
          '汇集发现中心、调度中心、处置中心的数据，并对数据进行分析，通过可视化的方式进行数据呈现，辅导领导决策，发挥数据价值。',
      },
    },
  },
  project_value: {
    description:
      '聚焦城市运行管理中的重点、难点、热点和群众“急难愁盼”的问题，力争在最低层级、以最早时间、用最小成本、解决最突出问题、取得最佳综合效益，不断提高城市治理科学化、精准化、规范化管理水平。',
    stress: {
      title: '基层巡查减负提效',
      description:
        '传统的网格巡检方式以人工为主，网格员通常一天之内巡查一次，无法达到全天候无死角的巡查,并且巡查工作压力不小。人工智能技术的结合，减轻了基层工作人员的“铁脚板的巡查压力,可以将更多精力集中到事件的处理本身。',
    },
    flow: {
      title: '「多源一平台」案件流转',
      description:
        '随着业务发展的需要，随时会产生各种新的应用，通过工具化的形式进行业务快速构建后，不同类型，不同来源的业务通过各自的业务系统进入，汇集在一个平台中进行业务处理。统调平台有效融合了多个系统的事件来源，并自动分派处理，调度及时，联动处置响应速率高。',
    },
    accurate: {
      title: '主动精准服务',
      description:
        '相对于传统的老百姓/企业主动找政府要求服务，变为未来的政府根据资源向有需要的或针对性人群提供服务，从原有的被性动服务变成主动性服务，辖区内的百姓/企业大幅度提高幸福感。',
    },
    scientific: {
      title: '领导决策科学有依据',
      description:
        '通过平台的建立，所有的数据都留存在本地，通过对产生数据的分析，辅佐领导更准确更精准更科学的做相应的决策，精细化的解决基层治理问题。',
    },
  },
  project_advantages: {
    efficient: {
      title: '统调平台就是以“高效处置一件事”为抓手',
      description: '以最早时间、用最小成本、解决最突出问题、取得最佳综合效益。',
      icon: '/images/tracking_platform/efficient.svg',
    },
    modernization: {
      title: '以城市治理体系和治理能力现代化为方向',
      description: '不断提高城市治理科学化、精准化、规范化管理水平。',
      icon: '/images/tracking_platform/modernization.svg',
    },
    target: {
      title: '实现“一屏观全域、一网管全城”的目标定位',
      description:
        '“一屏观全域”，在一个屏幕上，实现城市治理要素、对象、过程、结果等各类信息的全息全景呈现；- “一网管全城”，把城市治理领域的所有事项放到一个平台上，进行集成化、集中化、联动化、闭环化的处置，不仅能够看得到，还要管得住。',
      icon: '/images/tracking_platform/target.svg',
    },
    practical: {
      title: '强化“应用为要、管用为王”的价值取向',
      description:
        '聚焦城市运行管理中的重点、难点、热点和群众“急难愁盼”的问题。',
      icon: '/images/tracking_platform/practical.svg',
    },
  },
  success_cases: {
    cases_name: '青羊区时间交互枢纽平台',
    cases_detail: '',
    find: '发现中心（配置中心）',
    use: '调度中心（调度中心 & 处置中心）',
    analysis: '分析中心',
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
