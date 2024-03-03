<script setup lang='ts'>
import type { PropsToForm, textDefaultType } from '~/types'
import { mapPropsToForm } from '~/propsMap'

const props = defineProps<{ formValue: textDefaultType }>()
const emit = defineEmits<{ onChange: [{ key: string, value: any }] }>()

const formResult = computed(() => {
  const formObj: PropsToForm = {}
  const formValue = props.formValue
  Object.entries(mapPropsToForm).forEach(([key, value]) => {
    const newKey = key as keyof textDefaultType
    if (newKey in formValue) {
      const { initTransform, unInitTransform, eventName = 'change' } = value
      formObj[newKey] = {
        ...value,
        value: initTransform?.(formValue[newKey]) || formValue[newKey],
        events: { [eventName]: v => emit('onChange', { key, value: unInitTransform?.(v) || v }) },
      }
    }
  })
  return formObj
})
</script>

<template>
  <div v-for="(item, key) of formResult" :key="key" flex="~ gap10" m5>
    <div shrink-0>
      {{ item?.title }}
    </div>
    <component :is="item?.component" :model-value="item?.value" v-bind="item?.extraProps" v-on="item?.events">
      <template v-if="item?.subComponent && item.subOptions">
        <component :is="item.subComponent" v-for="option of item.subOptions" :key="option.value" v-bind="option" />
      </template>
    </component>
  </div>
  <pre>{{ formValue }}</pre>
</template>
