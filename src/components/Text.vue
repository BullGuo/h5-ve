<script setup lang='ts'>
import type { textDefaultType } from '~/types'
import { textDefaultProps } from '~/defaultProps'

const props = withDefaults(defineProps<textDefaultType>(), {
  tag: 'div',
  ...textDefaultProps,
})
</script>

<template>
  <component :is="tag" :style="props">
    {{ text }}
  </component>
</template>

<style scope>

</style>
