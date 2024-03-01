<script setup lang='ts'>
import type { textDefaultType } from '~/types'

defineProps<{
  list: Array<textDefaultType>
}>()

const emits = defineEmits<{ onTemplateClick: [data: textDefaultType] }>()

function handleItemClick(data: textDefaultType) {
  emits('onTemplateClick', data)
}
</script>

<template>
  <div v-for="(item, index) of list" :key="index" @click="handleItemClick(item)">
    <Text v-bind="item" />
  </div>
</template>
