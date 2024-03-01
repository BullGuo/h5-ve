<script setup lang='ts'>
defineProps<{ id: string, isActive: boolean }>()

const emits = defineEmits<{ onEditClick: [id: string] }>()

function handleClick(id: string) {
  emits('onEditClick', id)
}
</script>

<template>
  <div :class="{ border: isActive }" @click="handleClick(id)">
    <slot />
  </div>
</template>
