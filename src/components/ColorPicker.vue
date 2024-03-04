<script setup lang='ts'>
defineProps<{ value: string }>()
const emit = defineEmits<{ change: [color: string] }>()

const defaultColors = ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585', '#e66465', '#e66465', '']

function handleColorChange(color: string) {
  emit('change', color)
}
</script>

<template>
  <div flex items-center gap2>
    <input type="color" h-10 w-16 :value="value" @input="handleColorChange(($event.target as HTMLInputElement).value)">
    <div grid grid-cols-5 gap2>
      <div
        v-for="(color, index) of defaultColors"
        :key="color" :style="{ background: color }"
        h-4 w-6
        :class="{ 'i-radix-icons:transparency-grid': index === defaultColors.length - 1 }"
        @click="handleColorChange(color)"
      />
    </div>
  </div>
</template>
