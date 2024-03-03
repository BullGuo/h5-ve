<script setup lang='ts'>
import type { PropsToForm, textDefaultType } from '~/types'
import { mapPropsToForm } from '~/propsMap'

const props = defineProps<{ formValue: textDefaultType }>()

const formResult = computed(() => {
  const formObj: PropsToForm = {}
  const formValue = props.formValue
  Object.entries(mapPropsToForm).forEach(([key, value]) => {
    const newKey = key as keyof textDefaultType
    const newValue = formValue[newKey]
    if (newValue) {
      formObj[newKey] = {
        component: value.component,
        value: value.initTransform ? value.initTransform(newValue) : newValue,
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
