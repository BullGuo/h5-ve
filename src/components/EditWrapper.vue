<script setup lang='ts'>
defineProps<{ id: string, isActive: boolean }>()

const emits = defineEmits<{ onEditClick: [id: string], onEditDel: [id: string] }>()

function handleClick(id: string) {
  emits('onEditClick', id)
}

function handleDel(id: string) {
  emits('onEditDel', id)
}
</script>

<template>
  <div :class="{ border: isActive }" b-color="#699DFF" relative mb5 @click="handleClick(id)">
    <div i-ci:close-circle absolute right-0 c-white un-translate="x-50% y--50%" @click.stop="handleDel(id)" />
    <slot />
  </div>
</template>
