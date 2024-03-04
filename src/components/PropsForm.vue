<script setup lang='ts'>
import ColorPicker from './ColorPicker.vue'
import type { DynamicComponent, PropsToForm, textDefaultType } from '~/types'
import { mapPropsToForm } from '~/propsMap'

const props = defineProps<{ formValue: textDefaultType }>()
const emit = defineEmits<{ onChange: [{ key: string, value: any }] }>()

const customComponents: DynamicComponent = { 'color-picker': ColorPicker }

const formResult = computed(() => {
  const formObj: PropsToForm = {}
  const formValue = props.formValue
  Object.entries(mapPropsToForm).forEach(([key, value]) => {
    const newKey = key as keyof textDefaultType
    if (newKey in formValue) {
      const { initTransform, unInitTransform, eventName = 'change', valueName = 'model-value', extraProps } = value
      formObj[newKey] = {
        ...value,
        extraProps: { ...extraProps, [valueName]: initTransform?.(formValue[newKey]) || formValue[newKey] },
        events: { [eventName]: v => emit('onChange', { key, value: unInitTransform?.(v) || v }) },
      }
    }
  })
  return formObj
})

function RenderVNode(props: Record<string, VNode>) {
  return props['virtual-dom']
}
</script>

<template>
  <div v-for="(item, key) of formResult" :key="key" m5 flex items-center>
    <div w="20%" shrink-0 text-left>
      {{ item?.title }}
    </div>
    <component :is="(item && customComponents[item.component]) || item?.component" v-bind="item?.extraProps" v-on="item?.events">
      <template v-if="item?.subComponent && item.subOptions">
        <component :is="item.subComponent" v-for="option of item.subOptions" :key="option.value" v-bind="option">
          <RenderVNode v-if="option.labelVNode" :virtual-dom="option.labelVNode" />
        </component>
      </template>
    </component>
  </div>
  <pre>{{ formValue }}</pre>
</template>
