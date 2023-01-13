<template>
  <SolutionTitle
    :solution="$t('page.solutions.scene')"
    :title="$t('page.solutions.scene.grid_admin')"
    img="/images/grid_admin/title_img.webp"
  />
  <BlockLayout
    :title="$t('page.solutions.scene.questions')"
    padding="md:pt-[105px] md:pb-[101px] pt-16 pb-8"
  >
    <div class="grid gap-6 md:grid-cols-3 grid-cols-1 md:px-23">
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
    :block-desc="pageAssets.solutions.description"
    padding="py-[72px]"
    class="dark:linear-block-item-bg--dark linear-block-item-bg"
  >
    <BlockInLayout :title="pageAssets.solutions.flow.title">
      <img src="/images/grid_admin/flow.png" alt="" />
    </BlockInLayout>
    <BlockInLayout :title="pageAssets.solutions.project_function.title">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6 md:my-14 my-6">
        <ImgCardItem
          v-for="item of cardItems"
          :key="item.title"
          :item="item"
          class="flex-1 dark:bg-gray-08 bg-gray-03"
        />
      </div>
      <ImgCardItem
        :item="cardOnlyItem"
        direction="row"
        class="dark:bg-gray-08 bg-gray-03"
      />
    </BlockInLayout>
  </BlockLayout>
  <BlockLayout
    :title="$t('page.solutions.scene.project_value')"
    padding="py-[72px]"
    class="dark:bg-gray-08 bg-gray-03"
  >
    <div class="flex md:flex-row flex-col gap-6">
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
    padding="pt-[104px] md:pb-[256px] pb-[72px]"
  >
    <div class="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      <CardItem v-for="item of itemListItems" :key="item.title" :item="item" />
    </div>
  </BlockLayout>
</template>

<script setup>
import { get } from 'lodash-es'

import {
  BlockInLayout,
  BlockLayout,
  CardItem,
  ImgCardItem,
  SolutionTitle,
} from '@/views/components'

