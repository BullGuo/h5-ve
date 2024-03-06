<script setup lang='ts'>
defineProps<{
  isActive?: boolean
  tooltipText: string
  icon: string
}>()

const emit = defineEmits<{ change: [active: boolean] }>()

function handleIconClick(active: boolean) {
  emit('change', !active)
}
</script>

<template>
  <div
    h-7 w-7 p0.5
    border="1 #606266/30" rounded="50%"
    :bg="isActive ? '#699DFF' : ''"
    :color="isActive ? '#fff' : '#4E4E4E'"
    :hover="isActive ? '' : 'c-#699DFF b-#699DFF'"
    @click.stop="handleIconClick(!!isActive)"
  >
    <el-tooltip
      :content="tooltipText"
      placement="top"
    >
      <div :class="icon" h-full w-full />
    </el-tooltip>
  </div>
</template>
