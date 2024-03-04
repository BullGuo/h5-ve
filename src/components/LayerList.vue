<script setup lang='ts'>
import type { ComponentData, textDefaultType } from '~/types'

defineProps<{ list: ComponentData<textDefaultType>[], selectId: string | undefined }>()

const emit = defineEmits<{
  change: [{ id: string, value: boolean, key: string, isRoot: boolean }]
  select: [id: string]
}>()

function changeState(id: string, value: boolean, key: string) {
  emit('change', { id, value, key, isRoot: true })
}

function handleLayerClick(id: string) {
  emit('select', id)
}
</script>

<template>
  <div
    v-for="item of list"
    :key="item.id"
    hover:bg="#E5F5FF"
    h-15 flex items-center
    gap3 px6 b-color="#699DFF"
    :class="selectId === item.id && 'border'"
    @click="handleLayerClick(item.id)"
  >
    <icon-switch
      :is-active="!!item.isHidden"
      :tooltip-text="item.isHidden ? '显示' : '隐藏'"
      :icon="item.isHidden ? 'i-ci:show' : 'i-ci:hide'"
      @change="changeState(item.id, $event, 'isHidden')"
    />
    <icon-switch
      :is-active="!!item.isLocked"
      :tooltip-text="item.isLocked ? '解锁' : '锁定'"
      :icon="item.isLocked ? 'i-ci:lock-open' : 'i-ci:lock'"
      @change="changeState(item.id, $event, 'isLocked')"
    />
    <div>{{ item.layerName }}</div>
  </div>
</template>
