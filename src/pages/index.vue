<script setup lang="ts" generic="T extends any, O extends any">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~/store'

const store = useCounterStore()
const { count } = storeToRefs(store)
</script>

<template>
  <div>
    <div i-carbon-campsite inline-block text-4xl />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>
    <el-button type="danger">
      sadsadsa
    </el-button>
    <div p-10>
      {{ count }}
    </div>
  </div>
</template>
