<script setup lang='ts'>
import { ElMessage } from 'element-plus'
import useClickOutside from '~/hooks/useClickOutside'
import useKeyDown from '~/hooks/useKeyDown'

const props = defineProps<{ value: string }>()
const emit = defineEmits<{ change: [value: string] }>()

const isEditing = ref(false)
const inputValue = ref(props.value)
const wrapperRef = ref<null | HTMLElement>(null)
const inputRef = ref<null | HTMLElement>(null)

const isClickOutside = useClickOutside(wrapperRef)
useKeyDown('Enter', () => {
  if (isEditing.value) {
    if (!inputValue.value)
      return ElMessage.error('Oops, this is a error message.')
    isEditing.value = false
    emit('change', inputValue.value)
  }
})
useKeyDown('Escape', () => {
  if (isEditing.value) {
    isEditing.value = false
    inputValue.value = props.value
  }
})

watch(isClickOutside, (val) => {
  if (val && isEditing.value) {
    isEditing.value = false
    emit('change', inputValue.value)
  }
})

watch(isEditing, (val) => {
  if (val) {
    nextTick(() => inputRef?.value?.focus())
    isClickOutside.value = false
  }
})

function handleClick() {
  isEditing.value = true
}
</script>

<template>
  <div ref="wrapperRef" @click.stop="handleClick">
    <input v-if="isEditing" ref="inputRef" v-model="inputValue" placeholder="请输入" w-full>
    <div v-else>
      {{ inputValue }}
    </div>
  </div>
</template>
r
