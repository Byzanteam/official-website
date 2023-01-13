<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.supervision')"
    img="/images/supervision/title_img.webp"
  />
  <BlockLayout
    :title="$t('page.solutions.scene.questions')"
    padding="md:pt-[105px] md:pb-[101px] pt-16 pb-8"
  >
    <div class="flex flex-col gap-6">
      <div class="grid gap-6 md:grid-cols-3 grid-cols-1 md:px-23">
        <CardItem
          v-for="item of questionCardItems_part_1"
          :key="item.title"
          :item="item"
          align="items-center"
          class="md:p-10 dark:bg-gray-08 bg-gray-03"
        />
      </div>
      <div class="grid gap-6 md:grid-cols-2 grid-cols-1 md:px-23">
        <CardItem
          v-for="item of questionCardItems_part_2"
          :key="item.title"
          :item="item"
          align="items-center"
          class="md:p-10 dark:bg-gray-08 bg-gray-03"
        />
      </div>
    </div>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.solutions')"
    :block-desc="pageText.solutions.description"
    padding="py-[72px]"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <BlockInLayout :title="pageText.solutions.flow">
      <img
        class="md:my-14 my-6"
        src="/images/supervision/stand_work_flow.png"
        alt=""
      />
    </BlockInLayout>
    <BlockInLayout :title="pageText.solutions.project_function.title">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6 md:my-14 my-6">
        <ImgCardItem
          v-for="item of cardItems"
          :key="item.title"
          :item="item"
          class="dark:bg-gray-08 bg-gray-03"
        />
      </div>
      <ImgCardItem
        class="md:pb-0 dark:bg-gray-08 bg-gray-03"
        direction="row"
        :item="cardOnlyItem"
      />
    </BlockInLayout>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.project_value')"
    padding="py-[72px]"
    class="dark:bg-gray-08 bg-gray-03"
  >
    <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <CardItem
        v-for="item of valueCardItems"
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
</template>

<script>
export default {
  name: 'SceneSupervision',
}
</script>
<script setup>
import { get } from 'lodash-es'

import {
  BlockInLayout,
  BlockLayout,
  CardItem,
  ImgCardItem,
  SolutionTitle,
} from '@/views/components'

