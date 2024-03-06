<script setup lang='ts'>
import vuedraggable from 'vuedraggable'
import type { ComponentData, textDefaultType } from '~/types'

defineProps<{ list: ComponentData<textDefaultType>[], selectId: string | undefined }>()

const emit = defineEmits<{
  change: [{ id: string, value: boolean | string, key: string, isRoot: boolean }]
  select: [id: string]
}>()

function changeState(id: string, value: boolean | string, key: string) {
  emit('change', { id, value, key, isRoot: true })
}

function handleLayerClick(id: string) {
  emit('select', id)
}
</script>

<template>
  <vuedraggable :list="list" item-key="id" ghost-class="op50" handle=".handle">
    <template #item="{ element }">
      <div
        hover:bg="#E5F5FF"
        h-15 flex items-center
        gap3 px6 b-color="#699DFF"
        :class="selectId === element.id && 'border'"
        @click="handleLayerClick(element.id)"
      >
        <icon-switch
          :is-active="!!element.isHidden"
          :tooltip-text="element.isHidden ? '显示' : '隐藏'"
          :icon="element.isHidden ? 'i-ci:show' : 'i-ci:hide'"
          @change="changeState(element.id, $event, 'isHidden')"
        />
        <icon-switch
          :is-active="!!element.isLocked"
          :tooltip-text="element.isLocked ? '解锁' : '锁定'"
          :icon="element.isLocked ? 'i-ci:lock-open' : 'i-ci:lock'"
          @change="changeState(element.id, $event, 'isLocked')"
        />
        <inline-edit flex-1 text-left :value="element.layerName!" @change="changeState(element.id, $event, 'layerName')" />
        <icon-switch
          class="handle"
          tooltip-text="拖动排序"
          icon="i-carbon:drag-vertical"
        />
      </div>
    </template>
  </vuedraggable>
</template>