const pageAssets = {
  questions: {
    multi_target: {
      icon: '/images/tips.svg',
      title: '服务对象杂，服务人口',
      description:
        '网格员服务对象包括居民、房屋、企业、外国人、社会组织等，同一对象有不同维度的服务，与服务人口的比例约在 300 ~ 500 户或 1000 人。',
    },
    offline_work: {
      icon: '/images/tips.svg',
      title: '线下工作，效率难以突破',
      description:
        '基层政务的工作方式更多采用的是线下形式开展，例如纸质、微信、QQ、个人台账。网格员全凭个人能力和经验，基层数据采集和人口走访工作效率较低。',
    },
    bad_data: {
      icon: '/images/tips.svg',
      title: '数据质量差，难统计',
      description:
        '各辖区间数据标准不一致，数据需要经过层层合并、统计、汇总和分发，费时费力。',
    },
  },
  solutions: {
    description:
      '网格化管理是将社会事务中的管理对象按照一定的标准划分成若干个网格单元进行协调管理、信息交流、资源共享的一种管理模式。为辖区资源综合治理提供基础数据支撑，实现对辖内区包含人口、房屋、地址、单位等数据资源的收集、整理、维护、更新、统计、分发。',
    flow: {
      title: '业务流程',
      admin: {
        title: '管理员',
        action: '网格划分',
        contents: '数据录入- 地址划分- 网格员分派',
      },
      grid_user: {
        title: '网格员',
        action: '数据采集',
        contents: '查看走访目标- 一标三实走访- 类型人口走访',
      },
      charge: {
        title: '网格负责人',
        action: '数据总览',
        contents: '查看辖区数据- 查看走访数据- 主题数据库汇总- 数据分发',
      },
    },
    project_function: {
      title: '产品功能',
      collect_data: {
        title: '数据采集',
        descriptions:
          '专职网格员查看各自的走访目标以及完成情况适时调整走访策略- 按照“一标三实”要求对辖区内的人、地、房、单位组织四大要素进行信息采集- 按照“类型人口”要求对辖区内的重点人群、帮扶人群等特殊人群进行信息采集',
        image: '/images/grid_admin/project_function_collect_data.webp',
      },
      jurisdiction: {
        title: '辖区统计',
        descriptions:
          '网格负责人按照所属网格层级查看辖区的统计数据。- 网格团队力量、实有人口数量，户籍、流动人数、重点人群分布、实有房屋分布，实有单位数量等等。',
        image: '/images/grid_admin/project_function_jurisdiction.webp',
      },
      visit: {
        title: '走访统计',
        descriptions:
          '网格负责人按照所属网格层级查看专职网格员的走访状况。- 实时掌握人口走访的最新情况，合理安排网格员的走访工作。',
        image: '/images/grid_admin/project_function_visit.webp',
      },
      summary: {
        title: '数据汇总',
        descriptions:
          '网格负责人按照所属网格层级查看辖区基础数据。- 随业务变化可快速筛选、组织新的维度方便随时查看，例如高龄老人、个体工商户等等。',
        image: '/images/grid_admin/project_function_summary.webp',
      },
      share: {
        title: '数据分发',
        descriptions:
          '数据记录的维护状态根据事件规则由流程自动维护，网格负责人可以查询变动数据。- 根据显示字段，筛选及搜索组织导出数据。',
        image: '/images/grid_admin/project_function_share.webp',
      },
    },
  },
  project_value: {
    measure: {
      title: '走访明确 可衡量',
      description:
        '按照“一标三实”和“类型人口”制定走访任务 ，设定月目标走访户数和类型人口覆盖率，量化人口走访工作。',
    },
    work_online: {
      title: '线上工作 事半功倍',
      description:
        '分析用户行为，为人口走访工作做减法，移动表单采集、数据支持查询和关联，操作简单高效。',
    },
    classification: {
      title: '数据分类 易查找 互联互通',
      description:
        '建立辖区标准地址、实有人口、实有房屋、实有单位等主题数据库，分类明确；数据有标准，汇总，分发快捷灵活。',
    },
  },
  project_advantages: {
    ensure: {
      title: '确保用户问题得到解决',
      description:
        '采用数据驱动设计是一个向用户学习的过程，用户行为和业务流程直观的反映为用户数据，产品的性能可以通过合理使用、验证和分析用户数据而得到提升。',
      icon: '/images/grid_admin/ensure.svg',
    },
    simiple: {
      title: '简化操作 行为溯源',
      description:
        '用户操作指令作为事件，将逻辑的过程转换为事件之间的环环相扣，让流程自动维护数据。',
      icon: '/images/grid_admin/simiple.svg',
    },
    any_time: {
      title: '随时响应',
      description:
        '监听数据和事件的变化，提供实时性的系统级服务，各端看到和编辑的数据保持一致。',
      icon: '/images/grid_admin/any_time.svg',
    },
    grow_up: {
      title: '助力业务成长',
      description:
        '业务是会随着时间而变化，系统跟随业务变动，辅助业务优化，成长空间巨大。',
      icon: '/images/grid_admin/grow_up.svg',
    },
  },
}

const questionCardItems = ['multi_target', 'offline_work', 'bad_data'].map(
  key => ({
    icon: get(pageAssets, `questions.${key}.icon`),
    title: get(pageAssets, `questions.${key}.title`),
    desc: get(pageAssets, `questions.${key}.description`),
  }),
)

const cardItems = ['collect_data', 'jurisdiction', 'visit', 'summary'].map(
  key => ({
    title: get(pageAssets, `solutions.project_function.${key}.title`),
    desc: get(pageAssets, `solutions.project_function.${key}.descriptions`),
    img: get(pageAssets, `solutions.project_function.${key}.image`),
  }),
)
const cardOnlyItem = {
  title: get(pageAssets, 'solutions.project_function.share.title'),
  desc: get(pageAssets, 'solutions.project_function.share.descriptions'),
  img: get(pageAssets, 'solutions.project_function.share.image'),
}

const valueCardItems = ['measure', 'work_online', 'classification'].map(
  key => ({
    title: get(pageAssets, `project_value.${key}.title`),
    desc: get(pageAssets, `project_value.${key}.description`),
  }),
)

const itemListItems = ['ensure', 'simiple', 'any_time', 'grow_up'].map(key => ({
  title: get(pageAssets, `project_advantages.${key}.title`),
  desc: get(pageAssets, `project_advantages.${key}.description`),
  icon: get(pageAssets, `project_advantages.${key}.icon`),
}))
</script>