const pageText = {
  questions: {
    collect_hard: {
      icon: '/images/tips.svg',
      title: '事项来源分散，收集难',
      description:
        '督查督办的事项来自各个渠道，如市/区级下发事项、上级部门通过系统下发事项、领导交办事项等等，来源渠道多种多样，造成了督办人员收集难，维护难的问题。 300 ~ 500 户或 1000 人。',
    },
    computed_hard: {
      icon: '/images/tips.svg',
      title: '事项汇报周期不同，计算难',
      description:
        '督查督办的事项繁多，这就造成了每个事项的汇报周期各不相同，有按周汇报、按月汇报、按年汇报等等数种汇报周期，给督办人员的分配工作带来了极大的困难。',
    },
    cumbersome: {
      icon: '/images/tips.svg',
      title: '汇报繁琐，监管和收集难',
      description:
        '由于每个事项的汇报周期各不相同，这就对督办人员的收集汇报工作提出了较高的要求，他们需要在每件事项需要汇报时，向承办单位发送提醒，以免承办单位遗漏汇报周期，这也造成了督办人员的监管工作推进难度大。',
    },
    watch_hard: {
      icon: '/images/tips.svg',
      title: '监督事项进度难',
      description:
        '承办单位对事项进行汇报后，督办人员需要及时查阅事项进度，控制事项完成进度，但在现有的流程下，督办人员需要一一手动查阅事项进度，不仅操作繁琐，还有可能造成监督不利的情况。',
    },
    incomplete: {
      icon: '/images/tips.svg',
      title: '过程数据不全面，统计工作困难',
      description:
        '由于督办工作现有的工作流程，事项推进过程中产生的沟通工作，通常使用微信、电话等等手段完成，整理有效信息耗时费力，所有的过程数据难以被存储下来，无法根据过程数据监督工作完成效率，制定改进方案，并且督办事项报告工作量大、数据准确度差。',
    },
  },
  solutions: {
    description:
      '网格化管理是将社会事务中的管理对象按照一定的标准划分成若干个网格单元进行协调管理、信息交流、资源共享的一种管理模式。为辖区资源综合治理提供基础数据支撑，实现对辖内区包含人口、房屋、地址、单位等数据资源的收集、整理、维护、更新、统计、分发。',
    flow: '标准工作流程',
    project_function: {
      title: '产品功能',
      import: {
        title: '一键导入，并且打通 G6 系统',
        descriptions:
          '办单位可将下发的 Excel 文件一键导入到系统，系统根据设置参数自动设置督办事项相关属性/督查督办系统还可打通现有市级督查督办 G6 系统，打通后，G6 系统下发到本单位的事项将在督查督办系统中自动创建、分配',
        image: '/images/supervision/import.webp',
      },
      auto_compute: {
        title: '自动计算事项周期',
        descriptions:
          '督查督办系统提供多种事项周期重复方案，汇报一次、按周汇报、按两周汇报、按月汇报、按季汇报、按半年汇报……等等方案，并且重复方案灵活，可根据实际需要调整，设置重复方案后，系统自动计算每次汇报时间，无需督办单位手动计算。',
        image: '/images/supervision/auto_compute.webp',
      },
      auto_tip: {
        title: '汇报前自动提醒',
        descriptions:
          '督查督办系统有非常灵活的提醒系统，不管是想在任何时间进行任何方式的提醒，都可以在系统内进行设置，让收集汇报不再困难。',
        image: '/images/supervision/auto_tip.webp',
      },
      special_state: {
        title: '特殊状态单独排列',
        descriptions:
          '督查督办系统将特殊状态的事项单独列出，即将逾期已逾期推进缓慢等等异常状态单独显示，事项进度一目了然。',
        image: '/images/supervision/special_state.webp',
      },
      all_data: {
        title: '所有数据沉淀在系统中',
        descriptions:
          '督查督办系统收集了所有的过程数据和行为，可根据实际需要，使用这些过程数据生成各种各样的图表，以及任何实际需要的统计。',
        image: '/images/supervision/all_data.webp',
      },
    },
  },
  project_value: {
    safe: {
      title: '数据安全性',
      description:
        '数据存储在专属内部服务器中，在封闭环境中独立运行，保证数据的安全。',
    },
    stand_flow: {
      title: '流程标准化',
      description:
        '清晰划分职责，规范督办工作，提高工作效率。解决了督办工作中存在的各种难题，提升工作效率，保证工作质量，进而全面提升执行力。',
    },
    manageable: {
      title: '可管理性',
      description:
        '建立辖区标准地址、实有人口、实有房屋、实有单位等主题数据库，分类明确；数据有标准，汇总，分发快捷灵活。',
    },
    data_value: {
      title: '数据价值',
      description:
        '数据经过大数据分析，能够及时发现督办工作存在问题，通过分析、预警，提高工作效率，实现督办事项的全生命周期管理。',
    },
  },
  project_advantages: {
    private: {
      title: '私有化部署',
      description:
        '系统可进行快速部署，在 30 分钟内即可完成基平台私有部署及搭建，满足不同客户的部署需求。',
      icon: '/images/supervision/private.svg',
    },
    parallel: {
      title: '多端应用',
      description:
        '系统基于 H5 进行开发，可以无缝适应 PC 及移动端，无需对 PC 及移动端进行额外的开发适配，并支持电脑端/移动端同步运行，兼容 IOS/安卓/Windows/Mac 系统。',
      icon: '/images/supervision/parallel.svg',
    },
    customizable: {
      title: '定制界面',
      description:
        '系统可根据客户已有系统或风格定制化专属界面，统一客户内部系统风格，让切换系统毫无违和感。',
      icon: '/images/supervision/customizable.svg',
    },
    iteration: {
      title: '高效迭代',
      description: '基于低代码产品开发而成，可进行快速迭代。',
      icon: '/images/supervision/iteration.svg',
    },
  },
}

const questionCardItems_part_1 = [
  'collect_hard',
  'computed_hard',
  'cumbersome',
].map(key => ({
  icon: get(pageText, `questions.${key}.icon`),
  title: get(pageText, `questions.${key}.title`),
  desc: get(pageText, `questions.${key}.description`),
}))
const questionCardItems_part_2 = ['watch_hard', 'incomplete'].map(key => ({
  icon: get(pageText, `questions.${key}.icon`),
  title: get(pageText, `questions.${key}.title`),
  desc: get(pageText, `questions.${key}.description`),
}))

const cardItems = ['import', 'auto_compute', 'auto_tip', 'special_state'].map(
  key => ({
    title: get(pageText, `solutions.project_function.${key}.title`),
    desc: get(pageText, `solutions.project_function.${key}.descriptions`),
    img: get(pageText, `solutions.project_function.${key}.image`),
  }),
)
const cardOnlyItem = {
  title: get(pageText, 'solutions.project_function.all_data.title'),
  desc: get(pageText, 'solutions.project_function.all_data.descriptions'),
  img: get(pageText, 'solutions.project_function.all_data.image'),
}

const valueCardItems = ['safe', 'stand_flow', 'manageable', 'data_value'].map(
  key => ({
    title: get(pageText, `project_value.${key}.title`),
    desc: get(pageText, `project_value.${key}.description`),
  }),
)

const itemListItems = ['private', 'parallel', 'customizable', 'iteration'].map(
  key => ({
    title: get(pageText, `project_advantages.${key}.title`),
    desc: get(pageText, `project_advantages.${key}.description`),
    icon: get(pageText, `project_advantages.${key}.icon`),
  }),
)
</script>
