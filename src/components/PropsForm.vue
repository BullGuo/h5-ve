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
        subComponent: value.subComponent,
        value: value.initTransform ? value.initTransform(newValue) : newValue,
        title: value.title,
        extraProps: value.extraProps,
        subOptions: value.subOptions,
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
    <component :is="item?.component" :model-value="item?.value" v-bind="item?.extraProps">
      <template v-if="item?.subComponent && item.subOptions">
        <component :is="item.subComponent" v-for="option of item.subOptions" :key="option.value" v-bind="option" />
      </template>
    </component>
  </div>
  <pre>{{ formValue }}</pre>
</template>
