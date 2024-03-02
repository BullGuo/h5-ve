<script setup lang='ts'>
import type { PropsToForm, textDefaultType } from '~/types'
import { mapPropsToForm } from '~/propsMap'

const props = defineProps<{ formValue: textDefaultType }>()

const formResult = computed(() => {
  const formObj: PropsToForm = {}
  Object.entries(mapPropsToForm).forEach(([key, value]) => {
    const newKey = key as keyof textDefaultType
    if (props.formValue[newKey]) {
      formObj[newKey] = {
        component: value.component,
        value: props.formValue[newKey],
        title: value.title,
      }
    }
  })
  return formObj
})
</script>

<template>
  <div v-for="(item, index) of formResult" :key="index" flex="~ gap10" m5>
    <div shrink-0>
      {{ item?.title }}
    </div>
    <component :is="item?.component" :model-value="item?.value" />
  </div>
  <pre>{{ formValue }}</pre>
</template>
